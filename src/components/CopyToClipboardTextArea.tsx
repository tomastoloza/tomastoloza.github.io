import {Code} from "@chakra-ui/react";

const CopyToClipboardTextArea = ({value}: { value: string }) => {

  return (
    <Code display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          padding={4}
          gap={2}
          width={"fit-content"}>
      {value}
    </Code>
  );
};

export default CopyToClipboardTextArea;
