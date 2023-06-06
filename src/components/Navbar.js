import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'

const Nav = () => {
const { openSidebar } = useProductsContext();


  return (
    <NavContainer>
      <div className="nav-center">
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <React.Fragment key={id}>
                <li>
                  <Link to={url}>{text}</Link>
                </li>
                <li>
                  <span className="bullet-point">&#x2022;</span>{' '}
                </li>
              </React.Fragment>
            )
          })}
        </ul>
        <div className="nav-header">
          <Link className='nav-logo' to="/">
            <img src={logo} alt="comfy sloth" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <CartButtons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  .nav-center {
    margin: 0;
    width: 100%;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 140px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    cursor: pointer;
    align-self: start;
    margin-top: 20px;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    padding: 0 40px;
    border-bottom: 0.5px solid grey;
    height: 150px;
    .nav-toggle {
      display: none;
    }
    .nav-logo {
      position: absolute;
      top: 0;
      left: 46%;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        margin: 0 0.5rem;
      }
      .bullet-point {
        font-size: 25px;
        color: grey;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
