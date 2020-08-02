import React from 'react';
import "./style.css";



const Dog = ({ dogs }) =>{
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img className="w5 h5" alt="huskies" src={dogs} />
      </div>
    );
}

export default Dog;


