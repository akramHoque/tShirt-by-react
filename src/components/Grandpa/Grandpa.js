import React, { createContext } from 'react';
import { useState } from 'react'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css';


 export const RingContext = createContext('diamond');

const Grandpa = () => {
      // set dynamic house
      const [house, setHouse] = useState(1);
      const ornament = 'Diamond Ring';
      const handleBuyAHouse = () => {
            const newHouseCount = house + 1;
            setHouse(newHouseCount);
      }
      return (
            <RingContext.Provider value= {house}>
                  <div className='grandpa' style={{ display: 'flex' }}>
                        <h4>Grandpa</h4>
                        <p>House : {house}
                              <button onClick={handleBuyAHouse}>Buy A House</button>
                        </p>

                        <section style={{ display: 'flex' }}>
                              <Father houseAce={house} ></Father>
                              <Uncle houseAce={house}></Uncle>
                              <Aunty houseAce={house}></Aunty>
                        </section>
                  </div>
            </RingContext.Provider>
      );
};

export default Grandpa;