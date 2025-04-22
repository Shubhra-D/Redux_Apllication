import { Box, Flex, Link, Text, Image, defineKeyframes } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

// Animation for background gradient
const gradientAnimation = defineKeyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Fade-in effect for navbar
const fadeIn = defineKeyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Navbar = () => {
  return ( 
    <Box
      bgGradient='to-r' gradientFrom="purple.400" gradientVia="blue.500" gradientTo="cyan.500"
      bgSize="300% 300%"
      animation={`${gradientAnimation} 15s ease infinite`}
      px={6}
      py={4}
      boxShadow="xl"
      position="sticky"
      top={0}
      zIndex={999}
      animationName={fadeIn}
      animationDuration="1s"
      animationTimingFunction="ease-out"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="space-between"
      >
        {/* Logo section */}
        <Flex align="center" gap={3}>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/921/921347.png"
            alt="logo"
            boxSize="40px"
          />
          <Text fontSize="2xl" fontWeight="bold" color="whiteAlpha.900">
            FitFlex
          </Text>
        </Flex>

        {/* Nav Links */}
        <Flex gap={8}>
          <Link
            as={RouterLink}
            to="/"
            fontSize="lg"
            fontWeight="bold"
            color="BlackAlpha.900"
            _hover={{
              color: "crimson",
              transform: "translateY(-2px) scale(1.05)",
            }}
            transition="all 0.3s ease"
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/workout"
            fontSize="lg"
            fontWeight="bold"
            color="blackAlpha.900"
            _hover={{
              color: "crimson",
              transform: "translateY(-2px) scale(1.05)",
            }}
            transition="all 0.3s ease"
          >
            Workout
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
