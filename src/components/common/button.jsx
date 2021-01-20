import styled,{css}from 'styled-components'

const Button = styled.div`
${p=>p.mobile?css`
width:80px;
font-size:12px;
`:css`
width:100px;
`}

height:30px;
background-color:#17293F;
border:1px solid white;
border-radius:5px;
color:white;
display:flex;
justify-content:center;
align-items:center;
&:hover{
    border:2px solid #fff;
    text-decoration:none;
    cursor:pointer;
}
`
export default Button

