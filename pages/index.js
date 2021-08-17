import Head from 'next/head';
import { Box, Text, Flex, Spacer } from '@chakra-ui/react';
import MarketTable from '../components/MarketTable';
import ColorModeToggle from '../components/ColorModeToggle';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Market</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box py={12} px={5} maxW="1100px" m="auto">
          <Box className="titleContainer">
            <Text fontSize="3xl">Crypto Market</Text>
            <ColorModeToggle />
          </Box>
          <Box mt={10}>
            <MarketTable />
          </Box>
          <Footer />
        </Box>
      </main>
    </div>
  );
}
