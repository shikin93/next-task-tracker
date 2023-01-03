import { Container } from '@chakra-ui/react';
import React from 'react';
import Navbar from './navbar';

const Layout = ({ children }) => (
  <>
    <Container>
      <Navbar />
      <main>{children}</main>
    </Container>
  </>
);

export default Layout;
