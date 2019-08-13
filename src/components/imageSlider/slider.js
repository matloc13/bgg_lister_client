import React, {useState, useEffect,} from 'react'
import Slide  from './slide'
import LeftArrow from './leftarrow'
import RightArrow from './rightarrow';

const Slider = (props) => {

  const { images,} = props



  const [cIndex, setCIndex] = useState(0)
  const [translateValue, setTranslateValue] = useState(0)


  // useEffect(()=>{
  //   setTimeout(()=> {
  //     incrementSlide()
  //   }, 1000)
  // },[cIndex === 50])

  const incrementSlide = () => {
    if (cIndex === 50) {
      setCIndex(0)
      setTranslateValue(0)
    } else {
      setCIndex(cIndex + 1)
      setTranslateValue(translateValue + -(slideWidth() * 5))
      console.log(cIndex);
    }

  }

  const decrementSlide = () => {

  }

  const slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }


  return (
    <>
      <div className={"slider"}>

        <div className={'sliderWrapper'}  style={{
            transform: `translateX(${translateValue}px)`,
          transition: 'transform ease-out 0.45s'
        }}>
          {images.map((img, i) => {
            return (

              <Slide key={i} img={img.thumbnail} cIndex={cIndex}/>
            )
          })}
        </div>


        <LeftArrow
          nextSlide={decrementSlide}
        />
        <RightArrow
          nextSlide={incrementSlide}
        />



      </div>

    </>
  )
}

export default Slider
