import styled from 'styled-components';

export const HeaderBar = styled.div`
display: flex;
flex-direction: row;
height: 8vh;
background: #5F6CAF;

justify-content: space-between;
align-items: center;

padding: 10px 15px;
grid-area: head;
`

export const Logo = styled.img`
max-width: 150px;
max-height: 5vh;
margin-left: 10px;
`
export const Wrappe = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const WrappeIcons = styled(Wrappe)`
width: 600px;
`

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    border: none transparent;
    outline: none;
    background-color: #e5e5e5;

    width: 350px;
    height: 30px;
    border-radius: 8px;

    padding-left: 10px;

    input {
        width: 300px;
        height: 30px;
        border: none transparent;
        outline: none;
        background-color: #e5e5e5;
        padding-left: 10px;
    }

    BsSearch {
        background-color: #e5e5e5;
        color: #6B6A6A;
    }

`
export const AvatarUser = styled.img`
border-radius: 50%;
max-width: 35px;
max-height: 35px;
`