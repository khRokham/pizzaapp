import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
    positio:fixed;
    z-index:999;
    width:350px;
    height:350px;
    background:#ffc500;
    dispaly;grid;
    align-items:center;
    top:0;
    transition;0.3s ease-in-out;
    right: $(({isOpen})=>(isOpen ? '0' : '-1000px'));

    @media screen and (max-width: 400px){
        width:100%
    }
    `;
    export const CloseIcon=styled(FaTimes)`
        color:#000;`;

    export const Icon=styled.div`
        position:absolute;
        top:1.2rem;
        right:1.5rem;
        background:transparent;
        border:transparents;
        font-size:2rem;
        cursor:pointer;
        outline:none;`;

    export const SidebarMenu = styled.div`
        dispaly: grid;
        grid-template-colums: 1fr;
        grid-template-row:repeat(3,80px);
        text-align:center;
        
        @media screen and (max-width:480px){
            grid-template-rpws: repeat(3,60px)
        }`;

    export const SidebarLink = styled(Link)`
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:1.5rem;
        text-decoration:none;
        list-style:none;
        transition:0.2s ease-in-out;
        text-decoration:none;
        color:#000;
        cursor:pointer;

        &:hover{
            color:#e31837;
            transition:20.s ease-in-out;
        }
        `;
    export const SideBtnwrap = styled.div`
        display:flex;
        justify-content:center;`

    export const SidebarRoute = styled(Link)`
        background:#e31837;
        white-space: nowrap;
        padding:16px 64px;
        color:#fff;
        font-size:16px;
        outline:none;
        border:none;
        cursor:pointer;
        transition:0.2s ease-in-out;
        text-dexoration:none;
        
        &:hover{
            transition:02.s ease-in-out;
            background:#fff;
            color:#010606;
        }`