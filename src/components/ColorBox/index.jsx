import React, { useState } from 'react';

ColorBox.propTypes = {

};

function getRandomColor() {
  const COLOR_LIST = ['deeppink', "blue", "black", "green", "red"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('boxColor') || 'deeppink';
    return initColor;
  });

  function handleBoxColor() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('boxColor', newColor)
  }

  return (
    <div>
      <div
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={handleBoxColor}
      >
        COLOR BOX
      </div>

    </div>
  );
}

export default ColorBox;