// //! This is the Context API Which is providing its data to its child

import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';


export let MyJio = createContext(); // This is imported because to access globally and //! it is named Export

const Jio = ({ children }) => {
    let [plan, setPlan] = useState({Network: "Jio", plans: [199, 299, 359, 555], validity:[28,56,76,84]})
  return (
        <MyJio.Provider value={plan}>
      {/* here use value is must as props nothing else is allowed */}
        {children}
        </MyJio.Provider>
  )
}

export default Jio;
MyJio.displayName = "JIO Volte";


