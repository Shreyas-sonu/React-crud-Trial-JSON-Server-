import React from 'react'
import Hoc from './Hoc';

const Menu = (props) => {
    return <div>Hi Iam {props.val.user}</div>
}

export default Hoc(Menu);