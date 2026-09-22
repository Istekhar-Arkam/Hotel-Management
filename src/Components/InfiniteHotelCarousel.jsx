import {
  ArrowUpRight,
  BedDouble,
  Building2,
  ConciergeBell,
  Hotel,
  Sparkles,
  Utensils,
} from "lucide-react";

const hotelServices = [
  {
    title: "Luxury Rooms",
    description: "Elegant rooms designed for comfort and unforgettable stays.",
    icon: BedDouble,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
    number: "01",
  },
  {
    title: "Hotel Operations",
    description: "Smart systems for smooth and efficient hotel operations.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=85",
    number: "02",
  },
  {
    title: "Guest Services",
    description: "Personalized hospitality that puts every guest first.",
    icon: ConciergeBell,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
    number: "03",
  },
  {
    title: "Fine Dining",
    description: "Exceptional dining experiences crafted around every guest.",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
    number: "04",
  },
  {
    title: "Premium Hospitality",
    description: "Creating memorable experiences through thoughtful service.",
    icon: Hotel,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
    number: "05",
  },
  {
    title: "Housekeeping",
    description: "Professional care that keeps every space immaculate.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
    number: "06",
  },
];

const InfiniteHotelCarousel = () => {
  // Duplicate cards to create seamless infinite scrolling
  const infiniteCards = [...hotelServices, ...hotelServices];

  return (
    <section className="relative overflow-hidden bg-[#09091a] py-20 sm:py-24 lg:py-20">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1600px]">

        {/* ================= HEADER ================= */}
        <div className="px-5 mb-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-amber-300" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-amber-300">
                Hotel Management
              </span>
            </div>

            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

              <div>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Everything you need for
                  <span className="block text-transparent bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text">
                    exceptional hospitality.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-white/50 sm:text-base">
                From guest experiences to daily operations, our hotel
                management ecosystem helps properties deliver effortless
                hospitality.
              </p>

            </div>
          </div>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div className="relative">

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#09091a] to-transparent sm:w-32 lg:w-48" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#09091a] to-transparent sm:w-32 lg:w-48" />

          {/* Track */}
          <div className="flex gap-5 px-5 hotel-carousel-track w-max sm:gap-6 sm:px-8 lg:gap-7">

            {infiniteCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <article
                  key={`${card.number}-${index}`}
                  className="
                    group
                    relative
                    h-[390px]
                    w-[290px]
                    shrink-0
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/5
                    shadow-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-amber-300/40
                    hover:shadow-[0_25px_80px_rgba(0,0,0,0.5)]
                    sm:h-[430px]
                    sm:w-[330px]
                    lg:h-[460px]
                    lg:w-[350px]
                  "
                >

                  {/* Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

                  {/* Hover glow */}
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-amber-500/20 via-transparent to-transparent group-hover:opacity-100" />

                  {/* Number */}
                  <div className="absolute right-5 top-5">
                    <span className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white border rounded-full border-white/20 bg-black/20 backdrop-blur-xl">
                      {card.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">

                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 mb-5 transition-all duration-500 border rounded-2xl border-white/20 bg-white/10 text-amber-300 backdrop-blur-xl group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-2xl font-semibold text-white">
                      {card.title}
                    </h3>

                    <p className="mt-2 max-w-[270px] text-sm leading-6 text-white/60">
                      {card.description}
                    </p>

                    {/* Explore */}
                    <div className="flex items-center gap-2 mt-5 text-sm font-medium text-white">
                      Explore
                      <span className="flex items-center justify-center text-black transition-transform duration-300 bg-white rounded-full h-7 w-7 group-hover:translate-x-1">
                        <ArrowUpRight size={15} />
                      </span>
                    </div>

                  </div>
                </article>
              );
            })}

          </div>
        </div>

        {/* ================= BOTTOM INFO ================= */}
        <div className="flex flex-col justify-between gap-5 px-5 mx-auto mt-12 max-w-7xl sm:px-8 md:flex-row md:items-center lg:px-12">

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-400" />

            <span className="text-xs uppercase tracking-[0.2em] text-white/40">
              Seamless hospitality management
            </span>
          </div>

          <div className="text-sm text-white/30">
            Scroll to explore →
          </div>

        </div>

      </div>

      {/* ================= CSS ================= */}
      <style>{`
        .hotel-carousel-track {
          animation: hotelInfiniteScroll 38s linear infinite;
        }

        .hotel-carousel-track:hover {
          animation-play-state: paused;
        }

        @keyframes hotelInfiniteScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 12px));
          }
        }

        @media (max-width: 640px) {
          .hotel-carousel-track {
            animation-duration: 30s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hotel-carousel-track {
            animation: none;
          }
        }
      `}</style>

    </section>
  );
};

export default InfiniteHotelCarousel;

