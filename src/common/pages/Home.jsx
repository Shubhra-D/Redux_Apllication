import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import flogo from '../../assets/flogo.jpg'


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
    <Box
      w="100vw"
      h="100vh"
      bgGradient="to-br"
   gradientFrom={'rgb(62, 161, 226)'}
   gradientVia={'purple.200'}
   gradientTo={'rgb(212, 76, 194)'}
      overflowX="hidden"
      px={[4, 10, 20]}
      py={8}
    >
      {/* Quote at Top */}
      <MotionBox
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        textAlign="center"
        marginBottom={4}
        p={6}
        borderRadius={'2xl'}
        boxShadow={' rgba(212, 82, 173, 0.1) 0px 10px 12px;'}
      >
        <Text
          fontSize={['lg', 'xl', '2xl']}
          fontStyle="italic"
          fontWeight="medium"
          color='teal.600'
          textShadow={'2xl'}
        >
          “{quotes[currentIndex]}”
        </Text>
      </MotionBox>

      {/* Welcome Section */}
      <VStack spacing={4} textAlign="center" mb={14}>
        <Heading fontSize={['2xl', '4xl']} color="teal.700">
          💪 Welcome to <span style={{ color: "#2B6CB0" }}>Fitness Mass</span>
        </Heading>
        <Text fontSize={['md', 'lg']} color="gray.600">
          🚀 Track your fitness goals and stay consistent, every day!
        </Text>
      </VStack>

      {/* Split Flex Section */}
      <Flex
        direction={['column', 'row']}
        align="center"
        justify="space-between"
        gap={[10, 20]}
        maxW="100%"
      >
        {/* Left Text */}
        <MotionText
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          fontSize={['md', 'lg', 'xl']}
          color='cyan.900'
          flex={1}
        >
          At <strong>Fitness Mass</strong>, we help you stay on track without
          pressure. Whether you're a gym rat 🐀 or a yoga newbie 🧘‍♀️,
          we’ve got the tools to make it fun, flexible, and focused.
          <br />
          <br />
          Get ready to crush your goals — one rep, one step, one day at a time.
        </MotionText>

        {/* Right Image */}
        <MotionImage
          src={flogo}
          alt="fitness"
          boxSize={['200px', '300px']}
          objectFit="contain"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          flexShrink={0}
          borderRadius={'4xl'}
        />
      </Flex>
    </Box>
  );
};
