import React, { useState, useEffect } from 'react'
import './css/one.css'
import Header from './view/xuenan/index'

import Login from './view/login/login'

import Detail from './view/yango/detail'
// import Head from './view/xuenan/head'
import Nav from './view/xuenan/nav'
// import Banner from './component/Banner'
import { Route } from 'react-router-dom'

import Home from "../src/view/dyc/home"

// const transfrom={
//   position:'relative',
//   transform: 'translateX(4.5rem)'
// }

function App() {
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    console.log(flag);
  }, [flag])
  return (
    <div className="App">

      <Header setFlag={setFlag} flag={flag}></Header>
      {
        flag ? <Nav></Nav> : ""
      }
      <div style={
        {
          transform: `translateX(${flag ? 4.5 : 0}rem)`
        }
      }>
        <Route path="/" exact component={Home}></Route>
        <Route path="/course" exact component={Login}></Route>
        <Route path="/detail" exact component={Detail}></Route>
      </div>


    </div>

  );
}
export default App
