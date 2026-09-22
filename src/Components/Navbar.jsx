import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Blogs", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a18]/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-400 text-xl shadow-[0_0_30px_rgba(124,92,246,.35)]">
            T
          </span>
          <p className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text">
            Taj Hotel
          </p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm transition cursor-pointer text-white/70 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="items-center hidden gap-4 sm:flex">
          <Link to="/faq" className="text-sm text-white/65 hover:text-white">
            Login
          </Link>

          <Link
            to="/pricing"
            className="rounded-xl bg-gradient-to-r from-indigo-400 to-violet-500 px-5 py-3 text-sm font-semibold shadow-[0_10px_40px_rgba(124,92,246,.28)] transition hover:-translate-y-0.5"
          >
            Book demo
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/5 bg-[#0b0b1c] px-5 py-5 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block py-4 border-b border-white/5 text-white/75"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;

// second navbar

// const bronze = "#B28A62";
// const dark = "#292725";
// const cream = "#F8F8F6";
// function SectionTitle({ eyebrow, title, children }) {
//   return (
//     <div className="max-w-3xl mx-auto text-center">
//       {eyebrow && (
//         <p
//           className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em]"
//           style={{ color: bronze }}
//         >
//           {eyebrow}
//         </p>
//       )}

//       <h2
//         className="text-3xl font-light leading-tight tracking-[-0.03em] sm:text-4xl lg:text-[44px]"
//         style={{ color: dark }}
//       >
//         {title}
//       </h2>

//       {children && (
//         <p className="max-w-2xl mx-auto mt-5 text-sm leading-7 text-neutral-500">
//           {children}
//         </p>
//       )}
//     </div>
//   );
// }

// function Button({ children, darkButton = false }) {
//   return (
//     <button
//       className="inline-flex items-center gap-3 py-3 text-xs font-medium transition-all duration-500 rounded-full group px-7 hover:-translate-y-1 hover:shadow-xl"
//       style={{
//         background: darkButton ? dark : bronze,
//         color: "white",
//       }}
//     >
//       {children}
//       <ArrowRight
//         size={14}
//         className="transition-transform duration-300 group-hover:translate-x-1"
//       />
//     </button>
//   );
// }
// import {
//   ArrowRight,

// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <header className="absolute top-0 left-0 z-50 w-full">
//       <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-7 lg:px-10">
//         <div className="text-lg font-semibold tracking-[-0.04em]">
//           Taj Hotel<span style={{ color: bronze }}>.</span>
//         </div>

//         <div className="hidden items-center gap-9 text-[11px] uppercase tracking-[0.12em] md:flex">
//           <link href="#features" className="transition hover:text-[#B28A62]">
//             Features
//           </link>
//           <link href="#hotels" className="transition hover:text-[#B28A62]">
//             Hotels
//           </link>
//           <link href="#booking" className="transition hover:text-[#B28A62]">
//             Booking
//           </link>
//           <link href="#feedback" className="transition hover:text-[#B28A62]">
//             Feedback
//           </link>
//           <button
//             className="rounded-sm px-5 py-2.5 text-white"
//             style={{ backgroundColor: bronze }}
//           >
//             Buy Now
//           </button>
//         </div>

//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
//           {menuOpen ? <X size={23} /> : <Menu size={23} />}
//         </button>
//       </nav>

//       {menuOpen && (
//         <div className="p-6 mx-4 bg-white border shadow-2xl rounded-xl border-neutral-200 md:hidden">
//           <div className="flex flex-col gap-5 text-sm">
//             <link href="#features" onClick={() => setMenuOpen(false)}>
//               Features
//             </link>
//             <link href="#hotels" onClick={() => setMenuOpen(false)}>
//               Hotels
//             </link>
//             <link href="#booking" onClick={() => setMenuOpen(false)}>
//               Booking
//             </link>
//             <link href="#feedback" onClick={() => setMenuOpen(false)}>
//               Feedback
//             </link>
//             <button
//               className="px-5 py-3 text-white rounded-full"
//               style={{ background: bronze }}
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;
