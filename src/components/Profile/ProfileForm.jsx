import { CircleUserRound, Phone } from "lucide-react";
import CustomSelect from "../generateOutfit/CustomSelect";
import Button from "../ui/Button";
import Formfield from "../ui/Formfield";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

function ProfileForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      fullname: "Riddhi Kapoor",
      email: "riddhi@gmail.com",
      phone: "1234567890",
      gender: "Female",
    },
  });

  const allowOnlyNumbers = (e) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      "+",
    ];
    if (allowedKeys.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  };

  const allowOnlyNumbersPaste = (e) => {
    const pasted = e.clipboardData.getData("text");
    if (!/^\+?\d+$/.test(pasted)) e.preventDefault();
  };

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 1500)); // simulate API
    console.log("Profile saved:", data);
    toast.success("Profile Updated", {
      description: "Your changes have been saved successfully.",
    });
  };

  const onCancel = () => {
    reset();
    toast.info("Changes discarded");
  };

  return (
    <div className="bg-[#FDFAF6] px-10 py-8 rounded-4xl w-2xs lg:w-lg mb-7 xl:w-xl md:w-lg">
      <h2 className="pb-4 border-b mb-5 flex items-center gap-2 border-gray-300 jost uppercase text-sm  font-medium text-[#C5A059] tracking-[3px]">
        <CircleUserRound size={20} />
        <span>My Profile</span>
      </h2>
      <form className="mx-4" onSubmit={handleSubmit(onSubmit)}>
        <Formfield
          label="Full name"
          type="text"
          name="fullname"
          defaultValue="Riddhi kapoor"
          variant="secondary"
          formVariant="underline"
          placeholder={`Enter Your Name`}
          register={(name) =>
            register(name, {
              required: "Full name is required",
              minLength: {
                value: 5,
                message: "Name must be at least 5 characters",
              },
              pattern: {
                value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                message: "Must use letters only, with spaces between words.",
              },
            })
          }
          error={errors.fullname?.message}
        />
        <Formfield
          label="Email Address"
          type="email"
          name="email"
          defaultValue="ridhi@gmail.com"
          variant="secondary"
          formVariant="underline"
          disabled={true}
          placeholder={`abc@example.com`}
          register={(name) =>
            register(name, {
              required: "Email address is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email address",
              },
            })
          }
          error={errors.email?.message}
        />
        <Formfield
          label="Phone Number"
          type="text"
          name="phone"
          defaultValue="9876543210"
          variant="secondary"
          formVariant="underline"
          placeholder="eg. 9876543210"
          onKeyDown={allowOnlyNumbers}
          onPaste={allowOnlyNumbersPaste}
          register={(name) =>
            register(name, {
              pattern: {
                value: /^\+?[0-9]{10}$/,
                message: "Enter a valid phone number",
              },
            })
          }
          error={errors.phone?.message}
        />

        <div className="flex flex-col gap-2 mb-4">
          <label className="jost uppercase text-sm font-medium text-[#C5A059]">
            Gender Identity
          </label>

          <Controller
            name="gender"
            control={control}
            rules={{ required: "Please select a gender identity" }}
            render={({ field }) => (
              <div className="flex gap-6 w-full">
                {["Male", "Female"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => field.onChange(option)}
                    className={`w-full py-2 rounded-full border transition
                      ${
                        field.value === option
                          ? "border-[#C4A982] bg-[#C4A982]/10 text-[#C4A982]"
                          : errors.gender
                            ? "border-red-400 text-[#475569]"
                            : "border-gray-300 text-[#475569]"
                      }`}
                  >
                    <p className="jost text-[16px]">{option}</p>
                  </button>
                ))}
              </div>
            )}
          />

          <p
            className={`text-red-500 text-xs min-h-4 transition-opacity duration-200
            ${errors.gender ? "opacity-100" : "opacity-0"}`}
          >
            {errors.gender?.message || " "}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-3 sm:flex-row mt-10">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting || !isDirty}  // ← grey out if nothing changed
          >
            <span className="px-5 jost">
              {isSubmitting ? "Saving..." : "Save Changes"}
            </span>
          </Button>

          <Button
            type="button"
            variant="ghost"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            <span className="px-10 md:px-7 lg:px-12 jost">Cancel</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
export default ProfileForm;
