import React from "react";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { MainBanner } from "../components/MainBanner";
import { QuickQuote } from "../components/QuickQuote";
import { LastQuotes } from "../components/LastQuotes";
import { NewLeads } from "../components/NewLeads";
import { Content, MainContent } from "./Main.style"

function Main() {
    return (
        <Content>
            <Header />
            <SideBar />
            <MainBanner />
            <MainContent>
                <QuickQuote />
                <LastQuotes />
                <NewLeads />
            </MainContent>
        </Content>
    );
};

export default Main;