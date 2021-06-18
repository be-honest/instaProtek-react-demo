import React, { useEffect } from 'react'
import styled from 'styled-components'
import PageWrapper from '../../../components/PageWrapper'
import StyleLines from '../../../images/Group 1164.png'
import Dashboard1 from '../../../images/Image 2.png'
import Dashboard2 from '../../../images/2-crop.png'
import ProductLogo from '../../../images/Group 1178.png'
import Wave from '../../../images/Path-new.png'
import Button from '../../../components/Button'
import AOS from 'aos'
import 'aos/dist/aos.css';

const ProductGuaranteeSection = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <SectionWrapper>
      <SectionContainer>
        <PageWrapper>
          <div className="content-left-img">
            <img src={StyleLines} alt="" />
          </div>
          <div className="left-content">
            <img src={Dashboard1} alt="" className="front" />
            <img src={Dashboard2} alt="" className="back" />
          </div>
          <div className="right-content" data-aos="fade-left" data-aos-delay="150" data-aos-duration="1000">
            <img src={ProductLogo} alt="" />
            <h2>Product Guarantee</h2>
            <p>Inlelligent and modern app-based solution built for electronic products distributors. It's a cost-efficient tool made to help increase business revenue and customer satisfaction by settings products apart from the competition through dependadble product guarantee services.</p>
            <Button width='10rem'>Learn More</Button>
          </div>
        </PageWrapper>        
      </SectionContainer>
      <div className="section-footer">
        <img src={Wave} alt="" />
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  .section-footer{
    img{
      width: 100%;
    }
  }
`

const SectionContainer = styled.div`
  background-color: #f2f2f2;
  position: relative;
  height: 720px;
  .content-left-img {
    position: absolute;
    top: -5rem;
    left: -14rem;
    transform: scaleX(-1);
    @media (max-width: 1400px) {
      width: 35%;
    }
    @media (max-width: 1024px) {
      width: 45%;
    }
    @media (max-width: 900px) {
      display: none;
    }
  }
  .left-content {
    position: relative;
    .front {
      position: absolute;
      left: -89px;
      top: 372px;
      z-index: 1;
      box-shadow: 0px 5px 12px rgba(59, 61, 61, 0.4);
      @media (max-width: 1600px) {
        left: 90px;
      }
      @media (max-width: 1400px) {
        width: 35%;
      }
      @media (max-width: 1024px) {
        width: 40%;
        left: -5px;
        top: 290px;
      }
      @media (max-width: 880px) {
        position: static;
        width: 70%;
        margin-bottom: 1rem;
      }
      @media (max-width: 600px) {
        width: 100%;
      }
    }
    .back {
      position: absolute;
      top: 207px;
      left: 210px;
      box-shadow: 0px 5px 12px rgba(59, 61, 61, 0.4);
      @media (max-width: 1600px) {
        top: 215px;
        left: 275px;
      }
      @media (max-width: 1400px) {
        width: 35%;
      }
      @media (max-width: 1400px) {
        width: 35%;
      }
      @media (max-width: 1024px) {
        width: 40%;
        left: 130px;
        top: 185px;
      }
      @media (max-width: 880px) {
        position: static;
        width: 70%;
      }
      @media (max-width: 600px) {
        width: 100%;
      }
    }
    @media (max-width: 900px) {
     padding: 2rem;
    }
    @media (max-width: 600px) {
      margin: 0;
    }
  }
  .right-content {
    position: absolute;
    left: 70rem;
    top: 10rem;
    img{
      @media (max-width: 900px){
        width: 17%;
        padding-bottom: 0.5rem;
      }
      @media (max-width: 600px){
        width: 30%;
      }
    }
    @media (max-width: 900px){
      position: unset;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 2rem;
      text-align: center;
    }
    h2 {
      font-size: 2rem;
      @media (max-width: 900px){
        font-size: 1.5rem;
      }
    }
    p {
      font-size: 1.2rem;
      line-height: 2rem;
      padding-top: 1rem;
      color: $secondarycolor;
      padding-right: 9rem;
      padding-bottom: 5rem;
      @media (max-width: 1400px) {
        padding-bottom: 1rem;
        padding-right: 1rem;
      }
      @media (max-width: 900px) {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }
  @media (max-width: 900px){
    min-height: 960px;
  }
  @media (max-width: 600px){
    min-height: 840px;
  }
`

export default ProductGuaranteeSection
