import React from 'react';
import './TShirt.css' ;

const TShirt = ({handleAddToCart, tShirt}) => {
      const {name, picture, price} = tShirt ;
      return (
            <div className='t-shirt'>
                  <img src={picture} alt="" />
                  <h3>{name}</h3>
                  <h3>Price: {price}</h3>
                  <button onClick={() =>handleAddToCart(tShirt)}>Add to Cart</button>
            </div>
      );
};

export default TShirt;