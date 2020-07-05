import { useEffect, useState } from 'react';

function useClock() {
  const [timeString, setTimeString] = useState('')

  function formatDate(now) {
    const hours = `0${now.getHours()}`.slice(-2);
    const minutes = `0${now.getMinutes()}`.slice(-2);
    const seconds = `0${now.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`
  }

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);
    return () => {
      clearInterval(clockInterval);
    }
  }, [])

  return { timeString }

}

export default useClock;