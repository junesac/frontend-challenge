import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './slider.css';

const Slider = () => {
    const [sliderRef] = useKeenSlider({
      loop: {
        min: 0,
        max: 2,
      },
    })
  
    return (
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">1</div>
        <div className="keen-slider__slide">2</div>
        <div className="keen-slider__slide">3</div>
      </div>
    )
  };
export default Slider; 