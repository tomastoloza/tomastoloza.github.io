import React from "react";
import {Box} from "@chakra-ui/react";
import ProfileActions from "../components/ProfileActions";
import ProfileLanding from "../components/ProfileLanding";
import Sections from "./Sections";

const Profile = () => {
  return (
    <Box padding={[2, 4, 8]}>
      <ProfileLanding/>
      <ProfileActions/>
      <Sections/>
    </Box>
  );
}

export default Profile
