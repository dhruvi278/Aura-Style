import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../store/slices/authSlice"
import Formfield from "../ui/Formfield";
import Logo from "../ui/Logo";
import TitleText from "../ui/TitleText";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error } = useSelector(state => state.auth)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      email: '',
      password: '',
      remember: false
    }
  });

  const onSubmit = async (data) => {
    const result = await dispatch(login({
      email: data.email,
      password: data.password,
      remember: data.remember
    }))
    console.log(data)
    if (result.type === 'auth/login/fulfilled') {
      toast.success('Welcome back', {
        description: 'Sign in to your style sanctuary',
        style: { borderLeft: '3px solid #C9A96E' }
      })
      navigate('/dashboard')
    } else {
      toast.error('Sign in failed', {
        description: result.payload || 'Please check your credentials'
      })
    }
  };

  return (
    <section className="h-full w-full bg-[#F7F4EF] flex items-center justify-center px-6 py-12">
      <div className="flex flex-col gap-7 w-full max-w-150  ">
        <Logo />
        <TitleText
          title="Welcome Back"
          login_signup={true}
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
            name="password"
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
            <div className="flex gap-2 items-center">

              <label
                htmlFor="remember"
                className="work-sans text-[14px] text-[#475569] cursor-pointer"
              >
                Remember me
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id="remember" {...register("remember")} className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all duration-200 dark:border-gray-600 peer-checked:bg-[#C4A982]"></div>
              </label>
            </div>
            <Link className="work-sans text-[14px] text-[#C4A982] italic">
              Forgot your password?
            </Link>
          </div>
          <Button type="submit" disabled={isSubmitting || loading} className="w-full">
            <p className="jost py-1 tracking-[2px]">
              {isSubmitting || loading ? "Signing in..." : "Sign In"}
            </p>
          </Button>
        </form>
        <div className="flex gap-1 justify-center mt-6">
          <p className="work-sans text-[14px] text-[#64748B]">
            New to AuraStyle?
          </p>
          <Link
            to={"/signup"}
            className="work-sans text-[14px] text-[#C4A982] hover:text-[#8c785d] font-semibold transition-colors duration-200"
          >
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
