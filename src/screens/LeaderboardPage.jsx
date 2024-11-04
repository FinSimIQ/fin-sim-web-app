import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import TopMembers from "../components/TopMembers";
import Leaderboard from "../components/Leaderboard";

const LeaderboardPage = () => {
  const [members, setMembers] = useState([]);

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

  const topMembers = members.slice(0, 3);
  const remainingMembers = members.slice(3, 10);

  return (
    <Box>
      <Navbar />
      <Box mt="20px" px="20px">
        <TopMembers topMembers={topMembers} />
      </Box>
      <Box mt="20px">
        <Leaderboard remainingMembers={remainingMembers} />
      </Box>
    </Box>
  );
};

export default LeaderboardPage;
