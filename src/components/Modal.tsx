import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styled} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ModalBox = styled(Box)(({theme}) => ({
  position: 'absolute',
  width: 400,
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  padding: 4,
}))

interface BasicModalProps {
  title: string;
  info: string;
}

export default function BasicModal({title, info}: BasicModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const StyledCard = styled(Card)(({theme}) => ({
    borderRadius: theme.shape.borderRadius,
    position: 'absolute',
    overflowY: 'auto',
    height: "fit-content",
    width: "80vw",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }));

  return (
    <>
      <Button onClick={handleOpen} size="small">Learn More</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledCard>
          <CardContent>
            <Typography id="modal-modal-title" variant="h4">
              {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{mt: 2}}>
              {info}
            </Typography>
          </CardContent>
        </StyledCard>
      </Modal>
    </>
  );
}
