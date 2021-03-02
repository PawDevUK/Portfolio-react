import { createGlobalStyle, css } from 'styled-components'

export const flexCenter = css`
display:flex;
justify-content:center;
align-items:center;
`

export const GlobalStyle = createGlobalStyle`
body { 
  height: 100vh;
font:62.5%/1.4 Arial,Tahoma,Geneva,Helvetica,sans-serif;
background:#eae3c8;
color:#333;
${flexCenter}
}
`

