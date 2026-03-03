import { FiMic } from "react-icons/fi";

interface ManualStepTwoProps {
    data: {
        services: string;
        hours: string;
    };
    onChange: (field: string, value: string) => void;
}

const ManualStepTwo = ({ data, onChange }: ManualStepTwoProps) => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Services You Offer Field */}
            <div className="relative">
                <div className="absolute left-4 -top-2.5 px-1.5 bg-white z-10">
                    <label className="text-[14px] lg:text-xs font-normal text-pure-black leading-normal">Services You Offer</label>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        value={data.services}
                        onChange={(e) => onChange("services", e.target.value)}
                        placeholder="e.g. Haircuts, Massage therapy"
                        className="w-full p-3.5 border border-input-border rounded-[10px] bg-white focus:border-[#5B63F1] focus:outline-none transition-all placeholder:text-input-placeholder text-pure-black font-poppins pr-10"
                    />
                    <FiMic size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5D5FEF] cursor-pointer" />
                </div>
                <p className="text-[#9E9E9E] text-[10px] mt-2 ml-2 leading-relaxed">
                    *List 1-2 main services your business provides.
                </p>
            </div>

            {/* Business Hours Field */}
            <div className="relative pt-4">
                <div className="absolute left-4 top-1.5 px-1.5 bg-white z-10">
                    <label className="text-[14px] lg:text-xs font-normal text-pure-black leading-normal">Business Hours</label>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        value={data.hours}
                        onChange={(e) => onChange("hours", e.target.value)}
                        placeholder="e.g. Mon-Fri, 9am - 6pm"
                        className="w-full p-3.5 border border-input-border rounded-[10px] bg-white focus:border-[#5B63F1] focus:outline-none transition-all placeholder:text-input-placeholder text-pure-black font-poppins pr-10"
                    />
                    <FiMic size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5D5FEF] cursor-pointer" />
                </div>
                <p className="text-[#9E9E9E] text-[10px] mt-2 ml-2 leading-relaxed">
                    *Your agent will inform callers about when you're open.
                </p>
            </div>
        </div>
    );
};

export default ManualStepTwo;
