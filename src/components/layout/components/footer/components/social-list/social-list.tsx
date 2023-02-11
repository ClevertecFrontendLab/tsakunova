import React, { FC, useCallback } from 'react';
import { SOCIAL_LINKS } from 'consts';
import { keyExtractor } from 'utils/key-extractor';

import { SocialContainer } from './social-list.style';

const SocialItem: FC<{ item: { icon: string; src: string } }> = React.memo(({ item }) => {
  const Icon = item.icon;

  return (
    <a href={item.src} target='_blank' rel='noreferrer'>
      <Icon />
    </a>
  );
});

export const SocialList: FC = () => {
  const renderItems = useCallback(
    () => SOCIAL_LINKS.map((item, index) => <SocialItem item={item} key={keyExtractor(index)} />),
    []
  );

  return <SocialContainer>{renderItems()}</SocialContainer>;
};
