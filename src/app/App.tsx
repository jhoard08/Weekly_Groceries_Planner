import Container from './components/Container/Container';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Sidebar from './components/shared/Sidebar';
import Navigation from './components/shared/Navigation';

const App: React.FC = () => {
    return (
        <Container className="page-container">
            <Container className="header-container">
                <Header className="header">
                    <Navigation></Navigation>
                </Header>
            </Container>
            <Container className="sidebar-container">
                <Sidebar></Sidebar>
            </Container>
            <Container className="footer-container">
                <Footer className="footer">
                    <h4>Hi from Footer</h4>
                </Footer>
            </Container>
        </Container>
    );
};

export default App;
