import React, { Component } from 'react'

export default class ClassBasedCounter extends Component {

    /* way to bind with the help of constructor */
    // ?  constructor is used to initlze state and binding this keywrod for arrow function
    // constructor() {
    //   super();
    //   this.state = {
    //     counter: 0,
    //   };

    //   // ! === Constructor is best place
    //     this.Increment = this.Increment.bind(this);
    //     this.Decrement = this.Decrement.bind(this);
    //     this.Reset = this.Reset.bind(this);
 
    // }


    /* Second way without conturctor*/
    state = {
        counter:0,
    }


// events=======
    Increment = () => {
        // console.log(this);
        this.setState({ counter: this.state.counter + 1 });
    };

    Decrement = () => { 
        if(this.state.counter> 0)
        this.setState({counter: this.state.counter - 1})

    };

    Reset = () => { 
        this.setState({counter: 0})

    };

    RandomNum = () => {
        this.setState( {counter: Math.round(Math.random()* 100)})
    }

    // task to genrate random string
    

  render() {
    return (
      
              <div>
                    <p>Class Based Component</p>
                    <h2>{ this.state.counter}</h2>
                    <button onClick={this.Increment}>Increment</button>
                    <button onClick={this.Decrement}>Decremnet</button>
                    <button onClick={this.Reset}>Reset</button>
                    <button onClick={this.RandomNum}>RandomNumber</button>

                </div>
          
    )
  }
}
