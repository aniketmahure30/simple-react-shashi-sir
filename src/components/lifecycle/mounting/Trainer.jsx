import React, { Component } from 'react'

export default class Trainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          trainer_name: "Shahi",
          batch_name: "EBJSE23",
        branch:"BTR"
      }
    }

// updating componentDiiMount dynamically using setState
    componentDidMount(props) {

        setTimeout(() => {
            this.setState({
                trainer_name: "Dixith ",
                branch: "BTM",
            });
        }, 4000)
        
    }


  render() {
    return (
        <div>
            <p>Trainer name: {this.state.trainer_name}</p>
            <p>batch naem :{this.state.batch_name}</p>
            <p>branch :{ this.state.branch}</p>
      </div>
    )
  }
}
