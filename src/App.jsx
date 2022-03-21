
import React, { Component, useState, createRef, useRef, Fragment } from "react";
import CountryList from "./components/countryLIst/CountryList";
import FileUpload from "./components/fileupload/FileUpload";
// import ClassBasedCounter from './components/counter/ClassBasedCounter';
// import FunctionalBasedCounter from './components/counter/FunctionalBasedCounter';
// import EmployeeFunction from './components/Empolyees/EmployeeFunction';
// import Mounting from './components/lifecycle/mounting/Mounting';
// import Trainer from './components/lifecycle/mounting/Trainer';
// import Auth from './components/lifecycle/updating/Auth';
// import CompanyUpdate from './components/lifecycle/updating/CompanyUpdate';
// import ReactUpdate from './components/lifecycle/updating/ReactUpdate';
// ? importing Navbar
import Navbar from "./components/navbar/Navbar";
import Spinner from "./components/Spinner";
// import Fullstack from './components/topics/Fullstack';

// ?
// import Team from './components/topics/Team';

// ? creating class Based  component start here======== cmt//
// class App extends React.Component{
//     render() {
//         return <h1>HEllO JUNE</h1>
//     }
// }
// export default App;
// ? creating class Based  component end here======== cmt//
// ? creating function  Based  component start here======== cmt//
// let App = () => <h1>I am Function Based Component</h1>;
// export default App;
// ? creating Function Based  component end here======== cmt//

// ?navbar components ============================= adding //
// export default class App extends Component {
//   render() {
//       return (
//           <>
//               {/* adding navbar in App component */}
//               <Navbar/>
//           </>
//     );
//   }
// }

// ? props example childern in topic/Mernstack =========//
// import Mernstack from './components/topics/Mernstack';
// import Fullstack from "./components/topics/Fullstack"

// export default class App extends Component{
//     render() {
//         return (
//             <section>
//                 <header>
//                     <Navbar />
//                 </header>
//                 <main>
//                     <Mernstack courses="javascript Fullstack"></Mernstack>
//                     <Fullstack courses={["javaFullstack", "phpFullstack", "MERN Stack", "pythonFullstack"]} />  
//                     {/* <Fullstack courses={{
//                         courseName: "MERN Stack",
//                         trainers: ["priyanka", "Sashi", "DIXITH"],
//                         duration: "4 momths",
//                         languages: ["html", "css", "javascript", "bootstrap", "react", "express", "nodejs", "postman",]
//                     }} /> */}
//                 </main>
//             </section>
//         )
//     }
// }


// ? new tasks combine 2 object and send it as an props to Fullstack

// import Fullstack from "./components/topics/Fullstack"
// let obj1 = { username: "aniket", salary: "19900" };
// let obj2 = { company: "testyantra", skills: ["html", "js", "css", "react"] };

// const App = () => {
//   return (
//     <section>
//       <header>
//            <Navbar />
//       </header>
//       <main>
//         <Fullstack empdetails={{...obj1,...obj2}} />
//       </main>
//     </section>
//   );
// }

// export default App

// ? home task create json file and display on webpage\\
// json file for indian cricket team
import Team from "./components/topics/Team"
const App = () => {
  return (
    <section>
      <header>
           <Navbar />
      </header>
      <main>
        <h1>Indian Cricket team Players</h1>
        <Team  />
      </main>

    </section>
  );
}

export default App

//? login form-----------------///

// import Loginform from './components/topics/Loginform';

// const App = () => {
//   return (
//     <section>
//       <header>
//            <Navbar />
//       </header>
//       <main>

//         <Loginform isLoggedIn={true}  totalmarks={Math.random()} nullvalue={null} />

//       </main>

//     </section>
//   );
// }

// export default App

// ? render JSON as props============//

// import ListUsers from "./components/gitUsers/ListUsers";
// import JSON from "./components/gitUsers/data.json"

// const App = () => {
//   return (
//     <section>
//       <header>
//            <Navbar />
//       </header>
//       <main>
//       <ListUsers  JSON={JSON}/>

//       </main>

//     </section>
//   );
// }

// export default App

// ? all empolyess somthing work

