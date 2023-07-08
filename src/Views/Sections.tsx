import {AbsoluteCenter, Box, Divider, Tag} from "@chakra-ui/react";
import React from "react";
import AboutMe from "./AboutMe";
import ContactInfo from "./ContactInfo";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";

const sections = [
  {
    children: <AboutMe/>,
    label: "About me"
  },
  {
    children: <ContactInfo/>,
    label: "Contact info"
  },
  {
    children: <Experience/>,
    label: "Experience"
  },
  {
    children: <Education/>,
    label: "Education"
  },
  // {
  //   children: <Projects/>,
  //   label: "Projects"
  // },
]

export default function Sections() {
  return <>
    {
      sections.map(section => {
        return <>
          <Box position='relative' p={10}>
            <Divider/>
            <AbsoluteCenter>
              <Tag backgroundColor={"purple.300"} p={2}>
                {section.label}
              </Tag>
            </AbsoluteCenter>
          </Box>
          {section.children}
        </>
      })
    }
  </>
}