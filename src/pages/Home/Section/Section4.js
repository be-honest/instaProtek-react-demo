import React, {useState} from 'react'
import styled from 'styled-components'
import MobileLogo from '../../../images/Group 1179.png'
import Phone1 from '../../../images/Phone1.png'
import Phone2 from '../../../images/Phone2.png'
import Phone3 from '../../../images/Phone3.png'
import Phone4 from '../../../images/Phone4.png'

const PhoneInfographic = () => {
  const [phone1, showPhone] = useState(true);
  const [phone2, showPhone2] = useState(false);
  const [phone3, showPhone3] = useState(false);
  const [phone4, showPhone4] = useState(false);

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
          <div className="section-upper-left">
            <button className="button1" onClick={ () => showPhone(!phone1)} >1</button>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit iusto soluta quo quas delectus, provident maiores amet deserunt. Culpa quaerat dolores a blanditiis nisi exercitationem quis. Ipsum, expedita ut.</p>
          </div>
          <div className="section-bottom-left">
            <button className="button3" onClick={ () => showPhone3(!phone3)}>3</button>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit iusto soluta quo quas delectus, provident maiores amet deserunt. Culpa quaerat dolores a blanditiis nisi exercitationem quis. Ipsum, expedita ut.</p>
          </div>
        </div>
        <div className="section-center-content">
          {phone1 && <img src={Phone1} alt="" />}
          {phone2 && <img src={Phone2} alt="" />}
          {phone3 && <img src={Phone3} alt="" />}
          {phone4 && <img src={Phone4} alt="" />}
        </div>
        <div className="section-right-content">
          <div className="section-upper-right">
            <button className="button2" onClick={ () => showPhone2(!phone2)}>2</button>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit iusto soluta quo quas delectus, provident maiores amet deserunt. Culpa quaerat dolores a blanditiis nisi exercitationem quis. Ipsum, expedita ut.</p>
          </div>
          <div className="section-bottom-right">
            <button className="button4" onClick={ () => showPhone4(!phone4)}>4</button>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit iusto soluta quo quas delectus, provident maiores amet deserunt. Culpa quaerat dolores a blanditiis nisi exercitationem quis. Ipsum, expedita ut.</p>
          </div>
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
  .section-info-details {
    padding: 1rem 0;
    h2 {
      font-size: 2.5rem;
    }
    p {
      text-align: center;
      font-size: 1.2rem;
      padding-top: 1rem;
      color: $secondarycolor;
    }
  }
`

const SectionContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10rem;
  @media (max-width: 1024px) {
    padding: 0 5rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
  .section-left-content {
    text-align: right;
    .section-upper-left {
      padding-bottom: 1rem;
      .button1 {
        &:active {
          ~ {
            .image1 {
              display: block;
            }
          }
        }
      }
    }
    .section-bottom-left {
      padding-bottom: 1rem;
    }
    button {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      border: none;
      background-color: #efefef;
      cursor: pointer;
      &.active {
        background-color: lightblue !important;
      }
      span {
        color: white;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 800;
        padding-bottom: 1rem;
      }
    }
    h2 {
      color: $secondarycolor;
      padding-bottom: 1rem;
      font-weight: 800;
    }
    p {
      color: $secondarycolor;
      padding-bottom: 2rem;
      line-height: 2rem;
    }
    @media (max-width: 900px) {
      order: 2;
      text-align: left;
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
      background-color:#efefef;
      cursor: pointer;
      &.active {
        background-color: lightblue !important;
      }
      span {
        color: white;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 800;
      }
    }
    h2 {
      color: $secondarycolor;
      padding-bottom: 1rem;
      font-weight: 800;
    }
    p {
      color: $secondarycolor;
      padding-bottom: 1rem;
      line-height: 2rem;
    }
    @media (max-width: 900px) {
      order: 3;
    }
  }
`