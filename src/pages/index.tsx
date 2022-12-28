import Experience from "../Views/Experience";
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";
import Education from "../Views/Education";
import Info from "../Views/Info";
import Profile from "../Views/Profile";
import Head from "next/head";
import Projects from "../Views/Projects";

const theme = responsiveFontSizes(createTheme({
  shape: {
    borderRadius: 25
  },
  components: {
    MuiPaper: {
      defaultProps: {
        variant: "outlined"
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "outlined"
      }
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(",")
  }
}))
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Tomás Toloza</title>
        <link rel="icon"
              href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
      </Head>
      <Profile/>
    </ThemeProvider>
  )
}
