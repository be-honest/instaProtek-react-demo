import React from 'react'
import styled from 'styled-components'
import PageWrapper from "../../../components/PageWrapper"
import PhoneApp from "../../../images/Instaprotek-App.png"

const InstaProtekApp = () => {
  return (
    <div className="sectionWrapper">
      <div className="sectionContent">
        <h2>instaProtek App</h2>
        <p>Frictionless, app-driven registration and communication</p>
        <img src={PhoneApp} alt="" className="phoneApp"/>
      </div>
    </div>
  )
}

export default InstaProtekApp
