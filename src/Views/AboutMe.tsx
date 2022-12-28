import Typography from "@mui/material/Typography";
import Link from "next/link";

const AboutMe = () => {
  return <Typography variant={"body1"}>
    Hi there 👋
    I&apos;m Tomás from Buenos Aires, Argentina 🇦🇷
    CS student at <Link target="_blank" href="https://unahur.edu.ar/">Hurlingham National University</Link> and
    Software Engineer AMTS at <Link target="_blank"
                                    href="https://www.salesforce.com/products/integration/overview/">Mulesoft</Link>
  </Typography>
}

export default AboutMe;
