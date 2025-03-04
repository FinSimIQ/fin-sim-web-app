import { useState, React } from "react";
import {
  VStack,
  Text,
  Box,
  Heading,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

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
      <VStack m="6">
        <Heading
          size="lg"
          color="#3B3B3B"
          fontFamily="poppins"
          fontWeight="semibold"
          textAlign="center"
        >
          {index}.{currentIndex + 1}: {input.title}
        </Heading>
        <Box mt="4" mx="8rem" fontFamily="poppins" textAlign="center">
          {input.description}
        </Box>
        <HStack justify="space-between" width="100%">
          <IconButton
            icon={<ArrowBackIcon />}
            onClick={handlePrevious}
            aria-label="Previous"
            variant="ghost"
            rounded="full"
          />

          <Box>
            {Array.from({ length: subtopics.length }).map((_, index) => (
              <Box
                key={index}
                borderRadius="50%"
                bgColor={
                  index === currentIndex ? "rgba(66, 214, 116, 1)" : "#E3E3E3"
                }
                width="10px"
                height="10px"
                display="inline-block"
                mx="1"
              />
            ))}
          </Box>

          <IconButton
            icon={<ArrowForwardIcon />}
            onClick={handleNext}
            aria-label="Next"
            align="right"
            variant="solid"
            rounded="full"
            bgColor="rgba(66, 214, 116, 1)"
            color="white"
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default CourseSubtopic;
