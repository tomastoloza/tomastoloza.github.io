import Box from "@mui/material/Box";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";
import Button from "@mui/material/Button";
import {styled} from "@mui/material";

const infoButtons = [
  {
    label: "email",
    icon: <EmailIcon/>,
    href: "mailto:tomasezequieltoloza@gmail.com",
  },
  {
    label: "github",
    icon: <GitHubIcon/>,
    href: "https://www.github.com/tomastoloza",
  },
  {
    label: "linkedin",
    icon: <LinkedInIcon/>,
    href: "https://www.linkedin.com/in/tomas-toloza",
  },
]

const IconButton = styled(Button)(({theme}) => ({
  padding: theme.spacing(1),
  minWidth: theme.spacing(1)
}))
const IconBox = styled(Box)(({theme}) => ({
  display: "flex",
  gap: theme.spacing(1),
}))
const Info = () => {
  return <IconBox>
    {
      infoButtons.map(ib => {
        return <Link href={ib.href} target={"_blank"}>
          <IconButton aria-label={ib.label} size={"large"} color={"primary"}>
            {ib.icon}
          </IconButton>
        </Link>
      })
    }
  </IconBox>

}

export default Info
