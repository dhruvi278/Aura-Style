import { Link } from "react-router-dom";
import Formfield from "../ui/Formfield";
import Logo from "../ui/Logo";
import TitleText from "../ui/TitleText";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 5000));
    alert("Logged in")
    console.log("Sign up data:", data);
  };

  return (
    <section className="h-full w-full bg-[#F7F4EF] flex items-center justify-center px-6 py-12">
      <div className="flex flex-col gap-7 w-full max-w-150  ">
        <Logo />
        <TitleText
          title="Welcome Back"
          description="Sign in to your personal style sanctuary"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Formfield
            label="Email *"
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

          <Formfield
            label="Password *"
            name='password'
            type="password"
            placeholder="Enter your password"
            register={(name) =>
              register(name, {
                required: "Password is required",
              })
            }
            error={errors.password?.message}
          />
          <div className=" mb-8 flex justify-between items-center">
            <Link className="work-sans text-[14px] text-[#C4A982] italic">
              Forgot your password?
            </Link>
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="remember"
                id="remember"
                value="remember"
                className="size-4 border"
              />
              <label
                className="work-sans text-[14px] text-[#475569]"
                htmlFor="remember"
              >
                Remember me
              </label>
            </div>
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            <p className="jost py-1 tracking-[2px]">
              {isSubmitting ? "Signing in..." : "Sign In"}
            </p>
          </Button>
        </form>
        <div className="flex gap-1 justify-center mt-6">
          <p className="work-sans text-[14px] text-[#64748B]">
            New to AuraStyle?
          </p>
          <Link
            to={"/signup"}
            className="work-sans text-[14px] text-[#C4A982] font-bold"
          >
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};
``;
export default LoginForm;
