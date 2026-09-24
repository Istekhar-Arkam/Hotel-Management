import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function HeroVideoOne() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/videos/vedioone.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-5xl font-bold md:text-7xl">Experience Luxury</h1>

          <p className="mt-5 text-lg md:text-xl">
            Where every stay becomes an unforgettable experience.
          </p>
          <div className="pt-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroVideoOne;
