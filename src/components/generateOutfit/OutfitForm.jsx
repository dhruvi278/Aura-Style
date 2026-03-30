import React, { useEffect } from "react";
import CustomSelect from "./CustomSelect";
import Button from "../ui/Button";
import { Sparkles } from "lucide-react";
import AIResponce from "./AIResponce";
import { useSearchParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useOutfit } from "../../hooks/useOutfit";
import { useSelector } from "react-redux";
import { useLocationContext } from "../context/LocationContext";
import { toast } from "sonner";
import useGeolocation from "../../hooks/sensors/useGeoLocation";

function OutfitForm({submitRef}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultOccassion = searchParams.get("occasion");

  const {generate, loading} = useOutfit();

  //location

  const { location } = useLocationContext();
  const { fetchLocation } = useGeolocation();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      occasion: defaultOccassion || "",
      description: "",
    },
  });

  
  const onSubmit = async (data) => {
    if (!location?.lat || !location?.lng) {

      // check if permission was explicitly denied
      if (navigator.permissions) {
        const permission = await navigator.permissions.query({ name: 'geolocation' });

        if (permission.state === 'denied') {
          // browser blocked — can't re-prompt, guide to settings
          toast.error('Location access blocked', {
            description: 'Please enable location in your browser settings and reload the page.',
            action: {
              label: 'How to enable',
              onClick: () => {
                // detect browser and give specific instructions
                const isChrome = navigator.userAgent.includes('Chrome');
                const isFirefox = navigator.userAgent.includes('Firefox');
                const isSafari = navigator.userAgent.includes('Safari') && !isChrome;

                if (isChrome) {
                  toast.info('Chrome: Click the lock icon in the address bar → Site settings → Allow Location', { duration: 8000 });
                } else if (isFirefox) {
                  toast.info('Firefox: Click the lock icon → Connection secure → More info → Allow Location', { duration: 8000 });
                } else if (isSafari) {
                  toast.info('Safari: Preferences → Websites → Location → Allow for this site', { duration: 8000 });
                } else {
                  toast.info('Click the lock/info icon in your address bar and allow location access, then reload.', { duration: 8000 });
                }
              },
            },
            duration: 8000,
          });
          return;
        }

        if (permission.state === 'prompt') {
          // not yet asked — trigger the browser prompt
          toast.info('Requesting location access...', { duration: 2000 });
          fetchLocation();
          return;
        }
      } else {
        // permissions API not supported — just try fetching
        fetchLocation();
        toast.info('Please allow location access when prompted.', { duration: 4000 });
        return;
      }
    }

    // location available — generate
    // const generatePromise =  generate({
    //   occasion: data.occasion,
    //   query: data.description,
    //   latitude: location.lat,
    //   longitude: location.lng,
    // }).then((result)=>{
    //   if(result.type === 'outfit/generate/rejected'){
    //     throw new Error(result.payload ||' Generation failed ')
    //   }
    //   return result;
    // });

    // toast.promise(generatePromise,{
    //   loading:'Your AI stylist curating your outfit ....',
    //   success:'Outfit Generated! Check your look.',
    //   error:'Failed to generate outfit. Please try again.'
    // })
    const toastId = toast.loading('Your AI stylist curating your outfit....');

    const result = await generate({
      occasion: data.occasion,
      query: data.description,
      latitude: location.lat,
      longitude: location.lng,
    });

    if (result.type?.endsWith('/fulfilled')) {
      // success
      toast.success('Outfit Generated! Check your look.', { id: toastId });
    } else {
      const isInsufficientClothes =
        result.payload?.toLowerCase().includes('not found in wardrobe') ||
        result.payload?.toLowerCase().includes('empty wardrobe');

      if (isInsufficientClothes) {
        // dismiss silently — OutfitCard useEffect handles this toast
        toast.dismiss(toastId);
      } else {
        // generic error
        toast.error('Failed to generate outfit. Please try again.', { id: toastId });
      }
    }
  };
  useEffect(() =>{
    if(submitRef){
      submitRef.current = handleSubmit(onSubmit);
    }
  },[handleSubmit,onSubmit]);

  return (
    <section
      aria-label="Outfit form"
      className="flex flex-col gap-6 sm:gap-8 mr-0 md:mr-10 w-full lg:w-[80%]"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        // className="rounded-3xl bg-[#FDFAF6] p-4 sm:p-6 md:p-8 flex flex-col gap-4 border border-[#E7E5E4]"
        className={`rounded-3xl bg-[#FDFAF6] p-4 sm:p-6 md:p-8 flex flex-col gap-4 border border-[#E7E5E4]
        ${loading ? 'pointer-events-none opacity-60' : ''}
    `}
      >
        <h2 className="text-[#C5A059] work-sans font-bold text-[11px] sm:text-[12px] uppercase tracking-[2px]">
          Request Details
        </h2>
        <div className="flex flex-col gap-1">
          <Controller
            name="occasion"
            control={control}
            rules={{ required: "Please select an occasion" }}
            render={({ field }) => (
              <CustomSelect
                label={`Occassion*`}
                placeholder="Select an occassion"
                value={field.value}
                onChange={(value) => {
                  field.onChange(value);
                  setSearchParams({ occasion: value.toLowerCase() });
                }}
                hasError={!!errors.occasion}
              />
            )}
          />

          {/* Error */}
          <p
            className={`text-red-500 text-xs min-h-4 transition-opacity duration-200
                        ${errors.occasion ? "opacity-100" : "opacity-0"}`}
          >
            {errors.occasion?.message || " "}
          </p>
        </div>

        <label className="flex flex-col gap-2" htmlFor="description">
          <p className="work-sans uppercase text-[10px] sm:text-[11px] md:text-[13px] text-[#A8A29E] tracking-[2px]">
            Describe your event
          </p>
          <textarea
          {...register("description")}
            className="bg-[#F5F0E8] w-full work-sans resize-none scrollbar-hide 
                                    text-[12px] sm:text-[13px] md:text-[14px]
                                    p-2 sm:p-3
                                    rounded-[10px] sm:rounded-[14px]
                                    border border-[#E7E1CF]
                                    placeholder:text-[#1A1A18]/30 placeholder:italic placeholder:playfair
                                    focus:outline-none focus:border-[#C9A96E]
                                    transition-all duration-200"
            name="description"
            id="description"
            placeholder="E.g. A sophisticated sunset gathering at a coastal villa..."
            rows={4}
          />
        </label>
        <Button type='submit' disabled={loading} className="flex gap-2 justify-center items-center w-full mb-4 sm:mb-8">
          <Sparkles
            size={16}
            color="#C5A059"
            fill="#C5A059"
            aria-hidden="true"
          />
          <span className="text-[10px] sm:text-[13px] md:text-[14px] work-sans uppercase font-semibold py-2 sm:py-3 lg:py-1 tracking-[2px]">
            {loading ? "Generating..." : "Generate My Outfit"}
          </span>
        </Button>
      </form>

      {/* <aside className='hidden lg:block'>
                <AIResponce />
            </aside> */}
    </section>
  );
}

export default OutfitForm;
