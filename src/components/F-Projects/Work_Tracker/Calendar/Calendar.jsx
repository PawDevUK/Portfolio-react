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
const SwitchWrapper = styled.div`
  margin-top:50px;
`
const SwitchHeader = styled.h4`
  
`

export default function MyCalendarComponent() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [date, setDate] = useState(new Date());
  const [edit, setEdit] = useState(true);

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
              <Calendar
                  nextLabel={null}
                  prevLabel={null}
                  next2Label={null}
                  prev2Label={null}
                  calendarType='iso8601'
                  key={i}
                  onClickDay={edit ? handleDayClick : null}
                  tileClassName={({ date, view }) => (view === 'month' && isSelected(date) ? 'highlight' : null)}
              />
          );
      }
      return calendar;
  };

  return (
      <div>
          <SwitchWrapper>
              <SwitchHeader>Edit Rota</SwitchHeader>
              <Switch onChange={allowEdit} checked={edit} color='primary' value='dynamic-class-name' />
          </SwitchWrapper>
          <CalendarWrapper>{returnYear()}</CalendarWrapper>
      </div>
  );
}
