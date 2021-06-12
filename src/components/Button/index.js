import React from 'react'
import styled from 'styled-components'
import {Themes} from '../../utils/Variables'

const Button = ({width = 100, color = "#fff", children}) => {
  return (
    <StyledButton width={width} color ={color} theme = {Themes} to='/'>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.a`
  width: ${(props) => props.width};
  background-color: ${(t) => t.theme.buttoncolor};
  border-radius: 5rem;
  line-height: 3rem;
  border: none;
  font-weight: 500;
  color: ${(props) => props.color};
  box-shadow: 0px 5px 12px rgba(59, 61, 61, 0.4);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  display: block;
  text-align: center;
  font-size: 1rem;
  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  @media (max-width: 769px){
    width: 8rem;
  }

`

export default Button
