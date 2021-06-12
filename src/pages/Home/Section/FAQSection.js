import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../../../components/PageWrapper'
import FAQs from '../../../images/FAQS.png'

const FAQSection = () => {
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
                  <span>How do I register my device? </span>
                  <span>What is the step by step process of registration using the app?</span>
                  <span>How long does my limited warranty last?</span>
                  <span>How can I file a claim?</span>
                </div>
                <div className="plus-sign">
                  <div className="plus"><span>&#43;</span></div>
                  <div className="plus"><span>&#43;</span></div>
                  <div className="plus"><span>&#43;</span></div>
                  <div className="plus"><span>&#43;</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-right-content">
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
        color: $secondarycolor;
        line-height: 3rem;
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
          }
        }
        .plus-sign {
          font-size: 2.3rem;
          color: $secondarycolor;
          font-weight: 100;
          @media (max-width: 1024px) {
            font-size: 1.5rem;
          }
          @media (max-width: 800px) {
            font-size: 1rem;
          }
        }
        @media (max-width: 800px) {
          text-align: left;
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
      @media (max-width: 800px) {
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
`

export default FAQSection
