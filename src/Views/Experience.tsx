import experienceItems from "../resources/experience.json";
import React from "react";
import ScrolledCardsSection from "./ScrolledCardsSection";


const Experience = () => {
  return <ScrolledCardsSection title={"Experience"} items={experienceItems} hasActions={true}/>
}

export default Experience;
