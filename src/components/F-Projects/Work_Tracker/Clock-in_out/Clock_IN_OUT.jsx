import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {greenTimer, redTimer, lightBlue} from './styling'
import moment from 'moment'

const Wrapper = styled.div`
  margin-top: 50px;
  overflow: hidden; // Adding overflow property to prevent margin collapse
  width: 100%;
  height: 742px;
`;
const ClockWrapper = styled.div`
  height: 400px;
  width: 240px;
  margin: 15px auto;
`;
const ClockHeader = styled.div`
  color:#1976d2;
  width: 240px;
  height: 40px;
  margin: 0px auto 5px auto;
  border: solid 1px #1976d275;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ClockBody = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: center;
  width: 240px;
  height: 230px;
  border: solid 1px #1976d275;
  border-radius: 5px 5px 50% 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
const ClockBorder = styled.div`
  background-color: ${p=>p.faceColor};
  border-radius: 50%;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
              0 1px 3px rgba(0, 0, 0, 0.08);
              `;

const ClockFace= styled.div`
  background: linear-gradient(180deg, #1976d26b, #bbdefb);
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
  color:#fff;
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
      <ClockWrapper>
        <ClockHeader>{faceColor === `${greenTimer}` ? "Clock In" : "Clock Out" }</ClockHeader>
        <ClockBody>
        <ClockBorder faceColor={faceColor}  onClick={recordClockInOut}>
          <ClockFace >
            <ClockTimer>
               {currentTime}
            </ClockTimer>
          </ClockFace>
        </ClockBorder>
        </ClockBody>
            <TimerRecordsWrapper>

            </TimerRecordsWrapper>
      </ClockWrapper>
    </Wrapper>
  );
}