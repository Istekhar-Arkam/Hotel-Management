import {
  ArrowRight,
  CalendarDays,
  CreditCard,
  Languages,
  Hotel,
  BedDouble,
  Users,
  DollarSign,
  ShoppingCart,
  LayoutDashboard,
  UserRound,
  Timer,
  Smartphone,
  Check,
  Quote,
} from "lucide-react";
import InfiniteHotelCarousel from "../Components/InfiniteHotelCarousel";
// import { useState } from "react";

const bronze = "#B28A62";
const dark = "#292725";
const cream = "#F8F8F6";
const white="#ffffff";
const black="#000000";

const features = [
  {
    icon: CalendarDays,
    title: "Booking Conditions",
    text: "Minimum stay, occupancy limits, allowed check in and check out days.",
  },
  {
    icon: Hotel,
    title: "Guest Classes",
    text: 'Add custom classes such as "Adult", "Child", "Pet", and set different prices.',
  },
  {
    icon: UserRound,
    title: "Private Rooms",
    text: "A standard hotel room which can only be booked by one private group of guests.",
  },
  {
    icon: BedDouble,
    title: "Dorm Rooms",
    text: "A shared dorm room which can be booked by different groups of guests.",
  },
  {
    icon: ShoppingCart,
    title: "Optional Add-Ons",
    text: "Add-on extras to bookings e.g. airport transfer, breakfast and more.",
  },
  {
    icon: LayoutDashboard,
    title: "Multiple Rates",
    text: 'Set multiple rates for link single accommodation, e.g. "Full Board", "Half Board".',
  },
  {
    icon: Users,
    title: "User Accounts",
    text: "Save user data for returning guests and allow them to login to save time.",
  },
  {
    icon: DollarSign,
    title: "Multi Currency",
    text: "Quote prices in multiple currencies and allow guests to switch between them.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    text: "Secure online payments with link trusted payment service.",
  },
  {
    icon: Timer,
    title: "Payment Analytics",
    text: "View payment analytics for your bookings and revenue.",
  },
  {
    icon: UserRound,
    title: "Customer Database",
    text: "Store customer information and track how much they spend.",
  },
  {
    icon: Smartphone,
    title: "Discount Coupons",
    text: "Create coupon codes and allow your customers to save money.",
  },
];

const hotelCards = [
  {
    title: "Bed & Breakfast",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Downtown Hotel",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Standard Hotel",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Apartment",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
  },
];

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {eyebrow && (
        <p
          className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em]"
          style={{ color: bronze }}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="text-3xl font-light leading-tight tracking-[-0.03em] sm:text-4xl lg:text-[44px]"
        style={{ color: "white" }}
      >
        {title}
      </h2>

      {children && (
        <p className="max-w-2xl mx-auto mt-5 text-sm leading-7 text-neutral-300">
          {children}
        </p>
      )}
    </div>
  );
}

