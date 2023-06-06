import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
const CartItems = () => {
  const { cart, clearCart } = useCartContext()

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn btn">
          continue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn btn"
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .clear-btn {
    background: rgb(121, 86, 68);
    color: white;
    border: none;
  }

  .clear-btn:hover {
    background: none;
    color: rgb(121, 86, 68);
    border: 1px solid rgb(121, 86, 68);
  }
`
export default CartItems
