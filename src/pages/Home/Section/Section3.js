import React from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import PageWrapper from '../../../components/PageWrapper'
import {Themes} from '../../../utils/Variables'

const GadgetCards = () => {
  return (
    <SectionWrapper themes = {Themes}>
      <PageWrapper>
        <div className="card1-container">
          <div className="card-wrapper">
            <div className="card-item-content-left">
              <img src="" alt="" />
            </div>
            <div className="card-item-content-right">
              <h3>For your Smartphone, Tablet and Accessories</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed diam</p>
            </div>
          </div>
        </div>
        <div className="card2-container">
          <div className="card-wrapper">
            <div className="card-item-2">
              <div className="card-item-content">
                <h3>For your wearables</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed diam</p>
                <img src="" alt="" />
              </div>
            </div>
            <div className="card-item-3">
              <div className="card-item-content">
                <h3>FFor your Computer & Accessories </h3>
                <p>Lorem ipsum dolor, sit amet consectetur</p>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="section-button">
          <Button>Explore</Button>
        </div>
      </PageWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  background-color: ${(t) => t.theme.containercolor};
`

export default GadgetCards
