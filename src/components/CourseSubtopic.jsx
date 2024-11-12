import { useState, React } from "react";
import { VStack, Box, Heading, IconButton, HStack } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const CourseSubtopic = ({ index, input }) => {
  const subtopics = ["1", "2", "3"];
  const test = input;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? subtopics.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === subtopics.length - 1 ? 0 : nextIndex + 1
    );
  };
  return (
    <VStack
      width="full"
      justifyContent="center"
      alignContent="center"
      border="4px solid rgba(66, 214, 116, 1)"
      borderRadius="25px"
    >
      <VStack m="4">
        <Heading
          size="lg"
          color="#3B3B3B"
          fontFamily="poppins"
          fontWeight="semibold"
          textAlign="center"
        >
          {input.name} {index}.{currentIndex + 1}
        </Heading>
        <Box textAlign="center">{input.contents[currentIndex]}</Box>
        <HStack justify="space-between" width="100%">
          <IconButton
            icon={<ArrowLeftIcon />}
            onClick={handlePrevious}
            aria-label="Previous"
          />
          <IconButton
            icon={<ArrowRightIcon />}
            onClick={handleNext}
            aria-label="Next"
            align="right"
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default CourseSubtopic;
