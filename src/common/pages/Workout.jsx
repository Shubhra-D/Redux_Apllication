import {
  fetchCategories,
  fetchWorkouts,
  deleteWorkout,
} from "../../Redux/actions/actions";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  NativeSelect,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Workout = () => {
  const { workouts, categories } = useSelector((state) => state.fitness);
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkouts());
    dispatch(fetchCategories());
  }, []);

  const handleFilter = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    dispatch(fetchWorkouts(category));
  };

  return (
    <Box
      p={6}
      maxW="100%"
      mx="auto"
      bgGradient={"to-bl"}
      gradientFrom={"blue.100"}
      gradientTo={"pink.200"}
    >
      <VStack spacing={6} align="stretch">
        <Heading
          fontSize="3xl"
          textAlign="center"
          fontWeight={"bold"}
          color="teal.500"
          marginBottom={4}
        >
          Workout Sessions 💪
        </Heading>

        <HStack justify="center">
          <NativeSelect.Root
            placeholder="Filter by Category"
            value={selectedCategory}
            onChange={handleFilter}
            size="md"
            maxW="300px"
            bg="white"
            borderColor="gray.300"
            boxShadow="md"
            marginBottom={4}
            color={'whiteAlpha.950'} bgGradient={'to-l'} gradientFrom={'pink.400'} gradientTo={'blue.300'}
          >
            <NativeSelect.Field key={categories} placeholder="Select Category" fontWeight={'bold'} color={'whiteAlpha.950'} bgGradient={'to-l'} gradientFrom={'pink.400'} gradientTo={'blue.300'}>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </NativeSelect.Field>
          </NativeSelect.Root>
        </HStack>

        <Grid
          templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }}
          gap={6}
        >
          {workouts.map((workout) => (
            <GridItem
              key={workout.id}
              p={4}
              bg="white"
              borderRadius="xl"
              boxShadow="xl"
              transition="transform 0.2s ease-in-out"
              _hover={{ transform: "scale(1.03)" }}
            >
              <Image
                src={workout.image}
                alt={workout.name}
                borderRadius="md"
                height="200px"
                objectFit="fill"
                mb={4}
              />
              <Text fontSize="xl" fontWeight="bold" mb={1}>
                {workout.name}
              </Text>
              <Text color="gray.600">{workout.duration} minutes</Text>
              <Text>
                🔥 {workout.calories} Cal - 💪 {workout.difficulty}
              </Text>
              <Text color="gray.500" fontSize="sm" mt={2}>
                {workout.description}
              </Text>
              <HStack justify="space-between" mt={4}>
                <Text color="blue.400" fontWeight="medium">
                  {workout.category}
                </Text>
                <Button
                  bg="chocolate"
                  size="sm"
                  variant="outline"
                  color={"whiteAlpha.900"}
                  onClick={() => dispatch(deleteWorkout(workout.id))}
                >
                  Delete
                </Button>
              </HStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};
