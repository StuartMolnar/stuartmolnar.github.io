import React, { useState } from 'react';
import './tooltip.css';

const Tooltip = ({ children, content, style }) => {
    const [show, setShow] = useState(false);
  
    return (
      <div
        className="tooltip-container"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={style}
      >
        {children}
        {show && <div className="tooltip-content">{content}</div>}
      </div>
    );
  };
  
  export default Tooltip;