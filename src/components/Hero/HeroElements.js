import styled from "styled-components";
import ImgBg from '../../images/pizza-1.jpg'

export const HeroContainer = styled.div`
    
    background-image: linear-gradient(to right, rgba(0,0,0,0.7) , rgba(0,0,0,0.1)),url(${ImgBg});
    height:100vh;
    width:100%;
    background-position: center;
    background-size:cover; 
`;

export const HeroContent = styled.div`
height: calc(100vh -80px);
max-height:100;
width:100%;
padding: 0rem calc((100vw - 1300px) /2)`;

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-item: flex-start;
    height:100vh;
    max-height: 100%;
    padding : 0 2rem;
    width: 650px;
    color:#fff;
    text-transform:uppercase;
    line-height:1;
    font-weight:bold;
    
    @media screen and (max-width: 650px){
        width:100%;
    }`

export const HeroH1= styled.h1`
        font-size:clamp(2.5rem,10vw,5rem);
        margin-bottom:1rem;
        box-shodow:3px 5px #e9ba23;
        border: 5px solid orange;
        border-bottom-right-radius: 25px;
        border-top-style: none;
        border-left-style: none;
        border-right-width: thick;
        letter-spacing:3px;
        `
export const HeroP = styled.p`
    font-size:2rem;
    margin-bottom:2rem;`

export const HeroBtn = styled.button`
    width: 10rem;
    background: red;
    outline: 0;
    border: 0;
    color: #fff;
    padding: .3rem 0;
    text-align: center;
    cursor: pointer;
    line-height: 2;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    transition: all 0.3s ease-in;

    &:hover {
        color: #333;
        background-color: yellow;
    }
    `