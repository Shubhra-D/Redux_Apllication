import {
  Text,
  Heading,
  Image,
  Box,
  Container,
  Flex,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

const MotionBox = motion.create(Box);
const MotionImage = motion.create(Image);
const MotionText = motion.create(Text);

const quotes = [
  "Push yourself, because no one else is going to do it for you. 💯",
  "The body achieves what the mind believes. 🧠🏋️",
  "No pain, no gain. Shut up and train. 🔥",
  "Don’t limit your challenges. Challenge your limits. 🚀",
  "Sore today, strong tomorrow. 💪",
];

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Motivational Quote at Top */}
      <MotionBox
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        textAlign="center"
        mb={8}
      >
        <Text
          fontSize={['md', 'lg']}
          fontStyle="italic"
          fontWeight="medium"
          maxW="700px"
          mx="auto"
          color="gray.600"
        >
          “{quotes[currentIndex]}”
        </Text>
      </MotionBox>

      {/* Welcome Message */}
      <Stack spacing={3} mb={12}>
        <Heading
          as="h1"
          fontSize={['2xl', '3xl']}
          color="teal.600"
          fontWeight="extrabold"
          textAlign="center"
        >
          💪 Welcome to <span style={{ color: "#2B6CB0" }}>Fitness Mass</span>
        </Heading>

        <Text fontSize={['md', 'lg']} color="gray.700" textAlign="center">
          🚀 Track your fitness goals and get stronger every day!
        </Text>
      </Stack>

      {/* Section: Text on Left + Image on Right */}
      <Flex
        direction={['column', 'column', 'row']}
        align="center"
        justify="space-between"
        gap={[10, 12]}
        mb={8}
      >
        <MotionText
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          fontSize={['md', 'lg']}
          maxW="500px"
          color="gray.800"
        >
          At <strong>Fitness Mass</strong>, we believe that consistency beats intensity.
          Whether you're a beginner or a seasoned athlete, our platform helps
          you stay accountable and motivated. Join us and start your journey
          toward a healthier, stronger you. 🏋️‍♂️🔥
        </MotionText>

        <MotionImage
          src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
          alt="Fitness"
          boxSize={['180px', '220px', '260px']}
          objectFit="contain"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </Flex>
    </>
  );
};
