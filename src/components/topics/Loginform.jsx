import React from 'react'

// const Loginform = (props) => {
//   console.log(props.isLoggedIn);  // true
//   if (props.isLoggedIn ===true) {
//      return (
//         <>
//         <button>login </button>
//         <p>Random number</p>
//         <p>{Math.floor(props.totalmarks *10)}</p>
//         </>
//       );
    
//   } else {
//     return (
//       <> 
//       <button>login </button>
//       <button>Signup </button>
//       </>
//     )
//   }
 
// }

// export default Loginform




// ? for nullvalue handling 

export const Loginform = (props) => {
  if(props.nullvalue === null){
    return <h1>Loding.....</h1>
  }
  else{
      return (
          <>
          <h1>hey ther this is demo for nul value</h1>
          <p> Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code w </p>
          </>
        )
  }
  
}

export default Loginform