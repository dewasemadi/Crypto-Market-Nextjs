import React from 'react';
import { Box, Button, useColorMode } from '@chakra-ui/react';

export default function index() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box className="spaceTop">
      <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
    </Box>
  );
}
