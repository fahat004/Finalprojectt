import React from 'react';
import { logout } from '../../slice/authSlice';
import Logo from '../Noun';
import { Box, HStack, Button } from '@chakra-ui/react';
import { useAppDispatch } from '../../store';

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Box as="nav" bg="primary.500" py={3} pos="sticky" zIndex={9999} top={0}>
      <HStack justify="space-between" className="container">
        <Logo />

        <Box>
          <Button fontWeight="Bold" color="black" colorScheme="primary" onClick={() => dispatch(logout())}>Logout</Button>
        </Box>
      </HStack>
    </Box>
  )
}

export default Navbar;