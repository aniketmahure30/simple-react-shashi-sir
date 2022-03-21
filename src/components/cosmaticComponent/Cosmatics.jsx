import React, { useState, Fragment} from 'react'
import COSMATIC from "../../cosmatic.json";
import Cosmatic from './Cosmatic';
import CosmaticStyle from "./CosmaticStyles.style"
const Cosmatics = () => {

  let [items, setItems] = useState(COSMATIC);
  
  return (
    <div>Cosmatics</div>
  )
}

export default Cosmatics