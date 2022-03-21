import React , {Fragment}from 'react'
import {ProductStyles}  from  "./Product.style"

const Product = ({id, img, title , description, price, rating, category }) => {


// ? displayed in grid System

  // return (
  //   <div style={ProductStyles.flexitems}>
  //     <figure>
  //       <img src={img} alt={title} style={ProductStyles.productImg} />
  //     </figure>
  //     <main>
  //       <h2 style={ProductStyles.H2}> {title} </h2>

  //       <p style={ProductStyles.productPara}> {description.sclice(0, 100) + "..."} </p>

  //       <p>price :
  //         {price < 2800 ? <p>{ price}</p> : <p style={ProductStyles.Price}>{price} </p>}
  //         </p>
  //       <p>rating : {rating}
  //         <span>
  //           {rating > 4 && <span style={ProductStyles.popularStyle}> Popular </span>}
  //         </span>
  //       </p>
  //       <p>category :{category}</p>
  //     </main>
  //   </div>
  // );




  //? displayed in Table fromate

  return(
    <Fragment > 
      <td> <img src={img} alt ={title} style ={ProductStyles.productImgTable} /> </td>
      <td style={ProductStyles.productH2}>{title} </td>
      <td> {description.slice(0, 60) } </td>
      <td>{price}</td>
      <td>
        {rating >= 4 ? <span style={ProductStyles.productRate}> {rating} </span> : <span style={{color:"red"}} >
            {rating}
            </span>}
     </td>
      <td> {category}</td>

    </Fragment >
  )
}

export default Product;