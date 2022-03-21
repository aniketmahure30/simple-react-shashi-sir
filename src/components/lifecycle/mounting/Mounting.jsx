import React, { Component } from 'react'

export default class Mounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          emp_name: "Sangram"
          
      }
    }

    // through satic getDerivedStateFromProps(props,state)

    static getDerivedStateFromProps(props, state) {
        return {
            emp_nmae: props.ename,
        }    
    }

    // 

  render() {
    return (
        <div>Employee Name: { this.state.emp_name}</div>
    )
  }
}
