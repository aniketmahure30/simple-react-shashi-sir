import React, { Component } from 'react'

export default class CompanyUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company_name: "TestYantra",
    };
  }

  // ? mount state
  componentDidMount() {
    setTimeout(() => {
      return {
        company_name: "QSpider",
      };
    }, 2000);
  }

  // ? cmponent should mount  by default its is true only it decide weather update should happen or not

//   shouldComponentUpdate() {
//     return true;
//   }

  // ? getSnapshotBeforeUpdate  will have the old state and old props
    
    getSnapshotBeforeUpdate(pervsProps, pervsState) {
      console.log("befre update old value :" ,pervsState)
    }
    

    // ? dependent it must write if we use getsnapbeforeUpdate method

    componentDidUpdate(pervsProps, pervsState, snapShot) {
        console.log(pervsState);
        console.log("after updating state :", this.state.company_name)
    }

  render() {
      return <div>CompanyUpdate
          <h1>Company name: { this.state.company_name}</h1>
    </div>;
  }
}
