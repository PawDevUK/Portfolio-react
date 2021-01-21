import styled,{css}from 'styled-components'

const Button = styled.div`
${p=>p.mobile?css`
width:80px;
font-size:12px;
`:css`
width:100px;
`}
${p=>p.light?css`
background-color:#fff;
border:1px solid #17293F;
color:#17293F;
`:css`
background-color:#17293F;
border:1px solid white;
color:#fff;
`}
height:30px;
border-radius:5px;
display:flex;
justify-content:center;
align-items:center;
&:hover{
   
    cursor:pointer;
    ${p=>p.light?css`
    
    
    `:css`
     border:2px solid #fff;
    text-decoration:none;`}
}
`
export default Button

