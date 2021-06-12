import React from 'react'
import styled from 'styled-components'

const PageWrapper = ({children}) => {
  
  return (
    <StyledPageWrapper className='page-wrapper'>
        {children}
    </StyledPageWrapper>
  )

}

const StyledPageWrapper = styled.div`
  width:100%;
  max-width:1400px;
  margin:0 auto
`


export default PageWrapper
