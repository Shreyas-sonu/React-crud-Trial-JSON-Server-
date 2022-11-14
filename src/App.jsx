
// ! For HOC in Component Folder(search)
// import React from "react";
// // import Navbar from './Components/Header/Navbar';
// import Hoc from './Components/Header/Hoc';
// // import Login from './Components/Auth/Login';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Login/>
//     </div>
//   )
// }

// export default Hoc(App);

// //! CreateContext ApI(ReactLibrary (Alt for HOC))
import React from "react";
import Consumer1 from "./ContextAPI/Consumer1";
import Consumer2 from "./ContextAPI/Consumer2";
import Jio from "./ContextAPI/Jio";

const App = () => {
  return (
    <div>
      <Jio>
        <Consumer1 />
        <Consumer2 />
      </Jio>
    </div>
  );
}

export default App



// //! CreateContext Task Counter
// import React from 'react'
// import CountContext from './Countercontext/CountContext';
// import Counter from './Countercontext/Counter';
// import Counter2 from './Countercontext/Counter2';
// import "./Countercontext/local.css";

// const App = () => {
//   return (
//     <div id="cont">
//       <CountContext>
//         <Counter />
//       </CountContext>
//     </div>
//   );
// }

// export default App

// //! Use Effect Concept
// import React from 'react'
// import FetchApi1 from './UseEffect/FetchApi1'

// const App = () => {
//   return (
//     <div>
//       <FetchApi1/>
//     </div>
//   )
// }

// export default App