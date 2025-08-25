import styled from 'styled-components'
import { ReactComponent as CovidIconSvg } from 'components/F-Projects/covid-app/img/covidIcon.svg'
import React from 'react'

export const Wrapper = styled(CovidIconSvg)`
  right: ${(p) => p.right}vw;
  height: ${(p) => p.size}vw;
  width: ${(p) => p.size}vw;
  position: absolute;
  top: ${(p) => p.top}vw;
`

export default function Covid(props) {
  return <Wrapper {...props} />
}
