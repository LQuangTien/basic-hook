import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

CLock.propTypes = {};

function CLock() {
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

  return (
    <div>
      <p>{timeString}</p>
    </div>
  );
}

export default CLock;