import React,{useEffect} from 'react'

const FetchApi1 = () => {
  useEffect(() => {
      //interacting with Dom
    window.document.body.style.background = "greenYellow";
  //Api Calls
    window
      .fetch("https://fakestoreapi.com/products")
      .then(data => {
        data.json().then(val => {
          console.log(val);
        });
      })
      .catch(err => {
        console.log(err);
      });
    })
  return (
    <div>FetchApi1</div>
  )
}

export default FetchApi1


// //! Using UseEffect as alternative for Component Unmount Did Mount
// import React from 'react'
// import ClassBasedComp from './ClassBasedComp'
// import FunctionBasedComp from './FunctionBasedComp'

// const FetchApi1 = () => {
//   return (
//     <div>
//       <ClassBasedComp />
//       <hr/>
//       <FunctionBasedComp />
//     </div>
//   )
// }

// export default FetchApi1
