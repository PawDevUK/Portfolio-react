import  React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { LocalOnEnter } from 'config/VisitorsAPI.config.js'

const Wrapper = styled.div`
  display:block;
  width:100%;
  text-align:center;
`
export default function VisitorCounter(props) {

  const H2 = props.h2
  const [visits, setVisits] = useState(props.visits)

  // useEffect(() => {
  //   LocalOnEnter.get('/').then((res) => {
  //     setVisits(res.data[res.data.length-1].counter);
  //   });
  // },[]);

  return (
    <Wrapper>
      <H2>Visits {visits}</H2>
    </Wrapper>
  )
}
