import styled, { css } from 'styled-components'
import Button from '@material-ui/core/Button'


export const StButton = styled(Button)`
margin: 10px 20px !important;
width: 80px;
background-color: #c2b092 !important;
font-size: 20px !important;
:active {
  border: none !important;
  background-color: #a1cae2 !important;
}
${p => p.header ? css`
width:200px;
` : css``}
`