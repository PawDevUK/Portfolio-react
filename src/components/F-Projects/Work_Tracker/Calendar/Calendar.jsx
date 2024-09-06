import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isSameDay } from 'date-fns';
import './MyCalendar.css';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import styled from 'styled-components';
import moment from 'moment'

const CalendarWrapper = styled.div`
  width: 90%;
  margin: 0px 50px 50px 50px;
  display: flex;
  flex-wrap: wrap;
`;

const SwitchWrapper = styled.div``;
const SwitchHeader = styled.h4``;

const ControlsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
`;
const ButtonsWrapper = styled.div`
  width: 200px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;
export default function MyCalendarComponent() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [edit, setEdit] = useState(true);

  const handleDayClick = (value) => {
    setSelectedDates((prevState) => {
      const isDateSelected = prevState.some((date) =>
        isSameDay(date, value)
      );

      if (isDateSelected) {
        return prevState.filter(
          (prevItem) => !isSameDay(prevItem, value)
        );
      } else {
        return [...prevState, value];
      }
    });
  };

  const allowEdit = () => {
    setEdit((edit) => !edit);
  };

  const isSelected = (date) => {
    return selectedDates.some((selectedDate) => isSameDay(selectedDate, date));
  };

  const returnYear = () => {
    let calendar = [];
    for (let i = 0; i < 12; i++) {
      const firstDayOfMonth = moment()
        .startOf('year')
        .add(i, 'months')
        .toDate();
      calendar.push(
        <Calendar
          value={firstDayOfMonth}
          nextLabel={null}
          prevLabel={null}
          next2Label={null}
          prev2Label={null}
          calendarType='iso8601'
          key={i}
          onClickDay={edit ? handleDayClick : null}
          tileClassName={({ date, view }) =>
            view === 'month' && isSelected(date)
              ? 'highlight react-calendar__tile--active'
              : null
          }
        />
      );
    }
    return calendar;
  };

  return (
    <div>
      <ControlsWrapper>
        <SwitchWrapper>
          <SwitchHeader>Edit Rota</SwitchHeader>
          <Switch
            onChange={allowEdit}
            checked={edit}
            color='primary'
            value='dynamic-class-name'
          />
        </SwitchWrapper>
        <ButtonsWrapper>
          <Button variant='outlined' endIcon={<SaveIcon />}>
            Save
          </Button>
        </ButtonsWrapper>
      </ControlsWrapper>
      <CalendarWrapper>{returnYear()}</CalendarWrapper>
    </div>
  );
}
