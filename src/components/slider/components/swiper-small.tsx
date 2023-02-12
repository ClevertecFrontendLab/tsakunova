import { FC } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImagesType } from 'types/types';
import { getImageURL } from 'utils/get-image-url';
import { keyExtractor } from 'utils/key-extractor';

import { ImageContainer } from '../slider.style';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

export const SwiperSmall: FC<{ images: ImagesType[] }> = ({ images }) => (
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
          <img src={getImageURL(item.url)} alt={`Slide${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  </ImageContainer>
);
