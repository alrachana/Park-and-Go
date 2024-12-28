import React from "react";
import { useNavigate } from "react-router-dom";
import './SearchBar.css';
import Image from './SearchFrom.json';
import Navbar2 from "../NavBar/Navbar2";

function SearchBar() {
  const navigate = useNavigate();

  const handleImageClick = (image) => {
    console.log("Navigating with Image:", image);
    navigate('/Placeform', { state: { selectedImage: image } });
  };

  return (
    <div className="main">
      <Navbar2/>
      <h1>Our Presence</h1>
      <div className="inner">
        {Image && Image.map((image, index) => (
          <div className="box" key={index}>
            <img
              src={image.icon}
              alt={image.title}
              onClick={() => handleImageClick(image)}
              style={{ cursor: "pointer" }}
            />
            <br />
            {image.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
