import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <Box bg="blue.500" p={4} color={white}>
      <Flex justifyContent={"space-around"}>
        <Link as={RouterLink} to="/" fontSize={"xl"} colorPalette={"red"}>
          Home
        </Link>
        <Link
          to="/workout"
          as={RouterLink}
          fontSize={"xl"}
          colorPalette={"red"}
        >
          Workout
        </Link>
      </Flex>
    </Box>
  );
};
