import React from "react";
import SearchBar from "./SearchForm";
import './Homepage.css';
import Navbar2 from "../NavBar/Navbar2";


const Homepage =()=>{
    return(
        <>
      <Navbar2/>
       <div>
       <h1>Our Presence</h1>
        </div>
        <SearchBar/>
        

        </>
    )
}

export default Homepage;