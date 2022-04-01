import React from 'react';
import './Cart.css' ;
const Cart = ({cart, handleRemoveFromCart}) => {


     let command ;
     if(cart.length === 0){
           command = <div>
                 <h3>Oh customer vai</h3>
                 <p>Kinos na kn??</p>
           </div>
     }
     else if(cart.length === 1){
           command = <p>Please add more...</p>
     }
     else{
        command =  <p>Please add more more items</p>
     }
     
      return (
            <div>
                  <h2>item selected: {cart.length}</h2>
                
                  
                 {
                       cart.map(tShirt => <p>
                             
                             {tShirt.name}

                             <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                             
                             </p>)
                 }
                  {command}

                  {cart.length === 3 && <div className='orange'>
                        <p>Trigonal</p>
                        <p>3 jon ke gift diba</p>
                        </div>} 

                  {cart.length === 0 || <p className='orange'>Yay ! you are buying</p>}

                 {cart.length !==4 ? <p>Keep adding</p> : <button>Remove All</button> }
            
          
            </div>
      );
};

export default Cart;