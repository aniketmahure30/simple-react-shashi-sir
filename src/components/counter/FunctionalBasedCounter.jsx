import React, { useState } from 'react'

const FunctionalBasedCounter = () => {

    let [counter, setCounter] = useState(0);
    let Increment =()=>{
        // setCounter(counter + 1);
        setCounter(prevState => prevState + 1);
    }
    let Decrement =()=>{
        // setCounter(counter - 1);
        setCounter(prevState => prevState - 1);
        
    }
    let Reset =()=>{
        setCounter(0);
    }

        let RandomNum = () => {
            setCounter( () => Math.floor(Math.random()* 100))
        }

    // task to genrate random string

    let RandomStr = ()=>{
        let str ="qwertyuioasdfghjklzxcvbnmpluhbvrmikjn";
        setCounter( str[Math.round(Math.random()*3)]
        + str[Math.round(Math.random()*10)] 
        + str[Math.round(Math.random()*20)]
        + str[Math.round(Math.random()*6)]
        + str[Math.round(Math.random()*18)])
    }

  return (
    
      <div>
          <strong>Functional Based Counter</strong>
          <h2>{counter}</h2>
          <button onClick={Increment}>Increment</button>
          <button onClick={Decrement}>Decremnet</button>
          <button onClick={Reset} >Reset</button>
          <button onClick={RandomNum}>RandomNumber</button>
          <button onClick={RandomStr}>RandomStr</button>
          <button onClick={Increment}> + {counter}</button>

        </div>
      
  );
}

export default FunctionalBasedCounter