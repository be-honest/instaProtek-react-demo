import styled from 'styled-components'

export const HeroContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position:relative;
  z-index: 1;
`

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export const BackgroundImage = styled.img`
  width: 100%;
  height: 871px;
  -o-object-fit: cover;
  object-fit: cover;
  @media (max-width: 900px){
    height: 750px;
  }
`

export const HeroContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 550px;
  top: 10rem;
  align-items: left;
  padding: 8px 24px;
  @media (max-width: 769px){
   padding-right: 280px; 
  }
  @media (max-width: 600px){
    padding: 0 1rem;
  }
`

export const HeroSpan = styled.span`
  color: ${(t) => t.theme.secondarycolor};
  font-size: 1.2rem;
  text-transform: capitalize;
  line-height: 2rem;
  @media (max-width: 769px){
   font-size: 1rem; 
  }
  @media (max-width: 600px){
   font-size: 0.9rem; 
   padding-right: 2.5rem;
   line-height: 1.5rem
  }
`

export const HeroH1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #000;
  @media (max-width: 769px){
   font-size: 1.5rem 
  }
`

export const HeroBtnWrapper = styled.div`
  padding-top: 5rem;
  .applogo{
    padding-top: 5rem;
    img {
      width: 7rem;
      @media (max-width: 900px){
        width: 5rem;
      }
    }
    @media (max-width: 600px){
        padding-top: 10rem;
    }
  }
  .hero-brands {
    padding-top: 8rem;
    h2 {
      text-transform: uppercase;
      font-weight: 100;
    }
  }
  @media (max-width: 769px){
    padding-top: 3rem;
    .hero-brands{
      padding-top: 5rem;
    }
  }
`

export const HeroFooter = styled.div`
  background-color: #7c92a9;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 2rem;
  @media (max-width: 900px){
    padding: 1rem;
  }
  @media (max-width: 769px){
   text-align: center 
  }
`

export const HeroFooterContent = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 800;
  p {
    display: inline-block;
    padding-right: 2rem;
    @media (max-width: 769px){
      padding-bottom: 1rem;
    }
    @media (max-width: 769px){
      font-size: 16px;
      padding: 0.5rem 0;
    }
  }
  button {
    border: 2px solid white;
    background-color: transparent;
    border-radius: 5rem;
    line-height: 3rem;
    width: 13rem;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    color: white;
    &:hover {
      background-color: #ffffff;
      box-shadow: 0px 15px 20px rgba(90, 90, 90, 0.4);
      transform: translateY(-7px);
      color: #7c92a9;
    }
    @media (max-width: 769px){
      width: 10rem;
    }
    @media (max-width: 900px){
      width: 7rem;
      font-size: 0.7rem;
      line-height: 2rem;
    }
  }
`