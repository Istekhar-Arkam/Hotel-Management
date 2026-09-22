// import {
//   MapPin,
//   Phone,
//   Mail,
//   Facebook,
//   Instagram,
//   Twitter,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// function FooterTwo() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="bg-[#101c2c] text-[#d8d3c4]">
//       <div className="grid max-w-6xl grid-cols-1 gap-10 px-6 mx-auto py-14 md:grid-cols-4">
//         {/* Brand */}
//         <div>
//           <h2 className="font-serif text-2xl text-[#e9e2cf] mb-3">
//             Meridian Hotels
//           </h2>
//           <p className="text-sm leading-relaxed text-[#9aa3b1]">
//             Comfort, care, and every detail handled — from check-in to checkout,
//             across every property we manage.
//           </p>
//           <div className="flex gap-4 mt-5">
//             <Link
//               href="#"
//               aria-label="Facebook"
//               className="text-[#9aa3b1] hover:text-[#c8a153] transition-colors"
//             >
//               <Facebook size={18} />
//             </Link>
//             <Link
//               href="#"
//               aria-label="Instagram"
//               className="text-[#9aa3b1] hover:text-[#c8a153] transition-colors"
//             >
//               <Instagram size={18} />
//             </Link>
//             <Link
//               href="#"
//               aria-label="Twitter"
//               className="text-[#9aa3b1] hover:text-[#c8a153] transition-colors"
//             >
//               <Twitter size={18} />
//             </Link>
//           </div>
//         </div>

//         {/* Explore */}
//         <div>
//           <h3 className="text-sm font-medium text-[#e9e2cf] mb-4">Explore</h3>
//           <ul className="space-y-2 text-sm text-[#9aa3b1]">
//             <li>
//               <Link href="#" className="hover:text-[#c8a153] transition-colors">
//                 Our properties
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-[#c8a153] transition-colors">
//                 Rooms and suites
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-[#c8a153] transition-colors">
//                 Dining
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-[#c8a153] transition-colors">
//                 Events and meetings
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Guest services */}
//         <div>
//           <h3 className="text-sm font-medium text-[#e9e2cf] mb-4">
//             Guest services
//           </h3>
//           <ul className="space-y-2 text-sm text-[#9aa3b1]">
//             <li>
//               <Link href="#" className="hover:text-[#c8a153] transition-colors">
//                 Book link stay
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-[#c8a153] transition-colors">
//                 Manage reservation
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-[#c8a153] transition-colors">
//                 Loyalty program
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-[#c8a153] transition-colors">
//                 Help center
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-sm font-medium text-[#e9e2cf] mb-4">Contact</h3>
//           <ul className="space-y-3 text-sm text-[#9aa3b1]">
//             <li className="flex items-start gap-2">
//               <MapPin size={16} className="mt-0.5 shrink-0 text-[#c8a153]" />
//               <span>221 Harbor Row, Suite 4, Portside City</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <Phone size={16} className="text-[#c8a153]" />
//               <span>+1 (555) 018-2440</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <Mail size={16} className="text-[#c8a153]" />
//               <span>stay@meridianhotels.com</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="border-t border-[#26344a]">
//         <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7c8494]">
//           <p>© {year} Meridian Hotels. All rights reserved.</p>
//           <div className="flex gap-5">
//             <Link href="#" className="hover:text-[#c8a153] transition-colors">
//               Privacy policy
//             </Link>
//             <Link href="#" className="hover:text-[#c8a153] transition-colors">
//               Terms of service
//             </Link>
//             <Link href="#" className="hover:text-[#c8a153] transition-colors">
//               Sitemap
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
// export default FooterTwo;
