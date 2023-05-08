import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import {ExperienceItem} from "../../models";
import {styled} from "@mui/material";
import BasicModal from "../Modal";


interface ExperienceCardProps {
  experienceItem: ExperienceItem;
  active?: boolean;
  hasActions?: boolean
}

export const ItemCard = ({experienceItem, active, hasActions}: ExperienceCardProps) => {

  const StyledCard = styled(Card)(({theme}) => ({
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    minWidth: 300,
    scrollSnapAlign: "start",
    borderColor: active ? theme.palette.primary.main : ""
  }));

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
      {hasActions ? <CardActions>
        <BasicModal title={experienceItem.title} info={experienceItem.info}/>
      </CardActions> : null}
    </StyledCard>
  );
}
