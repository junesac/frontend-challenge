import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './slider.styles.scss'
import sliderData from './sliderData'
import classNames from 'classnames'

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: {
      min: 0,
      max: 2
    }
  })

  return (
    <div ref={sliderRef} className='keen-slider'>
      {sliderData.map(page => (
        <div key={`page-${page.id}`} className={classNames('keen-slider__slide', `number-slide${page.id}`)}>
          {page.id}
        </div>
      ))}
    </div>
  )
}
export default Slider
