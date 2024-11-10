import React, { useState } from 'react';
import { Box, Button, Input, Text, VStack, Flex, Image, useBreakpointValue, Container, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import LogoImage from "../assets/logo.svg";

const FriendSearch = ({ onSearch, onAddFriend }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [friendsList, setFriendsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const navigate = useNavigate();

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const results = await onSearch(searchQuery);
      setFriendsList(results);
    } catch (error) {
      console.error('Error searching friends:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container minW="100%" minH="100vh" bg="white" py="8" fontFamily="poppins" display="flex" alignItems="center" justifyContent="center">
      <IconButton
        icon={<ArrowBackIcon />}
        aria-label="Return to Leaderboard"
        color="black"
        position="fixed"
        top="5"
        left="5"
        onClick={() => navigate('/leaderboard')}
        colorScheme="gray"
        variant="ghost"
        size="lg"
        zIndex="1"
      />

      {/* Main Content */}
      <Box textAlign="center" py={10} px={6} maxW="md" mx="auto" position="relative">
        {/* Friends List Header and Icons - positioned at the top of the screen */}
        <Box position="absolute" top="16" left="0" right="0" textAlign="center" zIndex="1">
          <Text fontSize="5xl" fontWeight="semibold" mb={2} color="#262626">
            Add Friends!
          </Text>
          <Flex justify="center" gap={4} mb={6}>
            <Image src={LogoImage} alt="Logo" boxSize="80px" draggable="false" borderRadius="full" />
            <Image src={LogoImage} alt="Logo" boxSize="80px" draggable="false" borderRadius="full" />
            <Image src={LogoImage} alt="Logo" boxSize="80px" draggable="false" borderRadius="full" />
          </Flex>
        </Box>

        <Box mt="250px">
          <Text fontSize="lg" color="gray.500" mb={4}>
            Add your friends to see what they are doing
          </Text>

          <VStack spacing={4} align="stretch" mb={4}>
            <Input
              placeholder="Search for friends..."
              color="black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="lg"
              bg="white"
              borderRadius="20px"
              boxShadow="sm"
              _placeholder={{ color: "gray.400" }}
            />
            <Button
              onClick={handleSearch}
              isLoading={isLoading}
              bg="brand.500"
              size="lg"
              borderRadius="20px"
              fontWeight="semibold"
              _hover={{ bg: "rgba(66, 214, 116, 0.5)", color: "#3b3b3b" }}
            >
              Search
            </Button>
          </VStack>

          {friendsList.length > 0 && (
            <Box mt={6}>
              {friendsList.map((friend) => (
                <Flex
                  key={friend.id}
                  align="center"
                  justify="space-between"
                  p={4}
                  bg="gray.50"
                  borderRadius="md"
                  mb={2}
                  boxShadow="sm"
                >
                  <Text fontWeight="medium" color="#262626">{friend.name}</Text>
                  <Button
                    colorScheme="purple"
                    bg="brand.500"
                    color="white"
                    onClick={() => onAddFriend(friend.id)}
                    size={isMobile ? 'sm' : 'md'}
                    borderRadius="20px"
                  >
                    Add
                  </Button>
                </Flex>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default FriendSearch;
