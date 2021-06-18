import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import MobileLogo from '../../../images/Group 1179.png'
import Phone1 from '../../../images/Phone1.png'
import Phone2 from '../../../images/Phone2.png'
import Phone3 from '../../../images/Phone3.png'
import Phone4 from '../../../images/Phone4.png'

const PhoneInfographic = () => {
  const phoneData = [
    {
      id: 1,
      imgSrc: Phone1,
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy eirmod et.'
    },
    {
      id: 2,
      imgSrc: Phone2,
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy eirmod et.'
    },
    {
      id: 3,
      imgSrc: Phone3,
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy eirmod et.'
    },
    {
      id: 4,
      imgSrc: Phone4,
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy eirmod et.'
    },
  ]

  const [current, setCurrent] = useState(1)
  
  return (
    <SectionWrapper>
      <SectionHeader>
        <div className="section-image-wrapper">
          <img src={MobileLogo} alt="" />
        </div>
        <div className="section-info-details">
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy eirmod et.</p>
        </div>
      </SectionHeader>
      <SectionContent>
          <div className="section-left-content">
            {
              phoneData.map((data, index) => {
                return (
                    <>
                      { 
                        (phoneData.length / 2 >= index + 1 ) && (
                          <div className={`section-upper-left`}>
                            <button 
                              className={`phoneButton ${current === index + 1 ? 'active' : ''}`} 
                              onClick={() => setCurrent(data.id)}>
                              {data.id}
                            </button>
                            <h2>{data.title}</h2>
                            <p>{data.desc}</p>
                          </div>
                        )
                      }
                    </>
                )
              })
            }
          </div>
          <div className="section-center-content">
            <img src={phoneData[current - 1].imgSrc} alt="Phones" />
          </div>
          <div className="section-right-content">
            {
              phoneData.map((data, index) => {
                return (
                    <>
                      { phoneData.length / 2 < index + 1 && (
                        <div className={`section-upper-right`}>
                          <button 
                            className={`phoneButton ${current === index + 1 ? 'active' : ''}`} 
                            onClick={() => setCurrent(data.id)}>
                            {data.id}
                          </button>
                          <h2>{data.title}</h2>
                          <p>{data.desc}</p>
                        </div>
                      )}
                    </>
                )
              })
            }
          </div>
      </SectionContent>
    </SectionWrapper>
  )
}

export default PhoneInfographic

const SectionWrapper = styled.section``

const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 3rem 40rem;
  @media (max-width: 1600px) {
    padding: 0 10rem;
  }
  @media (max-width: 900px) {
    padding: 1rem;
  }
  .section-image-wrapper{
    img{
      @media (max-width: 600px){
        width: 75%;
      }
    }
  }
  .section-info-details {
    padding: 1rem 0;
    h2 {
      font-size: 2.5rem;
    }
    p {
      text-align: center;
      font-size: 1.2rem;
      padding-top: 1rem;
      color: #7c92a9;
    }
    @media (max-width: 600px){
      h2{
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`

const SectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;
  @media (max-width: 1024px) {
    padding: 0 5rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0 1rem;
  }

  .section-left-content {
    text-align: right;
    .section-upper-left {
      padding-bottom: 1rem;
    }
    .section-bottom-left {
      padding-bottom: 1rem;
    }
    button {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      border: none;
      background-color: #7c92a9;
      cursor: pointer;
      color: #fff;
      &.active {
        background-color: #2ea1f8 !important;
      }
      span {
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 800;
        padding-bottom: 1rem;
      }
    }
    h2 {
      color: #7c92a9;
      padding-bottom: 1rem;
      font-weight: 800;
    }
    p {
      color: #7c92a9;
      padding-bottom: 2rem;
      line-height: 2rem;
    }
    @media (max-width: 900px) {
      order: 2;
      text-align: left;
    }
    @media (max-width: 600px) {
      text-align: center;
    }
  }

  .section-center-content {
    @media (max-width: 600px){
      img{
        width: 100%;
      }
    }
  }

  .section-right-content{
    text-align: left;
    .section-upper-right {
      padding-bottom: 1rem;
    }
    .section-bottom-right {
      padding-bottom: 1rem;
    }
    button {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      border: none;
      background-color:#7c92a9;
      cursor: pointer;
      color: #fff;
      &.active {
        background-color: #2ea1f8 !important;
      }
      span {
        color: white;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 800;
      }
    }
    h2 {
      color: #7c92a9;
      padding-bottom: 1rem;
      font-weight: 800;
    }
    p {
      color: #7c92a9;
      padding-bottom: 2rem;
      line-height: 2rem;
    }
    @media (max-width: 900px) {
      order: 3;
    }
    @media (max-width: 600px) {
      text-align: center;
    }
  }
`
