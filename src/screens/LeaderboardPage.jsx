import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/NavBar"; // Import the Navbar component
import TopMembers from "../components/TopMembers"; // Assume you have a TopMembers component for the top 3 members
import Leaderboard from "../components/Leaderboard"; // Import the Leaderboard component

const LeaderboardPage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/leaderboard");
        const data = await response.json();
        setMembers(data); // Set the members from the fetched data
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchMembers();
  }, []);

  // Get the top 3 members for display in the TopMembers component
  const topMembers = members.slice(0, 3); // Get top 3 members
  const remainingMembers = members.slice(3); // Get members from rank 4 to 10

  return (
    <Box>
      {/* Navigation Bar */}
      <Navbar />

      {/* Top Members Box */}
      <Box marginTop="20px" padding="20px">
        <TopMembers topMembers={topMembers} /> {/* Pass top members as prop */}
      </Box>

      {/* Leaderboard for Remaining Members */}
      <Box marginTop="20px">
        <Leaderboard remainingMembers={remainingMembers} />{" "}
        {/* Pass remaining members as prop */}
      </Box>
    </Box>
  );
};

export default LeaderboardPage;
