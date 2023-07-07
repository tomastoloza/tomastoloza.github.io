import * as React from 'react';
import {ExperienceItem} from "../../models";
import {Card, CardBody, CardFooter, CardHeader} from "@chakra-ui/card";
import {
  Button,
  Heading,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import {GoDotFill} from "react-icons/go";


interface ExperienceCardProps {
  experienceItem: ExperienceItem;
  active?: boolean;
  hasActions?: boolean
}

export const ItemCard = ({experienceItem, active, hasActions}: ExperienceCardProps) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Card minWidth={300}
          scrollSnapAlign={"start"}
          zIndex={100}
    >
      <CardHeader>
        <Text fontSize="xl" fontWeight={"bold"}>
          {experienceItem.title}
        </Text>
      </CardHeader>
      <CardBody>
        <Text fontSize="lg" fontWeight={"semibold"}>
          {experienceItem.company}
        </Text>
        <Text fontSize="md" fontWeight={"light"}>
          {experienceItem.from} – {experienceItem.to}
        </Text>
      </CardBody>
      {hasActions && <CardFooter>
          <Button onClick={onOpen}>View more</Button>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay/>
              <ModalContent maxWidth={"90vw"}>
                  <ModalHeader>
                      <Heading size={"lg"}>
                        {experienceItem.title}
                      </Heading>
                  </ModalHeader>
                  <ModalCloseButton/>
                  <ModalBody display="flex" flexDirection={"column"} justifyContent={"center"} gap={8}>

                      <Heading size={"md"}>
                          Description
                      </Heading>
                      <List spacing={3}>
                        {experienceItem.info && experienceItem.info.descriptionItems.map(item => {
                          return <ListItem>
                            <ListIcon as={GoDotFill}/>
                            {item}
                          </ListItem>
                        })}
                      </List>

                      <Heading size={"md"}>
                          Skills
                      </Heading>
                      <List spacing={3}>
                        {experienceItem.info && experienceItem.info.skills.map(item => {
                          return <ListItem>
                            <ListIcon as={GoDotFill}/>
                            {item}
                          </ListItem>
                        })}
                      </List>

                  </ModalBody>
                  <ModalFooter/>
              </ModalContent>
          </Modal>
      </CardFooter>}
    </Card>
  );
}
