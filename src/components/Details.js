import React from 'react';
import styled from 'styled-components';

export const Details = ({titre,desc,techno,video}) => {
    
  return (
    
      <Detail>
          <DescLeft>
              <h2>Description</h2>
              <Items>
                  <div className='desc'>
                      <p>{titre}</p>
                      <span>{desc}</span>
                  </div>
                  <ul className='tech'>
                      {
                        techno.map((tech) => <li key={tech.id}>{tech.nom}</li>)
                      }
                  </ul>
              </Items>
          </DescLeft>
          <DescRight>
              <h2>Présentation</h2>
              <Video>
                  <VideoBg playsInline  autoPlay loop
                      muted src={video} type="video/mp4" />
              </Video>
          </DescRight>
      </Detail>);
};

const Detail = styled.div`
    
        width: 90%;
        height: auto;
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        h2{
            color: yellow;
            text-align: center;
        }
    @media screen and (max-width:823px) {
         flex-direction: column;
         
    }
`;
const DescLeft = styled.div`
        width: 50%;
        height: 95%;
        margin: 10px 0px 10px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    @media screen and (max-width:823px) {
         width: 100%;
    }
`;
const DescRight = styled.div`
        width: 50%;
        height: 95%;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    @media screen and (max-width:823px) {
         width: 100%;
    }
`;

const Items = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
    .desc{
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: center;
        width: 90%;
    }
    .tech{
        width: 90%;
        margin-right: 50px;
        height: 95%;
        align-self: center;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
        justify-content: center;
        align-items: center;
        li{
            list-style: none;
            color: white;
            margin-top: 20px;
            border: 1px solid beige;
            padding: 5px;
            background-color: #008080;
            text-align: center;
            font-size: 18px;
        }
    }
    p{
        font-size: 20px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        margin-top: 10px;
        color: white;
    }
    @media screen and (max-width:723px) {
        .tech{
            grid-template-columns: repeat(2, 1fr);
   }
    li{
    padding: 0px 0;
    }
`;

const VideoBg = styled.video`
    max-width: 100%;
    height: auto;align-self: center;
    /* margin-right: -60px; */
    border-radius: 15px;
`;
const Video = styled.div`
    width: 100%;
    height: auto;
    /* margin-right: -60px; */
    border-radius: 15px;
`;
