const plans = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for small hotels getting started.",
    features: [
      "Room Management",
      "Guest Management",
      "Booking Management",
      "Basic Reports",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    price: "$59",
    description: "Powerful tools for growing hotels.",
    popular: true,
    features: [
      "Everything in Basic",
      "Advanced Booking",
      "Staff Management",
      "Payment Tracking",
      "Analytics & Reports",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "Complete management for large hotels.",
    features: [
      "Everything in Professional",
      "Multi-Property Management",
      "Advanced Analytics",
      "Custom Integrations",
      "Automated Operations",
      "24/7 Premium Support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09091a] px-4 py-20 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Heading */}
      <div className="relative z-10 max-w-2xl mx-auto text-center mb-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Pricing Plans
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Choose Your{" "}
          <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
            Perfect Plan
          </span>
        </h2>

        <p className="mt-5 text-gray-400">
          Powerful hotel management tools designed to simplify your operations
          and help your business grow.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`group relative ${
              plan.popular ? "md:-translate-y-5" : ""
            }`}
            style={{
              perspective: "1200px",
            }}
          >
            {/* Animated Border */}
            <div
              className={`absolute -inset-[1px] rounded-3xl opacity-70 blur-[1px] transition duration-500 group-hover:opacity-100 ${
                plan.popular
                  ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                  : "bg-gradient-to-r from-white/10 via-cyan-500/30 to-white/10"
              }`}
            />

            {/* Card */}
            <div
              className="
                relative h-full rounded-3xl border border-white/10
                bg-white/[0.06] p-7 backdrop-blur-xl
                shadow-2xl
                transition-all duration-500 ease-out
                transform-gpu
                group-hover:-translate-y-3
                group-hover:rotate-x-3
                group-hover:rotate-y-3
                group-hover:shadow-cyan-500/20
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-1.5 text-xs font-bold text-black shadow-lg shadow-cyan-500/30">
                  MOST POPULAR
                </div>
              )}

              {/* Floating Number */}
              <div
                className="absolute right-5 top-5 text-6xl font-black text-white/[0.04]"
                style={{
                  transform: "translateZ(30px)",
                }}
              >
                0{index + 1}
              </div>

              <div
                className="relative"
                style={{
                  transform: "translateZ(45px)",
                }}
              >
                <h3 className="text-2xl font-bold">{plan.name}</h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-400">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-end gap-2 my-7">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="mb-2 text-sm text-gray-500">/ month</span>
                </div>

                {/* Button */}
                <button
                  className={`w-full rounded-xl py-3.5 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/30"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:scale-[1.03]"
                  }`}
                >
                  Get Started
                </button>

                {/* Features */}
                <div className="mt-8">
                  <p className="mb-4 text-sm font-semibold text-gray-300">
                    What's included:
                  </p>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300"
                      >
                        <span className="flex items-center justify-center w-5 h-5 text-xs rounded-full bg-cyan-400/10 text-cyan-400">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 w-2/3 h-24 transition duration-500 -translate-x-1/2 rounded-full left-1/2 bg-cyan-400/10 blur-3xl group-hover:bg-cyan-400/20" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
