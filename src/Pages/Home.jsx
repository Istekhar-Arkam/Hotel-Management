import { useEffect } from "react";
import Hero from "../Components/Hero";
import HeroVideoOne from "../Components/HeroVideoOne";
import InfiniteHotelCarousel from "../Components/InfiniteHotelCarousel";
import ElectricBorder from "../Components/ElectricBorder"

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
       
        <HeroVideoOne/>
        <ElectricBorder/>
        <InfiniteHotelCarousel/>
         <Hero />
         <ElectricBorder
  color="#7df9ff"
  speed={1}
  chaos={0.12}
  thickness={2}
  style={{ borderRadius: 16 }}
  className="w-20"
>
  <div className="w-full h-40">
    <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
      A glowing, animated border wrapper.
    </p>
  </div>
</ElectricBorder>
        
      </div>
    </>
  );
}

export default Home;
