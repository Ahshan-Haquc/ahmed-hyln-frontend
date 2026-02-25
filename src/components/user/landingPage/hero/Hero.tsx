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
        <section className="max-w-[1400px] min-h-screen  flex items-center justify-between px-20 z-10">

            {/* LEFT HERO TEXT */}
            <div className="max-w-xl text-white">
                <h1 className="text-5xl font-bold mb-6">
                    Your AI Receptionist That Never Sleeps
                </h1>
                <p className="text-lg opacity-80">
                    Automate bookings, answer calls, and manage clients 24/7.
                </p>
            </div>

            {/* RIGHT SIDE COMPONENT */}
            <HeroCallWidget />

        </section>
        </div>
    );
};

export default Hero;