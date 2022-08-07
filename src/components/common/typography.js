import styled,{css} from 'styled-components'

export const JumboHeader = styled.h1`
text-transform:capitalize;
font-weight:600;
font-size:70px;
height:100px;
color:rgba(0, 0, 0, 0.08);
${p=>p.dark?css`color:rgba(41, 87, 111, 0.46);`:css``}
`
export const P = styled.p`
color: rgba(0, 0, 0, 0.6);
${p=>p.dark?css`
color:#fff;
`:css``}
`
export const Bold = styled.span`
font-weight:600;
`
export const SectionHeader = styled.h6`
color: rgba(0, 0, 0, 0.7);
font-size:20px;
height:30px;
text-transform:capitalize;
${p=>p.dark?css`
color:#fff;
`:css``}
`