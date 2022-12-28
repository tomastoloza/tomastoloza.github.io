import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import {Chip, Divider, styled} from "@mui/material";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Qr from "../components/Qr";
import ContactInfo from "./ContactInfo";
import AboutMe from "./AboutMe";


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
  {
    children: <Projects/>,
    label: "Proyects"
  },
]

const ProfilePictureBox = styled(Box)(({theme}) => ({
  borderRadius: "100%",
  outline: "1px solid lightgrey",
  overflow: "hidden",
  position: "relative",
  //TODO: Fix vw
  [theme.breakpoints.down('md')]: {
    height: '50vw',
    width: '50vw'
  },
  height: '10vw',
  width: '10vw'
}));

const Profile = () => {
  return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <ProfilePictureBox>
      <Image src="https://github.com/tomastoloza.png" alt={"Profile picture"} fill/>
    </ProfilePictureBox>
    <Typography variant={"h1"} fontWeight={800}>Tomás Toloza</Typography>
    <Qr/>
    <Box sx={{display: "flex", gap: 4, flexDirection: "column"}}>
      {
        sections.map(section => {
          return <>
            <Divider>
              <Chip label={section.label}/>
            </Divider>
            {section.children}
          </>
        })}
    </Box>
  </Box>
}

export default Profile
