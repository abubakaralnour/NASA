import React from 'react'

const IMGNasa = () => {
  return (
    <div className='cont'>  <video 
    style={{
      transform: "scale(1)",
      transformOrigin: "48% 54%",
      objectPosition: "28% 54%",
      objectFit: "cover",
      
    }}
    autoPlay
    playsInline
    loop
    muted // Ensure it plays automatically in some browsers
  >
    <source src="https://www.nasa.gov/wp-content/uploads/2025/02/sphere-02.mp4" type="video/mp4" />
  </video></div>
  )
}

export default IMGNasa