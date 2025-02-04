import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import TopMembers from "../components/TopMembers";
import LeaderboardItem from "../components/LeaderboardItem";
import LeaderboardToggle from "../components/LeaderboardToggle";

const LeaderboardPage = () => {
  const [members, setMembers] = useState([]);
  const [activeButton, setActiveButton] = useState("weekly");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/leaderboard");
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchMembers();
  }, []);

  const sampleMembers = [
    {
      image: "/images/placeHolderImage.jpg",
      name: "John Doe",
      points: 4500,
      rank: 1,
    },
    {
      image: "/images/placeHolderImage.jpg",
      name: "Jane Smith",
      points: 4400,
      rank: 2,
    },
    {
      image: "/images/placeHolderImage.jpg",
      name: "Sam Wilson",
      points: 4300,
      rank: 3,
    },
    {
      image: "/images/placeHolderImage.jpg",
      name: "Chris Brown",
      points: 4200,
      rank: 4,
    },
    {
      image: "/images/placeHolderImage.jpg",
      name: "Alex Johnson",
      points: 4100,
      rank: 5,
    },
    {
      image: "/images/placeHolderImage.jpg",
      name: "Taylor White",
      points: 4000,
      rank: 6,
    },
    {
      image: "/images/placeHolderImage.jpg",
      name: "Jordan Green",
      points: 3900,
      rank: 7,
    },
    {
      image: "/images/placeHolderImage.jpg",
      name: "Morgan Blue",
      points: 3800,
      rank: 8,
    },
    {
      image: "/images/placeHolderImage.jpg",
      name: "Riley Red",
      points: 3700,
      rank: 9,
    },
    {
      image: "/images/placeHolderImage.jpg",
      name: "Casey Black",
      points: 3600,
      rank: 10,
    },
  ];

  const topMembers = sampleMembers.slice(0, 3);
  const remainingMembers = sampleMembers.slice(3, 10);
  const headingSize = useBreakpointValue({ base: "xl", md: "xl" });

  const handleToggle = (button) => {
    setActiveButton(button);
  };

  return (
    <Container minW="100%" p="0" m="0">
      <Navbar />
      <Container maxW="100%" align="center" py="65px" background="#F1F1F1">
        <VStack spacing={4} align="center" width="100%">
          {/* Top Members Section */}
          <Box bg="#316D60" borderRadius="lg" p={6} w="95%">
            <TopMembers topMembers={topMembers} />
          </Box>

          {/* Leaderboard Header and Toggle */}
          <HStack
            justifyContent="space-between"
            alignItems="center"
            width="98%"
            px={[4, 8]}
            py={4}
          >
            <Heading
              as="h2"
              size={headingSize}
              color="#3B3B3B"
              fontFamily="Poppins"
              fontWeight="semibold"
            >
              Leaderboard
            </Heading>
            <LeaderboardToggle
              activeButton={activeButton}
              handleToggle={handleToggle}
            />
          </HStack>

          {/* Leaderboard Items */}
          <Box width="100%" px={[4, 8]}>
            {remainingMembers.map((member, index) => (
              <LeaderboardItem
                key={index}
                image={member.image}
                name={member.name}
                points={member.points}
                rank={index + 4} // Ranks start from 4 for the remaining members
              />
            ))}
          </Box>
        </VStack>
      </Container>
    </Container>
  );
};

export default LeaderboardPage;
