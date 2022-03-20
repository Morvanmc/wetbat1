import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    grid-template-rows: 0.1fr 0.7fr 0.5fr 0.5fr;
    grid-template-columns: 0.6fr 1fr 1fr 1fr;
    grid-template-areas: 
        "head head head head"
        "sidebar mainbanner mainbanner mainbanner"
        "sidebar content content content";

    
`
export const MainContent = styled(Content)`
    display: flex;
    grid-area: content;
    margin-left: -60px;
`