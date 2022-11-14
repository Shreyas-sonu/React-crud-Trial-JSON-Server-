import React from 'react'
import Hoc from '../Header/Hoc'

const Login = (props) => {
  return (
      <div>Logon using <br /> {props.val.user}<br />{props.val.id }</div>
  )
}

export default Hoc(Login);