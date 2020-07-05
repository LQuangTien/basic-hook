import React from 'react';
import useClock from '../../hooks/useClock';


BetterClock.propTypes = {};

function BetterClock() {
  const { timeString } = useClock();

  return (
    <div>
      <h1>{timeString}</h1>
    </div>
  );
}

export default BetterClock;