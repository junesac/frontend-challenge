import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './slider.styles.scss'
import classNames from 'classnames'
import silderPages from './sliderData.json'

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: {
      min: 0,
      max: 2
    }
  })

  const [sliderData] = useState(silderPages)

  // useEffect(() => {
  //   const url = './sliderData.json'

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url)
  //       const json = await response.json()
  //       console.log(json)
  //       this.setSliderData(json)
  //     } catch (error) {
  //       console.log('error', error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <div ref={sliderRef} className='keen-slider'>
      {sliderData.map((page) => (
        <div
          key={`page-${page.id}`}
          className={classNames('keen-slider__slide', `number-slide${page.id}`)}
        >
          <div className='mainPage'>
            <div className='upperPart'>
              <div className='number' style={{ backgroundImage: `url(${page.backgroundImage})` }}>
                {page.id}
              </div>
              <div className='title'>{page.title}</div>
              <div className='description'>{page.description}</div>
            </div>
            <div className='lowerPart' style={{ backgroundImage: `url(${page.backgroundImage})` }}>
              <img className='image' src={page.icon} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Slider
