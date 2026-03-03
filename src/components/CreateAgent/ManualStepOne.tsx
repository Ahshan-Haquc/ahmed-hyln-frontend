import { FiMic, FiCheck } from "react-icons/fi";

const businessTypes = [
    "Salon & Spa",
    "Medical Practice",
    "Real Estate",
    "Law Firm",
];

interface ManualStepOneProps {
    data: {
        businessName: string;
        businessType: string;
        description: string;
    };
    onChange: (field: string, value: string) => void;
}

const ManualStepOne = ({ data, onChange }: ManualStepOneProps) => {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Business Name Field */}
            <div className="relative">
                <div className="absolute left-4 -top-2.5 px-1.5 bg-white z-10">
                    <label className="text-[14px] lg:text-xs font-normal text-pure-black leading-normal">Business Name</label>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        value={data.businessName}
                        onChange={(e) => onChange("businessName", e.target.value)}
                        placeholder="e.g. Acme Corp"
                        className="w-full p-3.5 border border-input-border rounded-[10px] bg-white focus:border-[#5B63F1] focus:outline-none transition-all placeholder:text-input-placeholder text-pure-black font-poppins pr-10"
                    />
                    <FiMic size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5D5FEF] cursor-pointer" />
                </div>
            </div>

            {/* Business Type Section */}
            <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">Business Type</label>
                <div className="grid grid-cols-2 gap-3">
                    {businessTypes.map((type) => (
                        <button
                            key={type}
                            type="button"
                            onClick={() => onChange("businessType", type)}
                            className={`p-3 rounded-[10px] border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${data.businessType === type
                                ? "border-[#5D5FEF] text-[#5D5FEF] bg-[#5D5FEF]/5"
                                : "border-input-border text-gray-500 hover:border-gray-300"
                                }`}
                        >
                            {type}
                            {data.businessType === type && <FiCheck className="text-[#5D5FEF]" />}
                        </button>
                    ))}
                </div>
            </div>

            {/* Brief Description Field */}
            <div className="relative">
                <div className="absolute left-4 -top-2.5 px-1.5 bg-white z-10">
                    <label className="text-[14px] lg:text-xs font-normal text-pure-black leading-normal">Brief Description</label>
                </div>
                <div className="relative">
                    <textarea
                        value={data.description}
                        onChange={(e) => onChange("description", e.target.value)}
                        placeholder="Describe your business services and what you do..."
                        className="w-full p-3.5 pt-4 border border-input-border rounded-[10px] bg-white focus:border-[#5B63F1] focus:outline-none transition-all placeholder:text-input-placeholder text-pure-black font-poppins min-h-[120px] resize-none pr-10"
                    />
                    <FiMic size={18} className="absolute right-4 top-5 text-[#5D5FEF] cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default ManualStepOne;
