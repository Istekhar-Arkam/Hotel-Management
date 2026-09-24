import { useEffect } from "react";
import Hero from "../Components/Hero";
import HeroVideoOne from "../Components/HeroVideoOne";
import InfiniteHotelCarousel from "../Components/InfiniteHotelCarousel";
import ElectricBorder from "../Components/ElectricBorder";
import WebThreads from "../Components/WebThreads.jsx";
import { ThreeDCardDemo } from "@/Components/ThreeDCardDemo";

function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-[#09091a] text-white">
        <HeroVideoOne />
        <ElectricBorder />
        <InfiniteHotelCarousel />
        <Hero />
        <div className="flex flex-wrap justify-center sm:gap-4 md:gap-7">
          <ThreeDCardDemo />
          <ThreeDCardDemo />
          <ThreeDCardDemo />
        </div>

        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <WebThreads
            color1="#5227FF"
            color2="#FF9FFC"
            color3="#FFFFFF"
            speed={0.2}
            threadCount={6}
            frequency={5}
            spread={0.18}
            taper={1}
            position={0.5}
            fanMode="center"
            glow={0.02}
            falloff={0.6}
            thickness={1.1}
            brightness={0.6}
            opacity={1}
            mirror
            shimmer={false}
            grain
            grainIntensity={0.05}
            mouseInteraction
            mouseStrength={0.3}
          />
          <div className="absolute top-0 z-10 flex items-center justify-center h-full text-center text-white left-8 sm:left-31 md:left-30 lg:left-40">
            <div>
              <h1 className="text-5xl font-bold md:text-7xl">
                Start Building Your Website Today
              </h1>

              <p className="mt-5 text-lg md:text-xl">
                Where every stay becomes an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
