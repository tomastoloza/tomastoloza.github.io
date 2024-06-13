import {IconButton, Tooltip} from "@chakra-ui/react";

interface TooltipButtonProps {
  label: string;
  tooltipLabel: string;
  onClick: () => void;
  icon: React.ReactElement;
}

export default function TooltipButton({label, tooltipLabel, onClick, icon}: TooltipButtonProps) {
  return (
    <Tooltip label={tooltipLabel} placement="bottom" openDelay={500}>
      <IconButton
        aria-label={label}
        icon={icon}
        size={"lg"}
        color={"primary"}
        onClick={onClick}
      />
    </Tooltip>
  );
}
