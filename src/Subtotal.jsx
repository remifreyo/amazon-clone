import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import { useNavigate } from 'react-router'

function Subtotal() {
  const navigate = useNavigate()
  const [{ basket }, dispatch] = useStateValue()
  let currentBasketPrice = 0
  basket.map((item) => (currentBasketPrice += item.price))
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={currentBasketPrice}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button onClick={(e) => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
