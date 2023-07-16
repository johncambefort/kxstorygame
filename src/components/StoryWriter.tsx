import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { UserInput } from "./UserInput";
import { Navbar } from "./Navbar";

export const StoryWriter: React.FC = () => {
  const [story, setStory] = useState(""); // TODO fetch story from context, don't expose setter

  return (
    <>
      <Navbar />
      <HStack>
        <Box width="20%" />
        <VStack width="60%">
          <Box>
            <Text>{story}</Text>
          </Box>
          <Divider />
          <Box width="100%">
            <UserInput setStory={setStory} />
          </Box>
        </VStack>
        <Box width="20%" />
      </HStack>
    </>
  );
};
