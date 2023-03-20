import React, { useState } from 'react'
import '../styles/Child.css';
const Selection = (props) => {
 const{applyColor,nextBackground,key} = props;
 const[selectionStyle,updateSelectionStyle] = useState([]);

const handleClick = ()=>{
     applyColor(updateSelectionStyle);
}

  return (
    <div>
        <div className='fix-box'                
        style={{...selectionStyle }}
        onClick={handleClick}                        
        >Selection</div>            
        
     
    </div>
  )
}

export default Selection;
