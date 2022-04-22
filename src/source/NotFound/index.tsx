import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {

  return (
    <>
      <Helmet>
        <title>Not Found Page</title>
      </Helmet>

      <Box as="main" className="center" gap={2}>
        <Text>Your Page Not Found</Text>
        <Link to="/create-playlist">
          <Button>
            Go to content
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default NotFound;