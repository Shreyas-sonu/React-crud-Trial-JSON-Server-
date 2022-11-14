import React from 'react'
import { MyJio } from "./Jio";

//! Function Based
const Consumer1 = (props) => {
  return (
    <div>
      <MyJio.Consumer>
        {value => {
          console.log(value);
          return(<><h1>Hi I Am Anil Iam Using</h1>
            <h3>NetWork:{value.Network}</h3>
            <p>
              My Plans Are:
              {value.plans.map(e => {
                return <button>{e}</button>;
              })}
            </p>
          </>);
        }}
      </MyJio.Consumer>
    </div>
  );
}

export default Consumer1

// //! Class Based Context API
// import React, { Component } from 'react'

// export default class Consumer1 extends Component {
//   render() {
//     return (
//       <div>
//         <MyJio>
//           {value => {
//             return (<><h1>Hi I Am Anil Iam Using</h1>
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

//! Using Hooks (Recomended)

// import React,{useContext,Fragment} from 'react'

// const Consumer1 = () => {
//     let {Network, plans} = useContext(MyJio);
//   return (
//     <div>
//           <h1>Network of Ali Muklya : {Network}</h1>
//           <p>He Recharges for: {plans.map((e,i) => {
//               return<Fragment key={i + 1}>
//                   <button>{e}</button>
//               </Fragment>
//           })}</p>
//     </div>
//   )
// }

// export default Consumer1;

// //! Using Context Type(Not Recomended)
// import React, { Component } from 'react'

// export default class Consumer1 extends Component {
//     render() {
//         let value = this.context;// This is method of this object
//       return (
//           <div>
//               <h2>Done using Worst last Contextype method</h2>
//               <h1>Ali M Network:{value.Network}</h1>
//               <div>
//                   Plans:{value.plans.map(e =><button>{e}</button> )}
//               </div>
//       </div>
//     )
//   }
// }

// Consumer1.contextType = MyJio; // Important step to define the context for the child