// import Allemployees from "./components/topics/Allemployees"
// const App = () => {
//   return (
//     <section>
//       <header>
//            <Navbar isLoggedIn={false} username="Carlos" />
//       </header>
//       <main>
//       <Allemployees emp_name="aniket" emp_des="devOps" emp_id="2342" emp_sal={24334}> </Allemployees>
//       <Allemployees emp_name="dharmesh" emp_des="devENGG" emp_id="2324" emp_sal={3499}> </Allemployees>
//       <Allemployees emp_name="raghv" emp_des="CLOUD DEV" emp_id="4434" emp_sal={9000}> </Allemployees>
//       <Allemployees emp_name="remo" emp_des="WP DEV" emp_id="5432" emp_sal={20000}> </Allemployees>

//       </main>

//     </section>
//   );
// }
//  export default App

//?      ===========STATE  using Class Based component ======//

// class App extends Component {
// // we can have only one state in component , state are object it is mutable
//     constructor(props) {
//         super(props);
//         this.state = {
//           employees: [
//             {
//               emp_id: "avg2",
//               emp_name: "Tony Stark",
//               emp_salary: "439999",
//               emp_desig: "Technician",
//               emp_city: "New york",
//             },
//             {
//               emp_id: "avg1",
//               emp_name: "Captan America",
//               emp_salary: "222024",
//               emp_desig: "Fighter",
//               emp_city: "New york ",
//             },
//           ],
//         };
//     }

//     // rendered method in class based Component
//     render() {
//         return (
//           <>
//             {this.state.employees.map(emp => {
//               return (
//                 <>
//                   <h1>{emp.emp_name}</h1>
//                   <p>{emp.emp_id}</p>
//                   <p>{emp.emp_salary}</p>
//                   <p>{emp.emp_desig}</p>
//                   <p>{emp.emp_city}</p>
//                 </>
//               );
//             })}
//             <hr />
//             <>
//               <EmployeeFunction employees={this.props.state} />
//             </>
//           </>
//         );
//     }

// }

// export default App;

// ? Mounting Phase ==================//

// const App = () => {
//   return (
//     <div>
//       <Mounting ename="Narendra" />
//       <Trainer />
//       <CompanyUpdate />
//       <ReactUpdate />
//       <Auth />
//     </div>
//   )
// }

// export default App

// ? hooks

// const App = () => {

//   let [value, setValue] = useState("priyanka");
//   return (
//     <div>
//       sir you are teaching very bad way from <strong>{value}</strong>
//     </div>
//   );
// };

// export default App;

// ? hooks inclass based

// export default class App extends Component {
//   render() {
//     return (
//       <section className="counterApp">
//         <article>
//           <ClassBasedCounter />
//         <hr />
//         <FunctionalBasedCounter />

//         </article>
//       </section>
//     );
//   }
// }

// ? Eevent (dom  events)
// import ExampleEvents from './components/events/ExampleEvents'

// export default class App extends Component {

//   componentDidMount(){
//     let btn = document.querySelector("#btn");
//     btn.addEventListner("mouseenter", e =>{
//       console.log(e.traget)
//     });

// // another way using property

//     btn.mouseenter = e=>{
//       e.traget.style.background = "red";
//       e.traget.style.color = "white"
//     }
//     btn.mouseleave = e=>{
//       e.traget.style.background = "blue";
//       e.traget.style.color = "white"
//     }

// let input = document.querySelector("input");
// let template= document.querySelector("#template")
// input.addEventListner("keyup", e=>{
//   if(e.type === "keyup"){
//     template.innerHTML = e.traget.value;
//   }
// })

//   render() {
//     return (
//       <section className="counterApp">
//          <article>
//          <div id="template"></div>
//          <input id="template" type="text" name="input" />
//          {/* <ExampleEvents/> */}
//          </article>
//        </section>
//     )
//   }
// }

//? speechRecognition event
// import ExampleEvents from './components/events/ExampleEvents'

// export default class App extends Component {
//   componentDidMount() {
//     let speech=window.speechRecognition || window.webkitSpeechRecognition;

//     let recognition =new speech();
//     recognition.addEventListener("result",e=>{
//       console.log(e);
//       let value = e.results[0][0].transcript;
//       document.querySelector("#template").innerHTML=value;
//       console.log(value)

//     });
//     // recognition.addEventListener("end",recognition.start);
//     recognition.start();
//   }
//   render() {
//     return (
//       <section className="counterApp">
//           <article>
//            <ExampleEvents/>
//            <div id="template"></div>
//            <div></div>
//          </article>
//        </section>
//     )
//   }
// }

// ?======= syncthetic Events in React===============

