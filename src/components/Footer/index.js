import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import Logo from '../../images/logo_full_light.png'
import { 
  FooterBrand, 
  FooterContainer, 
  FooterLink, 
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinksItem, 
  FooterList,
  FooterWrap,
  MarkerIcon,
  PhoneIcon,
  EnvelopeIcon,
  FooterCopyright,
  FooterContent,
  FooterSpan,
} from './FooterElements'

const Footer = () => {
  const scrollToTop = () =>{
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksWrapper>
          <FooterBrand onClick={scrollToTop}>
            <img src={Logo} alt="instaProtek Logo" />
          </FooterBrand>
          <FooterLinksItem>
            <FooterLinkTitle>Navigate</FooterLinkTitle>
              <FooterLink to='/'>About </FooterLink>
              <FooterLink to='/'>Contact Us</FooterLink>
              <FooterLink to='/'>Terms & Conditions</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterList> 
                <MarkerIcon/><span>1 Wrigley Irvine, CA 92618</span>
              </FooterList>
              <FooterList> 
                <PhoneIcon/><span>888-800-5938 </span>
              </FooterList>
              <FooterList> 
                <EnvelopeIcon/><span>For Inquiries: Info@intotoware.com</span>
              </FooterList>
          </FooterLinksItem>
        </FooterLinksWrapper>
        <FooterCopyright>
          <FooterContent>
            <FooterSpan>&copy;2019 instaProtek, Inc. All Rights Reserved | instaProtek Respects your privacy.</FooterSpan>
            <FooterSpan>Powered by dna:micro</FooterSpan>
          </FooterContent>
        </FooterCopyright>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
