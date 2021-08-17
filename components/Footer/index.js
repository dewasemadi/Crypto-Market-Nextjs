import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';

export default function index() {
  return (
    <Box mt={20} borderTopWidth="1px" borderTopColor="gray.200" pt={5}>
      <Flex justifyContent="center">
        <Text align="center">Build with</Text>
        <Image src="https://image.flaticon.com/icons/png/512/2107/2107845.png" alt="heart" boxSize="20px" my="auto" mx={2} />
        <Text align="center">by Dewa Semadi</Text>
      </Flex>

      <Text align="center" mt={2}>
        Visit the{' '}
        <a href="instagram.com/dewasemadi" target="_blank" rel="noopener" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
          repository
        </a>
      </Text>
    </Box>
  );
}
