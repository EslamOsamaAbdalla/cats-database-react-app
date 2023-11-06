import React, { useState,useEffect } from 'react'
import"./ItemsContainer.css"
import Item from './Item/Item'
function ItemsContainer() {
  const [api,setApi] = useState([])
  useEffect(()=>{
    getApi()
  },[])
  const getApi = async ()=>{
    await fetch("https://api.thecatapi.com/v1/images/search?limit=20",{
      method: "GET",
      headers: {
        'x-api-key' : 'live_zdQKzzPsRMpNX2oCZLob2oXm5XG9L20RqeFyHjH90HplmCItJURnoZh6SIga61dD'}}
    ).then((res)=>{return res.json();}).then((res)=>{setApi(res)})
  }
  return (
    <div id='ItemsContainer'>
        <div id='ItemCounter'>
          {api ? api.map((i)=>{
            return <Item key={i.id} goodImg={i.url}/>
          }) : "no item"}
        </div>
    </div>
  )
}
export default ItemsContainer