

import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0b0b1a] px-5 pb-8 pt-16 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="grid rounded-full h-9 w-9 place-items-center bg-gradient-to-br from-violet-500 to-indigo-400">
              T
            </span>
            <p className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text">
              Taj Hotel
            </p>
          </div>
          <p className="max-w-sm mt-5 text-sm leading-6 text-white/45">
            One screen for your whole hotel — reservations, guest orders,
            housekeeping, billing and analytics.
          </p>
          <Link className="inline-flex px-5 py-3 mt-6 text-sm font-semibold cursor-pointer rounded-xl bg-gradient-to-r from-indigo-400 to-violet-500">
            Book link demo
          </Link>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-white/35">
            PRODUCT
          </p>
          <div className="mt-5 space-y-4 text-sm cursor-pointer text-white/55">
            <Link className="block hover:text-white">For every role</Link>
            <Link className="block hover:text-white">Features</Link>
            <Link className="block hover:text-white">How it works</Link>
            <Link className="block hover:text-white">Pricing</Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-white/35">
            MORE
          </p>
          <div className="mt-5 space-y-4 text-sm cursor-pointer text-white/55">
            <Link className="block hover:text-white">FAQ</Link>
            <Link className="block hover:text-white">Login</Link>
            <Link className="block hover:text-white">Privacy</Link>
            <Link className="block hover:text-white">Terms</Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-white/35">
            GET IN TOUCH
          </p>
          <div className="mt-5 space-y-4 text-sm text-white/55">
            <Link
              href="https://wa.me/"
              className="flex items-center gap-2 font-semibold cursor-pointer text-emerald-300"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </Link>
            <p>tajhotel.com</p>
            <p>Demo in Hindi, Gujarati or English</p>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/[0.06] mt-10">
        <div className="flex flex-col items-center justify-between gap-4 px-5 py-3 mx-auto text-center max-w-7xl sm:px-8 md:flex-row md:text-left">
          <div>
            <p className="mt-1 text-xs text-gray-600">
              Building digital experiences.
            </p>
          </div>

          <p className="text-xs text-gray-600">
            © 2026 WorkshopEdge. All rights reserved.
          </p>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
