import { Input, useColorModeValue, Box, Container } from '@chakra-ui/react';

const Searchbar: React.FC = () => {
    return (
        <Container maxW="100%" centerContent>
            <Box
                bg={useColorModeValue('gray.100', 'gray.900')}
                w="80%"
                mt={3}
                rounded="6px"
            >
                <Input variant="filled" placeholder="Search..." />
            </Box>
        </Container>
    );
};

export default Searchbar;
