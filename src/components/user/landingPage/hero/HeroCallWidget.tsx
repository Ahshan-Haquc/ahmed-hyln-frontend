import { Phone, Mic, Check, Calendar, MessageSquare, Clock } from "lucide-react";

export default function HeroCallWidget() {
  return (
    <div className="flex gap-8 items-start justify-center">
      
      {/* LEFT SMALL COLUMN */}
      <div className="flex flex-col items-center gap-6">

        {/* Talk to HyIn Live Card */}
        <div className="w-[280px] rounded-3xl p-6 text-white 
          bg-gradient-to-br from-primary/80 via-blue-400/60 to-secondary/80 
          backdrop-blur-xl shadow-2xl">

          <h3 className="text-lg font-semibold text-center mb-6">
            Talk to HyIn Live
          </h3>

          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center">
              <Mic className="text-secondary w-8 h-8" />
            </div>

            <p className="text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Tap to start
            </p>

            <p className="text-sm opacity-80">
              Or call (650) 719-1267
            </p>

            <div className="bg-white/20 text-center rounded-xl px-4 py-3 text-sm">
              Ask HyIn anything and try it out for yourself
            </div>

            <div className="flex justify-between w-full text-sm mt-2">
              <div className="flex items-center gap-2">
                <Check size={16} />
                Natural voice
              </div>

              <div className="flex items-center gap-2">
                <Check size={16} />
                Instant response
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="text-white text-2xl">↓</div>

        {/* Feature Boxes */}
        <div className="flex flex-col gap-4 w-[280px]">

          <div className="flex items-center gap-3 rounded-xl px-4 py-3
            bg-gradient-to-r from-primary/70 to-secondary/70 text-white shadow-lg">
            <Calendar size={20} />
            <div>
              <p className="font-medium">Book Appointments</p>
              <p className="text-xs opacity-80">Syncs to Square</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl px-4 py-3
            bg-gradient-to-r from-primary/70 to-secondary/70 text-white shadow-lg">
            <MessageSquare size={20} />
            <div>
              <p className="font-medium">Send Confirmations</p>
              <p className="text-xs opacity-80">Auto text reminders</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl px-4 py-3
            bg-gradient-to-r from-primary/70 to-secondary/70 text-white shadow-lg">
            <Clock size={20} />
            <div>
              <p className="font-medium">Works 24/7</p>
              <p className="text-xs opacity-80">Never misses a call</p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT LARGE CARD */}
      <div className="w-[340px] rounded-3xl p-6 text-white 
        bg-gradient-to-br from-primary/80 via-blue-400/60 to-secondary/80 
        backdrop-blur-xl shadow-2xl">

        <h3 className="text-xl font-semibold text-center mb-6">
          Live Call Activity
        </h3>

        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center">
            <Phone className="text-secondary w-8 h-8" />
          </div>

          <p className="text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Processing call...
          </p>

          <p className="text-xs opacity-80">
            10 calls handled today
          </p>
        </div>

        {/* Recent Activity Box */}
        <div className="bg-white/20 rounded-2xl p-4 mb-6">
          <h4 className="font-semibold mb-4">Recent activity</h4>

          <div className="flex flex-col gap-3 text-sm">

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Check size={16} />
                Noura H.
              </div>
              <span className="opacity-80">Booked</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Check size={16} />
                Omar H.
              </div>
              <span className="opacity-80">Booked</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Check size={16} />
                Mohammed K.
              </div>
              <span className="opacity-80">Answered</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Check size={16} />
                Huda R.
              </div>
              <span className="opacity-80">Answered</span>
            </div>

          </div>
        </div>

        {/* Bottom Status */}
        <div className="flex justify-between text-sm opacity-90">
          <div className="flex items-center gap-2">
            <Check size={16} />
            Always on
          </div>

          <div className="flex items-center gap-2">
            <Check size={16} />
            No missed calls
          </div>
        </div>

      </div>

    </div>
  );
}