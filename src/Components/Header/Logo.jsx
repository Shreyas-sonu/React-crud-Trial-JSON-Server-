import React from 'react';
import Hoc from './Hoc';

const Logo = (props) => {
  console.log(props)
  return (
      <div>{props.val.user}</div>
  )
}

export default Hoc(Logo);