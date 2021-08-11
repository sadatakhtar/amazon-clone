import React, { useState} from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer';


function Subtotal({ price }) {
    const [state, dispatch] = useStateValue();
    //console.log(state)
//     let [total, setTotal] = useState(0);
    
//    let tot = state.basket.map(item => {
//         setTotal(item.price)
//     })
    
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                    <p>Subtotal ({state.basket.length} items):<strong>{value}</strong></p>
                    <small className='subtotal_gift'>
                        <input type='checkbox' />This order contains a gift</small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(state.basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
