import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({images = [{url:''}]}) => {
  const [main, setMain] = useState(images[0])

  return (
    <Wrapper>
      <img src={main.url} alt='main image' className='main' />

    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 100%;
  }
  img {
    width: 100%;

  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {

 
    
  }
`

export default ProductImages
