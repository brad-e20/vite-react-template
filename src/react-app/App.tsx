// src/App.tsx

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Zoom, Keyboard } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import "./App.css";
import chillisLogo from './assets/chillis.png';

interface SlideData {
  id: number;
  type: 'title' | 'fish' | 'snail';
  species: string;
  image: string;
  isTitle?: boolean;
}

const tankSlides: SlideData[] = [
  // Title slide
  {
    id: 1,
    type: 'title',
    species: "🌶️🌶️🌶️",
    image: "https://assets.chillis-tank.uk/86E0DCD1-99B8-43E2-8D68-786041C169BB_1_105_c.jpeg",
    // image: "https://assets.chillis-tank.uk/4BF1F5AA-F7B2-4061-B5D8-03ECD9AD31CC_1_105_c.jpeg",
    isTitle: true
  },
  
  // Cherry Shrimp (3 slides)
  {
    id: 2,
    type: 'fish',
    species: "Cherry Shrimp",
    image: "https://assets.chillis-tank.uk/706B2268-D67C-4593-8567-A7A85A56AE98_1_105_c.jpeg"
  },
  {
    id: 3,
    type: 'fish',
    species: "Cherry Shrimp",
    image: "https://assets.chillis-tank.uk/B1AD7917-7DBE-495B-B0C5-9EE2983C25D9_1_105_c.jpeg"
  },
  {
    id: 4,
    type: 'fish',
    species: "Cherry Shrimp",
    image: "https://assets.chillis-tank.uk/EF7FB870-D1C3-4899-9D57-56255B70CAD7_1_105_c.jpeg"
  },
  
  // Vampire Shrimp (3 slides)
  {
    id: 5,
    type: 'fish',
    species: "Vampire Shrimp",
    image: "https://assets.chillis-tank.uk/87351DAF-9B20-4E52-B200-ADC71F086167_1_102_o.jpeg"
  },
  // {
  //   id: 6,
  //   type: 'fish',
  //   species: "Vampire Shrimp",
  //   image: ""
  // },
  // {
  //   id: 7,
  //   type: 'fish',
  //   species: "Vampire Shrimp",
  //   image: ""
  // },
  
  // Panda Corys (3 slides)
  {
    id: 8,
    type: 'fish',
    species: "Panda Corydoras",
    image: "https://assets.chillis-tank.uk/IMG_9492.jpeg"
  },
  {
    id: 9,
    type: 'fish',
    species: "Panda Corydoras",
    image: "https://assets.chillis-tank.uk/969DB6B2-41F7-4F21-96C0-D48474EE54DC_1_105_c.jpeg"
  },
  {
    id: 10,
    type: 'fish',
    species: "Panda Corydoras",
    image: "https://assets.chillis-tank.uk/6E37996D-29D6-446E-9E81-C2F3AA302076_1_105_c.jpeg"
  },
  
  // Ember Tetras (3 slides)
  // {
  //   id: 11,
  //   type: 'fish',
  //   species: "Ember Tetra & Endler's",
  //   image: ""
  // },
  // {
  //   id: 12,
  //   type: 'fish',
  //   species: "Ember Tetra",
  //   image: ""
  // },
  // {
  //   id: 13,
  //   type: 'fish',
  //   species: "Ember Tetra",
  //   image: ""
  // },
  
  // // Endlers (3 slides)
  // {
  //   id: 14,
  //   type: 'fish',
  //   species: "Endler's",
  //   image: ""
  // },
  // {
  //   id: 15,
  //   type: 'fish',
  //   species: "Endler's",
  //   image: ""
  // },
  // {
  //   id: 16,
  //   type: 'fish',
  //   species: "Endler's",
  //   image: ""
  // },
  
  // Albino Bristlenose Pleco (3 slides)
  {
    id: 17,
    type: 'fish',
    species: "Albino Bristlenose Pleco",
    image: "https://assets.chillis-tank.uk/CD3A4CA7-6717-42EC-AF69-5232122BBB02_1_105_c.jpeg"
  },
  {
    id: 18,
    type: 'fish',
    species: "Albino Bristlenose Pleco",
    image: "https://assets.chillis-tank.uk/F3ADEC0A-2F25-4238-856C-A7C04ECD9AB8_1_105_c.jpeg"
  },
  // {
  //   id: 19,
  //   type: 'fish',
  //   species: "Albino Bristlenose Pleco",
  //   image: ""
  // },
  
  // Nerite Snails (1 slide)
  // {
  //   id: 20,
  //   type: 'snail',
  //   species: "Nerite Snail",
  //   image: ""
  // },
  
  // // Ramshorn Snails (1 slide)
  // {
  //   id: 21,
  //   type: 'snail',
  //   species: "Ramshorn Snail",
  //   image: ""
  // },
  
  // // Malaysian Trumpet Snail (1 slide)
  // {
  //   id: 22,
  //   type: 'snail',
  //   species: "Malaysian Trumpet Snail",
  //   image: ""
  // }
];

function App() {
  const [showNames, setShowNames] = useState(false);
  const [isOnTitleSlide, setIsOnTitleSlide] = useState(true);

  const handleSlideChange = (swiper: any) => {
    const realIndex = swiper.realIndex;
    setIsOnTitleSlide(tankSlides[realIndex]?.isTitle || false);
  };

  return (
    <div className="fish-tank-app">
      {isOnTitleSlide && (
        <div className="toggle-container">
          <span className="toggle-label">Show Names</span>
          <label className="toggle-switch">
            <input 
              type="checkbox"
              checked={showNames}
              onChange={() => setShowNames(!showNames)}
            />
            <span className="slider"></span>
          </label>
        </div>
      )}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Zoom, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        zoom={{
          maxRatio: 3,
          minRatio: 1,
          toggle: true,
        }}
        touchStartPreventDefault={false}
        simulateTouch={true}
        allowTouchMove={true}
        onSlideChange={handleSlideChange}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        className="fish-swiper"
      >
        {tankSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`fish-slide ${slide.isTitle ? 'title-slide' : ''}`}>
              <div className="swiper-zoom-container">
                <img 
                  src={slide.image} 
                  alt={slide.species}
                  className="fish-image"
                />
              </div>
              <div className="fish-overlay">
                {slide.isTitle ? (
                  <div className="title-content">
                    <img src={chillisLogo} alt="Chilli's Tank" className="tank-logo" />
                    <span className='chilli-emoji'>🌶️</span>
                  </div>
                ) : (
                  showNames && <h2 className="fish-species">{slide.species}</h2>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
