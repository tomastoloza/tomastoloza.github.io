import {Box, Heading, Image} from "@chakra-ui/react";
import React from "react";

export default function ProfileLanding() {
  return <Box display={"flex"}
              flexDirection={["column", "column", "row"]}
              alignItems={"center"}
              justifyContent={"space-evenly"}>
    <Image src="https://github.com/tomastoloza.png"
           alt={"Profile picture"}
           borderRadius='full'
           boxSize={["3xs", "sm"]}
           objectFit='contain'
    />
    <Heading fontFamily={"Montserrat"} fontSize={["5xl", "8xl"]} textAlign={"center"}>
      Tomás Toloza
    </Heading>
  </Box>;
}