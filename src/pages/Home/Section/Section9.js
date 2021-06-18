import React, { useEffect } from 'react'
import styled from 'styled-components'
import PageWrapper from '../../../components/PageWrapper'
import Customer from '../../../images/Group 1134.png'
import AOS from 'aos'
import 'aos/dist/aos.css';

const ReviewsSection = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <SectionWrapper>
      <PageWrapper>
        <div className="container">
          <div className="section-left-content" data-aos="zoom-in" data-aos-delay="100">
            <img src={Customer} alt="" />
          </div>
          <div className="section-right-content">
              <h2>Reliable!</h2>
              <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem Ipsum Dolor Sit Amet,"</p>
              <span>John Doe</span>
            <div className="rating-box">
              <span className="rating-star full-star">&#9733;</span>
              <span className="rating-star full-star">&#9733;</span>  
              <span className="rating-star full-star">&#9733;</span>  
              <span className="rating-star full-star">&#9733;</span>  
              <span className="rating-star full-star">&#9733;</span>  
            </div>
          </div>
        </div>
      </PageWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  margin:3rem 0;
  @media (max-width: 900px){
    margin: 0;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      @media (max-width: 900px){
        width: 100%;
      }
    }
    .section-right-content{
      @media (max-width: 900px){
        display:flex;
        flex-direction: column;
        align-items: center;
      }
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
      padding-bottom: 3rem;
      line-height: 3rem;
      @media (max-width: 600px){
        text-align: center;
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
    .rating-box{
      .rating-star{
        font-size: 1rem;
        width: 1rem;
        height: 3rem;
        position: relative;
        display: block;
        float: left;
        color: #f2b01e;
      }
    }
    @media (max-width: 900px){
      flex-direction: column;
      padding: 2rem;
    }
  }
`

export default ReviewsSection
