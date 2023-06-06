import React from 'react'
import styled from 'styled-components'

import wood from '../assets/wood.png';
import cotton from '../assets/cotton.png'
import leather from '../assets/leather.png'
const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            we use the best materials <br />
            Just for you
          </h3>
        </article>
      </div>
      <div className="services-center">
        <article className="service">
          <img src={wood} />
        </article>
        <article className="service">
          <img src={cotton} />
        </article>
        <article className="service">
          <img src={leather} />
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
    text-align: center;
  }
  padding: 5rem 0;

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 0;
  }
  .service {
    text-align: center;
    padding: 1rem 1rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
    img {
      width: 250px;
      border-radius: 20px;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 768px) {
    services-center {
      grid-template-columns: 1fr 1fr;
    }
    h3,
    h4 {
      font-size: 32px;
    }
    .service {
      text-align: center;
      padding: 1rem 1rem;
      border-radius: var(--radius);

      img {
        width: 30%;
        border-radius: 20px;
      }
    }
  }

  @media (min-width: 900px) {
    .services-center {
    
    }
  }
`
export default Services
