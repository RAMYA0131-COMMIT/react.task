import React from "react";
import { Route, Routes } from "react-router-dom"
import UiMap from "./arrayofobject/UiMap"


const Router = () =>{
    return(
        <div className="text-center mb-5">
            <Routes>
            <Route path = "/"  element = {<UiMap/>}/>
                </Routes>
        </div>
    )
}

export default Router;