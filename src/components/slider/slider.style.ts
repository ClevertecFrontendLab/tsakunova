import { devices } from 'consts';
import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 445px;
  height: 696px;
  overflow: hidden;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;

  @media ${devices.mobile} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  @media ${devices.tablet} {
    grid-row-end: 2;
    width: 136px;
    height: 238px;
    border-radius: 3px;
  }
  @media ${devices.mobile} {
    margin: 0 auto;
    width: 188px;
    height: 300px;
    border-radius: 10px;
  }
  & .images-slider {
    height: 594px;
    .swiper-slide {
      border-radius: 10px;
      border: ${(props) => `1px solid ${props.theme.color.grey.black40}`};
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }
  & .images-slider-thumbs {
    height: 86px;
    margin-top: 16px;
    .swiper-slide {
      width: 19% !important;
      cursor: pointer;
      &-thumb-active {
        .images-slider-thumbs-wrapper {
          border-color: ${(props) => props.theme.color.main.accent};
        }
      }
    }
    &-wrapper {
      width: 65px;
      height: 86px;
      overflow: hidden;
      position: relative;
      border: ${(props) => `1px solid ${props.theme.color.grey.black20}`};
      border-radius: 3px;
      & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }
  & .images-slider-small {
    @media ${devices.tablet} {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .swiper-slide {
      width: 136px;
      height: 198px;
      margin-right: 30px;
      border: ${(props) => `1px solid ${props.theme.color.grey.black40}`};
      border-radius: 3px;
      overflow: hidden;
      @media ${devices.mobile} {
        height: 260px;
        border-radius: 10px;
      }
    }
    .swiper-pagination {
      position: relative;
      margin-top: 25px;
      &-bullet-active {
        background-color: ${(props) => props.theme.color.main.dark};
      }
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
