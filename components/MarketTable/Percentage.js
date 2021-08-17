import React from 'react';
import { Text } from '@chakra-ui/react';
import { formatPercent, formatColor } from '../../utils/formatting';

export default function Percentage({ percent }) {
  const color = formatColor(percent);
  return <Text color={color}>{formatPercent(percent)}</Text>;
}
