import { Grid, GridItem } from '@chakra-ui/react';
import Container from './components/Container/Container';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Sidebar from './components/shared/Sidebar';
import Navigation from './components/shared/Navigation';
import Main from './components/Main/Main';

const App: React.FC = () => {
    return (
        <Grid
            templateAreas={`"header header"
                  "sidebar main"
                  "sidebar footer"`}
            gridTemplateRows={'60px 1fr 50px'}
            gridTemplateColumns={'300px 1fr'}
            h="100vh"
            gap="2"
            color="blackAlpha.700"
            fontWeight="bold"
        >
            <GridItem pl="0" area={'header'}>
                <Container className="header-container">
                    <Header className="header">
                        <Navigation />
                    </Header>
                </Container>
            </GridItem>
            <GridItem pl="2" bg="pink.300" area={'sidebar'}>
                <Container className="sidebar-container">
                    <Sidebar>
                        <div>Hi, I'm the sidebar</div>
                    </Sidebar>
                </Container>
            </GridItem>
            <GridItem pl="2" bg="green.300" area={'main'}>
                <Container className="main-container">
                    <Main></Main>
                </Container>
            </GridItem>
            <GridItem pl="2" bg="blue.300" area={'footer'}>
                <Container className="footer-container">
                    <Footer className="footer">
                        <h4>Hi from Footer</h4>
                    </Footer>
                </Container>
            </GridItem>
        </Grid>
    );
};

export default App;
