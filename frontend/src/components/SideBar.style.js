import styled from "styled-components";

export const WrappBar = styled.div`
   max-width: 10vw;
   max-height: 100vh;
   background-color: #E1E1E1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   grid-area: sidebar;

   @media screen and (max-width: 1200px){
        max-width: 5vw;
        max-height: 80vh;
        margin-top: 0px;
    }
`
export const Title = styled.p`
    font-size: 1em;
    color: #5F6CAF;
    margin-left: 10px;

    @media screen and (max-width: 1200px){
        display: none;
    }
`
export const WrappeItem = styled.div`
    min-width: 10vw;
    min-height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 25px;
    
    &:hover {
        background-color: #d3d6e8;
    }

    @media screen and (max-width: 1200px){
        min-width: 5vw;
        justify-content: center;
        padding-left: 0px;
    }
`
export const IconLink = styled.a`
    display: flex;
    flex-direction: row;
    text-decoration: none;
`
export const BreakLine = styled.span`
    background-color: #BCBCBC;
    min-width: 10vw;
    min-height: 2px;
    margin: 20px 0px 20px 0px;

    @media screen and (max-width: 1200px){
        min-width: 5vw;
    }
`
export const SpanRight = styled.span`
    font-size: small;
    color: #BCBCBC;
    text-align: center;
    margin-top: 60px;
    padding: 10px;

    @media screen and (max-width: 1200px){
        display: none;
    }
`