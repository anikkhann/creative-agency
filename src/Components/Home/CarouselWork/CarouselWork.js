import React from 'react';
import Carousel from 'react-elastic-carousel';
import carouselOne from '../../../carousel/carousel-1.png';
import carouselTwo from '../../../carousel/carousel-2.png';
import carouselThree from '../../../carousel/carousel-3.png';
import carouselFour from '../../../carousel/carousel-4.png';
import carouselFive from '../../../carousel/carousel-5.png';


const carouselItems = [
  { id: 1, img: carouselOne },
  { id: 2, img: carouselTwo },
  { id: 3, img: carouselThree },
  { id: 4, img: carouselFour },
  { id: 5, img: carouselFive }
]


const CarouselWorks = () => {

  const breakPoints = [
    { width: 480, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 991, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
  ]

  const imageStyle = {
    height: '320px',
    borderRadius: '20px',
    margin: '15px'
  }

  
  return (
    <div className="mt-5" style={{backgroundColor:'rgb(17, 20, 48)', padding: '50px'}}>
      <h1 style={{ color: '#ffffff' }} className='text-center mb-5' >Here are some of <span style={{ color: '#7AB259' }}> our works </span> </h1>

      <Carousel breakPoints={breakPoints} >
        {carouselItems.map(item =>
          <div>
            <img style={imageStyle} src={item.img} alt="" />
          </div>
        )}
      </Carousel>

    </div>
  );
};

export default CarouselWorks;