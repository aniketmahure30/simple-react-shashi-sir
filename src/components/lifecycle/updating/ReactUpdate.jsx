import React, { Component } from 'react'

export default class ReactUpdate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          company_name: "technoelevate",
          comp_loc :"Bangolre",
      }
    }


    changedetalis = () => {
        this.setState({ comp_loc: "Mysuru", company_name: "JSpiders" })
    };


  render() {
      return (
          <>
              <div> company name : {this.state.company_name}</div>
              <div>company Loc : {this.state.comp_loc}</div>
              <button onClick={this.changedetalis}>Click here</button>
          </>
      );
  }
}



