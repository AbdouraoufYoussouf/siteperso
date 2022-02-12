import React from 'react';
import styled from 'styled-components';
import profil1 from '../images/profil1.png';
import { FaCircle} from "react-icons/fa";

export const Abaout = () => {
  return (
    <Container>
        <h1>Apropos de moi</h1>
        <span className='qui'>Why choose me?</span>
        <AbaoutCont>
            <Photo>
                  <img src={profil1} />
            </Photo>
            <Description>
                <p>je suis etudient en master 2 en ingenierie informatique à la faculté des sciences de Tetouan</p>
                <p>je viens des iles Comores et je fais me etudes ici au maroc depuis 2016</p>
                <p>je suis au courant que j'ai pas accés d'experence dans le developement et c'est pourquoi je solicite à vous chere recruteur de me de donner une chance de vous prouver ma valeur</p>
                <p>Avec la technologie React j'ai creer cette meme portfolio.</p>
                <ul className='ula'>
                    <li className='lia'>
                        <FaCircle className="headerIcon" color='yellow' size={15} />
                        <p>Passionné par le développement </p>
                    </li>
                    <li className='lia'>
                        <FaCircle className="headerIcon" color='yellow' size={15} />
                        <p>Excellente capacité d'organisation. </p>
                    </li>
                    <li className='lia'>
                        <FaCircle className="headerIcon" color='yellow' size={15} />
                        <p>Curiosité et capacité d'apprentissage. </p>
                    </li>
                    <li className='lia'>
                        <FaCircle className="headerIcon" color='yellow' size={15} />
                        <p>J'ai pas peur des challenges. </p>
                    </li>
                    <li className='lia'>
                        <FaCircle className="headerIcon" color='yellow' size={15} />
                        <p>Je suis dynamique, autonome, rigoureux et creatif.</p>
                    </li>
                </ul>
            </Description>
        </AbaoutCont>
    </Container>
    );
};

const Container = styled.div`
    height: auto;
    display: flex;
    color: white;
    width: 90%;
    flex-direction: column;
    align-items: center;
   h1{
        font-size: 30px;
        color: white;
    }
    .qui{
        color: white;
        margin-bottom: 10px;
        font-style: italic;
        margin-top: -10px;
    }
`;
const AbaoutCont = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    height: 90%;
    width: 100%;
  
  @media screen and (max-width:1080px) {
     
  }
  @media screen and (max-width:823px) {
      
  }
  @media screen and (max-width: 530px){
      flex-direction:column;
  }
`;
const Description = styled.div`
    border: 2px solid white;
    border-style: dashed double dashed double;
    align-items: center;
    width: 60%;
    height: 90%;
    p{
        margin: 15px;
        font-size: 20px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .ula{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .lia{
        justify-content: center;
        list-style:none;
        display: flex;
        p{
            flex-wrap: wrap;
            margin-left: 15px;
            font-size: 15px;
            font-weight: 700;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
        .headerIcon{
            margin-top: 17px;
        }
    
    }
    @media screen and (max-width: 530px){
        width: 100%;
  }
`;
const Photo = styled.div`
    display: flex;
    width: auto;
    height: 90%;
    margin-left: 20px;
    align-items: center;
    justify-content: center;
    img{
        width: 400px;
        height: auto;
        margin:20px 0;
    }
`;