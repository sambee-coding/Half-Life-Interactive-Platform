import React, { useState, useEffect } from "react";
import './Type.css';

export default function Typewriter() {
  const text = "Welcome to the Half-Life Interactive Platform";
  const speed = 70; // typing speed in milliseconds

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <h1 id="typewriter">{displayedText}</h1>
  );
}
