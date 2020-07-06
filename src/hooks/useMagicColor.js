import { useState, useEffect, useRef } from "react";

function randomColor(currentColor) {
  const COLOR_LIST = ['green', 'yellow', 'red'];
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;
  while (newIndex === currentIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }
  return COLOR_LIST[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState('transparent');
  const colorRef = useRef('transparent')
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      console.log(colorRef.current)
      setColor(newColor);
      colorRef.current = newColor
    }, 1000)

    return () => {
      clearInterval(colorInterval)
    }


  }, [])

  return color;
}

export default useMagicColor;