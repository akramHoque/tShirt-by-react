import React from 'react';
import Special from '../Special/Special';

const Myself = ({houseAce}) => {
      return (
            <div>
                  <h2>Me</h2>
                  <p>House : {houseAce}</p>
                  <Special></Special>
            </div>
      );
};

export default Myself;