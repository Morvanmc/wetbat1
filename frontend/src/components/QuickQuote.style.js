import styled from "styled-components";

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 350px;
min-height: 350px;
background-color: white;
border-radius: 5px;
grid-area: quickquote;
`
export const Content1 = styled(Content)`
display: flex;
justify-content: flex-start;
grid-area: lastquotes;
margin-left: 20px;
`
export const DivTitle = styled.div`
display: flex;
flex-direction: row;
padding: 10px;
justify-content: flex-start;
align-items: center;
border-width: 0px 0px 1px 0px;
border-style: solid;
border-color: #BCBCBC;
width: 350px;
`
export const BoxTitle = styled.h3`
color: #5F6CAF;
margin-left: 5px;
font-size: 1.4rem;
`
export const DivForm = styled.form`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
padding: 20px;
`
export const DivInput = styled.div`
width: 150px;
margin-bottom: 25px;
`
export const ButtonSub = styled.button`
width: 150px;
height: 40px;
border-radius: 30px;
background-color: #5BBFBA;
font-size: 1rem;
font-weight: bold;
border: none;
color: #FFF;
margin: 15px 50px 0px 80px;

&:hover {
    background-color: #A4D4AE;
}
`
export const LabelName = styled.label`
font-weight: bold;
font-size: 0.7rem;
`