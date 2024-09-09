import React from "react";
import "./Design.css";
import Airplane from "./Airplane ";

function Design() {
  return (
    <div className="design-container">
      <div className="dotted-pattern">
        {Array.from({ length: 7 }).map((_, rowIndex) => (
          <div key={rowIndex} className="dot-row">
            {Array.from({ length: 5 }).map((_, colIndex) => (
              <div key={colIndex} className="dot"></div>
            ))}
          </div>
        ))}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="100"
        viewBox="0 0 64 64"
        className="cloud"
      >
        <path
          d="M48.01 25.67a8.98 8.98 0 0 0-16.15-4.91 11.97 11.97 0 0 0-18.86 4.67 7.997 7.997 0 1 0 .49 15.97h33.2a6.998 6.998 0 1 0 1.33-15.73h-.01z"
          fill="#a7c1f0"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 64 64"
        className="sun"
      >
        <circle cx="32" cy="32" r="16" fill="#fdd835" />
        <g stroke="#fdd835" strokeWidth="2">
          <line x1="32" y1="10" x2="32" y2="0" />
          <line x1="32" y1="54" x2="32" y2="64" />
          <line x1="10" y1="32" x2="0" y2="32" />
          <line x1="54" y1="32" x2="64" y2="32" />
          <line x1="10.68" y1="10.68" x2="4.68" y2="4.68" />
          <line x1="53.32" y1="53.32" x2="59.32" y2="59.32" />
          <line x1="53.32" y1="10.68" x2="59.32" y2="4.68" />
          <line x1="10.68" y1="53.32" x2="4.68" y2="59.32" />
        </g>
      </svg>

      <div>
        {<Airplane />}
      </div>
    </div>
  );
}

export default Design;
