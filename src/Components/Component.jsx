const features = [
  {
    icon: "📊",
    number: "01",
    title: "Powerful Reports & Analytics",
    description:
      "Monitor bookings, revenue, occupancy, and overall hotel performance in real time.",
    stats: ["Bookings", "Revenue", "Occupancy"],
  },
  {
    icon: "🧹",
    number: "02",
    title: "Housekeeping Management",
    description:
      "Track cleaning tasks, room status, and housekeeping activities efficiently.",
    stats: ["Room Status", "Cleaning", "Tasks"],
  },
  {
    icon: "👨‍💼",
    number: "03",
    title: "Staff Management",
    description:
      "Organize staff roles, responsibilities, schedules, and daily hotel operations.",
    stats: ["Employees", "Schedules", "Roles"],
  },
  {
    icon: "🔔",
    number: "04",
    title: "Smart Notifications",
    description:
      "Stay updated with booking confirmations, cancellations, payments, and important alerts.",
    stats: ["Bookings", "Payments", "Alerts"],
  },
];

export default function Component() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09091a] px-4 py-20 text-white sm:px-6 lg:px-8">

      {/* ================= Background Animation ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Glow 1 */}
        <div
          className="
            absolute -left-32 top-20
            h-80 w-80 rounded-full
            bg-cyan-500/10
            blur-[120px]
            animate-pulse
          "
        />

        {/* Glow 2 */}
        <div
          className="
            absolute -right-32 bottom-20
            h-96 w-96 rounded-full
            bg-purple-600/10
            blur-[140px]
            animate-pulse
          "
        />

        {/* Moving Glow */}
        <div
          className="
            absolute left-1/2 top-1/2
            h-72 w-72
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/5
            blur-[100px]
            animate-pulse
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* ================= Heading ================= */}
      <div className="relative z-10 max-w-3xl mx-auto mb-16 text-center">

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
          <span className="w-2 h-2 rounded-full animate-pulse bg-cyan-400" />
          Powerful Features
        </div>

        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Everything Under{" "}
          <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text">
            One Roof
          </span>
        </h2>

        <p className="max-w-2xl mx-auto mt-5 text-sm leading-7 text-gray-400 sm:text-base">
          Manage your hotel's daily operations with intelligent tools,
          real-time insights, and powerful automation.
        </p>
      </div>

      {/* ================= Cards ================= */}
      <div className="relative z-10 grid mx-auto max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-4">

        {features.map((feature) => (
          <div
            key={feature.number}
            className="group"
            style={{ perspective: "1200px" }}
          >

            {/* Outer Animated Glow */}
            <div
              className="absolute w-full h-full transition-all duration-700 opacity-0 -z-10 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-xl group-hover:opacity-100"
            />

            {/* ================= Card ================= */}
            <div
              className="
                relative h-full
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.045]
                p-6
                backdrop-blur-xl
                shadow-2xl

                transition-all duration-500
                ease-out
                transform-gpu

                hover:-translate-y-4
                hover:rotate-x-2
                hover:rotate-y-3

                hover:border-cyan-400/30
                hover:shadow-cyan-500/10

                sm:p-7
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            >

              {/* Card Number */}
              <span
                className="
                  absolute right-5 top-2
                  text-7xl
                  font-black
                  text-white/[0.035]
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:translate-x-1
                "
                style={{
                  transform: "translateZ(20px)",
                }}
              >
                {feature.number}
              </span>

              {/* Top Glow */}
              <div
                className="absolute w-40 h-40 transition-all duration-700 rounded-full -right-16 -top-16 bg-cyan-400/10 blur-3xl group-hover:scale-150 group-hover:bg-cyan-400/20"
              />

              {/* ================= Icon ================= */}
              <div
                className="relative flex items-center justify-center w-16 h-16 text-3xl transition-all duration-500 border shadow-lg rounded-2xl border-cyan-400/20 bg-cyan-400/10 shadow-cyan-500/10 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110"
                style={{
                  transform: "translateZ(50px)",
                }}
              >
                {feature.icon}

                <div
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 -z-10 rounded-2xl bg-cyan-400/30 blur-xl group-hover:opacity-100"
                />
              </div>

              {/* ================= Content ================= */}
              <div
                className="relative mt-7"
                style={{
                  transform: "translateZ(35px)",
                }}
              >

                <h3 className="min-h-[58px] text-xl font-bold leading-tight">
                  {feature.title}
                </h3>

                <p className="mt-4 min-h-[84px] text-sm leading-6 text-gray-400">
                  {feature.description}
                </p>

                {/* ================= Mini Stats ================= */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {feature.stats.map((stat) => (
                    <span
                      key={stat}
                      className="
                        rounded-full
                        border border-white/10
                        bg-white/5
                        px-3
                        py-1.5
                        text-[11px]
                        text-gray-400
                        transition-all duration-300
                        group-hover:border-cyan-400/20
                        group-hover:text-cyan-400
                      "
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px mt-7 bg-gradient-to-r from-cyan-400/40 via-blue-500/20 to-transparent" />

                {/* CTA */}
                <button
                  className="flex items-center gap-2 mt-5 text-sm font-semibold transition-all duration-300 text-cyan-400 hover:gap-4"
                >
                  Learn More
                  <span>→</span>
                </button>
              </div>

              {/* ================= Moving Shine ================= */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -left-40
                  top-0
                  h-full
                  w-28
                  rotate-12
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent

                  transition-all
                  duration-1000

                  group-hover:left-[130%]
                "
              />

              {/* Bottom Glow */}
              <div
                className="absolute bottom-0 w-2/3 h-20 transition-all duration-500 -translate-x-1/2 rounded-full left-1/2 bg-cyan-400/5 blur-3xl group-hover:bg-cyan-400/15"
              />
            </div>
          </div>
        ))}
      </div>

      {/* ================= Bottom Quote ================= */}
      <div className="relative z-10 max-w-2xl mx-auto mt-16 text-center">

        <p className="text-sm text-gray-500 sm:text-base">
          From{" "}
          <span className="text-gray-300">daily operations</span>{" "}
          to{" "}
          <span className="text-cyan-400">
            business insights
          </span>
          — manage everything from one place.
        </p>

      </div>
    </section>
  );
}

