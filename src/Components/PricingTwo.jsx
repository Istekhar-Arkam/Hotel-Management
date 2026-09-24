
function PricingTwo() {
  const features = [
  {
    icon: "📅",
    number: "01",
    title: "Easy Booking Management",
    description:
      "Manage reservations, check-ins, check-outs, and cancellations effortlessly.",
    points: [
      "Real-time reservations",
      "Quick check-in & check-out",
      "Easy cancellation management",
    ],
  },
  {
    icon: "👥",
    number: "02",
    title: "Guest Management",
    description:
      "Keep guest information organized and provide a smoother experience.",
    points: [
      "Centralized guest profiles",
      "Guest history & preferences",
      "Fast and simple guest access",
    ],
  },
];
  return (
    <>
    <section className="relative overflow-hidden bg-[#09091a] px-4 py-20 sm:px-6 lg:px-8">

      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-20 h-72 w-72 animate-pulse rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute right-[5%] bottom-10 h-80 w-80 animate-pulse rounded-full bg-blue-600/10 blur-[120px]" />

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 max-w-3xl mx-auto mb-16 text-center">
        <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Hotel Management
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Everything You Need to
          <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text">
            Manage Your Hotel
          </span>
        </h2>

        <p className="max-w-2xl mx-auto mt-5 text-sm leading-7 text-gray-400 sm:text-base">
          Simplify your daily hotel operations with powerful booking and
          guest-management tools designed for a seamless experience.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid max-w-6xl gap-8 mx-auto md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.number}
            className="group"
            style={{ perspective: "1200px" }}
          >
            {/* Animated Glow Border */}
            <div className="absolute hidden -z-10" />

            <div
              className="
                relative overflow-hidden rounded-3xl
                border border-white/10
                bg-white/[0.04]
                p-6 backdrop-blur-xl
                shadow-2xl
                transition-all duration-500 ease-out
                transform-gpu
                hover:-translate-y-4
                hover:rotate-x-2
                hover:rotate-y-2
                hover:border-cyan-400/30
                hover:shadow-cyan-500/10
                sm:p-8
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card Glow */}
              <div
                className="absolute w-48 h-48 transition-all duration-700 rounded-full -right-20 -top-20 bg-cyan-400/10 blur-3xl group-hover:scale-150 group-hover:bg-cyan-400/20"
              />

              {/* Number */}
              <span
                className="
                  absolute right-6 top-4
                  text-7xl font-black
                  text-white/[0.035]
                  transition-transform duration-500
                  group-hover:translate-x-2
                  group-hover:scale-110
                "
                style={{
                  transform: "translateZ(25px)",
                }}
              >
                {feature.number}
              </span>

              {/* Icon */}
              <div
                className="relative flex items-center justify-center w-16 h-16 text-3xl transition-all duration-500 border shadow-lg rounded-2xl border-cyan-400/20 bg-cyan-400/10 shadow-cyan-500/10 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110"
                style={{
                  transform: "translateZ(50px)",
                }}
              >
                {feature.icon}

                {/* Icon Glow */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 -z-10 rounded-2xl bg-cyan-400/20 blur-xl group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div
                className="relative mt-7"
                style={{
                  transform: "translateZ(35px)",
                }}
              >
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {feature.title}
                </h3>

                <p className="max-w-lg mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                  {feature.description}
                </p>

                {/* Feature Points */}
                <div className="space-y-3 mt-7">
                  {feature.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm text-gray-300 transition-all duration-300 hover:translate-x-2 hover:text-cyan-400"
                    >
                      <span
                        className="flex items-center justify-center w-6 h-6 text-xs rounded-full shrink-0 bg-cyan-400/10 text-cyan-400"
                      >
                        ✓
                      </span>

                      {point}
                    </div>
                  ))}
                </div>

                {/* Bottom Line */}
                <div className="w-full h-px mt-8 bg-gradient-to-r from-cyan-400/40 via-blue-500/20 to-transparent" />

                <button
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold transition-all duration-300 text-cyan-400 hover:gap-4"
                >
                  Explore Feature
                  <span>→</span>
                </button>
              </div>

              {/* Moving Shine */}
              <div
                className="
                  pointer-events-none absolute
                  -left-40 top-0
                  h-full w-32
                  rotate-12
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                  transition-all duration-1000
                  group-hover:left-[120%]
                "
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="relative z-10 max-w-xl mx-auto text-center mt-14">
        <p className="text-sm text-gray-500">
          Built to make hotel operations{" "}
          <span className="font-semibold text-cyan-400">
            simpler, faster, and smarter.
          </span>
        </p>
      </div>
    </section>
    </>
  )
}

export default PricingTwo

