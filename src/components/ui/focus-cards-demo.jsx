import React from "react";
import FocusCards from "./focus-cards";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/about-2.jpg";
import banner3 from "../../assets/blog-1.png";
import banner4 from "../../assets/blog-3.png";
import banner5 from "../../assets/pkg-1.png";
import banner6 from "../../assets/sl.png";

export function FocusCardsDemo() {
  const cards = [
    {
      src: banner1,
      title: "Scenic Mountain Views",
      description: "Experience breathtaking mountain landscapes and serene natural beauty. Perfect for adventure seekers and nature lovers looking for an unforgettable journey."
    },
    {
      src: banner2,
      title: "Cultural Heritage",
      description: "Immerse yourself in rich cultural traditions and historic landmarks. Discover ancient temples and local customs that tell stories of centuries past."
    },
    {
      src: banner3,
      title: "Tropical Paradise",
      description: "Relax on pristine beaches with crystal-clear waters. Our tropical destinations offer the perfect blend of luxury and natural beauty."
    },
    {
      src: banner4,
      title: "Wildlife Safari",
      description: "Encounter exotic wildlife in their natural habitat. Our guided safaris bring you close to nature's most magnificent creatures."
    },
    {
      src: banner5,
      title: "Adventure Trails",
      description: "Trek through lush forests and challenging terrains. Perfect for those seeking adventure and wanting to test their limits."
    },
    {
      src: banner6,
      title: "Island Getaway",
      description: "Discover hidden island paradises and coastal wonders. Experience the perfect blend of relaxation and adventure."
    }
  ];

  return <FocusCards cards={cards} />;
}

export default FocusCardsDemo;
