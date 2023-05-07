import {styled} from "@mui/material";
import Box from "@mui/material/Box";
import {ItemCard} from "../components";
import {ExperienceItem} from "../models";

interface ScrolledCardsSectionProps {
  title: string
  items: ExperienceItem[]

}

const ScrollableBox = styled(Box)(({theme}) => ({
  display: "flex",
  // flexWrap: "wrap",
  justifyContent: "start",
  gap: theme.spacing(2),
  overflowX: "auto",
  scrollSnapType: "x proximity",
  maxWidth: "90vw",
  marginLeft: theme.spacing(2)
}))

const ScrolledCardsSection = ({title, items}: ScrolledCardsSectionProps) => {
  let [activeItem, ...restOfItems] = items;
  return <ScrollableBox>
    <ItemCard experienceItem={activeItem} key={activeItem.title} active/>
    {restOfItems.map(item => {
      return <ItemCard experienceItem={item} key={item.title}/>
    })}
  </ScrollableBox>
}

export default ScrolledCardsSection;
