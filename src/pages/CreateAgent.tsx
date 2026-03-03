import { useForm } from "react-hook-form";
import { useState } from "react";
import StepOne from "@/components/CreateAgent/StepOne";
import StepTwo from "@/components/CreateAgent/StepTwo";
import StepThree from "@/components/CreateAgent/StepThree";
import ResumeOnboarding from "@/components/CreateAgent/ResumeOnboarding";
import ManualAiAgent from "@/components/CreateAgent/ManualAiAgent";
import AgentReady from "@/components/CreateAgent/AgentReady";

interface CreateAgentInputs {
    email: string;
    website?: string;
}

const CreateAgent = () => {
    const [step, setStep] = useState(1);
    const [isManualFlow, setIsManualFlow] = useState(true);
    const [isAgentReady, setIsAgentReady] = useState(false);
    const [agentData, setAgentData] = useState<any>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateAgentInputs>();

    const onSubmit = (data: CreateAgentInputs) => {
        console.log("Create Agent Data:", data);
        setStep(2);
    };

    return (
        <div className={`min-h-screen w-full relative flex items-center justify-center overflow-x-hidden pt-10 pb-10 md:pt-0 md:pb-0 font-sans ${isManualFlow ? "bg-white" : ""}`}>
            {/* Background gradient – only for voice flow */}
            {!isManualFlow && (
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        background: "conic-gradient(from 90deg, rgba(183, 146, 230, 1) 0deg, rgba(254, 198, 220, 1) 55.3846deg, rgba(255, 255, 255, 1) 90deg, rgba(184, 158, 237, 1) 241.962deg, rgba(157, 120, 230, 1) 277.674deg, rgba(168, 135, 232, 1) 348.396deg, rgba(183, 146, 230, 1) 360deg)",
                        opacity: 0.4,
                    }}
                />
            )}

            {!isManualFlow ? (
                // Voice Flow
                <>
                    {step === 1 && (
                        <StepOne
                            register={register}
                            errors={errors}
                            onSubmit={handleSubmit(onSubmit)}
                        />
                    )}

                    {step === 2 && (
                        <StepTwo onNext={() => setStep(3)} />
                    )}

                    {step === 3 && (
                        <StepThree onNext={() => setStep(4)} />
                    )}

                    {step === 4 && (
                        <ResumeOnboarding onContinue={() => setStep(2)} />
                    )}
                </>
            ) : (
                // Manual Flow
                !isAgentReady ? (
                    <ManualAiAgent
                        onBack={() => setIsManualFlow(false)}
                        onVoiceClick={() => setIsManualFlow(false)}
                        onComplete={(data) => {
                            setAgentData(data);
                            setIsAgentReady(true);
                        }}
                    />
                ) : (
                    <AgentReady
                        formData={agentData}
                        onTalkToAgent={() => console.log("Talking to agent...")}
                    />
                )
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
