import React from 'react';


const DropDown = ({ dropDownBox}) => {
    return(
        <div className= "bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <select name="cars" id="cars" onChange={dropDownBox}>
                <option value="husky" >Husky</option>
                <option value="keeshond">keeshond</option>
                <option value="kelpie">kelpie</option>
                <option value="komondor">komondor</option>
            </select>
        </div>
    );
}
 
export default DropDown;