import React from "react";
import FocusCards from "./focus-cards";
import banner1 from "../../assets/munnar.webp";
import banner2 from "../../assets/Alleppey.webp";
import banner3 from "../../assets/Kandy.webp";
import banner4 from "../../assets/bentota.webp";
import banner5 from "../../assets/kuala.webp";
import banner6 from "../../assets/Langkawi.webp";

export function FocusCardsDemo() {
  const cards = [
    {
      src: banner1,
      title: "Munnar",
      description: "Nestled in the Western Ghats, Munnar is a dreamy hill station carpeted with emerald tea plantations. Cool mist, cascading waterfalls, and rolling hills make it a nature lover’s paradise. An ideal retreat for peace and romance."
    },
    {
      src: banner2,
      title: "Alleppey",
      description: "Known as the “Venice of the East,” Alleppey offers serene backwaters and iconic houseboat cruises. Glide past lush paddy fields and coconut groves as life unfolds on the banks. Perfect for relaxation and an authentic Kerala experience."
    },
    {
      src: banner3,
      title: "Kandy",
      description: "A city steeped in history, Kandy is the heart of Sri Lanka’s cultural heritage. The Temple of the Tooth and scenic Kandy Lake make it both spiritual and serene. Its vibrant traditions and hill-country charm captivate every traveler."
    },
    {
      src: banner4,
      title: "Bentota & Madu River Safari",
      description: "Bentota invites you with its golden sands and turquoise waters. Cruise the Madu River through tangled mangroves, spotting birds and river life along the way. End your journey at the Turtle Hatchery, where conservation meets wonder."
    },
    {
      src: banner5,
      title: "Kuala Lumpur City Centre (KLCC) & Petronas Twin Towers",
      description: "The iconic Petronas Twin Towers stand tall as the symbol of Malaysia’s modern spirit. Enjoy breathtaking skyline views, luxury shopping, and vibrant nightlife at KLCC. A must-visit landmark blending culture, leisure, and world-class architecture."
    },
    {
      src: banner6,
      title: "Langkawi",
      description: "An island paradise of turquoise waters, white sandy beaches, and lush rainforests. Explore the breathtaking Langkawi Sky Bridge, thrilling cable car rides, and duty-free shopping havens. A perfect blend of adventure, relaxation, and natural beauty."
    },
  ];

  return <FocusCards cards={cards} />;
}

export default FocusCardsDemo;
