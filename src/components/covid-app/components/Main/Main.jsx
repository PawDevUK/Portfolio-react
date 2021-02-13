import { CountryPicker, Global, Summary } from '.'
import React, {useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
height:760px;
`
const LeftWrapper =styled.div`
width:320px;
`
const RightWrapper = styled.div`
width:715px;
`
export default function Main(props) {
   const [country,setCountry] = useState({
        activeCases: "+35,257",
        country: "UK",
        newCases: "+14,104",
        newDeaths: "+333",
        totalCases: "3,959,784",
        totalDeaths: "112,798",
        totalRecovered: "1,950,886"
    })

    function handleClick(e,data){
        for(let item of data){
            if(item.country===e.target.innerText ){
                setCountry(item);
            }
        }
    }
    return (
        <Wrapper props={props}>
            <LeftWrapper>
                <CountryPicker handleClick={handleClick}></CountryPicker>
            </LeftWrapper>
            <RightWrapper>
                <Global></Global>
                <Summary {...country}></Summary>
            </RightWrapper>
        </Wrapper>
    )
}
