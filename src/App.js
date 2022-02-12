import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import styled from 'styled-components';
import { Acceuil } from './components/Acceuil';
import { Contact } from './components/Contact';
import { Loisir } from './components/Loisir';
import { Navbar } from './components/Navbar';
import { Projet } from './components/Projet';

function App() {
  return (
    <Container>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loisir" element={<Loisir />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0a1014;
  width:100%;
    
  @media screen and (max-width:1080px) {
     
  }
  @media screen and (max-width:823px) {
      
  }
  @media screen and (max-width: 530px){
      
  }
`;