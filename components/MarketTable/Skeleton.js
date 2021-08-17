import React from 'react';
import { Tbody, Tr, Td, Skeleton, Stack } from '@chakra-ui/react';

export default function SkeletonUI() {
  return (
    <Tbody>
      {[...Array(10)].map((_, idx) => (
        <Tr key={idx}>
          {[...Array(6)].map((_, idx) => (
            <Td key={idx}>
              <Stack>
                <Skeleton height="20px" />
              </Stack>
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
}
