import React from "react";
import CustomSelect from "./CustomSelect";
import Button from "../ui/Button";
import { Sparkles } from "lucide-react";
import AIResponce from "./AIResponce";
import { useSearchParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

function OutfitForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultOccassion = searchParams.get("occasion");

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
    await new Promise(res => setTimeout(res, 2000));
    console.log(data);
  };

  return (
    <section
      aria-label="Outfit form"
      className="flex flex-col gap-6 sm:gap-8 mr-0 md:mr-10 w-full lg:w-[80%]"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-3xl bg-[#FDFAF6] p-4 sm:p-6 md:p-8 flex flex-col gap-4 border border-[#E7E5E4]"
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
        <Button type='submit' disabled={isSubmitting} className="flex gap-2 justify-center items-center w-full mb-4 sm:mb-8">
          <Sparkles
            size={16}
            color="#C5A059"
            fill="#C5A059"
            aria-hidden="true"
          />
          <span className="text-[10px] sm:text-[13px] md:text-[14px] work-sans uppercase font-semibold py-2 sm:py-3 lg:py-1 tracking-[2px]">
            {isSubmitting ? "Generating..." : "Generate My Outfit"}
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
