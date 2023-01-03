import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => (
  <nav>
    <Box py="1rem">
      <Heading as="h1" fontSize="2rem" textAlign="center" textTransform="uppercase">Todo List</Heading>
    </Box>
  </nav>
);

export default Navbar;
