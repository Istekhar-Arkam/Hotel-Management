import { useState } from "react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide complete digital product solutions including web development, UI/UX design, SaaS development, API integration, backend development, MVP development, and product optimization.",
  },
  {
    question: "How does your development process work?",
    answer:
      "Our process usually starts with understanding your idea, followed by planning, design, development, testing, and continuous improvement. We keep communication transparent throughout every stage.",
  },
  {
    question: "How long does it take to build link website?",
    answer:
      "The timeline depends on the project's complexity. A simple website can take link few days, while link larger SaaS or custom web application can take several weeks or more.",
  },
  {
    question: "Can you build link custom SaaS application?",
    answer:
      "Yes. We can design and develop custom SaaS products with authentication, dashboards, subscriptions, APIs, databases, admin panels, and scalable backend architecture.",
  },
  {
    question: "Do you provide UI/UX design?",
    answer:
      "Yes. We create modern interfaces with link strong focus on usability, responsive layouts, visual hierarchy, accessibility, and smooth user experiences.",
  },
  {
    question: "Can you work with an existing project?",
    answer:
      "Absolutely. We can improve existing applications, fix bugs, redesign interfaces, optimize performance, refactor code, and add new features.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Depending on the project, we work with technologies such as React, Next.js, Node.js, Express, databases, REST APIs, Tailwind CSS, and modern JavaScript tooling.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We can provide ongoing maintenance, performance improvements, bug fixes, feature development, and technical support after the initial product launch.",
  },
];

const categories = ["All", "Development", "Design", "Product", "Support"];

const getCategory = (index) => {
  if (index === 0 || index === 2 || index === 3 || index === 6)
    return "Development";

  if (index === 4) return "Design";

  if (index === 1) return "Product";

  return "Support";
};

