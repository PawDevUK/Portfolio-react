import {CountryData, shadow6, h3Light, h2Regular} from '../styled'
import {getNumberNull,checkForData} from '../factory'
import SectionHeader from '../common/SectionHeader'
import styled,{css} from 'styled-components'
import {Chart} from './Chart'
import React from 'react'

const Wrapper = styled.div`
${shadow6};
margin:auto;
background-color:#fff;
width:593px;
height:338px;
`
const CountrySummary = styled.div`
display:flex;
align-items:center;
border-radius:3px;
margin:5px auto;
${CountryData};
${shadow6};
width:505px;
height:93px;
`
const Country = styled.div`
margin-left:20px;
width:30%;
${h2Regular};
${p=>p.Header?css`
margin:10px;
width:auto;
`:css``}
`
const CountDetail = styled.div`
margin:0px 10px;
`
const Header = styled.div`
margin-bottom:5px;
${h3Light}
`
const Data = styled.div`
text-align:center;`

const ChartWrapper = styled.div`
margin:5px;
height:200px;
`

export default function Summary(props){
    return(
        <Wrapper>
            <SectionHeader Regular>
           Summary information for <Country header>{props.country?props.country:"UK"}</Country>
            </SectionHeader>
           <ChartWrapper>
           <Chart data={[
            {
            "active cases": getNumberNull(props.activeCases),
            "new cases":  getNumberNull(props.newCases),
            "new deaths": getNumberNull(props.newDeaths),
            }
            ]
           }></Chart>
           </ChartWrapper>
            <CountrySummary>
                <Country>{checkForData(props.country)}
                </Country>
                <CountDetail>
                    <Header>Total Cases</Header>
                    <Data>{checkForData(props.totalCases)}</Data>
                </CountDetail>
                <CountDetail>
                    <Header>Total recovered</Header>
                    <Data>{checkForData(props.totalRecovered)}</Data>
                </CountDetail>
                <CountDetail>
                    <Header>Total deaths</Header>
                    <Data>{checkForData(props.totalDeaths)}</Data>
                </CountDetail>
            </CountrySummary>
        </Wrapper>
    )
}