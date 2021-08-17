import React from 'react';
import Router from 'next/router';
import { Box, Text, Stack, Button } from '@chakra-ui/react';

export default function Error() {
  const reloadHandler = () => {
    Router.reload();
  };

  return (
    <Box mt={50}>
      <Text align="center">Failed to get crypto data</Text>
      <Stack align="center" mt={5}>
        <Button onClick={reloadHandler}>Try Again</Button>
      </Stack>
    </Box>
  );
}
