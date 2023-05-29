import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.png'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return (
    <Wrapper className="section-center home">
      <article className="content">
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Discover a world of exquisite furniture pieces designed to enhance
          your living spaces and create an ambiance of comfort and elegance.
        </p>
        <Link to="/products" className="shop-now-button">
          Shop Now
        </Link>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-container {
    display: none;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 220px;
    height: 85%;
  }
  p {
    display: none;
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-8: );
    font-size: 1.1rem;
    text-align: center;
  }
  a {
    color: white;
    border: 1px solid white;
    padding: 5px 15px;
    border-radius: 40px;
    font-size: 18px;
  }
  @media (min-width: 768px) {
    .content {
      width: 60%;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    p,
    h1 {
      display: block;
      font-family: 'Playfair';
      line-height: 25px;
      letter-spacing: 2px;
    }
    h1 {
      line-height: 50px;
      letter-spacing: 5px;
      font-size: 45px;
      text-align: center;
      font-weight: 300;
    }
    a {
      margin-top: 170px;
      font-size: 22px;
    }
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    gap: 8rem;

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .content {
      justify-content: start;
      height: 100%;
      margin-top: 200px;
      gap: 30px;
    }
    p {
      width: 60%;
      margin: 0;
    }
    a {
      margin-top: 0;
      font-size: 22px;
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
    }
    a: hover {
      background-color: var(--clr-primary-5);
      color: white;
      border: 1px solid white;
    }
    h1 {
      font-size: 50px;
    }
  }
`

export default Hero
