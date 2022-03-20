import React from "react";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { TableQuotes } from "../components/TableQuotes";
import { Content, MainContent } from './Quotes.style';

function Quotes() {
    return (
        <Content>
            <Header />
            <SideBar />
            <MainContent>
                <TableQuotes />
            </MainContent>
        </Content>
    );
};

export default Quotes;