import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { label,classname,background } = config;

  


  return (
    <button className={`button ${classname}`} onClick={() => selectNextBackground({background: background})}>
      {/* label should come here */}
      {label}
      
      
    </button>
  )
}
export default ColourSelector;
