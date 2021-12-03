import React, { createContext, useState } from 'react';

const _month = new Date().getMonth();
const _day = new Date().getDate();


const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState({
    day: 0,
    month: 0,
  });

  const getData = (month = _month, day = _day) => fetch(`https://apizen.date?api=true&month=${month}&day=${day}`)
    .then((res) => res.json());

  return (
    /* eslint-disable-next-line */
    <DataContext.Provider value={{
      data,
      setData,
      getData,
    }}>
      { props.children }
    </DataContext.Provider>
  );
};
