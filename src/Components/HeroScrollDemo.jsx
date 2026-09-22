"use client";
import { ContainerScroll } from "../Components/ui/container-scroll-animation";

const hotelImage =
  "https://images.unsplash.com/photo-1773393776501-11b5543ceba0?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWd0dGVyfHx8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=85&w=2200";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <img
          src={hotelImage}
          alt="hero"
          height={520}
          width={1400}
          className="object-center h-full mx-auto rounded-2xl"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
