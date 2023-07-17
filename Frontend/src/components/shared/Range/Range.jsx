import React, { useState } from 'react';

const Range = () => {
    const [rangeCount, setRangeCount] = useState(0);



    return (
        <div className='flex items-center'>
            <input 
            type="range"
            min={1}
            max="10"
            className="range range-xs mr-3"
            onChange={(e)=> setRangeCount(e.target.value)}
            /> 
            <span>{rangeCount}</span>
        </div>
    );
};

export default Range;