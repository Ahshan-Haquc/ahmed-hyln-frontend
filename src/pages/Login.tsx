import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hook";
import { setUser } from "@/store/features/auth/auth.slice";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import loginImg from "@/assets/auth/login.png";
import logo from "@/assets/auth/ai-logo.png";
import authBack from "@/assets/auth/ai-login-back.png";

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login Data:", data);
    dispatch(setUser(data));
    navigate("/");
  };

  return (
    <div className="fixed inset-0 flex bg-white overflow-hidden font-sans">

      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
        </div>
        <div className="relative w-full p-5">
          <img
            src={loginImg}
            alt="AI Voice Assistant Illustration"
            className="w-full"
          />
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 relative">
        {/* Subtle background waves/elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20 z-0 overflow-hidden">
          <img src={authBack} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-full max-w-[420px] relative z-10">
          <div className="flex flex-col items-center mb-10">
            <img src={logo} alt="SOW logo" className="h-14 w-auto mb-2" />
            <h1 className="text-4xl font-bold text-[#5B63F1] tracking-tight">SOW</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <div className="absolute left-4 -top-2.5 px-1.5 bg-white z-10">
                <label className="text-[14px] lg:text-xs font-normal text-pure-black leading-normal">
                  Email
                </label>
              </div>
              <input
                type="email"
                placeholder="testing123456789@gamil.com"
                {...register("email")}
                className="w-full p-3.5 border border-input-border rounded-[10px] bg-white focus:border-[#5B63F1] focus:outline-none transition-all placeholder:text-input-placeholder text-pure-black font-poppins"
              />
              {errors.email && (
                <p className="text-red-500 text-[10px] mt-1 ml-4 absolute">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative pt-2">
              <div className="absolute left-4 top-0 px-1.5 bg-white z-10">
                <label className="text-[14px] lg:text-xs font-normal text-pure-black leading-normal">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  {...register("password")}
                  className="w-full p-3.5 border border-input-border rounded-[10px] bg-white focus:border-[#5B63F1] focus:outline-none transition-all placeholder:text-input-placeholder pr-12 text-pure-black font-poppins"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5B63F1] hover:text-[#4A51D1] transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-[10px] mt-1 ml-4 absolute">{errors.password.message}</p>
              )}
              <div className="flex justify-end mt-2">
                <Link to="#" className="text-[#ADC4FF] text-[11px] font-medium hover:text-[#5B63F1] transition-colors">
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#5B63F1] hover:bg-[#4A51D1] text-white p-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-100 group"
              >
                Sign In
                <FiLogIn size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative flex items-center justify-center py-2">
              <div className="absolute w-full border-t border-gray-100"></div>
              <span className="relative px-4 bg-white text-gray-300 text-[10px] uppercase tracking-[0.2em] font-bold">OR</span>
            </div>

            <button
              type="button"
              className="w-full border border-gray-100 py-3.5 rounded-2xl text-gray-600 font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-3 shadow-sm"
            >
              Continue with <FcGoogle size={20} />
            </button>

            <p className="text-center text-[13px] text-gray-400 font-medium pt-2">
              Don't have an account ?{" "}
              <Link to="/signup" className="text-[#5B63F1] font-bold hover:underline transition-all">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
