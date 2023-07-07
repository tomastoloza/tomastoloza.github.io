import React from "react";
import {Box} from "@chakra-ui/react";
import ProfileActions from "../components/ProfileActions";
import ProfileLanding from "../components/ProfileLanding";
import Sections from "./Sections";

const Profile = () => {
  return (
    <Box paddingLeft={[2,4,8]}
         paddingRight={[2,4,8]} zIndex={1}>
      <ProfileLanding/>
      <ProfileActions/>
      <Sections/>
    </Box>
  );
}

export default Profile
