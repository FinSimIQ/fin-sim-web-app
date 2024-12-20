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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
                onClick={toggleMenu}
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
              <MenuItem
                as={ChakraLink}
                _hover={{ color: "brand.500", textDecoration: "none" }}
              >
                <ChakraLink
                  as={ReactRouterLink}
                  to="/"
                  _hover={{ color: "brand.500", textDecoration: "none" }}
                >
                  Home
                </ChakraLink>
              </MenuItem>
              <MenuItem
                as={ChakraLink}
                _hover={{ color: "brand.500", textDecoration: "none" }}
              >
                <ChakraLink
                  as={ReactRouterLink}
                  to="/learn"
                  _hover={{ color: "brand.500", textDecoration: "none" }}
                >
                  Learn
                </ChakraLink>
              </MenuItem>
              <MenuItem
                as={ChakraLink}
                _hover={{ color: "brand.500", textDecoration: "none" }}
              >
                <ChakraLink
                  as={ReactRouterLink}
                  to="/challenges"
                  _hover={{ color: "brand.500", textDecoration: "none" }}
                >
                  Challenges
                </ChakraLink>
              </MenuItem>
              <MenuItem
                as={ChakraLink}
                _hover={{ color: "brand.500", textDecoration: "none" }}
              >
                <ChakraLink
                  as={ReactRouterLink}
                  to="/leaderboard"
                  _hover={{ color: "brand.500", textDecoration: "none" }}
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
            <ChakraLink
              as={ReactRouterLink}
              to="/"
              _hover={{ color: "brand.500", textDecoration: "none" }}
            >
              Home
            </ChakraLink>
            <Spacer />
            <ChakraLink
              as={ReactRouterLink}
              to="/learn"
              _hover={{ color: "brand.500", textDecoration: "none" }}
            >
              Learn
            </ChakraLink>
            <Spacer />
            <ChakraLink
              as={ReactRouterLink}
              to="/challenges"
              _hover={{ color: "brand.500", textDecoration: "none" }}
            >
              Challenges
            </ChakraLink>
            <Spacer />
            <ChakraLink
              as={ReactRouterLink}
              to="/leaderboard"
              _hover={{ color: "brand.500", textDecoration: "none" }}
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
        <HStack px="4" mt="12" mb="12" justify="center">
          <Image src={HeaderImage} alt="Header" w="50%" draggable="false" />
          <VStack textAlign="center">
            <HStack spacing="0" fontWeight="bold" letterSpacing="tightest">
              <Text fontSize="6xl" color="white">
                finsim
              </Text>
              <Text fontSize="6xl" color="brand.500">
                IQ
              </Text>
            </HStack>
            <Container
              maxW="md"
              fontSize="3xl"
              fontFamily="metrophobic"
              color="white"
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
        <ChevronDownIcon boxSize="12" color="white" onClick={() => {}} />
      </Container>
      <Container minW="100%" py="6" px="16" bg="#F4F4F4">
        <HStack pb="8" align="baseline">
          <Container
            maxW="lg"
            fontSize="4xl"
            fontWeight="semibold"
            letterSpacing="tightish"
            color="#3B3B3B"
          >
            Learn Finance and Stock Market Concepts
          </Container>
          <Spacer />
          <Text
            maxW="3xl"
            fontFamily="metrophobic"
            fontSize="xl"
            color="#5D5D5D"
          >
            Explore real-world stock simulations, tackle interactive finance
            quizzes, and navigate dynamic market challenges. Enhance your
            strategy development, refine your decision-making skills, and build
            your financial confidence.
          </Text>
        </HStack>
        <HStack justify="space-between">
          <ChakraLink
            as={ReactRouterLink}
            to="/learn"
            my="4"
            _hover={{ textDecoration: "none" }}
          >
            <Container
              minH="sm"
              maxH="xl"
              maxW="sm"
              px="8"
              py="4"
              m="0"
              bgImage={LeftLandingCard}
              bgRepeat="no-repeat"
              bgSize="contain"
              bgPos="center"
            >
              <Text maxW="sm" fontWeight="medium" fontSize="3xl">
                Interactive Finance Quizzes
              </Text>
              <Text maxW="sm" py="2" fontFamily="metrophobic" fontSize="lg">
                Learn finance and stock market concepts through complex and
                interactive quizzes
              </Text>
              <HStack>
                <Image src={LeftLandingCardImage} w="50%" draggable="false" />
                <Spacer />
              </HStack>
            </Container>
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to="/leaderboard"
            my="4"
            _hover={{ textDecoration: "none" }}
          >
            <Container
              minH="sm"
              maxH="xl"
              maxW="sm"
              px="8"
              py="8"
              m="0"
              bgImage={MiddleLandingCard}
              bgRepeat="no-repeat"
              bgSize="contain"
              bgPos="center"
            >
              <HStack>
                <Image src={MiddleLandingCardImage} w="50%" draggable="false" />
                <Spacer />
              </HStack>
              <Text maxW="md" pt="4" pb="2" fontWeight="medium" fontSize="3xl">
                Learn with Friends
              </Text>
              <Text maxW="sm" fontFamily="metrophobic" fontSize="lg">
                Discover friends to learn with and find encouragement along the
                way by earning badges with completed lessons
              </Text>
            </Container>
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to="/challenges"
            my="4"
            _hover={{ textDecoration: "none" }}
          >
            <Container
              minH="sm"
              maxH="xl"
              maxW="sm"
              px="8"
              py="4"
              m="0"
              textAlign="right"
              bgImage={RightLandingCard}
              bgRepeat="no-repeat"
              bgSize="contain"
              bgPos="center"
            >
              <Text maxW="sm" fontWeight="medium" fontSize="3xl">
                Weekly Market Challenges
              </Text>
              <Text maxW="sm" py="2" fontFamily="metrophobic" fontSize="lg">
                Enhance your strategy development and critical thinking skills
                by engaging in virtual trading scenarios
              </Text>
              <HStack>
                <Spacer />
                <Image src={RightLandingCardImage} w="50%" draggable="false" />
              </HStack>
            </Container>
          </ChakraLink>
        </HStack>
      </Container>
    </Container>
  );
};

export default Landing;
