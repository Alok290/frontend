import React from 'react';
import './DotPattern.css';

const DotPattern = () => {
    return (
        <div className="dot-pattern">
            {Array.from({ length: 7 }).map((_, rowIndex) => (
                <div key={rowIndex} className="dot-row">
                    {Array.from({ length: 5 }).map((_, colIndex) => (
                        <div key={colIndex} className="dot"></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default DotPattern;
