import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({houseAce}) => {
      return (
            <div>
                  <h2>Father</h2>
                  <p>House: {houseAce}</p>
                  <Myself  houseAce=  {houseAce} ></Myself>
                  <Brother houseAce=  {houseAce} ></Brother>
                  <Sister  houseAce=  {houseAce}></Sister>
            </div>
      );
};

export default Father;