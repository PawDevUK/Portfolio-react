import styled from 'styled-components'
import React from 'react'
const Wrapper = styled.div`
display:flex;
justify-content:flex-end;
`
const Inner = styled.div`
font-weight:bold;
text-align:center;
border-radius:20px;
color:#fff;
font-size:13px;
padding:5px;
background-color:rgba(1, 87, 155, 1);
max-width:80%;
margin:5px 5px 0px auto;
`
function BlueMessage({children}){
return(
<Wrapper>
    <Inner>
    {children}
    </Inner>
</Wrapper>
)
}
export default BlueMessage