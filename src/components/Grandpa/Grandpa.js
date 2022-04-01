import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty' ;
import './GrandPa.css' ;

const Grandpa = () => {
      const houseAce = 7;
      return (
            <div className='grandpa' style = {{display: 'flex'}}>
                  <h2>Grandpa</h2>
                  
                  <Father houseAce = {houseAce}></Father>
                  <Uncle  houseAce = {houseAce}></Uncle>
                  <Aunty  houseAce = {houseAce}></Aunty>
            </div>
      );
};

export default Grandpa;