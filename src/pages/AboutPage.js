import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.png'
import aboutImg2 from '../assets/hero-bcg2.png'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <div className="first-div">
          <img src={aboutImg} alt="nice desk" />
          <div className="title">
            <h2>our story</h2>
            <p>
              In the charming French countryside, Rustic Root, an online
              furniture shop, flourished for 20 years. Founded in 2003 by
              Amélie, a furniture enthusiast, it curated rustic pieces that
              exuded the essence of French elegance. Initially facing
              challenges, Rustic Root's commitment to quality attracted
              customers worldwide.
            </p>
            <p>
              With a user-friendly website and detailed product descriptions, it
              became renowned as a go-to destination for unique furniture.
            </p>
          </div>
        </div>
        <div className="second-div">
          <img className="second-image" src={aboutImg2} alt="nice desk" />
          <div className="text">
            <p>
              Expanding its range over the years, Rustic Root sourced from local
              artisans, preserving craftsmanship traditions. By its 10th
              anniversary, the brand had grown exponentially, supported by a
              team of experts. To mark its 20th year, Rustic Root opened a
              physical showroom, inviting customers to experience its curated
              collection firsthand. The grand opening was a success, drawing
              visitors from near and far.
            </p>
            <p>
              The showroom, nestled in a quaint village, added depth to Rustic
              Root's legacy, enhancing the bond with its customers. The brand
              thrived amid changing trends, embracing digital platforms and
              connecting through social media. Today, Rustic Root stands tall as
              a symbol of excellence in online furniture retail. From a dream to
              a revered brand, it leaves an indelible mark on the world of
              furniture. With unwavering dedication to preserving rustic
              elegance and French heritage, Rustic Root invites customers into a
              world where timeless beauty reigns.
            </p>
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 6rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
    font-family: 'Playfair';
  }
  h2 {
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
  }
  .title {
    text-align: left;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    .first-div {
      display: flex;
      flex-direction: column;
      gap: 40px
      
    }
    .second-div {
      display: flex;
      flex-direction: column-reverse;
    }
    .second-image {
      margin-top: 40px;
    }

    .first-div {
      p {
        text-align: right;
      }
    }
  }
`
export default AboutPage
