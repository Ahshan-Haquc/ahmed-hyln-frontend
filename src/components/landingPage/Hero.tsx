import { Check } from "lucide-react";
import HeroCallWidget from "./HeroCallWidget";
import heroImage from "@/assets/images/hero.png";
import CommonWrapper from "@/common/CommonWrapper";

const Hero = () => {
    return (
        <>
            {/* ─── HERO SECTION ─── */}
            {/* Full-width background, content constrained by CommonWrapper */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                    minHeight: "calc(100vh - 72px)",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* Background — full width */}
                <img
                    src={heroImage}
                    alt="Hero Background"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0,
                    }}
                />

                {/* Content inside CommonWrapper */}
                <div style={{ position: "relative", zIndex: 10, width: "100%" }}>
                    <CommonWrapper className="!py-0">
                        <div
                            className="hero-inner"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "40px",
                                padding: "72px 0",
                                flexWrap: "wrap",
                            }}
                        >
                            {/* LEFT — Text */}
                            <div style={{ flex: "1 1 420px", minWidth: 0, display: "flex", flexDirection: "column" }}>
                                <h1
                                    style={{
                                        color: "#000",
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "64px",
                                        fontWeight: 600,
                                        lineHeight: "normal",
                                        margin: 0,
                                    }}
                                >
                                    Never miss another
                                </h1>
                                <h1
                                    style={{
                                        color: "#00E6F6",
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "64px",
                                        fontWeight: 600,
                                        lineHeight: "normal",
                                        margin: 0,
                                        marginBottom: "24px",
                                    }}
                                >
                                    patient call.
                                </h1>

                                <p
                                    style={{
                                        color: "#3F3F3F",
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "24px",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        margin: 0,
                                        marginBottom: "40px",
                                        maxWidth: "520px",
                                    }}
                                >
                                    HyIn answers calls, books appointments, verifies insurance, and handles patient
                                    inquiries while you focus on care.
                                </p>

                                {/* Buttons */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        gap: "16px",
                                        marginBottom: "24px",
                                    }}
                                >
                                    {/* Start Free Trial */}
                                    <button
                                        style={{
                                            padding: "10px 12px 10px 20px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: "14px",
                                            borderRadius: "14px",
                                            border: "2px solid rgba(255,255,255,0.00)",
                                            background:
                                                "radial-gradient(169.18% 110.09% at 71.56% 88.75%, #00C7D5 18.27%, #0011ED 99.62%)",
                                            boxShadow: "0 4px 6px 0 rgba(255,255,255,0.19)",
                                            cursor: "pointer",
                                            color: "#FFF",
                                            fontFamily: "Geist, sans-serif",
                                            fontSize: "18px",
                                            fontWeight: 400,
                                            lineHeight: "normal",
                                        }}
                                    >
                                        Start Free Trial
                                        <span
                                            style={{
                                                padding: "6px 10px",
                                                borderRadius: "14px",
                                                background: "#0BEFFF",
                                                color: "#000",
                                                fontFamily: "Geist, sans-serif",
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                lineHeight: "normal",
                                            }}
                                        >
                                            14 days free
                                        </span>
                                    </button>

                                    {/* Book a Demo */}
                                    <button
                                        style={{
                                            padding: "10px 20px",
                                            borderRadius: "14px",
                                            border: "2px solid rgba(255,255,255,0.50)",
                                            background: "transparent",
                                            color: "#000",
                                            fontFamily: "Geist, sans-serif",
                                            fontSize: "18px",
                                            fontWeight: 400,
                                            lineHeight: "normal",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Book a Demo
                                    </button>
                                </div>

                                {/* Feature list */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
                                    {["No credit card required", "Setup in 5 minutes", "Works with any calendar"].map(
                                        (item) => (
                                            <div
                                                key={item}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    color: "#FFF",
                                                    fontFamily: "Geist, sans-serif",
                                                    fontSize: "16px",
                                                    fontWeight: 400,
                                                    lineHeight: "normal",
                                                }}
                                            >
                                                <Check size={16} style={{ color: "#FFF", flexShrink: 0 }} />
                                                {item}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* RIGHT — Widget */}
                            <div style={{ flex: "0 0 auto" }}>
                                <HeroCallWidget />
                            </div>
                        </div>
                    </CommonWrapper>
                </div>
            </div>

            {/* ─── STATS SECTION ─── */}
            {/* Full-width background, content constrained by CommonWrapper */}
            <div style={{ width: "100%", background: "#FFF" }}>
                <CommonWrapper>
                    <p
                        style={{
                            color: "#3F3F3F",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "18px",
                            fontWeight: 400,
                            lineHeight: "normal",
                            textAlign: "center",
                            margin: 0,
                            padding: "40px 0",
                        }}
                    >
                        Businesses miss an average of 34% of calls per day. HYLN makes that 0%.
                    </p>
                </CommonWrapper>
            </div>

            {/* Responsive */}
            <style>{`
        @media (max-width: 1024px) {
          .hero-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 48px 0 !important;
          }
          .hero-inner h1 {
            font-size: 48px !important;
          }
          .hero-inner p {
            font-size: 20px !important;
          }
        }
        @media (max-width: 640px) {
          .hero-inner h1 {
            font-size: 34px !important;
          }
          .hero-inner p {
            font-size: 16px !important;
          }
        }
      `}</style>
        </>
    );
};

export default Hero;
