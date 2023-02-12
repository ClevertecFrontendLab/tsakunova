import React, { FC, useCallback } from 'react';
import { BookInfoTitles } from 'types/enum';

import { InfoContainer, TitleContainer } from './info-row.style';

type FullInfoSectionProps = {
  title: string;
  content: string | number | string[];
  none320?: boolean;
  only320?: boolean;
};

export const InfoRow: FC<FullInfoSectionProps> = ({ title, content, none320 = false, only320 = false }) => (
  <React.Fragment>
    <TitleContainer none320={none320} only320={only320}>
      {title}
    </TitleContainer>
    <InfoContainer none320={none320} only320={only320}>
      {content}
      {/* {title === BookInfoTitles.genre ? content.map((item: any) => <span>{item} </span>) : { content }} */}
    </InfoContainer>
  </React.Fragment>
);
