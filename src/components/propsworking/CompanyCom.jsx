import React from 'react'

const CompanyCom = (props) => {


    console.log(props);   //props of company : cname , emp

    return (
        <>
            <h2>Company name : {props.cname}</h2>
            <p>e_i : {props.emp.eid}</p>
            <p> employe name: {props.emp.ename}</p>
            <p> employee sal : {props.emp.sal}</p>
            <p>tname : {props.tname}</p>
        </>
    )
}




const Employee =(props) =>{

    console.log(props);  // props of emp  : tname 
    const emp ={
        eid:1355,
        ename :"aniket",
        sal :20000,
    }
    
    return (
        <>
            
            <h5>Trainer name : {props.tname}</h5>
            <CompanyCom  emp={emp} cname="Test yantra " tname ={props.tname}/>
        </>

    )
}

export default Employee
