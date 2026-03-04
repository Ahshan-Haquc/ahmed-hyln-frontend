import { Phone, Mic, Calendar, MessageSquare, Clock, CircleCheck } from "lucide-react";

const cardStyle: React.CSSProperties = {
  borderRadius: "20px",
  background:
    "radial-gradient(83.7% 77.99% at 50% 27.69%, rgba(95, 214, 246, 0.40) 0%, rgba(43, 130, 200, 0.40) 75.09%, rgba(114, 43, 200, 0.40) 100%)",
  backdropFilter: "blur(52px)",
};

export default function HeroCallWidget() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "12px 0",
        flexWrap: "wrap",
      }}
    >
      {/* LEFT COLUMN */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>

        {/* Talk to Hyln Live Card */}
        <div
          style={{
            ...cardStyle,
            display: "flex",
            width: "248px",
            padding: "22px 27px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <h3
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Geist, sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "normal",
              margin: 0,
            }}
          >
            Talk to Hyln Live
          </h3>

          {/* Mic Icon */}
          <div
            style={{
              display: "flex",
              width: "63px",
              height: "63px",
              padding: "18px 17px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "39.5px",
              background: "#D4F3FF",
              boxShadow: "0 0 64px 0 #00E6F6",
              boxSizing: "border-box",
            }}
          >
            <Mic style={{ color: "#0011ED", width: "28px", height: "28px" }} />
          </div>

          {/* Tap to start */}
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              margin: 0,
              color: "#FFF",
              fontFamily: "Geist, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#37D906",
                flexShrink: 0,
              }}
            />
            Tap to start.
          </p>

          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.7)",
              fontFamily: "Geist, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "normal",
              textAlign: "center",
            }}
          >
            Or call{" "}
            <span style={{ color: "#FFF", fontWeight: 600 }}>(650) 719-1267</span>
          </p>

          {/* Ask Hyln Button */}
          <div
            style={{
              display: "flex",
              padding: "10px 0",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              alignSelf: "stretch",
              borderRadius: "10px",
              background: "#6AA7D8",
            }}
          >
            <span
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Geist, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "normal",
                padding: "0 8px",
              }}
            >
              Ask Hyln anything and try it out for yourself
            </span>
          </div>

          {/* Natural Voice + Instant Response */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <CircleCheck style={{ width: "18px", height: "18px", flexShrink: 0, color: "#FFF" }} />
              <span style={{ color: "#555", fontFamily: "Geist, sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: "normal" }}>
                Natural voice
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <CircleCheck style={{ width: "18px", height: "18px", flexShrink: 0, color: "#FFF" }} />
              <span style={{ color: "#555", fontFamily: "Geist, sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: "normal" }}>
                Instant response
              </span>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Feature Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "248px" }}>
          {[
            { Icon: Calendar, title: "Book Appointments", sub: "Syncs to Square" },
            { Icon: MessageSquare, title: "Send Confirmations", sub: "Auto text reminders" },
            { Icon: Clock, title: "Works 24/7", sub: "Never misses a call" },
          ].map(({ Icon, title, sub }) => (
            <div
              key={title}
              style={{ ...cardStyle, display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px" }}
            >
              <Icon style={{ color: "#FFF", width: "20px", height: "20px", flexShrink: 0 }} />
              <div>
                <p style={{ margin: 0, color: "#FFF", fontFamily: "Geist, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "normal" }}>
                  {title}
                </p>
                <p style={{ margin: 0, color: "#555", fontFamily: "Geist, sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: "normal" }}>
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CARD — Live Call Activity */}
      <div
        style={{
          ...cardStyle,
          display: "flex",
          width: "265px",
          padding: "20px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <h3
          style={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Geist, sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "normal",
            margin: 0,
            width: "100%",
          }}
        >
          Live Call Activity
        </h3>

        {/* Phone Icon */}
        <div
          style={{
            display: "flex",
            width: "63px",
            height: "63px",
            padding: "18px 17px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderRadius: "39.5px",
            background: "#D4F3FF",
            boxShadow: "0 0 64px 0 #00E6F6",
            alignSelf: "center",
            boxSizing: "border-box",
          }}
        >
          <Phone style={{ color: "#0011ED", width: "26px", height: "26px" }} />
        </div>

        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            margin: 0,
            color: "#FFF",
            fontFamily: "Geist, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "normal",
            alignSelf: "center",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#37D906", flexShrink: 0 }} />
          Processing call...
        </p>

        <p
          style={{
            margin: 0,
            color: "#555",
            fontFamily: "Geist, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "normal",
            alignSelf: "center",
          }}
        >
          10 calls handled today
        </p>

        {/* Recent Activity Box */}
        <div
          style={{
            display: "flex",
            width: "265px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            borderRadius: "20px",
            background: "#6AA7D8",
            boxSizing: "border-box",
            marginLeft: "-20px",
          }}
        >
          <h4
            style={{
              margin: 0,
              color: "#FFF",
              fontFamily: "Geist, sans-serif",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Recent activity
          </h4>
          {[
            { name: "Noura H.", status: "Booked" },
            { name: "Omar H.", status: "Booked" },
            { name: "Mohammed K.", status: "Answered" },
            { name: "Huda R.", status: "Answered" },
          ].map(({ name, status }) => (
            <div
              key={name}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CircleCheck style={{ width: "16px", height: "16px", color: "#FFF" }} />
                <span style={{ color: "#FFF", fontFamily: "Geist, sans-serif", fontSize: "14px", fontWeight: 400 }}>
                  {name}
                </span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Geist, sans-serif", fontSize: "14px", fontWeight: 400 }}>
                {status}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Status */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", width: "100%", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <CircleCheck style={{ width: "18px", height: "18px", color: "#FFF" }} />
            <span style={{ color: "#555", fontFamily: "Geist, sans-serif", fontSize: "14px", fontWeight: 400 }}>Always on</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <CircleCheck style={{ width: "18px", height: "18px", color: "#FFF" }} />
            <span style={{ color: "#555", fontFamily: "Geist, sans-serif", fontSize: "14px", fontWeight: 400 }}>No missed calls</span>
          </div>
        </div>
      </div>
    </div>
  );
}
