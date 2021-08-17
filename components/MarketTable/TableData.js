import React from 'react';
import { Box, Badge, Text, Flex, Tbody, Tr, Td } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import Percentage from './Percentage';
import { formatNumber } from '../../utils/formatting';

export default function TableData({ data, isSuccess }) {
  return (
    <Tbody>
      {isSuccess &&
        data?.map((item, idx) => (
          <Tr key={idx}>
            <Td>
              <Text align="center">{idx + 1}</Text>
            </Td>
            <Td>
              <Flex>
                <Image boxSize="30px" src={item.image} alt={item.name} />
                <Text my="auto" mx={5}>
                  {item.name}
                </Text>
                <Box>
                  <Badge colorScheme="green">
                    <Text my="auto">{item.symbol}</Text>
                  </Badge>
                </Box>
              </Flex>
            </Td>
            <Td isNumeric>{formatNumber(item.current_price)}</Td>
            <Td>
              <Percentage percent={item.price_change_percentage_24h} />
            </Td>
            <Td isNumeric>{formatNumber(item.total_volume)}</Td>
            <Td isNumeric>{formatNumber(item.market_cap)}</Td>
          </Tr>
        ))}
    </Tbody>
  );
}
