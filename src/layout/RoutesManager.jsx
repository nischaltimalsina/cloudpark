import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Homepage from '../pages/Homepage'
import Services from '../pages/Services'
import Main from './Main'

const RoutesManager = () => {
  return (
    <Routes>
        <Route element={<Main/>}>
        <Route exact path={"/"} element={<Homepage/>}/>
        <Route exact path={"/about"} element={<About/>}/>
        <Route exact path={"/services"} element={<Services/>}/>
        </Route>
    </Routes>
  )
}

export default RoutesManager