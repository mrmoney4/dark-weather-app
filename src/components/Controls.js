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
        <option id='all weather'>All weather</option>
        <option id='coldest'>Coldest</option>
        <option id='hottest'>Hottest</option>
      </select>
      <select>
        <option id='all temperature'>All temperature</option>
        <option id='10°C-20°C'>Cold</option>
        <option id='20°C-30°C'>Moderate</option>
        <option id='30°C-40°C'>Hot</option>
      </select>
      <select>
        <option id='all conditions'>All conditions</option>
        <option id='rainy'>Cloudy</option>
        <option id='sunny'>Rainy</option>
        <option id='cloudy'>Sunny</option>
      </select>
    </div>
  );
}

export default Controls;
