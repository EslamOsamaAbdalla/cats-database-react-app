import React, { useState,useEffect } from 'react'
import './App.css';
import Header from './component/Header/header';
import ItemsContainer from './component/ItemsContainer/ItemsContainer';
function App() {
  const [catRundom, setCatRundom] = useState([])
  const [catKind, setCatKind] = useState([])
  useEffect(()=>{
    getApi()
    getApiKinds()
  },[])
  const getApi = async ()=>{
    await fetch("https://api.thecatapi.com/v1/images/search?limit=20",{
      method: "GET",
      headers: {
        'x-api-key' : 'live_zdQKzzPsRMpNX2oCZLob2oXm5XG9L20RqeFyHjH90HplmCItJURnoZh6SIga61dD'}}
    ).then((res)=>{return res.json();}).then((res)=>{setCatRundom(res)})
  }
  const getApiKinds = async ()=>{
    await fetch("https://api.thecatapi.com/v1/breeds",{
      method: "GET",
      headers: {'x-api-key' : 'live_zdQKzzPsRMpNX2oCZLob2oXm5XG9L20RqeFyHjH90HplmCItJURnoZh6SIga61dD'}}
    ).then((res)=>{return res.json();}).then((res)=>{setCatKind(res)})
  }
  const apiSearch = async (search)=>{
    await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${search}&limit=10`,{
      method: "GET",
      headers: {'x-api-key' : 'live_zdQKzzPsRMpNX2oCZLob2oXm5XG9L20RqeFyHjH90HplmCItJURnoZh6SIga61dD'}}
    ).then((res)=>{return res.json();}).then((res)=>{
      if (search == "") {
        getApi()
      } else {
        setCatRundom(res)
      }
    })
  }

  return (
    <div className="App">
      <Header catKind={catKind} apiSearch={apiSearch}/>
      <ItemsContainer catRundom={catRundom}/>
    </div>
  );
}
export default App;
