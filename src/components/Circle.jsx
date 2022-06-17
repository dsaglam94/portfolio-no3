import React, { useEffect, useRef, useState } from "react";

const Circle = ({ offsetY }) => {
  const circleText = useRef();

  const [shouldUpdate, setShouldUpdate] = useState(true);

  // set shouldUpdate => true on initial render, triggering re-render
  useEffect(() => {
    if (shouldUpdate) setShouldUpdate(false);
    circleText.current.innerHTML = circleText.current.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
      )
      .join("");
  }, [shouldUpdate]);

  return (
    <div
      className={
        offsetY > 300
          ? "circle-text text-primary select-none opacity-0 duration-300 ease-in"
          : "circle-text text-primary select-none duration-300 ease-in"
      }
    >
      <div ref={circleText} className="text">
        <p>ScrollDown-ScrollDown-</p>
      </div>
    </div>
  );
};

export default Circle;
