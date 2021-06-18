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
  @media (max-width: 900px){
    flex-direction: column;
    align-items: center;
  }
`

export const FooterBrand = styled(Link)`
  padding-right: 7rem;
  @media (max-width: 900px){
    padding:0;
  }
  @media (max-width: 600px){
    text-align: center;
    img{
      width: 75%;
    }
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
  @media (max-width: 900px){
    align-items: center;
  }
  @media (max-width: 600px){
    padding: 1rem;
    text-align: center;
    margin: 0;
  }
`

export const FooterLinkTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  @media (max-width: 600px){
    font-size: 1.2rem;
  }
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
  @media (max-width: 600px){
    margin: 0;
    font-size: 15px;
  }
`

export const FooterList = styled.div`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 18px;
  @media (max-width: 600px){
    margin: 0;
    font-size: 15px;
  }
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
  @media (max-width: 900px){
    margin: 0 50px;
  }
  @media (max-width: 600px){
    margin: 0 25px;
  }
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-bottom: 1rem;
`

export const FooterSpan = styled.span`
  color: #fff;
  a{
    text-decoration:none;
    color: #fff;
    &:hover{
      color: #2ea1f8;
      cursor: pointer;
    }
  }
  @media (max-width: 600px){
    font-size: 10px;
  }
`