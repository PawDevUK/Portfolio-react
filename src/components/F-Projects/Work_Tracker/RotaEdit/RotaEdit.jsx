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
`;

const ButtonsWrapper = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

const SelectWrapper = styled.div`
  margin-bottom: 10px;
`;

function RotaEdit({ Edit }) {
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
          <Typography color='primary' level='title-md' variant='soft'>
            Select fixed days off.
          </Typography>
          <Select color='primary' className='Slct' placeholder='Select..' onChange={fixedDaysSet}>
            <Option value='1'>Mon/Tue</Option>
            <Option value='2'>Tue/Wed</Option>
            <Option value='3'>Wed/Thu</Option>
            <Option value='4'>Thu/Fri</Option>
            <Option value='5'>Fri/Sat</Option>
            <Option value='6'>Sat/Sun</Option>
            <Option value='7'>Sun/Mon</Option>
          </Select>
        </SelectWrapper>
        <SelectWrapper>
          <Typography color='primary' level='title-md' variant='soft'>
            Select the work year.
          </Typography>
          <Select color='primary' className='Slct' placeholder='Select..' onChange={(e)=>{console.log(e.target.value);}}>
            <Option value={2022}>2022/2023</Option>
            <Option value={2023}>2023/2024</Option>
            <Option value={2024}>2024/2025</Option>
          </Select>
        </SelectWrapper>
        <ButtonsWrapper>
          <Button variant='outlined' className={'button_save'} onClick={Edit} endIcon={<SaveIcon />}>
            Save
          </Button>
        </ButtonsWrapper>
      </ControlsWrapper>
      <YearCalendarWrapper>{returnYear()}</YearCalendarWrapper>
    </CalendarWrapper>
  );
}

export default RotaEdit;
