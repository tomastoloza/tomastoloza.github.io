import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import {ExperienceItem} from "../../models";
import {styled} from "@mui/material";


interface ExperienceCardProps {
  experienceItem: ExperienceItem;
}

export const StyledCard = styled(Card)(({theme}) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  minWidth: 300,
  scrollSnapAlign: "start",
}));

export const ItemCard = ({experienceItem}: ExperienceCardProps) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {experienceItem.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {experienceItem.company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {experienceItem.from} – {experienceItem.to}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" disabled>Learn More</Button>
      </CardActions>
    </StyledCard>
  );
}
