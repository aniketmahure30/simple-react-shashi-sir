import React,{useState, Fragment} from 'react'
import PRODUCTS from "../../product.json"
import Product from "./Product"
import {ProductStyles} from "./Product.style"


const Products = () => {
    let [ items , setItems]= useState(PRODUCTS);
    // let {flexcontainer}= ProductStyles;

    //? display in grid system

  // return (
  //   <Fragment>
  //     <section style={flexcontainer}>
  //       {items.length >= 0 &&
  //         items.map(product => {
  //           return (
  //             <Fragment key={product.id}>
  //               <Product {...product} />
  //             </Fragment>
  //           );
  //         })}
  //     </section>
  //   </Fragment>
  // );





  // ? display i table format

  return (
      <table style={ProductStyles.tableStyle}>
        <thead >
          <tr>
            <th>PHOTO </th>
            <th>title </th>
            <th>description </th>
            <th>Price </th>
            <th>rating </th>
            <th>category </th>
          </tr>
          </thead > 
          <tbody> 
                {items.length >= 0 && items.map(product => {
                return (
                          <tr key={product.id}>
                            <Product {...product} />
                          </tr>
                        )
              })};
          </tbody>
         
      </table>    
  )
}

export default Products