import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/birthday-gifts">Birth Day Gifts</SidebarLink>
                <SidebarLink to="/anniversary-gifts">Anniversary Gifts</SidebarLink>
                <SidebarLink to='/'>Category 03</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;