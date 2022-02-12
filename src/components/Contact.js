import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhoneAlt,} from "react-icons/fa";

export const Contact = () => {
  return (
      <Fragment>
        
        <ContainerCont id='contact'>
            <ContactInfo>
                <h1>Contact</h1>
                <Items>
                    <li>
                        <FaPhoneAlt className="headerIcon" color='white' size={30} />
                        <p>+212 655108082</p>
                    </li>
                    <li>
                        <FaMailBulk className="headerIcon" color='white' size={30} />
                        <p>youssouf.abdouraouf4@gmail.com</p>
                    </li>
                    <li>
                        <FaHome className="headerIcon" color='white' size={30} />
                        <p>6 comp safia bloc 6 Et.2 App.44 mixta MARTIL,Maroc</p>
                    </li>
                    <li>
                        <FaLinkedin className="headerIcon" color='white' size={30} />
                        <a target="_blank" href='https://www.linkedin.com/in/youssouf-abdouraouf-b32b67206/' >https://www.linkedin.com/in/youssouf-abdouraouf-b32b67206/</a>
                    </li>
                    <li>
                        <FaGithub className="headerIcon" color='white' size={30} />
                        <a target="_blank" href='https://github.com/AbdouraoufYoussouf' >https://github.com/AbdouraoufYoussouf</a>
                    </li>
                
                </Items>
            </ContactInfo>
        </ContainerCont>
    </Fragment>);
};

const ContainerCont = styled.div`
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    height: auto;
    display: flex;
    color: white;
    width: 90%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
`;
const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
        margin: 10px;
        h1{
            text-align: center;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            margin-bottom: 25px;
            color:white;
            background-color:orange ;
            width: 200px;
            border-radius:10px;
        }
`;
const Items = styled.ul`
    display: flex;
    justify-content: center;
    align-content:center;
    flex-direction: column;
    padding: 0 10px 10px 10px;
    width: 90%;
    height: 95%;
    border-radius: 5px;
    flex-wrap: wrap;
    li{
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        margin-left: 25px;
        @media screen and (max-width:823px) {
            
        }
            
        p{
            font-size: 15px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            margin-top: 15px;
            margin-left: 15px;
            color: white;
            flex-wrap: wrap;
        }
        a{
            text-decoration: none;
            font-size: 14px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            margin-top: 15px;
            margin-left: 15px;
            color: blue;
            flex-wrap: wrap;
            width: 300px;
            
        }

    }
    .headerIcon{
        margin-top: 10px;
    }
`;
