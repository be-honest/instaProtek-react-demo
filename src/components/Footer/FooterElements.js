import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {FaMapMarker, FaPhone, FaEnvelope} from 'react-icons/fa'

export const FooterContainer = styled.footer`
  background-color: #000; 
`

export const FooterWrap = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  
`

export const FooterLinksWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin: 0 auto;
`

export const FooterBrand = styled(Link)`
  padding-right: 7rem;
  @media (max-width: 820px){
    margin-bottom: 2rem;
  }
`

export const FooterLinksItem = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 320px;
  box-sizing: border-box;
  color: #fff;
`

export const FooterLinkTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 20px;

  &:hover{
    color: #2ee59d;
    transition: 0.3s ease-out;
  }
`

export const FooterList = styled.div`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 18px;

`

export const MarkerIcon = styled(FaMapMarker)`
  color: #fff;
  padding-right: 0.5rem;
`

export const PhoneIcon = styled(FaPhone)`
  color: #fff;
  padding-right: 0.5rem;

`

export const EnvelopeIcon = styled(FaEnvelope)`
  color: #fff;
  padding-right: 0.5rem;

`

export const FooterCopyright = styled.div`
  border-top: 1px solid #f7f6f7;
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-bottom: 1rem;
`

export const FooterSpan = styled.span`
  color: #fff;
`