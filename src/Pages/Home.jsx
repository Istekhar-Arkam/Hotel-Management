import { useEffect } from "react";
import Hero from "../Components/Hero";
import HeroVideoOne from "../Components/HeroVideoOne";
import InfiniteHotelCarousel from "../Components/InfiniteHotelCarousel";
import ElectricBorder from "../Components/ElectricBorder"
import TextLoop from '../Components/TextLoop';
import ChromaGrid from '../Components/ChromaGrid'
import WebThreads from '../Components/WebThreads.jsx';

function Home() {
  const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  }
];
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
      

<TextLoop
  text="Taj ✦ Hotel"
  shape="wave"
  speed={150}
  direction="forward"
  separator="✦"
  curviness={50}
  fontSize={40}
  fontWeight={600}
  letterSpacing={2}
  uppercase
  color="#19197e"
  ribbon
  ribbonColor="#ffffff"
  ribbonWidth={60}
  pauseOnHover
/>



<div style={{ height: '600px', position: 'relative' }}>
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</div>



<div style={{ width: '100%', height: '600px', position: 'relative' }}>
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
</div>
 
      </div>
    </>
  );
}

export default Home;
