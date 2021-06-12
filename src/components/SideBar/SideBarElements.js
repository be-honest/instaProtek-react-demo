import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

export const SideBarContainer = styled.aside `
  position:fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top:  ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #2ea1f8;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
export const SidebarWrapper = styled.div`
  color: #fff;
`
export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media (max-width: 800px){
    grid-template-rows: repeat(6, 80x);
  }
`
export const SideBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover{
    color:#2ea1f8;
    transition: 0.2s ease-in-out;
  }
`

export const SideBtnWrap = styled.div`
  display:flex;
  justify-content:center;
`

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #2ea1f8;
  color: #fff;
  white-space: nowrap;
  padding: 16px 64px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
  }

`