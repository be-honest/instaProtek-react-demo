import React from 'react'
import styled from 'styled-components'
import SectionImage from '../../../images/Group 1180.png'
import ModalImage from '../../../images/Group 1189.png'


const ProductSection = () => {
  return (
    <SectionWrapper>
      <div className="imgResponsive">
        <img src={SectionImage} alt="" />
      </div>
      <div className="hide">
        <img src={ModalImage} alt="" className="modal_img"/>
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  .imgResponsive{
    img{
      width: 100%;
      height: 100%;
    }
  }
  &.hide{
    display: none;
  }
  .modal_img {
    width: 100%;
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2323;
  }
`

export default ProductSection
