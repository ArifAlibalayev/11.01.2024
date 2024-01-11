import React from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import './index.scss'
import '@splidejs/react-splide/css';

function HeroSection() {
  return (
    <section id='hero'>


<Splide  hasTrack={ false }  aria-label="..." options={ {
    rewind: true,
    // autoWidth : true,
    width:"100%",
    gap   : '1rem',
    pagination:false,
   height:"80vh",
  } }
>
  <SplideTrack>
  <SplideSlide>
    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg" alt="Image 2"/>
  </SplideSlide>
  </SplideTrack>


  <div className="splide__arrows">
    <button className="splide__arrow splide__arrow--prev">Prev</button>
    <button className="splide__arrow splide__arrow--next">Next</button>
  </div>
</Splide>

    </section>
  )
}

export default HeroSection