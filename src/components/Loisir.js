import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Details } from './Details';
import sport from '../images/sport.mp4'

export const Loisir = () => {
    const data = [
        {
            "titre":"Le Sport",
            "desc":"Le sport est ma deuxieme passion après le devellopement bien sûre. Le sport m'aide à avoir confiance en moi et à limiter ma prise de gresse, sans oublier la forme.",
            "video":sport,
            "techno":[ 
                {"id":1,"nom":"Calistenic"},
                {"id":2,"nom":"Football"},
                {"id":3,"nom":"Musculation"},
                {"id":4,"nom":"Footing"}
            ]
        }
    ];
  return (
    <Fragment>
        <ContainerCont>
            <h1>MES LOISIRS</h1>
            {
                data.map(( data,index)=>{
                    return(
                        <Details key={index} titre={data.titre} desc={data.desc} techno={data.techno} video={data.video}/>
                    )
                })
            }
        </ContainerCont>
    </Fragment>);
};

const ContainerCont = styled.div`
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin-bottom:30px;
    height: auto;
    display: flex;
    color: white;
    width: 90%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    background-color: #2A3942;
    h1{
        text-align:center;
    }
`;