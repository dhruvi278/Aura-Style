import React from "react";
import Logo from "../ui/Logo";
import TitleText from "../ui/TitleText";
import Formfield from "../ui/Formfield";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    control,  
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 5000));
    toast.success("Sign Up", {
      description: "Account created successfully!",
    });
    console.log("Sign up data:", data);
  };

  const allowOnlyNumbers = (e) => {
    // Allow: backspace, delete, tab, escape, enter
    const allowedKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "+",
    ];

    if (allowedKeys.includes(e.key)) return;

    // Block anything that isn't a digit
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const allowOnlyNumbersPaste = (e) => {
    const pasted = e.clipboardData.getData("text");
    // Strip everything except digits and leading +
    if (!/^\+?\d+$/.test(pasted)) {
      e.preventDefault();
    }
  };

  return (
    <section className="h-full w-full bg-[#F7F4EF] flex items-center justify-center px-6 py-10">
      <div className="flex flex-col gap-7 w-full max-w-150  ">
        <Logo />
        <TitleText
          title="Create Your Account"
          description="Your curated sartorial journey begins with a single step."
          login_signup={true}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Formfield
            label="Full Name *"
            name="fullName"
            type="text"
            placeholder="Alexander McQueen"
            register={(name) =>
              register(name, {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })
            }
            error={errors.fullName?.message}
          />

          <div className="flex flex-col sm:flex-row w-full sm:gap-6">
            <div className="flex-1">
              <Formfield
                label="Email Address *"
                name="email"
                type="email"
                placeholder="alex@domain.com"
                register={(name) =>
                  register(name, {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email address",
                    },
                  })
                }
                error={errors.email?.message}
              />
            </div>
            <div className="flex-1">
              <Formfield
                label="Phone Number"
                name="phone"
                type="tel"
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
            </div>
          </div>
          <Formfield
            label="Password *"
            name="password"
            type="password"
            placeholder="••••••••"
            register={(name) =>
              register(name, {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
                  message: "Password must contain letters and numbers",
                },
              })
            }
            error={errors.password?.message}
          />
          <div className="flex flex-col gap-2">
            {/* Label */}
            <label className="jost uppercase text-sm text-gray-600 font-medium">
              Gender Identity *
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
                            ? "border-[#C4A982] bg-[#C4A982]/10 text-[#C4A982]" // ← selected
                            : errors.gender
                              ? "border-red-400 text-[#475569]" // ← error state
                              : "border-gray-300 text-[#475569]" // ← default
                        }`}
                    >
                      <p className="jost text-[16px]">{option}</p>
                    </button>
                  ))}
                </div>
              )}
            />

            {/* Error */}
            <p
              className={`text-red-500 text-xs min-h-4 transition-opacity duration-200 mb-2 
              ${errors.gender ? "opacity-100" : "opacity-0"}`}
            >
              {errors.gender?.message || " "}
            </p>
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            <p className="jost py-1 tracking-[2px]">
              {isSubmitting ? "Creating Account..." : "CREATE ACCOUNT →"}
            </p>
          </Button>
        </form>
        <div className="flex gap-1 justify-center">
          <p className="work-sans text-[14px] text-[#64748B]">
            Already part of the inner circle?
          </p>
          <Link
            to={"/login"}
            className="work-sans text-[14px] text-[#C4A982] hover:text-[#8c785d] font-semibold transition-colors duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
