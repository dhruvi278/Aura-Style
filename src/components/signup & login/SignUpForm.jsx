import React from "react";
import Logo from "../ui/Logo";
import TitleText from "../ui/TitleText";
import Formfield from "../ui/Formfield";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/slices/authSlice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      gender: "",
    },
  });

  const onSubmit = async (data) => {
    const result = await dispatch(
      signup({
        full_name: data.fullName.trim(),
        email: data.email.trim(),
        phone_number: data.phone.trim() || "",
        password: data.password.trim(),
        gender: data.gender.trim(),
      }),
    );

    if (result.type === "auth/signup/fulfilled") {
      toast.success("Welcome to AuraStyle", {
        description: "Your account has been created successfully",
        style: { borderLeft: "3px solid #C9A96E" },
      });
      navigate("/login");
    } else {
      toast.error("Registration failed", {
        description:
          typeof result.payload === "string"
            ? result.payload
            : result.payload?.detail ||
              "Something went wrong — please try again",
      });
    }
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
                validate: (value) => {
                  const trimmed = value.trim();
                  if (trimmed.length < 5)
                    return "Name must be at least 5 characters";
                  if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(trimmed))
                    return "Full name must contain only letters and single spaces between words.";
                  return true;
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
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*!.]).+$/,
                  message:
                    "Password must contain at least one letter, one number, and one special character.",
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
          <Button
            type="submit"
            disabled={isSubmitting || loading}
            className="w-full"
          >
            <p className="jost py-1 tracking-[2px]">
              {isSubmitting || loading
                ? "Creating Account..."
                : "CREATE ACCOUNT →"}
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
