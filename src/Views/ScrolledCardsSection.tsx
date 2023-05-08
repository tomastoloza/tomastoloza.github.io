import {styled} from "@mui/material";
import Box from "@mui/material/Box";
import {ItemCard} from "../components";
import {ExperienceItem} from "../models";

interface ScrolledCardsSectionProps {
  title: string;
  items: ExperienceItem[];
  hasActions?: boolean;
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

const ScrolledCardsSection = ({title, items, hasActions}: ScrolledCardsSectionProps) => {
  let [activeItem, ...restOfItems] = items;
  return <ScrollableBox>
    <ItemCard experienceItem={activeItem} key={activeItem.title} active hasActions={hasActions}/>
    {restOfItems.map(item => {
      return <ItemCard experienceItem={item} key={item.title} hasActions={hasActions}/>
    })}
  </ScrollableBox>
}

export default ScrolledCardsSection;
