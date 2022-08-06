import Container from './components/Container/Container';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Sidebar from './components/shared/Sidebar';

const App: React.FC = () => {
    return (
        <Container className="page-container">
            <Container className="header-container">
                <Header className="header">
                    <h1>Hi, From Header</h1>
                </Header>
            </Container>
            <Container className="sidebar-container">
                <Sidebar className="sidebar">
                    <h3>Hi from sidebar</h3>
                </Sidebar>
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
