import { P } from 'components/common/typography'
import styled from 'styled-components'
import icon from 'img/icon/done_24px.svg'
import { SvgLoader } from 'react-svgmt'
import React from 'react'

const Wrapper = styled.div`
margin:0px;
width:190px;
display:flex;
align-items:center;
`
const Icon = styled(SvgLoader)`
margin:2px;
`
const StP = styled(P)`
margin:0px;
`
export default function Pros({ ...props }) {
    return (
        <Wrapper>
            <Icon path={icon}></Icon>
            <StP {...props}>{props.children}</StP>
        </Wrapper>
    )

}