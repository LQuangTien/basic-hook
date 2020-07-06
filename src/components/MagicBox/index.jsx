import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from '../../hooks/useMagicColor';
import './MagicBox.scss'

MagicBox.propTypes = {

};

function MagicBox() {
  const color = useMagicColor();
  // console.log(color)
  return (
    <div className='magicBox' style={{ backgroundColor: color }}>

    </div>
  );
}

export default MagicBox;