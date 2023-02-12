import React, { FC } from 'react';
import { BookInfoTitles } from 'types/enum';
import { addComma } from 'utils/add-comma';
import { keyExtractor } from 'utils/key-extractor';

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
      {title === BookInfoTitles.genre ? (
        Array.isArray(content) &&
        content.map((item, index) => (
          <span key={keyExtractor(index)}>
            {item} {addComma(index, content.length)}
          </span>
        ))
      ) : (
        <span>{content}</span>
      )}
    </InfoContainer>
  </React.Fragment>
);