// import ExampleEvents from './components/events/ExampleEvents'

// export default class App extends Component {

// ? sumbit_event

//   componentDidMount() {

//     let form = document.querySelector("form");
//     form.addEventListener("submit", e => {
//    e.preventDefault();
//       console.log(e);

//       if (e.type === "submit") {
//         console.log(e.target[0].value)
//       }
//     })

//   }

//   render() {
//     return (
//       <section className="counterApp">

//         <article>
//            <ExampleEvents />
//           <form>
//             <input type="text" id='text' placeholder='enter text' />
//             <button >
//               Submit
//             </button>
//           </form>
//         </article>
//       </section>
//     );
//   }
// }

// ?========== conditional Rendering============

// import ExampleEvents from './components/events/ExampleEvents'

// export default class App extends Component {
//   state = {
//   users:null,
//   }

//   async componentDidMount() {
//     let fetchData = await window.fetch("https://api.github.com/users");
//     let finalData = await fetchData.json();
//     this.setState({ users: finalData });
//   }

//   render() {

//     let USERS = () => {

//       return this.state.users.map(user => {
//         return (
//           <>
//             <img src={user.avatar_url} alt={user.login} />
//           </>
//         )
//       })
//     };

//     return <div>{this.state.users === null ? <Spinner/> : < USERS />}</div>

//   }
// }

//!======= important topic REF()==========//
// act like id selector in dom

// export default class App extends Component {
//     li1 = createRef();
//   li2 = createRef();

//   componentDidMount() {
//     this.li1.current.style.color = "red";
//     this.li2.current.style.color = "skyblue";

//   }

//   render() {
//     return (
//       <div>
//         <li ref={this.li1}>list item 1</li>
//         <li ref={this.li2}>list item 2</li>
//       </div>
//     )
//   }
// }

// ? another example of ref=========

// import React, {useRef} from 'react'

// const App = () => {
//   let inputRef = useRef();
//   inputRef.current.style.color = "red";

//   return (
//     <div ref={inputRef}>
//       App
//     </div>
//   )
// }

// export default App

// ! +++++++++++++++++++++++++++++++++++++++++++++ WORKING WITH MEDIAS++++++++++++++++++++++++++++++++++

//! ref to use video with class based component =========
// import VIDEO from "./videoplayback.mp4"
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       play: true,
//       btn:"play",
//     }
//     this.videoRef = createRef();
//   }

//   PlayOrPasuse = () => {
//     this.setState({ play: !this.state.play });
//     if (this.state.play) {
//       this.videoRef.current.play();
//     }
//     else {
//       this.videoRef.current.pause();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <video src={VIDEO} width="100%" ref={this.videoRef} onClick={this.PlayOrPasuse}>
//         </video>
//       </div>
//     )
//   }
// }

//! ref to use video with Function based component =========
// import VIDEO from "./videoplayback.mp4"

// const App = () => {
//   let videoRef = useRef();
//   let [play, setPlay] = useState(true);

//   let PlayVideo = () => {
//     setPlay(!play);
//     play === true ? videoRef.current.play() : videoRef.current.pause();
//   };

//   return (
//     <section class="counterApp">
//       <article>
//         <video src={VIDEO} ref={videoRef} onClick={PlayVideo}></video>
//       </article>
//     </section>
//   )
// }

// export default App

// ?  ref to turn on CAMERA   function based component

// const App = () => {
//   let videoRef = useRef();
//   let GetCamera = async () => {
//     let media = await window.navigator.mediaDevices.getUserMedia({
//       audio: true,
//       video: { width: 600, height: 600 },
//     })

//     videoRef.current.srcObject = media;
//     videoRef.current.onloadedmetadata = function () {
//       videoRef.current.play();
//     };
//   }
//   return (
//     <section className="counterApp">
//       <article>
//         <video ref={videoRef}> </video>
//         <button onClick={GetCamera}>Get camera</button>
//       </article>
//     </section>
//   )
// }

// export default App

// ! ********* LIST and KEYS  ****************

// const App = () => {

//   let [languages ,setLanguages] =useState(["java","c++","python","javacript","php"])

//   return (
//     <div>
//       {languages.map((lang, index) => {
//         return (
//           <Fragment key={index}>
//             <li>{lang}</li>
//           </Fragment>
//         )
//       })}
//     </div>
//   )
// }

// export default App

