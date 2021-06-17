import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import PageWrapper from '../../../components/PageWrapper'
import FAQs from '../../../images/FAQS.png'
import AOS from 'aos'
import 'aos/dist/aos.css';

const FAQSection = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);  

  // const handleShow = (id) =>{
  //   setShow((preState) => ({
  //     ...preState,
  //     [id]: !preState[id]
  //   }));
  // }

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);


  return (
    <Section>
      <PageWrapper>
        <SectionWrapper>
          <div className="section-left-content">
            <div className="content-details">
              <h2>Frequently asked questions</h2>
              <p>If you have any other questions about our device insurance, you can checkout our common questions here! </p>
              <div className="list-container">
                <div className="common-question-list">
                  <span onClick={ () => setShow(!show) }>How do I register my device?</span>
                    {show && 
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    }
                  <span onClick={ () => setShow2(!show2) }>What is the step by step process of registration using the app?</span>
                    {show2 && 
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    }
                  <span onClick={ ()=> setShow3(!show3)}>How long does my limited warranty last?</span>
                    {show3 && 
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    }
                  <span onClick={ ()=> setShow4(!show4)}>How can I file a claim?</span>
                    {show4 && 
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    }
                </div>
                {/* <div className="plus-sign">
                  <div className="plus"><span>&#43;</span></div>
                  <div className="plus"><span>&#43;</span></div>
                  <div className="plus"><span>&#43;</span></div>
                  <div className="plus"><span>&#43;</span></div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="section-right-content" data-aos="zoom-in">
            <img src={FAQs} alt="FAQs" />
          </div>
        </SectionWrapper>
      </PageWrapper>
    </Section>
  )
}

const Section = styled.section``

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 3rem 0;
  .section-left-content{
    .content-details{
      h2 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.2rem;
        color: #7c92a9;
        line-height: 2rem;
        padding-bottom: 1rem;
        @media (max-width: 1024px) {
          line-height: 1.5rem;
        }
      }
      .list-container {
        display: flex;
        align-items: center;
        .common-question-list {
          padding-right: 6.5rem;
          @media (max-width: 1024px) {
            padding-right: 0;
          }
          @media (max-width: 800px) {
            padding: 0;
          }
          span {
            font-size: 1.5rem;
            font-weight: 500;
            display: inline-block;
            cursor: pointer;
            padding-top:1rem;
            &.active{
              color: #2ea1f8;
            }
            &:hover{
              color: #7c92a9;
            }
          }
          div{
            color: #7c92a9;
            padding-left: 1rem;
          }
        }
        .plus-sign {
          font-size: 2.3rem;
          color: #7c92a9;
          font-weight: 100;
          @media (max-width: 1024px) {
            font-size: 1.5rem;
          }
          @media (max-width: 800px) {
            font-size: 1rem;
          }
        }
        @media (max-width: 900px) {
          padding-top: 1.5rem;
          text-align: center;
        }
      }
      @media (max-width: 1400px) {
        h2 {
          font-size: 1.8rem;
        }
        p {
          font-size: 1rem;
        }
      }
      @media (max-width: 900px) {
        text-align: center;
      }
    }
  }
  .section-right-content{
    img {
      @media (max-width: 1400px) {
        width: 450px;
      }
    }
  }
  @media (max-width: 900px){
    padding: 2rem 2rem;
    flex-direction: column;
  }
`

export default FAQSection
