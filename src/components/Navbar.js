import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png'

export const Navbar = () => {
  
  const [hidden, sethHidden] = useState(1)

  const hiddenAc = () => sethHidden(1);
  const hiddenPr = () => sethHidden(2);
  const hiddenCon = () => sethHidden(3);
  const hiddenLoi = () => sethHidden(4);
  const hiddenCom = () => sethHidden(5);

  return (
    <Container>
        <Logo>
            <Link onClick={hiddenAc} to='/'><img src={logo} alt="logo"/></Link>
        </Logo>
        <Menu>
            <ul className='ule'>
                
                <li className='lie'>
                  <a  href='/#' onClick={hiddenAc} className={`link ${hidden===1 ? 'active' : ''}`}>Acceuil</a>
                </li>
                <li className='lie'>
                  <a  href='/#competence' onClick={hiddenCom} className={`link ${hidden===5 ? 'active' : ''}`}>Competence</a>
                </li>
                <li className='lie'>
                  <a href='/#projet' onClick={hiddenPr} className={`link ${hidden ===2 ? 'active' : ''}`}>Projet</a>
                </li>
                <li className='lie'>
                  <a href='/#contact' onClick={hiddenCon} className={`link ${hidden===3 ? 'active' : ''}`}>Contact</a>
                </li>
                <li className='lie'>
                  <a href='/#contact' onClick={hiddenLoi} className={`link ${hidden===4 ? 'active' : ''}`}>Loisir</a>
                </li>
                
            </ul>
        </Menu>
    </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    color: white;
    background-color: #0a1014;
    position: sticky;
    top: 0;
    z-index: 100;
`;
const Logo = styled.div`
    display: flex;
    margin-left: 20px;
    cursor: pointer;
   img{
      width: 60px;
      height: auto;
      margin-top: 5px;
  }
  @media screen and (max-width:1080px) {
    
    img{
      width: 60px;
      height: auto;
    }
  }
  
`;
const Menu = styled.div`
    display: flex;
    margin-right: 20px;
    .ule{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .lie{
        display: flex;
       list-style: none;
        margin:0 10px;
        font-size: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .link{
       color: white;
        text-decoration: none;
        padding: 5px;
        text-align: center;
        
    }
    .link:hover{
       background: #1160AB;
       border-radius: 5px;
       text-decoration: none;
    }
    .active{
      background: #1888ff;
      border-radius: 5px;
    }
  
  @media screen and (max-width:1080px) {
     
  }
  @media screen and (max-width:823px) {
      .lie{
        margin:0 4px;
        font-size: 15px;
    }
  }
 
  
`;
