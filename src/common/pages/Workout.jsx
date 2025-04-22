import { fetchCategories, fetchWorkouts } from '../../Redux/actions/actions';
import {
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  NativeSelectField,
  NativeSelectRoot,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




export const Workout = () => {
  const { workouts, categories } = useSelector((state)=>state.fitness);
   console.log(workouts,categories)
  const { selectedCategory, setSelectedCategory } = useState;
  const dispatch = useDispatch();
 
  //workout get from here
  useEffect(() => {
    //dispatch fetchWorkouts
    dispatch(fetchWorkouts());
    //fetchCategories
    dispatch(fetchCategories());
  }, []);
  const handleFilter = (e) => {
    console.log(e.target.value);
    const category = e.target.value;
    setSelectedCategory(category)
    dispatch(fetchWorkouts(category))
  };
  return (
    <>
      <VStack width={"100%"} gap={6}>
        <Heading>Workouts Sessions</Heading>
        <HStack>
          <NativeSelectRoot size="sm" width={"5"}>
            <NativeSelectField
              placeholder="Select The Field"
              value={selectedCategory}
              onChange={handleFilter}
            >
              {categories.map((category) => {
                return <option key={category.id}>
                  value={category.name}
                </option>
              })}
            </NativeSelectField>
          </NativeSelectRoot>
        </HStack>
        <Grid
          templateColumns={"repeat(auto=fit,minmax(300px,1fr))"}
          gap={6}
          w="full"
        >
          {workouts.map((workout) => {
            return (
              <GridItem
                key={workout.id}
                p={4}
                borderWidth={"1px"}
                maxW={"400px"}
                boxShadow={"lg"}
                borderRadius={"lg"}
                bg={"white"}
              >
                <Image
                  src={workout.image}
                  borderRadius={"md"}
                  height={"200px"}
                  mb={2}
                />
                <Text fontSize={"lg"} fontWeight={"bold"}>{workout.name}</Text>
                <Text>{workout.duration} in minutes</Text>
                <Text>
                  {workout.calories} Cal -{workout.difficulty}
                </Text>
                <Text color={"gray.500"}>{workout.description}</Text>{" "}
                <HStack justifyContent={"space-between"}>
                  <Text color={"blue.500"}>{workout.category}</Text>
                  <Button colorPallete={"red"}>DELETE</Button>
                </HStack>
              </GridItem>
            );
          })}
        </Grid>
      </VStack>
    </>
  );
};

