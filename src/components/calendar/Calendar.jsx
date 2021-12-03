import React, { useContext, useState } from 'react';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { DataContext } from '../data/DataProvider';

import './Calendar.css';

export const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  const { setData } = useContext(DataContext);

  const handleClick = (_value) => {
    const day = new Date(_value).getDate();
    const month = new Date(_value).getMonth();

    console.log(month, day);
    setData({ month, day });
  };

  return (
    <div className="calendarCntr">
      <Calendar
        className="calendar"
        onChange={onChange}
        value={value}
        onClickDay={handleClick}
      />
    </div>
  );
};
