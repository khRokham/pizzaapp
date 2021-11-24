import React from 'react'
import {SidebarContainer,Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnwrap} from './Sidebarelements'

const Sidebar = (isOpen, toggle) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onclick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Desserts</SidebarLink>
                <SidebarLink to='/'>Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnwrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnwrap>
        </SidebarContainer>
    )
}

export default Sidebar
