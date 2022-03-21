// import React,{useState} from 'react'

// // import COUNTRY  form "../components/country.json"
// const CountryList = () => {

//   let [country , setCountry]= useState("")


//    let handleSubmit =(e)=>{
//         e.preventDefault();
//         console.log( {country})
//     }

//   return (
//       <section className="counterApp">
//          <article>
//            <form onSubmit={handleSubmit}>
//              <div>
//                <label htmlFor="country">country list</label>
//                <select id="country" name="country" onChange={e=> setCountry(e.target.value)}>
//                 {
//                   country.map((val, index)=>{
//                     <Fragment key={index}>
//                     <option value={val.code}> </option>
//                     </Fragment>
//                   })
//                 }
               
//                </select>
//             </div>
            
//             <div>
//               <button>Submit</button>
//             </div>
//           </form>
//         </article>
//       </section>
//   )
// }

// export default CountryList