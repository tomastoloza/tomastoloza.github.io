import {ItemCard} from "../components";
import {ExperienceItem} from "../models";
import {Box} from "@chakra-ui/react";

interface ScrolledCardsSectionProps {
  title: string;
  items: ExperienceItem[];
  hasActions?: boolean;
}

const ScrolledCardsSection = ({items, hasActions}: ScrolledCardsSectionProps) => {
  let [activeItem, ...restOfItems] = items;
  return <Box display="flex"
              flex={"none"}
              flexFlow={"row"}
              gap={4}
              justifyContent={["start", "start", "start", "center"]}
              overflowX="auto"
              scrollSnapType="x mandatory"
              maxWidth="100%"
              margin={0}
              paddingLeft={4}
              paddingRight={4}
  >
    <ItemCard experienceItem={activeItem}
              key={activeItem.title}
              active
              hasActions={hasActions}
    />
    {
      restOfItems.map(item => {
        return <ItemCard experienceItem={item} key={item.title} hasActions={hasActions}/>
      })
    }
  </Box>
}

export default ScrolledCardsSection;
