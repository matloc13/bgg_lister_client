import React from 'react';

const Slide = (props) => {

  const { img, cIndex, } = props
//   const styles = {
//   backgroundImage: `url(${img.value})`,
//   backgroundSize: `cover`,
//   backgroundRepeat: `no-repeat`,
//   backgroundPosition: `50% 60%`,
//   width: `100%`
//
// }

  // console.log(img);
  return (

      // <div className={"slide"} >
      //   <img src={img.value} alt=""/>
      // </div>
      <>
        <img src={img.value} alt="" className={`slide hidden slide${cIndex}`}/>
      </>

  )
}

export default Slide
