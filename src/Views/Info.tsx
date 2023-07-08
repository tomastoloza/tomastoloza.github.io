import {Box, IconButton} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";
import EmailIcon from "../components/Icon/EmailIcon";
import GithubIcon from "../components/Icon/GithubIcon";
import LinkedinIcon from "../components/Icon/LinkedinIcon";

const infoButtons = [
  {
    label: "email",
    icon: <EmailIcon/>,
    href: "mailto:tomasezequieltoloza@gmail.com",
  },
  {
    label: "github",
    icon: <GithubIcon/>,
    href: "https://www.github.com/tomastoloza",
  },
  {
    label: "linkedin",
    icon: <LinkedinIcon/>,
    href: "https://www.linkedin.com/in/tomas-toloza",
  },
]


const Info = () => {
  return <Box display="flex" flexDirection="row" alignItems={"center"} gap={2}>
    {
      infoButtons.map(infoButton => {
        return <Link href={infoButton.href} target={"_blank"} key={infoButton.href}>
          <IconButton aria-label={infoButton.label} size={"lg"}>
            {infoButton.icon}
          </IconButton>
        </Link>
      })
    }
  </Box>

}

export default Info