// !================================================================
// ?================= froms  in dom way =============

// export default class App extends Component {

//   getData = () => {
//     let form = document.querySelector("form");

//     form.addEventListener("submit", e => {
//       e.preventDefault();
//       console.log(e)
//       let username = e.target[0].value;
//       let password = e.target[1].value;

//       if (e.type === "submit") {
//         console.log(username, password);
//       }
//     });
//   };

//   render() {
//     return (
//       <section className="counterApp">
//         <article>
//           <form action="">
//             <div>
//               <label htmlFor="username"> username</label>
//               <input type="text" id='username' placeholder='enter username'/>
//             </div>
//             <div>
//               <label htmlFor="password">password</label>
//               <input type="password" id="password" placeholder="password" />
//             </div>
//             <div>
//               <button onClick={this.getData}>Submit</button>
//             </div>
//           </form>
//         </article>
//       </section>
//     )
//   }
// }

// ! +++++++++++= form in  uncontrolled way (using ref ) (not working make it work)++++++++++++++++++

// const App = () => {
//   let emailRef = useRef();
//   let passwordRef = useRef();

//   let handleSubmit = e => {
//     e.preventDefault();
//     let email = emailRef.current.value;
//     let password = passwordRef.current.value;
//     console.label(email, password);
//   };


//     return (
//           <section className="counterApp">
//             <article>
//               <form action="">
//                 <div>
//                   <label htmlFor="email"> email</label>
//                   <input type="text" id="email" placeholder="enter email" ref={emailRef} />
//                 </div>
//                 <div>
//                   <label htmlFor="password">password</label>
//                   <input type="password" id="password" placeholder="password" ref={passwordRef}/>
//                 </div>
//                 <div>
//                   <button onClick={handleSubmit}>Submit</button>
//                 </div>
//               </form>
//             </article>
//           </section>
//   );

// };

// export default App;

// ! controlled component ==================important topic ========== 1st example//

// step 1: create state
// step 2: add onChange event
// setp3 : add handelSubmit event

// export default class App extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <section className="counterApp">
//         <article>
//           <form onSubmit={this.handelSubmit}>
//             <div>
//               <label htmlFor="email">email</label>
//               <input
//                 type="text"
//                 id="email"
//                 placeholder="enter email"
//                 value={this.state.email}
//                 onChange={e=>this.setState({email: e.target.value})}
//               />
//             </div>
//             <div>
//               <label htmlFor="password">password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="password"
//                 value={this.state.password}
//                 onChange={e=> this.setState({password: e.target.value})}
//               />
//             </div>
//             <div>
//               <button>Submit</button>
//             </div>
//           </form>
//         </article>
//       </section>
//     );
//   }
// }

// ! controlled component ==================important topic ========== 2nd Example  //

// step 1: create state
// step 2: add name attribute to from elements
// step 3: add event to handel Change in element
// step 4: add handelSubmit event

// export default class App extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//   };

//   handelChange = e => {
//     let { name, value } = e.target;    // destructing from target element
//     this.setState({ [name]: value });    // this is important to warp name is []
//   }

//   render() {
//     return (
//       <section className="counterApp">
//         <article>
//           <form onSubmit={this.handelSubmit}>
//             <div>
//               <label htmlFor="email">email</label>
//               <input
//                 type="text"
//                 id="email"
//                 placeholder="enter email"
//                 value={this.state.email}
//                 name="email"
//                 onChange={this.handelChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="password">password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="password"
//                 name="password"
//                 onChange={this.handelChange}
//               />
//             </div>
//             <div>
//               <button>Submit</button>
//             </div>
//           </form>
//         </article>
//       </section>
//     );
//   }
// }




// !  ++++  ==== controlled Function based comonent========

// const App = ()=>{

//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");

//   let handelSubmit = e => {
//     e.preventDefault();
//     console.log({ email, password })
//   };

//   return (
//     <section className="counterApp">
//       <article>
//         <form onSubmit={handelSubmit}>
//           <div>
//             <label htmlFor="email">email</label>
//             <input
//               type="text"
//               id="email"
//               placeholder="enter email"
//               value={email}
//               name="email"
//               onChange={e => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="password"
//               name="password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//             />
//           </div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   );

// }

// export default App;




// !  ++++  ==== controlled Function based comonent   eample 2 do this way recommanded========


// const App = ()=>{

