import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isSameDay } from 'date-fns';
import './MyCalendar.css'; // Create a CSS file for custom styles
import Switch from '@mui/material/Switch';

export default function MyCalendarComponent() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [edit, setEdit] = useState(false);

  const handleDayClick = (value) => {
    const newDates = [...selectedDates];
    const index = newDates.findIndex(date => isSameDay(date, value));

    if (index !== -1) {
      // If the date is already selected, remove it
      newDates.splice(index, 1);
    } else {
      // Otherwise, add the date
      newDates.push(value);
    }

    setSelectedDates(newDates);
    console.log(newDates); // Changed to newDates for updated logging
  };

  const allowEdit = () => {
    setEdit(edit => !edit);
  };

  const isSelected = (date) => {
    return selectedDates.some(selectedDate => isSameDay(selectedDate, date));
  };

  const returnYear = () => {
    let calendar = [];
    for (let i = 0; i < 12; i++) { // Corrected loop to 12 months
      calendar.push(
        <Calendar
          key={i} // Added a unique key for each Calendar component
          onClickDay={edit ? handleDayClick : null}
          value={new Date(new Date().getFullYear(), i)} // Changed to render each month
          tileClassName={({ date, view }) => view === 'month' && isSelected(date) ? 'highlight' : null}
        />
      );
    }
    return calendar;
  };

  return (
    <div>
      {returnYear()}
      <Switch
        onChange={allowEdit}
        color="primary"
        value="dynamic-class-name"
      />
    </div>
  );
}
