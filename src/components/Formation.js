import React from 'react';
import styled from 'styled-components';
import { FaStarHalfAlt } from "react-icons/fa";

export const Formation = () => {
  return (
    <Container>
        <div className='div1'>
              <h1>Formation</h1>
        </div>
                
        <Details>
              <ul className='ula'>
                  <li className='lia'>
                      <FaStarHalfAlt className="headerIcon" color='yellow' size={20} />
                      <p className='date'>2021-2022 </p>
                      <span>
                          <p className='ecole'>A l'Université Abdelmalek Essaâdi Tétouan, Maroc </p>
                          <p className='desc'>Anné en cours Master II Spécialisé en Ingénierie Informatique à FS Tétouan   </p>
                      </span>
                  </li>
                  
                  <li className='lia'>
                      <FaStarHalfAlt className="headerIcon" color='yellow' size={20} />
                      <p className='date'>2019-2020 </p>
                      <span>
                          <p className='ecole'>A l'Université Abdelmalek Essaâdi Tétouan, Maroc</p>
                          <p className='desc'>Licence fondamentale en sciences mathématiques et informatiques <br/> option développement et bases de données. </p>
                      </span>
                  </li>
                  <li className='lia'>
                      <FaStarHalfAlt className="headerIcon" color='yellow' size={20} />
                      <p className='date'>2014-2015 </p>
                      <span>
                          <p className='ecole'>Au Lycé Solidarité Islamique </p>
                          <p className='desc'>Anné d'obtention du Bac D avec mention Assez-Bien </p>
                      </span>
                  </li>
                 
              </ul>
        </Details> 
    </Container>
    );
};

const Container = styled.div`
    height: auto;
    display: flex;
    color: white;
    width: 90%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .div1{
        border-style : solid;
        border-color : #0a1014 #0a1014 #EF2E41 #0a1014;
        border-width : 10px 30px 60px  30px ;
        width: 40%;
        height: 10%;
        margin-top: 20px;
        h1{
        font-size: 30px;
        color: white;
        text-align: center;
        margin-bottom: -50px;
        
    }
    }
`;
const Details = styled.div`
    background-color: #EF2E41;
        width: 90%;
        height: 95%;
        border-radius: 20px;
        
        
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
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom: solid;
        .ecole{
            margin-left: 15px;
            font-size: 20px;
            font-weight: 600;
            flex-wrap:wrap;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
         .desc{
        font-size: 18px;
        flex-wrap:wrap;
        }
         .date{
            font-size: 20px;
            font-weight: 600;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-style: italic;
            color: bisque;
        }
    }
    .headerIcon{
        margin-top: 0px;
    }
   

`;