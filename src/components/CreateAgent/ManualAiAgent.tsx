import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import aiAgentImg from "@/assets/auth/ai-agent.png";
import ManualStepOne from "./ManualStepOne";
import ManualStepTwo from "./ManualStepTwo";
import { FiMic } from "react-icons/fi";
import { Play } from "lucide-react";
import ManualStepThree from "./ManualStepThree";

interface ManualAiAgentProps {
    onBack: () => void;
    onVoiceClick: () => void;
    onComplete: (data: FormData) => void;
}

const TOTAL_STEPS = 3;

interface FormData {
    businessName: string;
    businessType: string;
    description: string;
    services: string;
    hours: string;
    bookingSystem: string;
    otherBooking: string;
}

const ManualAiAgent = ({ onBack, onVoiceClick, onComplete }: ManualAiAgentProps) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        businessName: "",
        businessType: "Salon & Spa",
        description: "",
        services: "",
        hours: "",
        bookingSystem: "Mindbody",
        otherBooking: "",
    });

    const updateFormData = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const progressValue = (currentStep / TOTAL_STEPS) * 100;

    const handleNext = () => {
        if (currentStep < TOTAL_STEPS) {
            setCurrentStep(currentStep + 1);
        } else {
            console.log("Final Agent Data:", formData);
            onComplete(formData);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        } else {
            onBack();
        }
    };

    return (
        <div className="relative w-full flex items-center overflow-hidden bg-white">

            {/* ── Decorative blobs ── */}
            <div
                className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-60"
                style={{ background: "#D7B2FF66", filter: "blur(137px)" }}
            />
            <div
                className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-60"
                style={{ background: "#D7B2FF66", filter: "blur(137px)" }}
            />
            <div
                className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-60"
                style={{ background: "#E6FBFF", filter: "blur(137px)" }}
            />

            {/* ── Main content ── */}
            <div className="relative z-10 flex w-full items-center font-sans mx-auto">

                {/* Left – illustration */}
                <div className="w-1/2 hidden md:flex items-center justify-center p-8">
                    <img
                        src={aiAgentImg}
                        alt="AI Agent Illustration"
                        className="w-full h-auto"
                    />
                </div>

                {/* Right – form card */}
                <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-4">
                    <div className="w-full max-w-[750px] bg-[#FFF] border-[11px] border-[#A7A8F4] rounded-[20px] p-8 lg:p-12 shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95 flex flex-col gap-8 h-fit">

                        {/* Header */}
                        <div>
                            <h1 className="text-2xl md:text-[32px] font-medium text-black font-geist">Create Your AI Agent</h1>
                            <div className="mt-6">
                                <div className="flex justify-end items-center mb-2">
                                    <span className="text-[#A7A8F4] text-xs font-medium">Step {currentStep}/{TOTAL_STEPS}</span>
                                </div>
                                <Progress
                                    value={progressValue}
                                    className="h-[6px] bg-[#F5F5F5] overflow-hidden"
                                    indicatorClassName="bg-gradient-to-r from-[#5D5FEF] to-[#9F1DF5]"
                                />
                            </div>
                        </div>

                        {/* Step content */}
                        <div className="min-h-[320px]">
                            {currentStep === 1 && (
                                <ManualStepOne
                                    data={{
                                        businessName: formData.businessName,
                                        businessType: formData.businessType,
                                        description: formData.description
                                    }}
                                    onChange={updateFormData}
                                />
                            )}
                            {currentStep === 2 && (
                                <ManualStepTwo
                                    data={{
                                        services: formData.services,
                                        hours: formData.hours
                                    }}
                                    onChange={updateFormData}
                                />
                            )}
                            {currentStep === 3 && (
                                <ManualStepThree
                                    data={{
                                        bookingSystem: formData.bookingSystem,
                                        otherBooking: formData.otherBooking
                                    }}
                                    onChange={updateFormData}
                                />
                            )}
                        </div>

                        {/* Footer */}
                        <div className="flex flex-col items-center gap-7 pt-4">
                            <div className="w-full flex items-center justify-between">
                                <button
                                    onClick={handleBack}
                                    className="text-[#9E9E9E] text-sm font-medium hover:text-[#5D5FEF] transition-all flex items-center gap-1 cursor-pointer"
                                >
                                    &lt; Back
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="bg-[#5D5FEF] hover:bg-[#4a4ce0] text-white px-10 py-3.5 rounded-full font-poppins font-medium transition-all shadow-lg flex items-center gap-3 group active:scale-95 cursor-pointer"
                                    style={{ background: 'linear-gradient(90deg, #5D5FEF 0%, #9F1DF5 100%)' }}
                                >
                                    Continue Conversation <Play size={18} className="fill-white group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            <button
                                onClick={onVoiceClick}
                                className="text-[#5D5FEF] text-sm font-medium hover:underline flex items-center gap-2 cursor-pointer"
                            >
                                <FiMic size={16} />
                                Prefer to set up by voice?
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManualAiAgent;
