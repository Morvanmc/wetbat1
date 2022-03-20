import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 1fr 1fr;
    grid-template-rows: 0fr 1fr 1fr;
    grid-template-areas: 
        "head head head"
        "sidebar content content"
        "sidebar content content";
`
export const MainContent = styled(Content)`
    display: flex;
    align-items: center;
    grid-area: content;
    justify-content: flex-start;
    padding: 25px;
`