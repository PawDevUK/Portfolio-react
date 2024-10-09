import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {greenTimer, redTimer, lightBlue} from './styling'
import moment from 'moment'

const Wrapper = styled.div`
  margin-top: 50px;
  overflow: hidden; // Adding overflow property to prevent margin collapse
  background: #dde3ea;
  width: 100%;
  height: 742px;
`;
const ClockWrapper= styled.div`
    height: 205px;
    width: 205px;
    margin: 15px auto;
`
const ClockBorder = styled.div`
  background-color: ${p=>p.faceColor};
  border-radius: 50%;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ClockFace= styled.div`
  background-color: ${lightBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 150px;
  width: 150px;
`;
const ClockTimer = styled.div`
  height:100px;
  width:100px;
  font-size:26px;
  font-weight: 500;
  color:grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-variant-numeric: "tabular-nums";
  font-family:"Roboto Mono", "monospace";
`;

const TimerRecordsWrapper = styled.div`
  margin-top: 10px;
  height: 200px;
  width: 100%;
  border: 2px solid #80808057;
  border-radius: 40px;
`;

export default function ClockInOut() {
    const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'));
    const [faceColor, setFaceColor] = useState(`${greenTimer}`)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId);
}, []);

function recordClockInOut() {
  if (faceColor === `${greenTimer}`) {
    setFaceColor(redTimer);
  } else {
    setFaceColor(greenTimer);
  }
}
  return (
    <Wrapper>
      <ClockWrapper onClick={recordClockInOut}>
        <ClockBorder faceColor={faceColor}>
          <ClockFace >
            <ClockTimer>
               {currentTime}
            </ClockTimer>
          </ClockFace>
        </ClockBorder>
            <TimerRecordsWrapper>

            </TimerRecordsWrapper>
      </ClockWrapper>
    </Wrapper>
  );
}