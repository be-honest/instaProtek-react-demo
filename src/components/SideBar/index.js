import React from 'react'
import { CloseIcon, Icon, SideBarContainer, SideBarMenu, SideBarLink, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick ={toggle}>
    <Icon onClick={toggle}>
      <CloseIcon/>
    </Icon>
    <SidebarWrapper>
      <SideBarMenu>
        <SideBarLink to='/' onClick ={toggle}>
          Home
        </SideBarLink>
        <SideBarLink to='/' onClick ={toggle}>
          Products
        </SideBarLink>
        <SideBarLink to='/' onClick ={toggle}>
          Corporate
        </SideBarLink>
        <SideBarLink to='/' onClick ={toggle}>
          Buy Protection
        </SideBarLink>
      </SideBarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/' onClick ={toggle}>Sign In</SidebarRoute>
      </SideBtnWrap>
    </SidebarWrapper>
  </SideBarContainer>
  )
}

export default SideBar
