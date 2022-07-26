import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

function Customicon(props) {
  return (
      <Container>
        <Icon>{props.icon} </Icon>
      </Container>
  )
}

export default Customicon
const Container = styled.div`

`