export default function FAQ() {
  const [active, setActive] = useState(null);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter((faq, index) => {
    const matchesCategory =
      category === "All" || getCategory(index) === category;

    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09091a] text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px] animate-pulse" />

        <div
          className="absolute right-[-150px] top-[30%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div
          className="absolute bottom-[-200px] left-[35%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[150px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Small stars */}
        <div className="absolute left-[10%] top-[18%] h-1 w-1 rounded-full bg-white shadow-[0_0_15px_white]" />
        <div className="absolute right-[15%] top-[25%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_20px_cyan]" />
        <div className="absolute left-[22%] bottom-[20%] h-1 w-1 rounded-full bg-violet-300 shadow-[0_0_15px_violet]" />
      </div>

      <section className="relative px-5 pt-20 pb-16 mx-auto max-w-7xl sm:px-8 lg:px-12 lg:pb-24 lg:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          {/* Left */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-300 shadow-[0_0_40px_rgba(139,92,246,.08)] backdrop-blur-xl">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full animate-ping bg-cyan-400 opacity-70" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-400" />
              </span>
              Everything you need to know
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Questions?
              <br />
              <span className="text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text">
                We've got answers.
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-7 text-gray-400 mt-7 sm:text-lg">
              Find answers to the most common questions about our services,
              development process, design, products, and support.
            </p>

            {/* Search */}
            <div className="group mt-9 flex max-w-xl items-center rounded-2xl border border-white/10 bg-white/[0.045] p-2 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl transition duration-500 hover:border-violet-400/30">
              <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/10">
                <svg
                  className="w-5 h-5 text-violet-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                  />
                </svg>
              </div>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your question..."
                className="w-full px-4 text-sm text-white bg-transparent outline-none placeholder:text-gray-600"
              />

              <div className="hidden rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-500 sm:block">
                Search
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div>
                <p className="text-2xl font-bold text-white">08+</p>
                <p className="mt-1 text-xs text-gray-500">Common questions</p>
              </div>

              <div className="w-px h-10 bg-white/10" />

              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="mt-1 text-xs text-gray-500">Support mindset</p>
              </div>

              <div className="w-px h-10 bg-white/10" />

              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="mt-1 text-xs text-gray-500">Transparent</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex h-[420px] w-full max-w-[520px] items-center justify-center">
            {/* Outer glow */}
            <div className="absolute h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />

            {/* Orbit */}
            <div className="absolute h-[330px] w-[330px] rounded-full border border-violet-400/10 [transform:rotateX(65deg)]" />

            <div className="absolute h-[380px] w-[380px] rounded-full border border-cyan-400/10 [transform:rotateY(65deg)]" />

            {/* Floating orbit dots */}
            <div className="absolute left-[12%] top-[30%] h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_25px_8px_rgba(139,92,246,.35)] animate-bounce" />

            <div
              className="absolute right-[12%] top-[20%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_6px_rgba(34,211,238,.3)] animate-bounce"
              style={{ animationDelay: "500ms" }}
            />

            {/* Main glass sphere */}
            <div className="relative flex h-64 w-64 items-center justify-center rounded-[42%] border border-white/15 bg-gradient-to-br from-white/[0.12] via-violet-500/[0.08] to-cyan-400/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,.2),0_40px_100px_rgba(0,0,0,.5)] backdrop-blur-2xl [transform:rotateX(12deg)_rotateY(-15deg)] transition duration-700 hover:[transform:rotateX(0deg)_rotateY(0deg)_scale(1.05)]">
              {/* Inner orb */}
              <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-cyan-400/20 blur-2xl" />

              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-[#09091a]/70 shadow-[inset_0_0_50px_rgba(139,92,246,.2),0_0_60px_rgba(139,92,246,.15)] backdrop-blur-xl">
                <span className="font-black text-transparent text-7xl bg-gradient-to-br from-white via-violet-200 to-cyan-300 bg-clip-text">
                  ?
                </span>
              </div>

              {/* Shine */}
              <div className="absolute left-10 top-8 h-12 w-24 rotate-[-35deg] rounded-full bg-white/10 blur-xl" />
            </div>

            {/* Floating glass cards */}
            <div className="absolute left-0 top-[25%] rotate-[-8deg] rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-2xl backdrop-blur-xl transition duration-500 hover:rotate-0 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-violet-500/20 text-violet-300">
                  ✦
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Simple</p>
                  <p className="text-[10px] text-gray-500">Clear answers</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[20%] right-0 rotate-[7deg] rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-2xl backdrop-blur-xl transition duration-500 hover:rotate-0 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-cyan-500/20 text-cyan-300">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Helpful</p>
                  <p className="text-[10px] text-gray-500">Quick solutions</p>
                </div>
              </div>
            </div>

            {/* Bottom tiny badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] tracking-widest text-gray-500 backdrop-blur-xl">
              KNOWLEDGE • CLARITY • SUPPORT
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-5xl px-5 mx-auto pb-28 sm:px-8">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            FAQ
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you
            <span className="ml-2 text-transparent bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text">
              need to know.
            </span>
          </h2>

          <p className="max-w-xl mx-auto mt-4 text-sm leading-6 text-gray-500 sm:text-base">
            Browse our frequently asked questions or search for something
            specific.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-5 py-2.5 text-xs font-medium transition-all duration-300 ${
                category === item
                  ? "border-violet-400/40 bg-gradient-to-r from-violet-500/20 to-cyan-400/10 text-white shadow-[0_0_30px_rgba(139,92,246,.12)]"
                  : "border-white/10 bg-white/[0.025] text-gray-500 hover:border-white/20 hover:bg-white/[0.05] hover:text-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={faq.question}
                  className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                    isOpen
                      ? "border-violet-400/30 bg-white/[0.065] shadow-[0_20px_80px_rgba(124,58,237,.12)]"
                      : "border-white/[0.08] bg-white/[0.025] hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.045]"
                  }`}
                >
                  {/* Gradient border glow */}
                  {isOpen && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/[0.06] via-transparent to-cyan-400/[0.05]" />
                  )}

                  <button
                    onClick={() => setActive(isOpen ? null : index)}
                    className="relative flex items-center justify-between w-full gap-5 p-5 text-left sm:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-xs font-bold transition-all duration-500 ${
                          isOpen
                            ? "border-violet-400/30 bg-violet-500/15 text-violet-300"
                            : "border-white/10 bg-white/[0.03] text-gray-600 group-hover:text-gray-400"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="pt-1 text-sm font-semibold leading-6 text-gray-200 sm:text-base">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen
                          ? "rotate-45 border-violet-400/30 bg-violet-500/15 text-violet-300"
                          : "border-white/10 bg-white/[0.03] text-gray-500"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/[0.06] px-5 pb-7 pt-5 sm:px-7 sm:pl-[4.65rem]">
                        <p className="max-w-3xl text-sm leading-7 text-gray-500">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
              <div className="flex items-center justify-center mx-auto mb-4 text-2xl h-14 w-14 rounded-2xl bg-violet-500/10">
                ?
              </div>

              <h3 className="text-lg font-semibold text-white">
                No questions found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another search term or select link different category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="relative max-w-6xl px-5 pb-24 mx-auto sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-[0_30px_100px_rgba(0,0,0,.4)] backdrop-blur-xl sm:p-12 lg:p-16">
          {/* CTA gradients */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-violet-600/20 blur-[90px]" />

          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-[90px]" />

          {/* Decorative lines */}
          <div className="absolute hidden w-24 h-24 border right-10 top-10 rotate-12 rounded-3xl border-violet-400/10 lg:block" />

          <div className="relative text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 text-2xl shadow-[0_0_50px_rgba(139,92,246,.12)]">
              ✦
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Still have link question?
            </h2>

            <p className="max-w-lg mx-auto mt-4 text-sm leading-6 text-gray-500 sm:text-base">
              Can't find what you're looking for? Let's talk about your idea and
              figure out the right solution together.
            </p>

            <button className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_15px_50px_rgba(124,58,237,.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_70px_rgba(124,58,237,.35)]">
              Let's talk
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6 6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}




