import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchBar from "../HomePage/SearchForm";

const Pages1 =()=>{
    return(
        <>
        
        <Routes>
            <Route path="/Parking" element={<SearchBar/>}></Route>
            
        </Routes>
       
        
        </>
    )
}

export default Pages1;