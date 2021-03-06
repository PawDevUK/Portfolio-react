import { GlobalBackground, shadow6, GlobalMain, h1Regular } from '../styled'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GlobalTotal from 'components/F-Projects/covid-app/store/total'
import CountUp from 'react-countup'
import { removeComa } from '../factory'

const Wrapper = styled.div`
  width: 100%;
  height: 360px;
`
const InnerWrapper = styled.div`
  margin: auto;
  ${GlobalBackground}
  ${shadow6}
width:593px;
  height: 332px;
  border-radius: 3px;
  padding: 1px;
`
const GlobalWrapper = styled.div`
  margin: 40px auto 40px 60px;
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  ${GlobalMain};
  width: 330px;
  height: 252px;
  ${shadow6}
`

const Left = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Text = styled.p`
  ${h1Regular};
  margin: 0px auto;
`
const Right = styled.div`
  left: 280px;
  height: 95%;
  width: 197px;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
`
const Data = styled.div`
  ${shadow6};
  ${GlobalMain};
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  height: 58px;
  width: 100%;
`

export default function Global() {
  const [data, setData] = useState({
    totalCases: '',
    totalDeaths: '',
    totalRecovered: '',
  })
  useEffect(() => {
    const set = async () => {
      const {
        totalCases,
        totalDeaths,
        totalRecovered,
      } = await GlobalTotal.result
      setData({
        totalCases: removeComa(totalCases),
        totalDeaths: removeComa(totalDeaths),
        totalRecovered: removeComa(totalRecovered),
      })
    }
    set()
  }, [])
  return (
    <Wrapper>
      <InnerWrapper>
        <GlobalWrapper>
          <Left>
            <Text>Global Total Cases: </Text>
            <Text>Global Total recovered: </Text>
            <Text>Global Total Deaths: </Text>
          </Left>
          <Right>
            <Data>
              <Text>
                <CountUp
                  duration={3}
                  useEasing={true}
                  separator={','}
                  end={data.totalCases}
                ></CountUp>
              </Text>
            </Data>
            <Data>
              <Text>
                <CountUp
                  duration={2.5}
                  useEasing={true}
                  separator={','}
                  end={data.totalRecovered}
                ></CountUp>
              </Text>
            </Data>
            <Data>
              <Text>
                <CountUp
                  duration={2}
                  useEasing={true}
                  separator={','}
                  end={data.totalDeaths}
                ></CountUp>
              </Text>
            </Data>
          </Right>
        </GlobalWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}