function Button({ children, darkButton = false }) {
  return (
    <button
      className="inline-flex items-center gap-3 py-3 text-xs font-medium transition-all duration-500 rounded-full group px-7 hover:-translate-y-1 hover:shadow-xl"
      style={{
        background: darkButton ? dark : bronze,
        color: "white",
      }}
    >
      {children}
      <ArrowRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}

function Features() {
  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        backgroundColor: cream,
        color: dark,
        fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      {/* ================= NAVBAR ================= */}

      {/* ================= HERO ================= */}
      <section className="relative min-h-[760px] overflow-hidden">
        <div className="mx-auto grid min-h-[760px] max-w-[1280px] items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-2 lg:px-10 lg:pt-24">
          {/* left */}
          <div className="relative z-10">
            <p
              className="mb-5 text-[10px] uppercase tracking-[0.28em]"
              style={{ color: bronze }}
            >
              Taj Hotel
            </p>

            <h1 className="max-w-xl text-5xl font-light leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-[64px]">
              The Ultimate Taj
              <br />
              <span className="font-normal">Hotel</span>
            </h1>

            <p className="max-w-md text-sm leading-7 mt-7 text-neutral-500">
              Taj Hotel Helps You Take Control Of Your Online Bookings And Grow
              Revenue
            </p>

            <div className="mt-8">
              <Button>Get Started</Button>
            </div>

            <div className="mt-12">
              <div className="text-4xl font-light tracking-tight">8900+</div>
              <p className="mt-1 text-[11px] text-neutral-500">
                Happy Customers
              </p>
            </div>
          </div>

          {/* right preview */}
          <div className="relative">
            <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#B28A62]/10 blur-3xl" />

            <div className="relative mx-auto max-w-[590px] overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition duration-700 hover:-translate-y-3">
              <div className="relative h-[390px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90"
                  className="object-cover w-full h-full"
                  alt="Luxury hotel"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <p className="text-[10px] uppercase tracking-[0.25em]">
                    Taj Hotel
                  </p>

                  <h3 className="mt-3 text-3xl font-light">Bed & Breakfast</h3>

                  <button
                    className="mt-6 px-6 py-3 text-[10px] uppercase tracking-[0.15em]"
                    style={{ background: bronze }}
                  >
                    Book Now
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 bg-white border-t divide-x border-neutral-200">
                <div className="p-5 text-center">
                  <CalendarDays
                    size={15}
                    className="mx-auto mb-2"
                    style={{ color: bronze }}
                  />
                  <span className="text-[10px] text-neutral-500">Check In</span>
                </div>

                <div className="p-5 text-center">
                  <CalendarDays
                    size={15}
                    className="mx-auto mb-2"
                    style={{ color: bronze }}
                  />
                  <span className="text-[10px] text-neutral-500">
                    Check Out
                  </span>
                </div>

                <div className="p-5 text-center">
                  <Users
                    size={15}
                    className="mx-auto mb-2"
                    style={{ color: bronze }}
                  />
                  <span className="text-[10px] text-neutral-500">Guests</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* corner decoration */}
        <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
          <div
            className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full border-[8px]"
            style={{ borderColor: bronze }}
          />
        </div>
      </section>
<InfiniteHotelCarousel/>
      {/* ================= INCLUDED ================= */}
      <section id="features" className="bg-[#F5F5F3] px-6 py-28 lg:px-10">
        <SectionTitle title="All The Things You Need Included">
          Everything you need to create and manage link professional hotel
          website, from bookings to payments and customer management.
        </SectionTitle>

        <div className="mx-auto mt-20 grid max-w-[1100px] gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              CalendarDays,
              "Booking System",
              "Availability can be automatically managed and viewed in the booking dashboard.",
            ],
            [
              CreditCard,
              "Online Payments",
              "WooCommerce support allows you to collect payments in link wide variety of local currencies.",
            ],
            [
              Languages,
              "Language Translation",
              "Custom built language translation plugin is included for easy translation.",
            ],
          ].map(([Icon, title, text]) => (
            <div
              key={title}
              className="px-5 text-center transition duration-500 group hover:-translate-y-2"
            >
              <Icon size={21} className="mx-auto" style={{ color: bronze }} />

              <h3 className="mt-5 text-sm font-medium">{title}</h3>

              <p className="mx-auto mt-4 max-w-[260px] text-xs leading-6 text-neutral-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOTEL DEMOS ================= */}
      <section id="hotels" className="px-6 py-28 lg:px-10 ">
        <SectionTitle title="Beautiful Hotel Websites">
          Choose from professionally designed hotel layouts and create link
          beautiful online presence.
        </SectionTitle>

        <div className="mx-auto mt-20 grid max-w-[1100px] gap-10 md:grid-cols-2">
          {hotelCards.map((hotel) => (
            <div key={hotel.title} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.title}
                  className="h-[270px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 transition duration-500 bg-black/10 group-hover:bg-black/30" />

                <div className="absolute bottom-5 left-5">
                  <span className="bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.15em] backdrop-blur">
                    View Demo
                  </span>
                </div>
              </div>

              <div className="pt-5 text-center">
                <h3 className="mt-2 text-lg font-light">{hotel.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BOOKING ================= */}
      <section id="booking" className=" px-6  lg:px-10 relative overflow-hidden bg-[#09091a] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1100px] items-center gap-16 lg:grid-cols-2">
          <div >
            <SectionTitle title="Check Availability & Book With Ease">
              Taj Hotel comes packaged with its own booking system custom built
              based on years of customer feedback. It should contain every
              feature you need.
            </SectionTitle>

            <div className="flex justify-center mt-8 lg:justify-start">
              <Button darkButton>Explore Booking</Button>
            </div>
          </div>

          <div className="group overflow-hidden border border-neutral-200 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
              alt="Hotel booking"
              className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ================= ALL FEATURES ================= */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <SectionTitle title="Everything A Hotel Needs" />

          <div className="grid mt-20 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="text-center transition duration-500 group hover:-translate-y-2"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white transition duration-500 group-hover:border-[#B28A62]">
                  <Icon size={120} style={{ color: bronze }} />
                </div>

                <h3 className="mt-5 font-medium text-md">{title}</h3>

                <p className="mt-3 text-[14px] leading-5 text-neutral-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEEDBACK ================= */}
      <section id="feedback" className="bg-[#F5F5F3] px-6 py-28 lg:px-10">
        <SectionTitle title="Satisfied Customer">
          Feedback from customers who use the theme for their hotel websites.
        </SectionTitle>

        <div className="mx-auto grid max-w-[1000px] gap-8 md:grid-cols-2">
          {[
            {
              name: "Hotel Owner",
              text: "A beautiful theme with everything we needed for our hotel booking website.",
            },
            {
              name: "Travel Business",
              text: "The booking system makes managing reservations much easier than before.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="relative p-10 text-center transition duration-500 bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl"
            >
              <Quote size={28} className="mx-auto" style={{ color: bronze }} />

              <p className="mt-6 italic leading-7 text-md text-neutral-500">
                “{item.text}”
              </p>

              <p className="mt-6 text-xs font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PAYMENT ================= */}
      <section className="px-6 py-28 lg:px-10 bg-[#09091a]">
        <div className="mx-auto grid max-w-[1050px] items-center gap-14 lg:grid-cols-2">
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{ color: bronze }}
            >
              Powerful Payments
            </p>

            <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] sm:text-4xl">
              Secure online payments made simple.
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "Secure online payments made with link trusted service",
                "Collect customer payments automatically with ease",
                "Supported in link wide variety of currencies",
              ].map((text) => (
                <div key={text} className="flex gap-3 text-xs text-neutral-500">
                  <Check
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: white }}
                  />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden border border-neutral-200 bg-white p-3 shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
              alt="Payment dashboard"
              className="h-[330px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= WP BAKERY ================= */}
      <section className="bg-[#F5F5F3] px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-2">
          <div className="order-2 p-3 overflow-hidden bg-white border lg:order-1 border-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85"
              alt="Website builder"
              className="h-[330px] w-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{ color: bronze }}
            >
              Easy Website Building
            </p>

            <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] sm:text-4xl">
              WP Bakery Drag & Drop Page Builder
            </h2>

            <p className="mt-6 text-sm leading-7 text-neutral-500">
              No coding required, all page and content can be edited with an
              easy to use WordPress page and content builder.
            </p>

            <div className="space-y-3 mt-7">
              {[
                "Full WP Bakery Page Builder plugin included",
                "Easy to use interface with no coding",
                "Detailed documentation and video tutorials available",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-xs text-neutral-500"
                >
                  <Check size={14} style={{ color: bronze }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative px-6 py-32 overflow-hidden text-center">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B28A62]/10 blur-3xl" />

        <div className="relative">
          <h2 className="text-4xl font-light tracking-[-0.04em] sm:text-5xl">
            <span style={{ color: bronze }}>Start Building</span> Your
            <br />
            Website Today
          </h2>

          <div className="mt-8">
            <Button>Buy Now</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Features;
