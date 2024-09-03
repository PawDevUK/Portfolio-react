import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isSameDay } from 'date-fns';
import './MyCalendar.css'; // Create a CSS file for custom styles
import Switch from '@mui/material/Switch';
import styled from 'styled-components';

const CalendarWrapper = styled.div`
    width : 90%;
    margin: 0px 50px 50px 50px;
    display: flex;
    flex-wrap: wrap;
`
const MonthWrapper = styled.div`
    width: 350px;
    padding:5px;
`
const SwitchWrapper = styled.div`
  margin-top:50px;
`
const SwitchHeader = styled.h4`
  
`

export default function MyCalendarComponent() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [edit, setEdit] = useState(false);

  const handleDayClick = (value) => {
    setSelectedDates((prevItems) => {
      if (prevItems.includes(value)) {
        return prevItems.filter(prevItem => prevItem !== value);
      } else {
        return [...prevItems, value];
      }
    })
  };

  const allowEdit = () => {
    setEdit(edit => !edit);
  };

  const isSelected = (date) => {
    return selectedDates.some(selectedDate => isSameDay(selectedDate, date));
  };

  const returnYear = () => {
      let calendar = [];
      for (let i = 0; i < 12; i++) {
          calendar.push(
              <MonthWrapper>
                  <Calendar
                    className={'calendarStyle'}
                    key={i}
                    onClickDay={edit ? handleDayClick : null}
                    value={new Date(new Date().getFullYear(), i)}
                    tileClassName={({ date, view }) => (view === 'month' && isSelected(date) ? 'highlight' : null)}
                  />
              </MonthWrapper>
          );
      }
      return calendar;
  };

  return (
      <div>
          <SwitchWrapper>
              <SwitchHeader>Edit Rota</SwitchHeader>
              <Switch onChange={allowEdit} color='primary' value='dynamic-class-name' />
          </SwitchWrapper>
          <CalendarWrapper>{returnYear()}</CalendarWrapper>
      </div>
  );
}
