import React from 'react'
import "./Item.css"
import img from "../../../images/71mAD3kFlcL.jpg"
function Item({goodImg}) {
  return (
    <div className='item'>
    <img src={goodImg? goodImg:img} alt='cat'/>
    <div className='item-data'>
        <h3>cat</h3>
    </div>
  </div>
  )
}
export default Item