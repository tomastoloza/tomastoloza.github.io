import {useState} from "react";
import {IconButton, Snackbar, styled} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CopyToClipboardTextArea = ({value}: {value: string}) => {
  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    setOpen(true);
    //TODO: Fix mobile writeText
    await navigator.clipboard.writeText(value);
  };

  const CopyTextArea = styled(Box)(({theme}) => ({
    backgroundColor: "lightgrey",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    alignItems: "center",
    width: "fit-content",
    gap: theme.spacing(2),
  }));

  return (
    <>
      <CopyTextArea>
        <Typography variant={"body1"}>{value}</Typography>
        <IconButton onClick={handleClick} color="default">
          <ContentCopyIcon/>
        </IconButton>
      </CopyTextArea>
      <Snackbar
        message="Copied to clipboard"
        // anchorOrigin={{vertical: "top", horizontal: "center"}}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};

export default CopyToClipboardTextArea;
