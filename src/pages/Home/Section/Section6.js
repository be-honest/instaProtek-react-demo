import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../../../components/PageWrapper'
import PriceChart from '../../../images/Group 1028.png'

const PriceChartSection = () => {
  return (
    <SectionWrapper>
      <PageWrapper>
        <SectionContent>
          <h2>Same Reliable Coverage at Lower Prices! </h2>
          <span>iPhone X 64GB ($999.99) <br/> 2-year warranty with accidental damage</span>
          <img src={PriceChart} alt="" />
        </SectionContent>
      </PageWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  @media (max-width: 900px){
    text-align: center;
  }
`

const SectionContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0;
  h2 {
    font-size: 2.5rem;
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
  span {
    font-size: 2rem;
    color: $secondarycolor;
    @media (max-width: 1024px) {
      font-size: 1.7rem;
    }
    @media (max-width: 600px) {
      font-size: 1rem;
      padding: 0.5rem 0;
    }
  }
  p {
    font-size: 1.5rem;
    color: $secondarycolor;
    @media (max-width: 1024px) {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 1600px) {
    img {
      width: 80%;
    }
  }
  @media (max-width: 600px) {
    padding: 2rem 1rem;
    img {
      width: 100%;
    }
  }
`

export default PriceChartSection
