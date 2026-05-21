export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full mb-6">
          AI-Powered Form Analysis
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white max-w-3xl leading-tight mb-6">
          Perfect Your Exercise Form with Your{" "}
          <span className="text-[#58a6ff]">Phone Camera</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-xl mb-10">
          Point your camera, start moving. FitForm gives you real-time pose feedback, flags bad form before injury happens, and tracks your progress over time.
        </p>
        <a
          href={checkoutUrl}
          className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg"
        >
          Start for $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No equipment needed.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full">
          {[
            { icon: "📷", title: "Live Camera Analysis", desc: "MediaPipe pose detection runs directly in your browser — no app install." },
            { icon: "⚡", title: "Instant Corrections", desc: "Get real-time audio and visual cues when your form breaks down." },
            { icon: "📈", title: "Track Progress", desc: "Your form score history shows measurable improvement over weeks." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-4 py-16" id="pricing">
        <h2 className="text-3xl font-bold text-white mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to train smarter</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited real-time form checks",
              "All exercises: squat, deadlift, push-up & more",
              "Progress dashboard & form score history",
              "Audio + visual correction cues",
              "Works on any modern smartphone"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-16" id="faq">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Do I need any special equipment?",
              a: "No. FitForm works entirely through your phone or laptop camera. No wearables, sensors, or app downloads required."
            },
            {
              q: "Which exercises are supported?",
              a: "We support squats, deadlifts, push-ups, lunges, and overhead press at launch, with more exercises added monthly."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] py-8 border-t border-[#21262d]">
        © {new Date().getFullYear()} FitForm. All rights reserved.
      </footer>
    </main>
  );
}
