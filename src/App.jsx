import React from 'react';
// import Navigation from './componets/Navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
// import 'swiper/css/pagination';


// import required modules
import { EffectCreative } from 'swiper/modules';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Education from './sections/Education';

const App = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center app'>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            shadowScale: 0.8,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            shadow: true,
            shadowScale: 0.8,
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[ EffectCreative]}
        className="h-screen w-screen sm:w-3/4 sm:h-3/4 sm:rounded-lg"
      >
        <SwiperSlide>
          <Hero/>
        </SwiperSlide>
        <SwiperSlide>
          <Skills/>
        </SwiperSlide>
        <SwiperSlide>
          <Projects/>
        </SwiperSlide>
        <SwiperSlide>
          <Education/>
        </SwiperSlide>
        <SwiperSlide>
          <Contact/>
          </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
