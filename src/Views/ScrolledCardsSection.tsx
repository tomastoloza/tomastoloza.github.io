import {styled} from "@mui/material";
import Box from "@mui/material/Box";
import {ItemCard} from "../components";

interface ScrolledCardsSectionProps {
  title: string
  items: any[]

}

const ScrollableBox = styled(Box)(({theme}) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(2),
  // [theme.breakpoints.down("md")]: {
  //   overflowX: "scroll",
  // },
  // scrollSnapType: "x mandatory",
  maxWidth: '100vw',
}))

const ScrolledCardsSection = ({title, items}: ScrolledCardsSectionProps) => {
  return <ScrollableBox>
    {items.map(item => {
      return <ItemCard experienceItem={item} key={item.title}/>
    })}
  </ScrollableBox>
}

export default ScrolledCardsSection;
