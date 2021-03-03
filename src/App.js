import { Col, Row } from 'react-bootstrap';
import Cards from './Cards/Cards';
import Carousels from './components/Carousels/Carousels';
import Footer from './components/Footer/Footer';
import Forms from './components/Forms/Forms';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Modals from './components/Modals/Modals';
import Paginations from './components/Paginations/Paginations';
import logo from './logo.svg'

function App() {
  return (
    <>
    
      <Header />
      {/* <Carousels /> */}
      <Layout />
      <Cards />
      <Paginations />
      <Modals />
      <Forms />
      <Footer />
    </>
  );
}

export default App;
