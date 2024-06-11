import React from 'react';
import { Box, Button, Slider, Text, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from 'react-icons/fa';

const MusicPlayer = () => {
  return (
    <VStack spacing={4} align="center" justify="center" p={5}>
      <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
      <Box w="full" bg="gray.100" p={4} borderRadius="md">
        <VStack spacing={4}>
          <Text>Now Playing: [Song Name Placeholder]</Text>
          <HStack spacing={4}>
            <Button leftIcon={<Icon as={FaBackward} />} variant="outline">Prev</Button>
            <Button leftIcon={<Icon as={FaPlay} />} variant="solid">Play</Button>
            <Button leftIcon={<Icon as={FaPause} />} variant="outline">Pause</Button>
            <Button leftIcon={<Icon as={FaForward} />} variant="outline">Next</Button>
          </HStack>
          <Slider aria-label="song-progress" defaultValue={30}>
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
          <HStack w="full" justify="space-between">
            <Text>0:00</Text>
            <Text>-3:45</Text>
          </HStack>
          <HStack spacing={4}>
            <Icon as={FaVolumeUp} />
            <Slider aria-label="volume-control" defaultValue={70}>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default MusicPlayer;