import { fetchCategories, fetchWorkouts } from "@/Redux/actions/actions";
import {
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
  const { Workouts, categories } = useSelector();
  const { selectedCategory, setSelectedCategory } = useState;
  const dispatch = useDispatch();
  //workout get from here
  useEffect(() => {
    dispatch(fetchWorkouts().finally);
    dispatch(fetchCategories());
  }, []);
  const handleFilter = (e) => {
    console.log(e.target.value);
    const category = e.target.value;
    setSelectedCategory(category)
    dispatch(fetchWorkouts(category))
  };
  return (
    <div>
      <VStack width={"100%"} gap={6}>
        <Heading Workouts Sessions />
        <HStack>
          <NativeSelectRoot size={s}>
            <NativeSelectField
              placeholder="Select The Field"
              value={selectedCategory}
              onChange={handleFilter}
            >
              {categories.map(() => {})}
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
                boxShadow={"2xl"}
              >
                <Image
                  src={workout.image}
                  borderRadius={"md"}
                  height={"200px"}
                />
                <Text>{workout.name}</Text>
                <Text>{workout.durration} in minutes</Text>
                <Text>
                  {workout.calories} -{workout.difficulty}
                </Text>
                <HStack>
                  <Text>{workout.category}</Text>
                  <Button colorPallete={"red"}>DELETE</Button>
                </HStack>
              </GridItem>
            );
          })}
        </Grid>
      </VStack>
    </div>
  );
};

