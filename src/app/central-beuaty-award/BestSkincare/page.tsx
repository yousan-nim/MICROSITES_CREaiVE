import React from "react";



const DATA_PAGE = {
  title: "Best Eco-Friendly",
  description: "Central Bauety Award 2024",
  image: "/MICROSITES_CREAIVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png",
  alt: "Central Bauety Award 2024",
  shareTitle: "Central Bauety Award 2024 - Best Eco-Friendly",
  shareDescription:
    "Discover the best eco-friendly products and brands that are part of Central Bauety Award 2024.",
  shareImage: "/MICROSITES_CREAIVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png",
  shareUrl: "https://centralbauetyaward.com/best-eco-friendly",
}



const BestEcoFriendly = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white ">
      <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
        <div className="flex w-full m-auto items-center justify-center">
          <img
            src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png"
          />
        </div>

        <div className="relative w-screen h-full">
          <img
            src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/Trophys/SkinCare.png"
          />

        </div>
      </div>
    </div>
  );
};

export default BestEcoFriendly;
