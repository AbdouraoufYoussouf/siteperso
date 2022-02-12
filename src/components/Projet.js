import React, { Fragment } from 'react';
import styled from 'styled-components';
import Data from './Data';

import { Details } from './Details';

export const Projet = () => {
  return (
    <Fragment>
        
        <Container id='projet'>
            <div className='div1'>
                <h1>Mes Projets</h1>
            </div>
            {
                Data.map(( data,index)=>{
                    return(
                        <Details key={index} titre={data.titre} desc={data.desc} techno={data.techno} video={data.video}/>
                    )
                })
            }
                
                
            
        </Container>
    </Fragment>
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
    background-color: #EF2E41;
    border-radius: 50px;
    .div1{
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
