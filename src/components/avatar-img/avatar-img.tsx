import { FC } from 'react';
import styled from 'styled-components';

type AvatarImgProps = {
  size: string;
  bgImage: string;
};

const AvatarContainer = styled.div<{ bgImage: string; size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-image: ${(props) => `url(${props.bgImage})`};
  background-position: center center;
  border-radius: 50%;
  background-size: cover;
`;

export const AvatarImg: FC<AvatarImgProps> = ({ size, bgImage }) => <AvatarContainer bgImage={bgImage} size={size} />;
