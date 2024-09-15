import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css';
import Calendar from 'react-calendar';

import SaveIcon from '@mui/icons-material/Save';

import moment from 'moment';
import { isSameDay } from 'date-fns';

const CalendarWrapper = styled.div``;

const YearCalendarWrapper = styled.div`
  width: 90%;
  margin: 50px 50px 50px 50px;
  display: flex;
  flex-wrap: wrap;
`;

const ControlsWrapper = styled.div`
    position: fixed;
    bottom: 20px;
    right: 50px;
    background-color: #ffffffca;
    border-radius: 5px;
  @media (max-width:1100px) {
    display:flex;
    justify-content: center;
    background-color: #ffffffca;
    border-radius: 5px;
    width: 60vw;
    height: 90px;
  };
  @media (max-width:870px) {
    width: 60vw;
    height: 117px;
    font-size:14px !important;
  };
  @media (max-width:639px) {
    width: 420px;
    height: 117px;
    margin-bottom: 50px;
  };
  @media (min-width:1100px) {
    display: block;
    height: 222px;
    width:210px;
  };
`;

const ButtonsWrapper = styled.div`
  margin: 20px;
  display: flex;
  @media (min-width:1100px) {
    justify-content: center;
    margin:5px;
  };
`;

const SelectWrapper = styled.div`
  margin: 10px;
  width: 180px;
  height: 50px;
  @media (min-width:1100px) {
    height: 80px;
    width: 185px;
    margin:10px auto 0px auto;
  };
`;

function RotaEdit({ toggleEdit }) {
  const [selectedDates, setSelectedDates] = useState([]);
  const [taxYear, setTaxYear] = useState(moment().year());
  const [fixDays, setFixedDays] = useState('');

  useEffect(()=>{

  },[taxYear])

  const handleDayClick = (value) => {
    setSelectedDates((prevState) => {
      const isDateSelected = prevState.some((date) => isSameDay(date, value));

      if (isDateSelected) {
        return prevState.filter((prevItem) => !isSameDay(prevItem, value));
      } else {
        return [...prevState, value];
      }
    });
  };

  const isSelected = (date) => {
    return selectedDates.some((selectedDate) => isSameDay(selectedDate, date));
  };

  const returnYear = (ty) => {
    let calendar = [];

    function returnTaxYear(year) {
      // This function needs return calendar between 1st of April of the year and 31 of March next year.
      // Create array with 9 months of a year and 3 months of +1 year
      let months = [4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3];
      let taxYear = [];

      months.forEach((m) => {
        if (m >= 4) {
          taxYear.push(
            moment()
              .startOf()
              .month(m - 1)
              .year(year)
          );
        } else if (m < 4) {
          taxYear.push(
            moment()
              .startOf()
              .month(m - 1)
              .year(year + 1)
          );
        }
      });
      return taxYear;
    }

    returnTaxYear(ty).forEach((m, i) => {
      calendar.push(
        <Calendar
          value={m}
          nextLabel={null}
          prevLabel={null}
          next2Label={null}
          prev2Label={null}
          calendarType='iso8601'
          key={i}
          onClickDay={handleDayClick}
          tileClassName={({ date, view }) =>
            view === 'month' && isSelected(date)
              ? 'highlight react-calendar__tile--active'
              : null
          }
        />
      );
    });
    return calendar;
  };

  const fixedDaysSet = (e)=>{

  }

  const Save = () => {};

  return (
    <CalendarWrapper>
      <ControlsWrapper>
        <SelectWrapper>
          <Typography color='primary' level='title-md' variant='soft' className='selectHeader'>
            Select fixed days off.
          </Typography>
          <Select
            color='primary'
            className='Slct'
            placeholder='Select..'
            onChange={(e, v) => {
              setFixedDays(v);
            }}
          >
            <Option value='Mon/Tue'>Mon/Tue</Option>
            <Option value='Tue/Wed'>Tue/Wed</Option>
            <Option value='Wed/Thu'>Wed/Thu</Option>
            <Option value='Thu/Fri'>Thu/Fri</Option>
            <Option value='Fri/Sat'>Fri/Sat</Option>
            <Option value='Sat/Sun'>Sat/Sun</Option>
            <Option value='Sun/Mon'>Sun/Mon</Option>
          </Select>
        </SelectWrapper>
        <SelectWrapper>
          <Typography color='primary' level='title-md' variant='soft' className='selectHeader'>
            Select the work year.
          </Typography>
          <Select
            color='primary'
            className='Slct'
            placeholder='Select..'
            onChange={(e, value) => {
              setTaxYear(value);
            }}
          >
            <Option value={2022}>2022/2023</Option>
            <Option value={2023}>2023/2024</Option>
            <Option value={2024}>2024/2025</Option>
          </Select>
        </SelectWrapper>
        <ButtonsWrapper>
          <Button
            variant='outlined'
            className={'button_save'}
            onClick={() => {
              toggleEdit();
              Save();
            }}
            endIcon={<SaveIcon />}
          >
            Save
          </Button>
        </ButtonsWrapper>
      </ControlsWrapper>
      <YearCalendarWrapper>{returnYear(taxYear)}</YearCalendarWrapper>
    </CalendarWrapper>
  );
}

export default RotaEdit;
