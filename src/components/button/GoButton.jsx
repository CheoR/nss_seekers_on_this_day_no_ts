import React, { useContext } from 'react';

import { DataContext } from '../data/DataProvider';

export const GoButton = () => {
  const { data, getData } = useContext(DataContext);
  const url = `https://apizen.date?api=true&month=${data.month}&day=${data.day}`;

  const handleClick = (e) => {
    e.preventDefault();
    alert(`Button Clicked: \n calling: ${url}`);
    getData(data.month, data.day);
  };

  return <button type="button" onClick={handleClick}>Click</button>;
};

// const month = new Date().getMonth();
// const date = new Date().getDate();


// export const GoButton = () =>  <button type="button" onClick={handleClick}>Click</button>;
