import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';
import profil1 from '../images/profil1.png';
import bg from '../images/bg.jpeg';
import bgp from '../images/bgp.jpg';
import {FaFacebookF,FaTwitter, FaTiktok, FaLinkedin, FaGithub,} from "react-icons/fa";

export const Header = () => {
  return (
    <Container>
        <Photo src={profil1} />
        <InfoRight>
            <SocialMedia>
                <ul className="header__ul">
                    <li>
                    <a target="_blank" href='https://www.facebook.com/abdouraoufnyoussouf' >
                        <FaFacebookF className="headerIcon" color='white' size={30}/></a> 
                    </li>
                    <li>
                    <a target="_blank" href='https://twitter.com/Abdouraoufyous3' >
                        <FaTwitter className="headerIcon" color='white' size={30}/></a> 
                    </li>
                    <li>
                    <a target="_blank" href='https://www.tiktok.com/@docteur_raf?lang=en' >
                        <FaTiktok className="headerIcon" color='white' size={30}/></a> 
                    </li>
                    <li>
                    <a target="_blank" href='https://github.com/AbdouraoufYoussouf' >
                        <FaGithub className="headerIcon" color='white' size={30}/></a> 
                    </li>
                    <li>
                    <a target="_blank" href='https://www.linkedin.com/in/youssouf-abdouraouf-b32b67206/' >
                        <FaLinkedin className="headerIcon" color='white' size={30}/></a> 
                    </li>
                    {/* <li>
                    <a target="_blank" href='https://www.facebook.com/abdouraoufnyoussouf' >
                        <FaInstagram className="headerIcon" color='white' size={30}/></a> 
                    </li> */}
                   
                </ul>
            </SocialMedia>
            <h1>I am Youssouf Abdouraouf</h1>
            <ProfileDetail >
                <div className='primary-text'>
                    <h1 className='and'>And i'm</h1>
                    <h1>
                        <Typical
                        
                            loop={Infinity}
                            steps={[
                                "computer engineering graduate",
                                1000,
                                "Full Stack Developpeur",
                                1000,
                                "Cross Platform DEV",
                                1000,
                                "API REST DEV",
                                1000,
                                "React/React-Native DEV",
                                1000,
                                ".Net DEV ",
                                1000,
                            ]}
                        />
                    </h1>
                </div>
            </ProfileDetail>
        </InfoRight>
     
    </Container>
    );
};

const Container = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    width: 100%;
    height: 45vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
  
  @media screen and (max-width:1080px) {
     
  }
  @media screen and (max-width:700px) {
      flex-direction: column;
      height: auto;
      background-image: url(${bgp});
      justify-content: center;

  }
  @media screen and (max-width: 530px){
      
  }
`;
const Photo = styled.img`
    width: 40%;
    height: auto;
    align-items: center;
    margin: 200px 30px 0 100px;
    justify-content: center;
  
  @media screen and (max-width:1080px) {
     padding: 0 10px;
     margin: 120px 30px 0 100px;

  }
  @media screen and (max-width:800px) {
    padding: 0px;
    flex: 1;
    margin-top: 80px;
    width: 40%;
  }
  @media screen and (max-width: 730px){
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 50%;
  }
`;
const InfoRight = styled.div`
    flex:2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  h1{
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color: white;
  }
  @media screen and (max-width:1080px) {
      margin-right: 30px;
    h1{
      font-size: 23px;
    }
  }
  @media screen and (max-width:870px) {
      margin-right: 60px;
  }
  
`;
const SocialMedia = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    .header__ul {
        list-style-type: none;
        display: flex;
        margin-bottom: 20px;
        }
    .header__ul li {
        width: 50px;
        height: 50px;
        border: 2px solid #ff4a57;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
        transition: all 0.5s linear;
        cursor: pointer;
    }
    .header__ul li:hover {
        background: green;
        border: 2px solid transparent;
    }
    .header__ul li:hover .headerIcon {
         color: #ff4a57;
    }
    .header__ul li:first-child {
        margin-left: 0;
    }
    
  @media screen and (max-width:1080px) {
      .header__ul {
        margin-bottom: 10px;
        }
      .header__ul li {
        width: 50px;
        height: 50px;

        }
 
  }
  @media screen and (max-width:823px) {
      
  }
  @media screen and (max-width: 530px){
      
  }
`;
const ProfileDetail = styled.div`
display: flex;
flex-direction: column;
    align-self: center;
    
    text-align: center;
    width: auto;
    .primary-text{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    h1{
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 25px;
        margin-bottom: 0px;
    }
    .and{
        display: flex;
       
        color: yellow;
        margin-right: 10px;
    }    
     @media (max-width:880px) {
        h1{
            padding: 7px;
            font-size: 23px;
        } 
    }
`;

