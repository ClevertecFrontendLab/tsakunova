import { FC } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { keyExtractor } from 'utils/key-extractor';

import { ImageContainer } from '../slider.style';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

export const SwiperSmall: FC<{ images: string[] }> = ({ images }) => (
  <ImageContainer>
    <Swiper
      data-test-id='slide-big'
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='images-slider-small'
    >
      {images.map((item, index) => (
        <SwiperSlide key={keyExtractor(index)}>
          <img src={item} alt={`Slide${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  </ImageContainer>
);
