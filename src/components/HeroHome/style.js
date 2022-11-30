import { Link } from "react-router-dom"
import styled from "styled-components"
import bg from "../../assets/background-home.jpg"

export const HeroSection = styled.div`
    height: 100vh;
    background: url(${bg});
    background-position: center top;
    background-size: cover;
    display: flex;
    align-items: flex-end;

    h1{
        text-align: center;
    }
    p{
        text-align: center;
        margin: 12px 0 28px 0;
    }

    .card{
        display: flex;
        margin-bottom: 20px;
        justify-content: space-between;


        img{
            border: 1px solid white;
            transition: 0.3s;
            &:hover{
                filter: brightness(130%);
                transform: scale(1.03);
            }
        }

        @media(max-width:600px){
            flex-direction: column;
            gap: 20px;
            padding: 20px;
        }
    }
`

