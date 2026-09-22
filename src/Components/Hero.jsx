import { Check, Sparkles } from "lucide-react";

const hotelImage =
  "https://images.unsplash.com/photo-1773393776501-11b5543ceba0?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWd0dGVyfHx8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=85&w=2200";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#09091a] text-white border-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(117,91,255,.22),transparent_28%),radial-gradient(circle_at_25%_70%,rgba(70,82,190,.12),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1500px] items-center gap-10 px-5 pb-14 lg:grid-cols-[.86fr_1.14fr] lg:px-10">
        <div className="relative z-20 py-12 lg:py-20">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/[0.07] px-4 py-2 text-[10px] font-semibold tracking-[.18em] text-violet-200 shadow-[0_0_35px_rgba(139,92,246,.14)] sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300 shadow-[0_0_15px_#a78bfa]" />
            THE OPERATING SYSTEM FOR MODERN HOTELS
          </div>

          <h1 className="max-w-[760px] text-5xl font-black leading-[.94] tracking-[-.06em] sm:text-6xl lg:text-[72px] xl:text-[82px]">
            Your whole hotel, running on{" "}
            <span className="bg-gradient-to-r from-[#a99cff] via-[#c084fc] to-[#727cff] bg-clip-text text-transparent">
              one live screen.
            </span>
          </h1>

          <p className="max-w-xl text-base leading-7 mt-7 text-white/60 sm:text-lg">
            Front desk, housekeeping and every hotel operation connected
            together in one powerful workspace. Stop hopping between tools and
            start running your hotel from one screen.
          </p>

          {/* <div className="flex flex-col gap-3 mt-8 sm:flex-row">
            <Link
              href="#"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#7d83f6] to-[#9b5de5] px-6 py-4 font-semibold shadow-[0_16px_55px_rgba(126,92,246,.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_75px_rgba(126,92,246,.52)]"
            >
              Book link free demo
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[.035] px-6 py-4 font-semibold text-white/80 shadow-[0_12px_45px_rgba(0,0,0,.2)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-300/30 hover:bg-violet-400/[.08]"
            >
              <span className="grid w-8 h-8 rounded-full place-items-center bg-white/10 group-hover:bg-violet-400/20">
                <Play size={12} fill="currentColor" />
              </span>
              See how it works
            </Link>
          </div> */}

          <div className="flex flex-wrap text-xs mt-7 gap-x-5 gap-y-3 text-white/45">
            {[
              "No hardware",
              "Live in days",
              "Works on any device",
              "Built for independent hotels",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check size={13} className="text-violet-300" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[560px] lg:min-h-[720px]">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px]" />

          <div className="absolute left-0 top-16 z-20 hidden w-52 animate-[floatCard_5s_ease-in-out_infinite] rounded-2xl border border-violet-300/20 bg-[#15152b]/80 p-4 shadow-[0_20px_80px_rgba(100,75,220,.22)] backdrop-blur-xl md:block">
            <p className="text-[10px] font-semibold tracking-[.18em] text-violet-200/70">
              ROOM STATUS
            </p>
            <div className="flex items-end justify-between mt-3">
              <span className="text-3xl font-bold">304</span>
              <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">
                Ready
              </span>
            </div>
            <div className="mt-4 h-1.5 rounded-full bg-white/10">
              <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-300" />
            </div>
            <p className="mt-2 text-[10px] text-white/40">
              Housekeeping complete
            </p>
          </div>

          <div className="absolute right-0 top-28 z-20 hidden w-48 animate-[floatCard_6s_ease-in-out_infinite] rounded-2xl border border-violet-300/20 bg-[#15152b]/80 p-4 shadow-[0_20px_80px_rgba(100,75,220,.22)] backdrop-blur-xl sm:block">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-violet-500/15">
                <Sparkles size={15} className="text-violet-300" />
              </div>
              <span className="text-[10px] tracking-widest text-white/40">
                LIVE STATUS
              </span>
            </div>
            <div className="mt-4 text-3xl font-bold">87%</div>
            <p className="mt-1 text-xs text-emerald-300">
              +12% occupancy today
            </p>
          </div>

          <div className="absolute inset-x-0 top-8 mx-auto h-[570px] max-w-[700px] overflow-hidden rounded-[38px] border border-violet-300/20 bg-[#121225] shadow-[0_30px_120px_rgba(0,0,0,.55),0_0_80px_rgba(108,82,230,.18)] sm:h-[640px]">
            <img
              src={hotelImage}
              alt="Luxury hotel exterior at night"
              className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080816] via-transparent to-[#0a0a19]/20" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(124,92,246,.22),transparent_40%,rgba(0,0,0,.15))]" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#111126]/75 p-4 shadow-[0_18px_70px_rgba(0,0,0,.35)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] tracking-[.2em] text-violet-200/60">
                    YOUR HOTEL
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    Everything in one place
                  </p>
                </div>
                <div className="px-3 py-2 text-xs font-semibold rounded-xl bg-emerald-400/10 text-emerald-300">
                  LIVE
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-2 left-1/2 z-30 hidden w-64 -translate-x-1/2 rounded-2xl border border-violet-300/20 bg-[#111126]/85 p-4 shadow-[0_20px_80px_rgba(70,50,170,.28)] backdrop-blur-xl sm:block">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] tracking-[.18em] text-white/40">
                  LIVE OCCUPANCY
                </p>
                <p className="mt-1 text-lg font-bold">52 / 60 rooms</p>
              </div>
              <span className="text-sm font-bold text-violet-200">87%</span>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-white/10">
              <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
