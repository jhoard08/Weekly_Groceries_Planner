import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

interface IProps {
    children: React.ReactNode;
}

const Providers: React.FC<IProps> = ({ children }) => {
    return <ChakraProvider>{children}</ChakraProvider>;
};

export default Providers;
