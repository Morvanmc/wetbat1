import React from 'react';
import {
    FaHome, FaDollarSign,
    FaClipboardList, FaPaperPlane,
    FaCog, FaFileAlt, FaLifeRing, FaUsers, FaChartBar
}
    from "react-icons/fa";
import {
    WrappBar, WrappeItem, IconLink, BreakLine,
    SpanRight, Title
}
    from './SideBar.style';

export function SideBar() {
    return (
        <WrappBar>
            <WrappeItem>
                <IconLink href='/'>
                    <FaHome style={{ color: "#5F6CAF" }} size={20} />
                    <Title>Home</Title>
                </IconLink>
            </WrappeItem>
            <WrappeItem>
                <IconLink href='/quotes'>
                    <FaDollarSign style={{ color: "#5F6CAF" }} size={20} />
                    <Title>Quotes
                    </Title>
                </IconLink>
            </WrappeItem>
            <WrappeItem>
                <IconLink href='/'>
                    <FaClipboardList style={{ color: "#5F6CAF" }} size={20} />
                    <Title>Leads</Title>
                </IconLink>
            </WrappeItem>
            <WrappeItem>
                <IconLink href='/'>
                    <FaPaperPlane style={{ color: "#5F6CAF" }} size={20} />
                    <Title>Tour</Title>
                </IconLink>
            </WrappeItem>

            <BreakLine />

            <WrappeItem>
                <IconLink href='/'>
                    <FaFileAlt style={{ color: "#5F6CAF" }} size={20} />
                    <Title>Invoices</Title>
                </IconLink>
            </WrappeItem>
            <WrappeItem>
                <IconLink href='/'>
                    <FaChartBar style={{ color: "#5F6CAF" }} size={20} />
                    <Title>Analytics</Title>
                </IconLink>
            </WrappeItem>
            <WrappeItem>
                <IconLink href='/'>
                    <FaUsers style={{ color: "#5F6CAF" }} size={20} />
                    <Title>Team</Title>
                </IconLink>
            </WrappeItem>
            <WrappeItem>
                <IconLink href='/'>
                    <FaCog style={{ color: "#5F6CAF" }} size={20} />
                    <Title>Admin</Title>
                </IconLink>
            </WrappeItem>
            <WrappeItem>
                <IconLink href='/'>
                    <FaLifeRing style={{ color: "#5F6CAF" }} size={20} />
                    <Title>Support</Title>
                </IconLink>
            </WrappeItem>

            <BreakLine />

            <SpanRight>Allright received by wetbat 2020 ©</SpanRight>
        </WrappBar>
    );
};