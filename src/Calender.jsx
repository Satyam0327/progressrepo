import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import CheckIcon from '@mui/icons-material/Check';
import './Calender.css';

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          className='calendar-container'
          variant='static'
          orientation='portrait'
          value={value}
          disableFuture
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => (
            <TextField {...params} />
          )}
          renderDay={(day, _value, DayComponentProps) => {
            const isSelected =
              !DayComponentProps.outsideCurrentMonth &&
              highlightedDays.indexOf(day.getDate()) >= 0;

            return (
              <Badge
                key={day.toString()}
                overlap='circular'
                badgeContent={isSelected ? <CheckIcon style={{ color: 'green' }} /> : undefined}
              >
                <PickersDay {...DayComponentProps} />
              </Badge>
            );
          }}
          ToolbarComponent={() => null} // Set ToolbarComponent to null to hide the toolbar
        />
      </LocalizationProvider>
    </>
  );
};

export default Calendar;
