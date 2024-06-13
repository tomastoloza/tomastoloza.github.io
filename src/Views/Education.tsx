import educationItems from "../resources/education.json";
import React from "react";
import ScrolledCardsSection from "./ScrolledCardsSection";

const Education = () => {
  return <ScrolledCardsSection title={"Education"} items={educationItems} hasActions={false}/>
}

export default Education;
