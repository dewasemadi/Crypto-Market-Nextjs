import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';
import { formatPercent, formatColor } from '../../utils/formatting';

export default function Percentage({ percent }) {
  const color = formatColor(percent);

  const icon = (percent) => {
    if (percent > 0) {
      return <TriangleUpIcon w={3} h={3} color="green.500" my="auto" mr={1} />;
    } else {
      return <TriangleDownIcon w={3} h={3} color="red.500" my="auto" mr={1} />;
    }
  };

  return (
    <Box>
      <Flex>
        {icon(percent)}
        <Text color={color}>{formatPercent(percent)}</Text>
      </Flex>
    </Box>
  );
}
