import InfiniteSpiral from "@/Components/ui/InfiniteSpiral";
import FlipCard from "@/Components/ui/FlipCard";
import {
  ArrowRight,
  CalendarDays,
  CreditCard,
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
import LogoLoop from "@/Components/LogoLoop";

const imageLogos = [
  { src: "/public/sixth.png", alt: "Company 1", href: "#" },
  { src: "/public/two.jpg", alt: "Company 2", href: "#" },
  { src: "/public/three.png", alt: "Company 3", href: "#" },
  { src: "/public/four.png", alt: "Company 3", href: "#" },
  { src: "/public/five.png", alt: "Company 3", href: "#" },
  { src: "/public/one.png", alt: "Company 3", href: "#" },
];
const bronze = "#B28A62";
const dark = "#292725";
const cream = "#F8F8F6";
const white = "#ffffff";

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
const images = [
  { src: "/public/hotel.jpg", alt: "Mountain lake" },
  { src: "/public/hotel2.jpg", alt: "Forest path" },
  { src: "/public/hotel3.jpg", alt: "Rocky summit" },
  { src: "/public/hotel4.jpg", alt: "Ocean shore" },
  { src: "/public/hotel5.jpg", alt: "Green meadow" },
  { src: "/public/hotel6.jpg", alt: "Desert light" },
];
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
      {/* ================= BOOKING ================= */}
      <section
        id="booking"
        className=" px-6  lg:px-10 relative overflow-hidden bg-[#09091a] py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1100px] items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionTitle title="Check Availability & Book With Ease">
              Taj Hotel comes packaged with its own booking system custom built
              based on years of customer feedback. It should contain every
              feature you need.
            </SectionTitle>

            <div className="flex justify-center mt-8 lg:justify-start">
              <Button darkButton>Explore Booking</Button>
            </div>
          </div>

          <div className="group overflow-hidden border border-neutral-200 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <FlipCard
              front={
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
                  alt="Hotel booking"
                  className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              }
              back={
                <div style={{ padding: 24 }}>
                  <h3 className="pb-5 text-lg font-semibold text-center">
                    Sunil Villa
                  </h3>
                  <p>21th century · Rijksmuseum</p>
                  <p>Address:Bengalure,Kormangla adugora</p>
                </div>
              }
              axis="y"
              flipOnClick
              draggable
              dragDistance={0}
              tilt
              tiltMax={12}
              glare
              glareOpacity={0.22}
              hoverScale={1.03}
              perspective={1100}
              stiffness={170}
              damping={20}
              width={600}
              height={400}
              radius={22}
              background="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              color="#f5f5f5"
              shadow
              shadowColor="#000000"
              shadowOpacity={0.45}
              onFlipChange={(flipped) => console.log(flipped)}
            />
          </div>
        </div>
      </section>
      <div
        style={{ height: "600px", position: "relative", overflow: "hidden" }}
      >
        <InfiniteSpiral
          items={images}
          animationMode="auto"
          speed={0.55}
          radius={170}
          cardWidth={260}
          cardHeight={152}
          verticalSpacing={66}
          perspective={1000}
          cardRadius={10}
          centerScale={1.2}
          edgeBlur={7}
          cardsPerTurn={7}
          pauseOnHover
          direction="up"
          rotation={0}
          cardTilt={0}
          edgeFade={0.3}
          imageFit="cover"
          grayscale={0.1}
        />
      </div>
      {/* ================= ALL FEATURES ================= */}
      <section className="px-6 py-28 lg:px-10 bg-[#09091a]">
        <div className="mx-auto max-w-[1100px]">
          <SectionTitle title="Everything A Hotel Needs" />

          <div className="grid mt-20 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="text-center transition duration-500 group hover:-translate-y-2"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full  transition duration-500 group-hover:border-[#B28A62]">
                  <Icon size={120} style={{ color: bronze }} />
                </div>

                <h3 className="mt-5 font-medium text-white text-md">{title}</h3>

                <p className="mt-3 text-[14px] leading-5 text-white">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEEDBACK ================= */}
      <section id="feedback" className="bg-[#F5F5F3] px-6 pt-20 lg:px-10 pb-32">
        <h1 className="py-5 text-3xl font-bold text-center text-[#09091a]">
          Satisfied Customer
        </h1>
        <h1 className="text-center pb-9 text-[#09091a]">
          Feedback from customers who use the theme for their hotel websites.
        </h1>

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
              className="relative p-10 text-center transition duration-500 bg-white shadow-2xl hover:-translate-y-2 hover:shadow-3xl"
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
              style={{ color: white }}
            >
              Powerful Payments
            </p>

            <h2 className="mt-4 text-3xl text-white tracking-[-0.04em] sm:text-4xl">
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

          <div className="group overflow-hidden border border-neutral-200 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <FlipCard
              front={
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
                  alt="Hotel booking"
                  className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              }
              back={
                <div style={{ padding: 24 }}>
                  <h3 className="pb-5 text-lg font-semibold text-center">
                    Istekhar Arkam
                  </h3>
                  <p>21th century · Rijksmuseum</p>
                  <p>Address:Bengalure,Kormangla adugora</p>
                </div>
              }
              axis="y"
              flipOnClick
              draggable
              dragDistance={0}
              tilt
              tiltMax={12}
              glare
              glareOpacity={0.22}
              hoverScale={1.03}
              perspective={1100}
              stiffness={170}
              damping={20}
              width={600}
              height={400}
              radius={22}
              background="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              color="#f5f5f5"
              shadow
              shadowColor="#000000"
              shadowOpacity={0.45}
              onFlipChange={(flipped) => console.log(flipped)}
            />
          </div>
        </div>
      </section>
      {/* logoloop */}
      <div className="pt-28">
        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={imageLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={80}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="white"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
      {/* ================= FINAL CTA ================= */}
    </main>
  );
}

export default Features;
