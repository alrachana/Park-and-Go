import React from 'react';
import './HowItsWork.css'

const HowItWorks = (props) => {

  return (
    <aside className = {`${props.isHowItWorksOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper '}`}>
    

      <div className = 'sidebar'>
        
      <button className="close-btn" onClick={props.closeHowItWorks}>X</button>
        
        
        <ul className = "container">
          <li className = "item">
            <span className = "number">1</span>
            <div className = "content">
              <div className = "title">Find your car park!</div>
              <p className = "read">Sign up and check our presence at hotels, restaurants, airport...</p>
            </div>
          </li>
          <li className = "item">
            <span className = "number">2</span>
            <div className = "comtent">
              <div className = "title">Book!</div>
              <p className = "read">Select date and time, check availability, see prices...</p>
            </div>
          </li>
          <li className = "item">
            <span className = "number">3</span>
            <div className = "comtent">
              <div className = "title">And park!</div>
              <p className = "read">Upon arrival, just show your reservation in the car park.</p>
            </div>            
          </li>
        </ul>
        
        <a className = "car" href="https://www.animatedimages.org/cat-cars-67.htm">
          <img src="https://www.animatedimages.org/data/media/67/animated-car-image-0021.gif" border="0" alt = "park here" />
        </a>
      </div>

    </aside>
  );
}

export default HowItWorks;

