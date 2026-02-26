import { Check } from 'lucide-react';
import HeroCallWidget from './HeroCallWidget';
import heroImage from "@/assets/hero.png"

const Hero = () => {
    return (
        <div className="flex justify-center relative">
            <img
                src={heroImage}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <section className="max-w-[1400px] min-h-screen  flex flex-col xl:flex-row items-center justify-between gap-5 px-4 md:px-20 z-10">

                {/* LEFT HERO TEXT */}
                <div className=" text-white mt-10 md:mt-0">

                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-black">
                        Never miss another 
                    </h1>
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-primary">
                        patient call. 
                    </h1>
                    <div className="text-white max-w-2xl mt-3">

                        {/* Heading */}
                        <p className="text-sm md:text-xl xl:text-2xl font-medium text-[#3F3F3F] leading-relaxed mb-8">
                            HyIn answers calls, books appointments, verifies insurance, and
                            handles patient inquiries while you focus on care.
                        </p>

                        {/* Buttons Row */}
                        <div className="flex flex-wrap items-center gap-4 mb-6">

                            {/* START FREE TRIAL BUTTON */}
                            <div className="relative">
                                {/* Glow Layer */}
                                <div className="absolute inset-0 rounded-full 
                                bg-gradient-to-r from-secondary to-primary 
                                blur-md opacity-60"></div>

                                {/* Actual Button */}
                                <button className="w-full md:w-auto
                                    relative flex items-center gap-4
                                    px-6 py-3 rounded-2xl
                                    bg-gradient-to-r from-secondary to-primary
                                    text-white font-medium
                                    shadow-lg
                                    
                                    hover:bg-gradient-to-r hover:from-secondary/90 hover:to-primary/90
                                    transition duration-300
                                ">
                                    <span>Start Free Trial</span>

                                    <span className="
                                    bg-cyan-400/30
                                    text-white
                                    text-sm
                                    px-4 py-1
                                    rounded-full
                                    backdrop-blur-md
                                    border border-white/20
                                    ">
                                        14 days free
                                    </span>
                                </button>
                            </div>

                            {/* BOOK A DEMO BUTTON */}
                            <button className="w-full md:w-auto
                            px-6 py-3 rounded-2xl
                            border border-primary md:border-white
                            text-primary md:text-white
                            font-medium
                            hover:bg-white hover:text-black
                            transition
                            ">
                                Book a Demo
                            </button>

                        </div>

                        {/* Feature List */}
                        <div className="flex flex-wrap gap-6 text-black md:text-white text-sm mb-10 md:mb-0">

                            <div className="flex items-center gap-2">
                                <Check size={16} className="text-black md:text-white" />
                                No credit card required
                            </div>

                            <div className="flex items-center gap-2">
                                <Check size={16} className="text-black md:text-white" />
                                Setup in 5 minutes
                            </div>

                            <div className="flex items-center gap-2">
                                <Check size={16} className="text-black md:text-white" />
                                Works with any calendar
                            </div>

                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE COMPONENT */}
                <HeroCallWidget />

            </section>
        </div>
    );
};

export default Hero;