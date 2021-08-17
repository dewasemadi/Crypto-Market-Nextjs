import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Spinner, Button, Box, Table, Thead, Tr, Th, Text } from '@chakra-ui/react';
import TableData from './TableData';
import SkeletonUI from './Skeleton';
import Error from './Error';
import { getMarket } from '../../data/data';

export default function index() {
  const [page, setPage] = useState(1);
  const [countPage, setCountPage] = useState(0);
  const { data, isError, isLoading, isFetching, isSuccess } = useQuery(`crypto-market-${page}`, () => getMarket(page), {
    refetchInterval: 2000,
  });

  const previousPageHandler = () => {
    setPage((prev) => prev - 1);
    setCountPage((prev) => prev - 10);
  };

  const nextPageHandler = () => {
    setPage((prev) => prev + 1);
    setCountPage((prev) => prev + 10);
  };

  return (
    <Box>
      {isError ? (
        <Error />
      ) : (
        <Box className="tableContainer">
          {/* {isFetching && <Spinner color="blue.500" position="fixed" top={10} right={10} />} */}
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>
                  <Text align="center">NUMBER</Text>
                </Th>
                <Th>Coin</Th>
                <Th isNumeric>LAST PRICE (IDR)</Th>
                <Th>24% CHANGE</Th>
                <Th isNumeric>TOTAL VOLUME</Th>
                <Th isNumeric>MARKET CAP(IDR)</Th>
              </Tr>
            </Thead>
            {isLoading ? <SkeletonUI /> : <TableData data={data} isSuccess={isSuccess} countPage={countPage} />}
          </Table>
        </Box>
      )}
      <Box className="pageButtonContainer">
        <Button colorScheme="facebook" variant="outline" size="sm" onClick={previousPageHandler} disabled={page === 1 ? true : false}>
          Previous
        </Button>
        <Text mx={5} my="auto">
          {page}
        </Text>
        <Button colorScheme="facebook" variant="outline" size="sm" onClick={nextPageHandler}>
          Next
        </Button>
      </Box>
    </Box>
  );
}
