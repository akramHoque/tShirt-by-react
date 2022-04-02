import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = ({houseAce}) => {
      const ring = useContext(RingContext)
      return (
            <div>
                  <h2>Brother</h2>
                  <p>House:</p>
                  <p>{ring}</p>
            </div>
      );
};

export default Brother;