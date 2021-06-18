import React, { useState } from 'react'
import styled from 'styled-components'
import SectionImage from '../../../images/Group 1180.png'
import ModalImage from '../../../images/Group 1189.png'


const ProductSection = () => {
  const [show, setShow] = useState(false);

  return (
    <SectionWrapper>
      <div className="imgResponsive" onClick={ () => setShow(!show)}>
        <img src={SectionImage} alt=""/>
      </div>
      {/* {
        show &&
      <div className="hide">
        <img src={ModalImage} alt="" className="modal_img"/>
      </div>
      } */}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  cursor: pointer;
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
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2323;
  }
`

export default ProductSection
