import { Play } from "lucide-react";
import aiLogo from "@/assets/auth/aiLogo.png";

interface StepTwoProps {
    onNext: () => void;
}

const StepTwo = ({ onNext }: StepTwoProps) => {
    return (
        <div className="w-full h-full text-center relative z-10 p-8 transition-all duration-700 animate-in fade-in slide-in-from-bottom-10 flex flex-col items-center justify-center">
            {/* AI Logo */}
            <div className="mb-6">
                <img
                    src={aiLogo}
                    alt="AI Logo"
                    className="w-[180px] h-auto md:w-[248px] md:h-[229px] object-contain"
                />
            </div>

            {/* Title */}
            <h2
                className="text-[28px] md:text-[34px] font-medium mb-4 font-geist"
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

            {/* Description */}
            <p className="text-[#0011ED] text-base md:text-[18px] font-normal font-geist mb-8 max-w-md mx-auto leading-normal">
                I'm SOW, your AI assistant. Let's have a conversation to set your account.
            </p>

            {/* Button */}
            <button
                onClick={onNext}
                className="bg-[#5D5FEF] text-white px-10 py-4 rounded-[20px] border-[3px] border-white font-poppins text-base font-normal transition-all shadow-xl flex items-center gap-3 group active:scale-95 cursor-pointer"
            >
                Start Conversation <Play size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Mic Note */}
            <p className="text-[#8E8FF4] text-sm mt-10 font-sans">
                Make sure your microphone is enabled
            </p>
        </div>
    );
};

export default StepTwo;
