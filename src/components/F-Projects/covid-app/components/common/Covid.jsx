import { SvgLoader } from 'react-svgmt'
import styled from 'styled-components'
import { covidIcon } from 'components/F-Projects/covid-app/img'
import React from 'react'

export const Wrapper = styled(SvgLoader)`
  right: ${(p) => p.right}vw;
  height: ${(p) => p.size}vw;
  width: ${(p) => p.size}vw;
  position: absolute;
  top: ${(p) => p.top}vw;
`

export default function Covid(props) {
  return <Wrapper {...props} path={covidIcon}></Wrapper>
}
