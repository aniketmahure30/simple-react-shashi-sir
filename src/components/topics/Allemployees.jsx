import React from 'react'

const Allemployees = props => {
    console.log(props);
  return (
    <div>
        <h1>{props.emp_name || "Sashi"}</h1>
        <p>{props.emp_id} </p>
        <p> {props.emp_sal}</p>
        <p>{props.emp_des} </p>
   
    </div>
  )
} 

export default Allemployees;
Allemployees.defaultProps ={
    emp_name:"Nani",
    emp_id:"xxx",
    emp_sal:1000,
    emp_des:"developer"
}