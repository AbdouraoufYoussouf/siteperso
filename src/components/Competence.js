import React from 'react';
import styled from 'styled-components';
import { FaStarHalfAlt, FaHotjar, FaFreeCodeCamp, FaAngular } from "react-icons/fa";
import logo512 from '../images/logo512.png'
import native from '../images/native.png'
import Styled from '../images/styled.svg'
import bootstrap from '../images/bootstrap.png'

import spring from '../images/spring.jpg'
import thymleaf from '../images/thymleaf.png'
import mysql from '../images/mysql.png'
import django from '../images/django.png'
import redux from '../images/redux.jpg'
import mongodb from '../images/mongodb.jpg'

export const Competence = () => {
  return (
    <Container id='competence'>
        <div className='div2'>
              <h1>Competence</h1>
        </div>
                
        <Details>
              <Frontend>
                  <h2>Front-End</h2>
                  <Items>
                      <li>
                          <img src={native}/>
                          <p>ReactNative</p>
                      </li>
                      <li>
                          <img src={logo512}/>
                          <p>React</p>
                      </li>
                      <li>
                          <img src={redux}/>
                          <p>Redux</p>
                      </li>
                      <li>
                          <img src={bootstrap}/>
                          <p>Bootstrap</p>
                      </li>
                      <li>
                          <img src={Styled}/>
                          <p>StyledComponent</p>
                      </li>
                  </Items>
              </Frontend>
              <Bar></Bar>
              <BackEnd>
                  <h2>Back-End</h2>
                  <Items>
                      <li>
                          <img src={spring} />
                          <p>Spring Boot</p>
                      </li>
                      <li>
                          <img src={thymleaf} />
                          <p>Thymeleaf</p>
                      </li>
                      <li>
                          <img src={mysql} />
                          <p>MySql</p>
                      </li>
                      <li>
                          <img src={django} />
                          <p>Django</p>
                      </li>
                      <li>
                          <img src={mongodb} />
                          <p>MongoDb</p>
                      </li>
                  </Items>
              </BackEnd>
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
    margin-top: 40px;
    .div2{
        border-style : none;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        background-color: yellow;
        width: 250px;
        height: 10%;
         h1{
            font-size: 30px;
            color: blue;
            text-align: center;
            margin-top: 11px;
            font-weight: 700;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
    }
  

`;
const Details = styled.div`
    background-color:green;
        width: 90%;
        height: 95%;
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        h2{
            color: yellow;
            text-align: center;
        }
    @media screen and (max-width:823px) {
        flex-direction: column;
    }
`;
const Frontend = styled.div`
        min-width: 50%;
        height: 95%;
        margin: 10px 0px 10px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    
`;
const BackEnd = styled.div`
        min-width: 50%;
        height: 95%;
        margin: 10px 0px 10px 10px;
         display: flex;
        flex-direction: column;
        align-items: center;
`;
const Bar = styled.div`
        display: flex;
       justify-content: center;
       align-items: center;
        height: 250px;
        margin-top: 60px;
        margin-left: -40px;
        color: white;
        border: 2px solid white;
    @media screen and (max-width:823px) {
       display :none ;
    }
`;
const Items = styled.ul`
    display: flex;
    margin: 0;
    flex-wrap: wrap;
    padding: 0;
    width: 90%;
    li{
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: start;
        margin: 10px;
        max-width: 270px;
    }
    img{
        width: 60px;
        height: 50px;
        margin-right: 10px;
        align-self: center;
        border-radius: 15%;
    }
    p{
        font-size: 20px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        margin-top: 10px;
        color: white;
    }
    
`;