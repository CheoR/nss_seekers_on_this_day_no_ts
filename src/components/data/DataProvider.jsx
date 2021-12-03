import React, { createContext, useState } from 'react';

const _month = new Date().getMonth();
const _day = new Date().getDate();

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState({
    day: _day,
    month: _month,
  });

  const getData = (month = _month, day = _day) => {
    const headers = {};
    const url = `https://apizen.date?api=true&month=${month}&day=${day}`;
    return fetch(url, {
      method: 'GET',
      headers,
    })
      .then((res) => res.json())
      .catch((error) => console.error(`Authorization failed: ${error.message}`));
  };

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
