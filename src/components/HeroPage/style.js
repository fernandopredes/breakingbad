import styled from "styled-components"
import bgbb from "../../assets/background-bb.jpg"
import bgss from "../../assets/background-saul.jpg"

export const HeroSectionPage = styled.div`
    height: 400px;
    /* background-image: url(${bgbb}); */
    background-position: center top;
    background-size: cover;
    display: flex;
    align-items: flex-end;

    h1{
        text-align: center;
        margin-bottom: 40px;
    }

    ${
        props => {
            if(props.serie === 'breakingbad'){
                return `background-image: url(${bgbb})`
            } else if(props.serie === 'saul'){
                return `background-image: url(${bgss})`
            } 
        }
    }
`