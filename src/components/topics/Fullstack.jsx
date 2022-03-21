// ? array consuming from props

// import React from 'react'

// const Fullstack = props => {
//   return (
//     <div>
//           <h1>list of Fullstack</h1>
//           {
//               props.courses.map(course => (
//                   <ul>
//                       <li>{ course}</li>
//                   </ul>
//               ))
//           }
//     </div>
//   );
// }

// export default Fullstack


// ?  Object consuming from props

// import React from 'react'

// const Fullstack = props => {
//     let { courseName, trainers, duration , languages} = props.courses;
//   return (
//     <div>
//       <h1>
//               <span>Course Name:  </span>
//               {courseName}
//           </h1>
//           <p>
//               <span>Trainers: </span>
//               {trainers.map(trainer => {
//                   return <li>{ trainer}</li>
//               })}
//           </p>
//           <br />
//           <p>
//               <span>Course Duration: </span>
//               {duration}
//           </p>
//           <br />
//           <p>
//               <span>Languages: </span>
//               {languages.map(lang => {
//                   return <li>{ lang}</li>
//               })}
//           </p>
//     </div>
//   );
// }

// export default Fullstack



// ? task combie object should display on web pages
import React from 'react'

const Fullstack = (props) => {
    let {username, salary, skills, company } = props.empdetails;
  return (
      <div>
          <h1>Emp Details </h1>
          <br />
          <p>
              <span>EMP NAME : </span>
              {username}
          </p>
          <br />
          <p>
              <span>Salary : </span>
              {salary}
          </p>
          <br />
          <p>
              <span>Company : </span>
              {company }
          </p>
          <br />
          <p>
              <span>SKILLS : </span>
              {skills.map(skill => {
                  return <li>{skill}</li>
              })}
          </p>
    </div>
  )
}

export default Fullstack