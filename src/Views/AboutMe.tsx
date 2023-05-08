import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {LocationCity, Place, School, Work} from "@mui/icons-material";

const AboutMe = () => {
  let study = <>CS student at <Link target="_blank" href="https://unahur.edu.ar/">Hurlingham National
    University</Link></>;
  let work = <>Software Engineer AMTS at <Link target="_blank"
                                               href="https://www.salesforce.com/products/integration/overview/">Mulesoft</Link></>;
  return (
    <List>
      <ListItem>
        <ListItemText primary="Hi there 👋"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="I&apos;m Tomás"/>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Place/>
        </ListItemIcon>
        <ListItemText primary="Buenos Aires, Argentina 🇦🇷"/>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <School/>
        </ListItemIcon>
        <ListItemText
          primary={study}
        />
      </ListItem><ListItem>
      <ListItemIcon>
        <Work/>
      </ListItemIcon>
      <ListItemText
        primary={work}
      />
    </ListItem>
    </List>
)
}

export default AboutMe;
