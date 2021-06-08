import React from 'react'
import { CloseIcon, Icon, SideBarContainer, SideBarMenu, SideBarLink, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SideBarElements'

const SideBar = () => {
  return (
    <SideBarContainer>
    <Icon>
      <CloseIcon/>
    </Icon>
    <SidebarWrapper>
      <SideBarMenu>
        <SideBarLink to='/'>
          Home
        </SideBarLink>
        <SideBarLink to='/'>
          Products
        </SideBarLink>
        <SideBarLink to='/'>
          Corporate
        </SideBarLink>
        <SideBarLink to='/'>
          Buy Protection
        </SideBarLink>
      </SideBarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Sign In</SidebarRoute>
      </SideBtnWrap>
    </SidebarWrapper>
  </SideBarContainer>
  )
}

export default SideBar
