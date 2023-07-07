import {Link} from "@chakra-ui/next-js";
import {Box, Text} from "@chakra-ui/react";
import React from "react";

const AboutMe = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems={"center"} gap={2}>
      <Text align={"center"}>
        Hi there 👋
      </Text>
      <Text align={"center"}>
        I'm Tomás, based on Buenos Aires, Argentina 🇦🇷.
      </Text>
      <Text align={"center"}>
        A Software Engineer at <Link target="_blank"
                                     href="https://www.salesforce.com/products/integration/overview/">
        Mulesoft
      </Link> and a CS student at <Link target="_blank"
                                        href="https://unahur.edu.ar/">
        Hurlingham National University
      </Link>
      </Text>
      <Text align={"center"}>
        On this website, you will find detailed information about my work experiences, highlighting key projects and
        achievements. Additionally, you can explore my educational background, showcasing the knowledge and expertise
        I
        have gained over the years.
      </Text>
      <Text align={"center"}>
        I invite you to browse through my portfolio and explore the various sections to learn more about my
        professional
        journey. If you have any questions or would like to discuss potential collaborations, feel free to reach out
        to
        me through the provided contact information.
      </Text>
      <Text align={"center"}>
        Thank you for visiting, and I look forward to connecting with you!
      </Text>
    </Box>
  )
}

export default AboutMe;
