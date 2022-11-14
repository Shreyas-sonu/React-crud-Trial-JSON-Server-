import React from 'react'
import { MyJio } from './Jio';

//! Context Api Fetch using Consumer using Function Based Comp

const Consumer2 = (props) => {
    console.log()
  return (
    <div>
      <MyJio.Consumer>
              {value => {
                 return (
                   <>
                     {" "}
                     <h1>Hi I Am Ali Mehaboob Iam Using</h1>
                     <h3>NetWork:{value.Network}</h3>
                     <p>
                       My Plans Are:
                       {value.plans.map(e => {
                         return <button>{e}</button>;
                       })}
                     </p>
                   </>
                 );
      }}
      </MyJio.Consumer>
    </div>
  );
}

export default Consumer2

// //! Class Based Context API
// import React, { Component } from 'react'

// export default class Consumer2 extends Component {
//   render() {
//     return (
//       <div>
//         <MyJio>
//           {value => {
//             return (<><h1>Hi I Am Ali Mukyla Iam Using</h1>
//              <h3>NetWork:{value.Network}</h3>
//              <p>
//                My Plans Are:
//                 {value.plans.map(e => {
//                 return <button>{e}</button>;
//                  })}
//                 </p>
//             </>);
//           }}
//         </MyJio>
//       </div>
//     );
//   }
// }

//! Using Hooks

// import React,{useContext,Fragment} from 'react'

// const Consumer2 = () => {
//     let {Network, plans} = useContext(MyJio);
//   return (
//     <div>
//           <h1>Network of Anil : {Network}</h1>
//           <p>He Recharges for: {plans.map((e,i) => {
//               return<Fragment key={i + 1}>
//                   <button>{e}</button>
//               </Fragment>
//           })}</p>
//     </div>
//   )
// }

// export default Consumer2

