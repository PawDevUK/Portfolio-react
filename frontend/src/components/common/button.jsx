import styled from 'styled-components'

const Button = styled.div`
width:100px;
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
    cursor:pointer;
}
`
export default Button

