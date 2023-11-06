import React, { useState,useEffect } from 'react'
import "./header.css"
function Header() {
  const [catKind,setCatKind] = useState([])
  useEffect(()=>{
    getApiKinds()
  },[])
  const getApiKinds = async ()=>{
    await fetch("https://api.thecatapi.com/v1/breeds",{
      method: "GET",
      headers: {'x-api-key' : 'live_zdQKzzPsRMpNX2oCZLob2oXm5XG9L20RqeFyHjH90HplmCItJURnoZh6SIga61dD'}}
    ).then((res)=>{return res.json();}).then((res)=>{setCatKind(res)})
  }
  return (
    <nav>
        <h1>CATS DB</h1>
        <ul>
            <li><input type='search'/></li>
            <li className='drpdwn-container'>
              <a href=''> category</a>
              <div className='drpdwn-child'>
                <ul>
                  {catKind ? catKind.map((i)=>{
                      return <li key={i.id}> {i.name}</li>
                    }): "no category"}
                </ul>
              </div>
            </li>
        </ul>
    </nav>
  )
}

export default Header