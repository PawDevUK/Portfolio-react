import SectionHeader from 'components/covid-app/components/common/SectionHeader';
import countries from 'components/covid-app/store/countries.json'
import { shadow6, h3Light, CountryData, GlobalMain } from 'components/covid-app/components/styled';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';


const Wrapper = styled.div`
margin:auto;
width:90%;
`
const InnerWrapper = styled.div`
overflow-y:auto;
padding:1px;
border-radius:2px;
${shadow6}
margin:auto;
width:80%;
background-color:#fff;
height:700px;
::-webkit-scrollbar {
  width: 15px;
  height:50px;
};
::-webkit-scrollbar-track {
  background: #f1f1f1;
  margin-top: 30px;
  border-radius:10px;
};
::-webkit-scrollbar-thumb {
    background:#cecece;
    border-radius:10px;
    ${shadow6};
  
}
`
const UL = styled.ul`
margin:10px 0px;
padding-inline-start:10px;
`
const LI = styled.li`
cursor: pointer;
width:90%;
list-style-type:none;
border-bottom:1px solid #fff;
${h3Light};

:hover{
    border-bottom:1px solid #79BAC1;
    ${CountryData};
}
:active{
    ${GlobalMain};
}
`


export default function CountryPicker(props) {
    const [data, setData] = useState([])


    useEffect(() => {
        const data = () => {
            setData(countries.result)
        }
        data()
    }, [])
    
    

    return (
        <Wrapper>

            <InnerWrapper>
                <SectionHeader Regular >Countries</SectionHeader>
                <UL>
                    {data.map((item,i) => {
                        return <LI key={i} onClick={(e)=>props.handleClick(e,data)}>{item.country}</LI>
                    })}
                </UL>

            </InnerWrapper>

        </Wrapper>
    )
}