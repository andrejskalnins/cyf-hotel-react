import React from "react";
import TouristInfoCard from "./TouristInfoCard";

function TouristInfoCards(props) {
  const cities = [
    {
      img:
        "https://images.unsplash.com/photo-1571930999432-f8121f1da5ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Glasgow",
      description:
        "Glasgow is a vibrant and welcoming city bursting with character, personality and great experiences. No matter when you visit, you'll find world-class visitor attractions, unique neighbourhoods, stunning architecture, an ever-evolving food and drink scene and legendary nightlife.",
      url: "https://peoplemakeglasgow.com/"
    },
    {
      img:
        "https://images.unsplash.com/photo-1605021149343-bb75d2a2fa44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      name: "Manchester",
      description:
        "Manchester is commonly known as England's second city. Once a powerhouse of industry, it is now a major cultural hub, famous for its many fantastic nightclubs, extensive libraries and glorious sporting history.",
      url: "https://www.visitmanchester.com/"
    },
    {
      img:
        "https://images.unsplash.com/photo-1532444143931-9f60a76242e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      name: "London",
      description:
        "London is the capital city of the United Kingdom. It is the U.K.'s largest metropolis and its economic, transportation, and cultural centre. London is also among the oldest of the world's great cities, with its history spanning nearly two millennia.",
      url: "https://www.visitlondon.com/"
    }
  ];

  return (
    <div className="d-flex justify-content-center ">
      {cities.map((city, index) => {
        return (
          <TouristInfoCard
            key={index}
            img={city.img}
            name={city.name}
            description={city.description}
            url={city.url}
          />
        );
      })}
    </div>
  );
}
export default TouristInfoCards;
