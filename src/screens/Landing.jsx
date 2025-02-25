import {
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
  useMediaQuery,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Box,
} from "@chakra-ui/react";
import LogoImage from "../assets/logo.svg";
import HeaderImage from "../assets/header.svg";
import LeftLandingCard from "../assets/leftLandingCard.svg";
import MiddleLandingCard from "../assets/middleLandingCard.svg";
import RightLandingCard from "../assets/rightLandingCard.svg";
import LeftLandingCardImage from "../assets/leftLandingCardImage.svg";
import MiddleLandingCardImage from "../assets/middleLandingCardImage.svg";
import RightLandingCardImage from "../assets/rightLandingCardImage.svg";
import {
  ArrowForwardIcon,
  ChevronDownIcon,
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 1200px)");

  // Common link styles that can be extracted
  const linkStyles = {
    _hover: { color: "brand.500", textDecoration: "none" }
  };

  // Common card styles that can be extracted
  const cardBaseStyles = {
    w: { base: "100%", sm: "90%", md: "80%", lg: "30%", xl: "28%" },
    position: "relative",
  };

  const cardBoxStyles = {
    position: "relative",
    w: "100%",
    h: "100%",
    bgRepeat: "no-repeat",
    bgSize: "100% 100%",
    bgPos: "center",
    p: { base: "4", sm: "5", md: "6", lg: "5", xl: "6" },
    display: "flex",
    flexDirection: "column",
    aspectRatio: 1
  };

  const cardTextStyles = {
    fontWeight: "medium",
    fontSize: { base: "2xl", sm: "3xl", md: "3xl", lg: "2xl", xl: "3xl" },
    color: "#262626",
    lineHeight: "tight",
    mb: { base: 0.5, sm: 1, md: 2, lg: 1 },
    noOfLines: 2
  };

  const cardDescriptionStyles = {
    fontFamily: "metrophobic",
    fontSize: { base: "lg", sm: "xl", md: "xl", lg: "lg", xl: "lg" },
    color: "#5D5D5D",
    lineHeight: "short",
    noOfLines: 3
  };

  return (
    <Container minW="100%" p="0" m="0" bg="brand.600" fontFamily="poppins">
      <Flex
        spacing="24px"
        bg="white"
        maxW={{ base: "36%", sm: "26%", md: "70%", lg: "60%", xl: "50%" }}
        borderRadius="24"
        px="6"
        alignItems="center"
        position="sticky"
        top="3%"
        left={{ base: "32%", sm: "32%", md: "15%", lg: "20%", xl: "25%" }}
        fontWeight="semibold"
        letterSpacing="tightish"
        fontSize="lg"
        boxShadow="md"
        zIndex="1"
      >
        <Image src={LogoImage} alt="Logo" h="12" my="2" draggable="false" />
        <Spacer />
        {isMobile ? (
          <Menu>
            <MenuButton as={IconButton}>
              <IconButton
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                onClick={() => setIsOpen(!isOpen)}
                fontSize="3xl"
                variant="outline"
                aria-label="Toggle Navigation"
                bg="transparent"
                border="none"
                _hover={{ bg: "gray.100" }}
                color="#262626"
              />
            </MenuButton>
            <MenuList>
              <MenuItem as={ChakraLink} {...linkStyles}>
                <ChakraLink as={ReactRouterLink} to="/" {...linkStyles}>
                  Home
                </ChakraLink>
              </MenuItem>
              <MenuItem as={ChakraLink} {...linkStyles}>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/learn"
                  {...linkStyles}
                >
                  Learn
                </ChakraLink>
              </MenuItem>
              <MenuItem as={ChakraLink} {...linkStyles}>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/challenges"
                  {...linkStyles}
                >
                  Challenges
                </ChakraLink>
              </MenuItem>
              <MenuItem as={ChakraLink} {...linkStyles}>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/leaderboard"
                  {...linkStyles}
                >
                  Leaderboard
                </ChakraLink>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/login");
                }}
              >
                <Button colorScheme="brand" variant="primary" borderRadius="8">
                  Sign In
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <ChakraLink as={ReactRouterLink} to="/" {...linkStyles}>
              Home
            </ChakraLink>
            <Spacer />
            <ChakraLink
              as={ReactRouterLink}
              to="/learn"
              {...linkStyles}
            >
              Learn
            </ChakraLink>
            <Spacer />
            <ChakraLink
              as={ReactRouterLink}
              to="/challenges"
              {...linkStyles}
            >
              Challenges
            </ChakraLink>
            <Spacer />
            <ChakraLink
              as={ReactRouterLink}
              to="/leaderboard"
              {...linkStyles}
            >
              Leaderboard
            </ChakraLink>
            <Spacer />
            <Button
              colorScheme="brand"
              variant="primary"
              borderRadius="20"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In
            </Button>
          </>
        )}
      </Flex>

      <Container minW="100%" py="8" align="center">
        <HStack 
          px={{ base: "4", md: "8", lg: "12" }}
          mt={{ base: "8", md: "12" }}
          mb={{ base: "8", md: "12" }}
          justify="center"
          spacing={{ base: "4", md: "8", lg: "12" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Image 
            src={HeaderImage} 
            alt="Header" 
            w={{ base: "90%", sm: "80%", md: "45%", lg: "40%" }}
            maxW="600px"
            draggable="false" 
          />
          <VStack 
            textAlign={{ base: "center", md: "left" }}
            align={{ base: "center", md: "flex-start" }}
            spacing={{ base: "4", md: "6" }}
          >
            <HStack spacing="0" fontWeight="bold" letterSpacing="tightest">
              <Text fontSize={{ base: "5xl", md: "6xl" }} color="white">
                finsim
              </Text>
              <Text fontSize={{ base: "5xl", md: "6xl" }} color="brand.500">
                IQ
              </Text>
            </HStack>
            <Container
              maxW={{ base: "sm", md: "md" }}
              fontSize={{ base: "2xl", md: "3xl" }}
              fontFamily="metrophobic"
              color="white"
              px="0"
            >
              A platform to learn and master financial literacy in a fun and
              engaging way!
            </Container>
            <Button
              colorScheme="brand"
              mt="4"
              borderRadius="20"
              fontWeight="semibold"
              letterSpacing="tightish"
              fontSize="lg"
              variant="primary"
              rightIcon={<ArrowForwardIcon boxSize="6" />}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Get Started
            </Button>
          </VStack>
        </HStack>
        <ChevronDownIcon boxSize="11" color="white" onClick={() => {}} />
      </Container>
      <Container minW="100%" py={{ base: "4", md: "6" }} px={{ base: "4", md: "8", lg: "16" }} bg="#F4F4F4">
        <HStack 
          pb={{ base: "6", md: "8" }} 
          align="baseline"
          spacing="8"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Container
            maxW={{ base: "sm", md: "lg" }}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            fontWeight="semibold"
            letterSpacing="tightish"
            color="#3B3B3B"
            textAlign={{ base: "center", lg: "left" }}
            px="0"
          >
            Learn Finance and Stock Market Concepts
          </Container>
          <Spacer display={{ base: "none", lg: "block" }} />
          <Text
            maxW={{ base: "2xl", md: "3xl" }}
            fontFamily="metrophobic"
            fontSize={{ base: "md", sm: "lg", md: "xl" }}
            color="#5D5D5D"
            textAlign={{ base: "center", lg: "left" }}
          >
            Explore real-world stock simulations, tackle interactive finance
            quizzes, and navigate dynamic market challenges. Enhance your
            strategy development, refine your decision-making skills, and build
            your financial confidence.
          </Text>
        </HStack>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "4", sm: "6", md: "8", lg: "12", xl: "16" }}
          justify="center"
          align="center"
          w="100%"
          px="0"
        >
          <ChakraLink
            as={ReactRouterLink}
            to="/learn"
            _hover={{ textDecoration: "none" }}
            {...cardBaseStyles}
          >
            <Box
              {...cardBoxStyles}
              bgImage={LeftLandingCard}
            >
              <VStack 
                align="flex-start" 
                h="100%" 
                spacing={0}
                px={{ base: "3", sm: "4", md: "5", lg: "4", xl: "5" }}
                py={{ base: "3", sm: "4", md: "5", lg: "4", xl: "5" }}
                justify="space-between"
              >
                <Box maxW="95%">
                  <Text 
                    {...cardTextStyles}
                  >
                    Interactive Finance Quizzes
                  </Text>
                  <Text 
                    {...cardDescriptionStyles}
                  >
                    Learn finance and stock market concepts through complex and interactive quizzes
                  </Text>
                </Box>
                <Image 
                  src={LeftLandingCardImage} 
                  w={{ base: "40%", sm: "42%", md: "45%", lg: "42%", xl: "45%" }}
                  draggable="false"
                  alignSelf="flex-start"
                  objectFit="contain"
                />
              </VStack>
            </Box>
          </ChakraLink>
          
          <ChakraLink
            as={ReactRouterLink}
            to="/leaderboard"
            _hover={{ textDecoration: "none" }}
            {...cardBaseStyles}
          >
            <Box
              {...cardBoxStyles}
              bgImage={MiddleLandingCard}
            >
              <VStack 
                align="flex-start" 
                h="100%" 
                spacing={0}
                px={{ base: "3", sm: "4", md: "5", lg: "4", xl: "5" }}
                py={{ base: "3", sm: "4", md: "5", lg: "4", xl: "5" }}
                justify="space-between"
              >
                <Image 
                  src={MiddleLandingCardImage} 
                  w={{ base: "40%", sm: "42%", md: "45%", lg: "42%", xl: "45%" }}
                  draggable="false"
                  alignSelf="flex-start"
                  objectFit="contain"
                />
                <Box maxW="95%">
                  <Text 
                    {...cardTextStyles}
                  >
                    Learn with Friends
                  </Text>
                  <Text 
                    {...cardDescriptionStyles}
                  >
                    Discover friends to learn with and find encouragement along the way by earning badges with completed lessons
                  </Text>
                </Box>
              </VStack>
            </Box>
          </ChakraLink>

          <ChakraLink
            as={ReactRouterLink}
            to="/challenges"
            _hover={{ textDecoration: "none" }}
            {...cardBaseStyles}
          >
            <Box
              {...cardBoxStyles}
              bgImage={RightLandingCard}
            >
              <VStack 
                align="flex-end" 
                h="100%" 
                spacing={0}
                px={{ base: "3", sm: "4", md: "5", lg: "4", xl: "5" }}
                py={{ base: "3", sm: "4", md: "5", lg: "4", xl: "5" }}
                justify="space-between"
              >
                <Box width="100%">
                  <Text 
                    {...cardTextStyles}
                    textAlign="right"
                  >
                    Weekly Market Challenges
                  </Text>
                  <Text 
                    {...cardDescriptionStyles}
                    textAlign="right"
                  >
                    Enhance your strategy development and critical thinking skills by engaging in virtual trading scenarios
                  </Text>
                </Box>
                <Image 
                  src={RightLandingCardImage} 
                  w={{ base: "40%", sm: "42%", md: "45%", lg: "42%", xl: "45%" }}
                  draggable="false"
                  alignSelf="flex-end"
                  objectFit="contain"
                />
              </VStack>
            </Box>
          </ChakraLink>
        </Stack>
      </Container>
    </Container>
  );
};

export default Landing;
