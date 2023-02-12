import { FC } from 'react';
import { sizes } from 'consts';
import { useWindowSize } from 'hooks/use-window-size';
import { ImagesType } from 'types/types';

import { SwiperBig } from './components/swiper-big';
import { SwiperSmall } from './components/swiper-small';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

export const BookSlider: FC<{ images: ImagesType[] }> = ({ images }) => {
  const size = useWindowSize();

  return size.width! <= sizes.laptop ? <SwiperSmall images={images} /> : <SwiperBig images={images} />;
};
