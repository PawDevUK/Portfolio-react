
import styled from 'styled-components'

const Wrapper = styled.div`
justify-content:flex-start;
border-radius:20px;
text-align:center;
display:flex;
`
const Inner = styled.div`
font-weight:bold;
border-radius:20px;
color:#2E2E2E;
font-size:13px;
padding:5px;
background-color:#EDECEE;
max-width:80%;
margin:5px auto 0px 5px;
`
function WhiteMessage({children}){
return(
<Wrapper>
    <Inner>
    {children}
    </Inner>
</Wrapper>

)
}
export default WhiteMessage