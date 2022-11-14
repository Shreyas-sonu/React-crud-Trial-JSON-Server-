//! Return using class
import React,{ Component } from 'react';

let Hoc = (WrappedComponents) => {
    return class GetItem extends Component {
      state = {
        user: "Anil",
        id: 222,
        logo: "LOGO 🎈",
      }
      render() {
        return <WrappedComponents val={this.state} />;
      }
    };
}

// let Hoc = (Param) => {
//     return class Getitems extends Component {
//         state = {
//             id: 123,
//             name:"ali",
//         }
//         render() {
//             return <Param state={this.state}></Param>
//         }
//     }
// }







// //! Using Function

// let Hoc = (Wrapped) => {
    
//     let state = { user: "Anil", id: 222, logo: "LOGO 🎈" };
//     return (()=><Wrapped val={state} />)
// }

export default Hoc;