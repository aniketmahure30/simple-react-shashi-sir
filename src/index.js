import React from "react";
import ReactDOM from "react-dom";

// importing Bootstrap this all import are required for bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery";
import "popper.js/dist/esm/popper"
import "bootstrap/dist/js/bootstrap"

// importing Bootstrap

import App from "./App";
// ? gobal css file importing
import "./index.css";














//? how to write react element with out jsx       cmt//
// let element = React.createElement("section", null, "I am section element");
// ReactDOM.render(element, document.getElementById('root'), _ => { console.log("section element") });

// ?how to write in real dom
// let domElement = document.createElement('section');
// domElement.innerText = 'hello section';
// document.appendChild(domElement);

//?=========== Creat React Element===============       cmt//
// let div = React.createElement('div', { className: 'demo', id: 'demo' }, "hello world ");
// ReactDOM.render(div, document.getElementById('root'), () => { console.log("VSOM and RealDOM connected") });

//? syntax of render function   cmt//
// ?ReactDOM.render(element, container, callback) ==============  cmt//
// ReactDOM.render("Aniket",
//   document.getElementById('root'),()=>{console.log("successfully called dom")}
// );

//? adding content using  DOM way start here================ cmt//

// ? createing a Eleents ==============cmt//
// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let p = document.createElement("p");
// let btn = document.createElement("button");

// ? set Attributes to an all element =========cmt//
// div.setAttribute("id", "demo");
// h1.classList.add("h1");
// btn.className = "btn";

// ? add content to all element ==========cmt//
// h1.textContent = "i am H1";
// p.innerHTML = "i am paragraph DOM way";
// btn.innerHTML = "click me";

// ? append all element in DIV==============cmt//
// div.appendChild(h1);
// div.appendChild(p);
// div.appendChild(btn);

// ? append Div to BODY ===============cmt//
// document.body.appendChild(div);

//? adding content using  DOM way End here================ cmt//

//? adding content using  REACT way start here================ cmt//
// let element = React.createElement(
//   "div",
//   { id: "demo" },
//   React.createElement("h1", { className: "h1" }, " hello i am h1"),
//   React.createElement("p", null, " i am para using Reactway"),
//   React.createElement("button", { className: "btn" }, " clickme")
// );

// ReactDOM.render(element, document.getElementById("root"));

//? adding content using  REACT way END here================ cmt//

//? adding content using  JSX(javascriptXML) way END here================ cmt//
// let elementjsx = (
//   <div id="demo">
//     <h1 className="h1">I am h1 jsx</h1>
//     <p>I a of para of jsx</p>
//     <button className="btn">Click me</button>
//   </div>
// );

// ReactDOM.render(elementjsx, document.getElementById("root"));

//? adding content using  JSX(javascriptXML) way END here================ cmt//


//? how to write function in JSX(javascriptXML)  Start here================ cmt//


// let lang =["java","python","html","nodejs"]
// let fun = (
//   <>
//     <h1 className="hello">HIII</h1>
//     <label htmlFor="username">username</label>
//     <p aria-label="hello">Language</p>
//     {
//       lang.map(e => <li>{ e}</li>)
//     }
//   </>
// )


// ReactDOM.render(fun, document.getElementById('root'))




//? how to write function in JSX(javascriptXML)  END here================ cmt//




// ? task for loopig
// let fullstack = [
//   {
//     cname: "javaFUllStack",
//     trainer: "dixit",
//     duration: "3 months",
//     lang: ["html", "js", "java", "spring"],
//   },

//   {
//     cname: "MEANStack",
//     trainer: "Shashi",
//     duration: "4 months",
//     lang: ["html", "js","angular", "nodejs", "express"],
//   },

//   {
//     cname: "MERNStack",
//     trainer: "Priyanka",
//     duration: "4 months",
//     lang: ["html", "js","react", "nodejs", "express"],
//   },
// ];


// explict retrun jsx 

// let print = (
//   <>
//     <h1 className="hello">fullstack Courses</h1>
//     {
//       fullstack.map(course => {
//         let { cname, trainer,duration,lang } = course;
//         return (
//           <ul>
//             <li>{ cname}</li>
//             <li>{ trainer}</li>
//             <li>{ duration}</li>
//             <li>{lang.map(x => <li>{ x}</li>)}</li>
//           </ul>
//         )
//       })
//     }
//   </>
// )





// ?  print all details in table

// impilct retrun JSX usinfg ()
// let printTable = 
//   <>
//     <h1> COURSE Details</h1>
    
//       <table border="1">
//         <tr>
//           <th>Courese Name</th>
//           <th>trainer name</th>
//           <th>duration</th>
//           <th> Language</th>
//         </tr>
 
//         {
//           fullstack.map(course => {
//             let { cname, trainer, lang, duration } = course;
          
//             return (
//               <tr>
//                 <td>{cname}</td>
//                 <td>{trainer}</td>
//                 <td>{duration}</td>
//                 <td>
//                   {lang.map(x => (
//                     <li>{x}</li>
//                   ))}
//                 </td>
//               </tr>
//             );
//            })
//         }
//       </table>
//   </>

// ReactDOM.render(printTable,document.getElementById('root'))
// ReactDOM.render(print, document.getElementById('root'))

// ? task for loopin in talble end here..................cmt//




// ?=========== rendering   App component ==============cmt//


ReactDOM.render(<App />, document.getElementById('root'));


