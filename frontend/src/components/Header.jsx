import React from "react";
import { BsSearch, BsBellFill } from 'react-icons/bs';
import { MdSpaceDashboard, MdModeComment, MdSettings } from 'react-icons/md'
import wetbat_logo from '../img/watbat_logo.png';
import avatar from '../img/avatar.jpg';
import { AvatarUser, HeaderBar, Logo, SearchForm, Wrappe, WrappeIcons } from './Header.style';

export function Header() {
    return (
        <HeaderBar id="header" className="header">
            <Wrappe>
                <MdSpaceDashboard style={{ color: "#FFF" }} size={30} />
                <Logo alt="Logo WetBat" src={wetbat_logo} />
            </Wrappe>

            <WrappeIcons>
            <SearchForm onSubmit={() => { }} id="search">
                <BsSearch size={18} />
                <input type="text" value={""}
                    onChange={() => { }}
                />
            </SearchForm>

            
                <BsBellFill style={{ color: "#FFF" }} size={15} />
                <MdModeComment style={{ color: "#FFF" }} size={15} />
                <MdSettings style={{ color: "#FFF" }} size={15} />
            
            <AvatarUser alt="Avatar User" src={avatar} />
            </WrappeIcons>
        </HeaderBar>
    );
};