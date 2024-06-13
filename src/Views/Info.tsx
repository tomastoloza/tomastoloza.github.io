"use client"; // This is required to use the Link component from "@chakra-ui/next-js"

import {Box} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";
import EmailIcon from "../components/Icon/EmailIcon";
import GithubIcon from "../components/Icon/GithubIcon";
import LinkedinIcon from "../components/Icon/LinkedinIcon";
import TooltipButton from "../components/TooltipButton";

const infoButtons = [
  {
    label: "Email",
    icon: <EmailIcon />,
    href: "mailto:tomasezequieltoloza@gmail.com",
  },
  {
    label: "Github",
    icon: <GithubIcon />,
    href: "https://www.github.com/tomastoloza",
  },
  {
    label: "LinkedIn",
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/tomas-toloza",
  },
];

const Info = () => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
      {infoButtons.map((infoButton) => (
        <Link
          href={infoButton.href}
          target="_blank"
          key={infoButton.href}
          // Remove onClick handler as the Link component will handle navigation
        >
          <TooltipButton
            label={infoButton.label}
            icon={infoButton.icon}
            tooltipLabel={infoButton.label}
            onClick={() => {}}
          />
        </Link>
      ))}
    </Box>
  );
};

export default Info;
