"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ElectricBorder from "./ElectricBorder";

export function ThreeDCardDemo() {
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
  ];
  return (
    <CardContainer className=" inter-var">
      <ElectricBorder>
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-4 border mx-3 ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Make things float in air
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="max-w-sm mt-2 text-sm text-neutral-500 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-5">
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=85"
              height="1000"
              width="1000"
              className="object-cover w-full h-60 rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex items-center justify-between mt-10">
            <CardItem
              translateZ={20}
              as="a"
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 text-xs font-normal rounded-xl dark:text-white"
            >
              Try now →
            </CardItem>
        
          </div>
        </CardBody>
      </ElectricBorder>
    </CardContainer>
  );
}
