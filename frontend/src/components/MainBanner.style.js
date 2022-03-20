import styled from 'styled-components';

export const Content = styled.div`
    max-width: 1090px;
    background: linear-gradient(90deg, rgba(91,191,186,1) 30%, rgba(0,100,255,1) 100%);;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-area: mainbanner;
    margin: 25px 0px 25px -60px;

    @media screen and (max-width: 964px){
        justify-content: center;
    }
`
export const Wrappe = styled.div`

`
export const Title = styled.h2`
    color: white;
    margin: 25px;
    font-size: 2rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    @media screen and (max-width: 964px){
        display: none;
    }
`
export const Text = styled.p`
    color: white;
    margin: 25px;
    font-size: 1rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: justify;
    max-width: 500px;

    @media screen and (max-width: 964px){
        display: none;
    }
`
export const SocialImg = styled.img`
    max-width: 500px;
    max-height:250px;

    @media screen and (max-width: 964px){
        max-width: 420px;
        max-height: 420px;
    }
`