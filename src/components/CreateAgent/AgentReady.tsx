import { FiInfo, FiEdit2, FiPlus, FiMic } from "react-icons/fi";

interface AgentReadyProps {
    formData: {
        businessName: string;
        businessType: string;
        description: string;
        services: string;
        hours: string;
        bookingSystem: string;
        otherBooking: string;
    };
    onTalkToAgent: () => void;
}

const AgentReady = ({ formData, onTalkToAgent }: AgentReadyProps) => {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center py-10 px-4 font-sans overflow-x-hidden">
            {/* ── Decorative blobs ── */}
            <div
                className="pointer-events-none absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full opacity-60"
                style={{ background: "#D7B2FF66", filter: "blur(137px)" }}
            />
            <div
                className="pointer-events-none absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full opacity-60"
                style={{ background: "#D7B2FF66", filter: "blur(137px)" }}
            />
            <div
                className="pointer-events-none absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full opacity-60"
                style={{ background: "#E6FBFF", filter: "blur(137px)" }}
            />

            <div className="relative z-10 w-full max-w-[800px] bg-white rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col gap-10">

                {/* Header */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl md:text-[32px] font-medium text-black font-geist">Your agent is ready to test</h1>
                        <FiInfo className="text-gray-400" />
                    </div>
                    <p className="text-[#A7A8F4] text-sm md:text-base leading-relaxed max-w-[600px]">
                        Review your agent's configuration below. You can test the conversation flow by talking to the agent directly or requesting a call.
                    </p>
                </div>

                {/* Business Information Section */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-medium text-black font-geist">Business Information</h2>
                    </div>

                    <div className="bg-[#5D5FEF]/5 rounded-[20px] p-6 md:p-8 space-y-6 relative">
                        <button className="absolute top-6 right-6 text-[#5D5FEF] hover:text-[#4a4ce0] transition-all">
                            <FiEdit2 size={18} />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 items-start">
                            <span className="text-[#A7A8F4] text-[13px] font-medium">Business Name:</span>
                            <span className="text-black text-sm">{formData.businessName || "Luxe Home Services"}</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 items-start">
                            <span className="text-[#A7A8F4] text-[13px] font-medium">Business Type:</span>
                            <span className="text-black text-sm">{formData.businessType || "Home repair and handyman services"}</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 items-start">
                            <span className="text-[#A7A8F4] text-[13px] font-medium">Services:</span>
                            <span className="text-black text-sm">{formData.services || "Design, Repair"}</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 items-start">
                            <span className="text-[#A7A8F4] text-[13px] font-medium">Business Hours:</span>
                            <span className="text-black text-sm whitespace-pre-line">{formData.hours || "Monday – Friday: 8:00 AM – 5:00 PM\nSaturday: Closed Sunday: Closed"}</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 items-start">
                            <span className="text-[#A7A8F4] text-[13px] font-medium">Description:</span>
                            <p className="text-black text-sm leading-relaxed">
                                {formData.description || "Professional home repair services for homeowners, real estate professionals, and interior designers in Alpharetta, Georgia and surrounding areas"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* UIUX Assistant Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-gray-400" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-black">UIUX Assistant</span>
                                <FiEdit2 size={14} className="text-[#5D5FEF] cursor-pointer" />
                                <span className="bg-[#E6FFFA] text-[#00C2A0] text-[10px] px-2 py-0.5 rounded-full font-medium">Review</span>
                            </div>
                            <p className="text-[#9E9E9E] text-xs">Voice - enabled AI agent - English (US)</p>
                        </div>
                    </div>
                </div>

                {/* Agent Greeting Section */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-medium text-black">Agent Greeting</h2>
                        <FiEdit2 size={16} className="text-[#5D5FEF] cursor-pointer" />
                    </div>
                    <div className="bg-[#5D5FEF]/5 rounded-[12px] p-4 text-[#5D5FEF] text-xs leading-relaxed border border-[#5D5FEF]/10">
                        Thank you for calling Luxe Home Services, your trusted partner for home repairs and upgrades. How can we assist you today?
                    </div>
                </div>

                {/* Services Grid Section */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-medium text-black font-geist">Services</h2>
                        <FiEdit2 size={20} className="text-[#5D5FEF] cursor-pointer" />
                    </div>
                    <p className="text-[#9E9E9E] text-[10px]">Services your business offers with pricing</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-[#5D5FEF]/5 rounded-[12px] p-4 space-y-1 border border-transparent hover:border-[#5D5FEF]/20 transition-all">
                                <h3 className="text-sm font-medium text-black">Commercial Design</h3>
                                <p className="text-[#00C2A0] text-[10px] font-medium uppercase tracking-wider">Price not set</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Business Policies Section */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-medium text-black font-geist">Business Policies</h2>
                        <FiEdit2 size={20} className="text-[#5D5FEF] cursor-pointer" />
                    </div>
                    <p className="text-[#9E9E9E] text-[10px]">Important policies for customers</p>

                    <div className="flex items-center justify-center h-[180px] bg-[#5D5FEF]/5 rounded-[20px] border-2 border-dashed border-[#5D5FEF]/20 relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                                <FiPlus size={20} className="text-[#5D5FEF]" />
                            </div>
                            <p className="text-sm font-medium text-black">Add Policies</p>
                            <p className="text-[#9E9E9E] text-[10px] text-center px-4 max-w-[250px]">Help customers understand your cancellation, payment, and deposit policies</p>
                            <button className="bg-[#101112] text-white text-[12px] font-medium px-8 py-2.5 rounded-full mt-2 hover:bg-black transition-all shadow-lg active:scale-95">
                                Add Policies
                            </button>
                        </div>
                    </div>
                </div>

                {/* Voice & Personality Section */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-medium text-black font-geist">Voice & Personality</h2>
                        <FiEdit2 size={20} className="text-[#5D5FEF] cursor-pointer" />
                    </div>
                    <p className="text-[#9E9E9E] text-[10px]">Customize how your agent sounds</p>

                    <div className="flex items-center justify-center h-[180px] bg-[#5D5FEF]/5 rounded-[20px] border-2 border-dashed border-[#5D5FEF]/20 relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                                <FiPlus size={20} className="text-[#5D5FEF]" />
                            </div>
                            <p className="text-sm font-medium text-black">Customize Voice</p>
                            <p className="text-[#9E9E9E] text-[10px] text-center px-4 max-w-[250px]">Choose from multiple voice options and personalize your agent's personality</p>
                            <button className="bg-[#101112] text-white text-[12px] font-medium px-8 py-2.5 rounded-full mt-2 hover:bg-black transition-all shadow-lg active:scale-95">
                                Add Policies
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-6 flex flex-col items-center gap-4">
                    <button
                        onClick={onTalkToAgent}
                        className="w-full bg-gradient-to-r from-[#FFB155] via-[#D26D74] to-[#624794] text-white py-4.5 rounded-full font-poppins font-semibold shadow-2xl flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer text-lg"
                    >
                        <FiMic size={22} className="fill-white/20" />
                        Talk Your Agent
                    </button>
                    <p className="text-[#5D5FEF] text-[11px] font-medium opacity-80">Test your agent's responses in real-time.</p>
                </div>
            </div>
        </div>
    );
};

export default AgentReady;
