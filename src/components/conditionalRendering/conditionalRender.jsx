import React,{useState} from 'react'

const conditionalRender = () => {
    // let [messages, setMessages] = useState(["hey there is mock today", "bhuvan is sleeping", "study some of DOM concept", "go with Promise and Aysnchrouns"]);
    

    // let PrintMessages = () => {
    //     return (
    //         <div>
    //             <button onClick={LightOrDark}> Click for change mode</button>
    //         </div>
    //     );
    // }

    // return (
    //     <div>
    //         <div>{messages.length > 0 && < PrintMessages />}</div>
    //     </div>
    // );
  


    // ?ternary operator  for conditional rendering======
    // let [state, setState] = useState(false);
    // let ClickMe = () => {
    //     setState(!state);
    // };
    // return (
    //     <div>
    //         <div>{state ? "priyanka" : "shashi"}</div>
    //         <button onClick={ClickMe}>click me</button>
    //     </div>
    // );



    // ? switch way for conditional rendering======
    let [auth, setAuth] = useState(true);
    switch (auth)
    {
        case true: return <button>logout</button>;
        case false: return <button>login</button>;
        default: return null;
    }


};

export default conditionalRender