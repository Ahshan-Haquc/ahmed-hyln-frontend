import { FiMic, FiPhoneOff } from "react-icons/fi";
import aiLogo from "@/assets/auth/aiLogo.png";

interface StepThreeProps {
    onNext?: () => void;
}

const StepThree = ({ onNext }: StepThreeProps) => {
    return (
        <div className="w-full h-full text-center relative z-10 p-6 md:p-8 flex flex-col items-center justify-between transition-all duration-700 animate-in fade-in">
            <div className="pt-6 md:pt-12">
                <h2
                    className="text-[28px] md:text-[34px] font-medium mb-3 font-geist"
                    style={{
                        WebkitTextStrokeWidth: "1px",
                        WebkitTextStrokeColor: "rgba(255, 255, 255, 0.20)",
                        background: "linear-gradient(91deg, #5015EF 5.91%, #9F1DF5 47.87%, #6203DF 93.09%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Tell me about your business
                </h2>
                <p className="text-input-border text-base md:text-[18px] font-normal font-geist leading-normal">
                    Just speak naturally and I'll gather the information I need
                </p>
            </div>

            {/* Center Section: AI Logo + Listening */}
            <div className="grow flex flex-col items-center justify-center relative">
                <div className="mb-4">
                    <img
                        src={aiLogo}
                        alt="AI Logo"
                        className="w-[180px] h-auto md:w-[248px] md:h-[229px] object-contain"
                    />
                </div>
                <p className="text-[#8E8FF4] text-xs tracking-wider animate-pulse">
                    Listening...
                </p>

                {/* Chat Bubble */}
                <div className="mt-6 w-full flex justify-start px-4">
                    <div className="bg-white rounded-[20px] p-5 text-left max-w-[500px] shadow-lg relative">
                        <p className="text-sm font-normal"
                            style={{
                                WebkitTextStrokeColor: "rgba(255, 255, 255, 0.20)",
                                background: "linear-gradient(91deg, #5015EF 5.91%, #9F1DF5 47.87%, #6203DF 93.09%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Hi! I'm here to help you set up your Bizzy AI phone assistant. This will just take a few minutes. Ready to get started?
                        </p>
                        <p className="text-[#8E8FF4] text-[10px] mt-3 font-medium">15:01</p>
                        {/* Bubble tail */}
                        <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white rotate-45 transform"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Mic + Hangup Buttons Pill */}
            <div className="pb-12 flex items-center justify-center w-full">
                <div className="rounded-[60px] border-2 border-white px-4 py-4 flex items-center gap-10 shadow">
                    <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center transition-all group active:scale-95 cursor-pointer shadow">
                        <FiMic size={28} className="text-[#5D5FEF] transition-transform group-hover:scale-110" />
                    </button>
                    <button
                        onClick={onNext}
                        className="w-16 h-16 rounded-full bg-white flex items-center justify-center transition-all group active:scale-95 cursor-pointer shadow"
                    >
                        <FiPhoneOff size={28} className="text-[#EF5D5D] transition-transform group-hover:rotate-12" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StepThree;
