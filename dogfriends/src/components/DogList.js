import React from 'react';

import Dog from './Dog.js';

const DogList = ({dogs}) =>{
      const listBreeds = dogs.message.map((dog, i) => {
            return <Dog key={i} dogs={dogs.message[i]} />
      })
      return (
            <div className="">
            {listBreeds}
       </div>
      );
    
}
 
export default DogList;