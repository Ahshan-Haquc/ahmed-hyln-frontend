import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiChevronRight, FiPlay, FiMic, FiPhoneOff } from "react-icons/fi";
import loginImg from "@/assets/auth/login.png";

const createAgentSchema = z.object({
    email: z.string().email("Invalid email format"),
    website: z.string().url("Invalid URL").optional().or(z.literal("")),
});

type CreateAgentInputs = z.infer<typeof createAgentSchema>;

const CreateAgent = () => {
    const [step, setStep] = useState(1);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateAgentInputs>({
        resolver: zodResolver(createAgentSchema),
    });

    const onSubmit = (data: CreateAgentInputs) => {
        console.log("Create Agent Data:", data);
        setStep(2);
    };

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-[#1E1E4E] to-[#2D2D6E] flex items-center justify-center p-4 overflow-hidden font-sans">
            {/* Background illustration */}
            <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
                <img src={loginImg} alt="Background" className="w-full h-full object-cover" />
            </div>

            {step === 1 && (
                <div className="w-full max-w-[580px] bg-white rounded-[32px] p-8 lg:p-14 shadow-2xl relative z-10 transition-all duration-500 animate-in fade-in zoom-in-95">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your AI Agent</h1>
                        <p className="text-gray-400 text-sm">Your voice-powered booking agent is just a few minutes away.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="relative">
                            <div className="absolute left-6 -top-2.5 px-1.5 bg-white z-10">
                                <label className="text-[14px] lg:text-xs font-normal text-pure-black leading-normal uppercase tracking-wider">Email address*</label>
                            </div>
                            <input
                                type="email"
                                placeholder="yourbusiness@gmail.com"
                                {...register("email")}
                                className="w-full p-4 pl-6 border border-input-border rounded-[10px] bg-white focus:border-[#5B63F1] focus:outline-none transition-all placeholder:text-input-placeholder text-pure-black font-poppins"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-[10px] mt-1 ml-4 absolute">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="relative pt-2">
                            <div className="absolute left-6 top-0 px-1.5 bg-white z-10">
                                <label className="text-[14px] lg:text-xs font-normal text-pure-black leading-normal uppercase tracking-wider">Business website*</label>
                            </div>
                            <input
                                type="text"
                                placeholder="your business.com"
                                {...register("website")}
                                className="w-full p-4 pl-6 border border-input-border rounded-[10px] bg-white focus:border-[#5B63F1] focus:outline-none transition-all placeholder:text-input-placeholder text-pure-black font-poppins"
                            />
                            {errors.website && (
                                <p className="text-red-500 text-[10px] mt-1 ml-4 absolute">{errors.website.message}</p>
                            )}
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-[#5B63F1] hover:bg-[#4A51D1] text-white p-4 py-4.5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-100 group"
                            >
                                Create Agent <FiPlay size={18} className="fill-white" />
                            </button>
                        </div>

                        <div className="text-center space-y-4 pt-2">
                            <p className="text-gray-400 text-sm font-medium">
                                Already have an account ?{" "}
                                <Link to="/login" className="text-[#5B63F1] font-bold hover:underline transition-all">Sign In</Link>
                            </p>
                            <button type="button" className="text-gray-400 text-xs font-bold flex items-center justify-center gap-1 mx-auto group hover:text-gray-600">
                                DON'T HAVE A WEBSITE ? <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {step === 2 && (
                <div className="w-full max-w-[800px] text-center text-white relative z-10 p-8 transition-all duration-700 animate-in fade-in slide-in-from-bottom-10">
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative mb-16">
                            {/* Outer glow */}
                            <div className="w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

                            {/* Main Sphere */}
                            <div className="w-44 h-44 bg-[#0F1033] rounded-full relative z-10 flex items-center justify-center shadow-[0_0_50px_rgba(59,65,183,0.5)] border border-blue-400/30 overflow-hidden group p-5">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>

                                {/* Glowing sphere center */}
                                <div className="w-full h-full relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl"></div>
                                    {/* Wavy lines pattern (simplified) */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rotate-12 scale-x-150 animate-[wave_3s_infinite]"></div>
                                        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -rotate-6 scale-x-125 animate-[wave_4s_infinite]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Animated rings */}
                            <div className="absolute inset-0 -m-6 border border-blue-400/5 rounded-full animate-[ping_4s_linear_infinite] opacity-50"></div>
                            <div className="absolute inset-0 -m-12 border border-blue-400/10 rounded-full animate-[ping_6s_linear_infinite] opacity-30"></div>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">Tell me about your business</h2>
                        <p className="text-blue-100/70 text-lg lg:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
                            I'm SOW, your AI assistant. Let's have a conversation to set your account.
                        </p>

                        <button
                            onClick={() => setStep(3)}
                            className="bg-[#5B63F1] hover:bg-[#4A51D1] text-white px-12 py-5 rounded-full font-bold transition-all shadow-xl shadow-blue-900/40 flex items-center gap-4 group scale-110 active:scale-100"
                        >
                            Start Conversation <FiPlay size={20} className="fill-white" />
                        </button>

                        <p className="text-white/30 text-[11px] font-bold uppercase tracking-[0.2em] mt-12">Make sure your microphone is enabled</p>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="w-full max-w-[1000px] text-center text-white relative z-10 p-8 h-full flex flex-col justify-between transition-all duration-700 animate-in fade-in">
                    <div className="mt-12">
                        <h2 className="text-3xl font-bold mb-3 tracking-tight">Tell me about your business</h2>
                        <p className="text-blue-100/40 font-medium">Just speak naturally and I'll gather the information I need</p>
                    </div>

                    <div className="flex-grow flex flex-col items-center justify-center relative">
                        {/* Sphere (Large) */}
                        <div className="relative mb-20 transform scale-150 lg:scale-[1.8]">
                            <div className="w-56 h-56 bg-blue-500 rounded-full blur-[100px] opacity-15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="w-48 h-48 bg-[#0F1033] rounded-full relative z-10 flex items-center justify-center shadow-2xl border border-blue-400/20 overflow-hidden p-5">
                                {/* Interior visualizers */}
                                <div className="w-full h-full relative flex items-center justify-center">
                                    <div className="w-32 h-16 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                                    <svg className="absolute w-full h-[60%] overflow-visible" viewBox="0 0 100 40">
                                        <path
                                            d="M0,20 Q10,15 20,20 T40,20 T60,20 T80,20 T100,20"
                                            fill="none"
                                            stroke="rgba(96, 165, 250, 0.4)"
                                            strokeWidth="0.5"
                                            className="animate-[wave_3s_linear_infinite]"
                                        />
                                        <path
                                            d="M0,22 Q15,27 30,22 T60,22 T90,22 T120,22"
                                            fill="none"
                                            stroke="rgba(96, 165, 250, 0.2)"
                                            strokeWidth="0.3"
                                            className="animate-[wave_5s_linear_infinite]"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* Listening text */}
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[10px] text-white/30 tracking-[0.4em] font-bold uppercase transition-opacity animate-pulse">Listening...</div>
                        </div>

                        {/* Chat Bubble */}
                        <div className="mt-12 relative z-20 transition-all duration-500 animate-in fade-in slide-in-from-left-5">
                            <div className="bg-white rounded-[24px] p-7 text-gray-800 text-left max-w-[340px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative">
                                <p className="text-sm font-semibold leading-[1.6] text-gray-700">
                                    Hi! I'm here to help you set up your Bizzy AI phone assistant. This will just take a few minutes. Ready to get started?
                                </p>
                                <p className="text-gray-300 text-[10px] mt-4 font-bold uppercase tracking-tight">15:01</p>
                                {/* Bubble tail */}
                                <div className="absolute -bottom-2 left-8 w-5 h-5 bg-white rotate-45 transform"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12 flex items-center justify-center gap-8">
                        <button className="w-16 h-16 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border border-white/5 text-2xl group active:scale-95">
                            <FiMic className="text-white group-hover:scale-110 transition-transform" />
                        </button>
                        <button className="w-16 h-16 rounded-full bg-[#FF4545] hover:bg-[#E03E3E] flex items-center justify-center transition-all shadow-xl shadow-red-950/20 text-2xl group active:scale-95">
                            <FiPhoneOff className="text-white group-hover:rotate-12 transition-transform" />
                        </button>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes wave {
          0% { transform: translateX(-10%); }
          50% { transform: translateX(10%); }
          100% { transform: translateX(-10%); }
        }
        .animate-wave {
          animation: wave 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default CreateAgent;
