import React from 'react';
import './Controls.css';

function Controls({ children, onClear }) {
  return (
    <div className='controls'>
      {children}
      <button type='button' onClick={onClear} className='clear-btn'>
        Clear
      </button>
      <select>
        <option>Coldest</option>
      </select>
      <select>
        <option>10°C - 50°C</option>
      </select>
      <select>
        <option>Rainy</option>
      </select>
    </div>
  );
}

export default Controls;
