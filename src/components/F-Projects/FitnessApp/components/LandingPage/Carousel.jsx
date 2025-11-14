import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../img/pexels-estudiopolaroid-3112004.jpg';
import img2 from '../../img/pexels-lee-catherine-collins-1371715-2652236.jpg';
import img3 from '../../img/pexels-muribotelho-1865131.jpg';
import img4 from '../../img/pexels-olly-868757.jpg';
import img5 from '../../img/pexels-pixabay-416747.jpg';
import img6 from '../../img/pexels-victorfreitas-703016.jpg';
import img7 from '../../img/pexels-victorfreitas-841130.jpg';
import img8 from '../../img/pexels-willpicturethis-1954524.jpg';
import img9 from '../../img/pexels-ella-olsson-572949-1640773.jpg';
import img10 from '../../img/pexels-ella-olsson-572949-1640777.jpg';
import img11 from '../../img/pexels-janetrangdoan-1128678.jpg';
import img12 from '../../img/pexels-jonathanborba-3076509.jpg';
import img13 from '../../img/pexels-olly-866027.jpg';
import img14 from '../../img/pexels-victorfreitas-1092878.jpg';

export default function FitnessCarousel() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img className='d-block w-100' src={img1} alt='Fitness training' />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img className='d-block w-100' src={img2} alt='Workout session' />
      </Carousel.Item> */}
      <Carousel.Item>
        <img className='d-block w-100 h-200' src={img3} alt='Gym equipment' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img4} alt='Exercise routine' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img13} alt='Yoga practice' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img5} alt='Weight training' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img6} alt='Strength workout' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img7} alt='Fitness activity' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img8} alt='Training session' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img9} alt='Healthy food' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img10} alt='Nutrition' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img11} alt='Healthy meal' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img12} alt='Fitness lifestyle' />
      </Carousel.Item>

      <Carousel.Item>
        <img className='d-block w-100' src={img14} alt='Weight lifting' />
      </Carousel.Item>
    </Carousel>
  );
}