//   let [state, setState] = useState({
//     email: "",
//     password:"",
//   });

//   let { email, password } = state;
//   let handelChange = e => {
//     let { name, value } = e.target;

//     setState( { ...state, [name]:value} ) //! it is complasary to merge sate otherwise it will not take pervse values
//   }
  

//   let handelSubmit = e => {
//     e.preventDefault();
//     console.log(state)
//   };

//   return (
//     <section className="counterApp">
//       <article>
//         <form onSubmit={handelSubmit}>
//           <div>
//             <label htmlFor="email">email</label>
//             <input
//               type="text"
//               id="email"
//               placeholder="enter email"
//               value={email}
//               name="email"
//               onChange={handelChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="password"
//               name="password"
//               value={password}
//               onChange={handelChange}
//             />
//           </div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   );

// }

// export default App;




// !  ++++  ==== uncontrolled Class based component to upload a [FILE]   make it correct no working========


// export default class App extends Component {
//   constructor() {
//     super();
//     this.usernameRef = createRef();
//     this.imageRef = createRef();
//   }

//   handelSubmit = e => {
//     e.preventDefault();
//     let username = this.usernameRef.current.value;
//     let image = this.imageRef.current.files[0]; //!  handling files i unctrolled component

//     console.log(username);
//     console.log(image);
//   };

//   render() {
//     return (
//       <section className="counterApp">
//         <article>
//           <form onSubmit={this.handelSubmit}>
//             <div>
//               <label htmlFor="email">email</label>
//               <input
//                 type="text"
//                 id="email"
//                 placeholder="enter email"
//                 name="email"
//                 ref={this.usernameRef}
//               />
//             </div>
//             <div>
//               <label htmlFor="file">PHOTO</label>
//               <input
//                 type="file"
//                 id="password"
//                 placeholder="upload"
//                 name="image"
//                 ref={this.imageRef}
//               />
//             </div>
//             <div>
//               <button>Submit</button>
//             </div>
//           </form>
//         </article>
//       </section>
//     );
//   }
// }




// ! important for file upload  controlled component   not return complete code ==========


// export default class App extends Component {
//   state = {
//     usernmae: "",
//     image:""
//   }

//   handleChange = e => {
//     this.setState({usernmae :e.target.value})
//   }
//   handleFile = e => {
//     this.setState({image : e.target.files[0]})
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//   }


//   render() {
//     return (
//       <section className="counterApp">
//          <article>
//            <form onSubmit={this.handleSubmit}>
//              <div>
//                <label htmlFor="username">username</label>
//                <input
//                 type="text"
//                 id="email"
//                 placeholder="enter email"
//                 name="username"
//                 onChange={this.handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="file">PHOTO</label>
//               <input
//                 type="file"
//                 onChange={this.handleFile}
//               />
//             </div>
//             <div>
//               <button>Submit</button>
//             </div>
//           </form>
//         </article>
//       </section>
      
//     )
//   }
// }



// ! controlled function componet for files====




// const App = () => {
//   return (
//     <>
//       <FileUpload />
//     </>
//   )
// }

// export default App


// ! country list using controlled component

// const App = () => {
//   return (
//     <>
//       <CountryList />
//     </>
//   )
// }

// export default App



// ! controlled component for handle Rafio Button

// import Radionbutton from "./components/controlledComponent/Radionbutton";

// const App = () => {
//   return (
//     <>
//       <Radionbutton />
//     </>
//   )
// }

// export default App




// conrollde form for range example

// import Datecomponent from "./components/controlledComponent/Datecomponent";

// const App = () => {
//   return (
//     <>
//       <Datecomponent />
//     </>
//   )
// }

// export default App





// !  adding CSS style using javasctipt way by creating object with css properties

// import {STYLES} from "./Style"

//  const App = () => {
//   return (
//       <section style ={STYLES.ContainerStyle} >
//         <article>
//           <p style={STYLES.para}>
//               adding CSS style using javasctipt way by creating object with css properties
//           </p>
//         </article>
//         </section>
    
//   )
// }

// export default App


// import Products from "./components/productComponent/Products"
// import StyleModule from "./StyleModule"
// import {STYLES} from "./Style"
//  const App = () => {
//   return (
//       <section >
//         <article style={STYLES.ContainerStyle}>
//           <Products />
//           {/* <StyleModule /> */}
//         </article>
//         </section>
    
//   )
// }

// export default App;




