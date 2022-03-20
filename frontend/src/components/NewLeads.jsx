import React from 'react';
import { FiMail } from "react-icons/fi";
import { BoxTitle, Content1, DivTitle } from './QuickQuote.style';
import avatar from '../img/avatar.jpg';
import { DivLead, DivText, Hour, ImgLead, SubTitle, Title } from './NewLeads.style';

export function NewLeads() {
    return (
        <Content1>
            <DivTitle>
                <FiMail style={{ color: "#5BBFBA" }} size={20} />
                <BoxTitle>New Leads</BoxTitle>
            </DivTitle>
            <DivLead>
                <ImgLead src={avatar} alt="User Photo" />
                <DivText>
                    <Title>Morvan Marques</Title>
                    <SubTitle>Hey! I want talk to you.</SubTitle>
                </DivText>
                <Hour>10:50AM</Hour>
            </DivLead>
            <DivLead>
                <ImgLead src={avatar} alt="User Photo" />
                <DivText>
                    <Title>Morvan Marques</Title>
                    <SubTitle>Hey! I want talk to you.</SubTitle>
                </DivText>
                <Hour>10:50AM</Hour>
            </DivLead>
            <DivLead>
                <ImgLead src={avatar} alt="User Photo" />
                <DivText>
                    <Title>Morvan Marques</Title>
                    <SubTitle>Hey! I want talk to you.</SubTitle>
                </DivText>
                <Hour>10:50AM</Hour>
            </DivLead>
            <DivLead>
                <ImgLead src={avatar} alt="User Photo" />
                <DivText>
                    <Title>Morvan Marques</Title>
                    <SubTitle>Hey! I want talk to you.</SubTitle>
                </DivText>
                <Hour>10:50AM</Hour>
            </DivLead>
            <DivLead>
                <ImgLead src={avatar} alt="User Photo" />
                <DivText>
                    <Title>Morvan Marques</Title>
                    <SubTitle>Hey! I want talk to you.</SubTitle>
                </DivText>
                <Hour>10:50AM</Hour>
            </DivLead>
            <DivLead>
                <ImgLead src={avatar} alt="User Photo" />
                <DivText>
                    <Title>Morvan Marques</Title>
                    <SubTitle>Hey! I want talk to you.</SubTitle>
                </DivText>
                <Hour>10:50AM</Hour>
            </DivLead>
            <DivLead>
                <ImgLead src={avatar} alt="User Photo" />
                <DivText>
                    <Title>Morvan Marques</Title>
                    <SubTitle>Hey! I want talk to you.</SubTitle>
                </DivText>
                <Hour>10:50AM</Hour>
            </DivLead>
            <DivLead>
                <ImgLead src={avatar} alt="User Photo" />
                <DivText>
                    <Title>Morvan Marques</Title>
                    <SubTitle>Hey! I want talk to you.</SubTitle>
                </DivText>
                <Hour>10:50AM</Hour>
            </DivLead>
        </Content1>
    );
};
