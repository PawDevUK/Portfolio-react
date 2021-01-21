import styled,{css}from 'styled-components'

const Button = styled.div`
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);

height:30px;
border-radius:5px;
display:flex;
justify-content:center;
align-items:center;
//mobile size
${p=>p.mobile?css`
width:80px;
font-size:12px;
`:css`
width:100px;
`}
//light theme
${p=>p.light?css`
background-color:#fff;
border:1px solid #c5c7ca;

color:#17293F;
`:css`
background-color:#17293F;
border:1px solid white;
color:#fff;
`}

transition:transform .2s;
//hover transition for transform and background-color
&:hover{
    transform:scale(1.07);
    cursor:pointer;
    text-decoration:none;
    border:2px solid #fff;
    ${p=>p.light?css`
        background-color:#17293F;
        border:1px solid white;
        color:#fff;
        transition:background-color .2s linear;
    `:css``}
}
`
export default Button

