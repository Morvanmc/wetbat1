import styled from "styled-components";


export const DivLead = styled.div`
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: flex-start;
width: 350px;
height: 60px;
padding: 10px 10px 0px 25px;
`
export const DivText = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
margin-left: 5px;

`
export const ImgLead = styled.img`
border-radius: 50%;
max-width: 35px;
max-height: 35px;
`
export const Title = styled.h5`
font-size: 1rem;
font-weight: 700;
color: #000;
margin-bottom: -1px;
`
export const Hour = styled(Title)`
margin-left: 60px;
`
export const SubTitle = styled.p`
font-size: 0.7rem;
font-weight: 300;
color: gray;
`