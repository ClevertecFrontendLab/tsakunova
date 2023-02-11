import { FC } from 'react';
import { BookInfoTitles, BookSectionTitle } from 'types/enum';
import { FullBookDTO } from 'types/types';

import { BookSectionLayout } from '../book-section-layout';

import { FullInfoColumn, FullInfoContainer } from './full-info.style';
import { InfoRow } from './info-row';

type FullInfoSectionProps = {
  book: FullBookDTO;
};

export const FullInfoSection: FC<FullInfoSectionProps> = ({
  book: { producer, publishingOffice, ISBN, restrictions, weight, genre, format, pages, cover, publishingYear },
}) => (
  <BookSectionLayout title={BookSectionTitle.fullInfo}>
    <FullInfoContainer>
      <FullInfoColumn>
        <InfoRow title={BookInfoTitles.publishingOffice} content={publishingOffice!} />
        <InfoRow title={BookInfoTitles.publishingYear} content={publishingYear!} />
        <InfoRow title={BookInfoTitles.pages} content={pages!} />
        <InfoRow title={BookInfoTitles.cover} content={cover!} />
        <InfoRow title={BookInfoTitles.format} content={format!} />
      </FullInfoColumn>
      <FullInfoColumn>
        <InfoRow title={BookInfoTitles.genre} content={genre!} none320={true} />
        <InfoRow title={BookInfoTitles.weight} content={weight!} />
        <InfoRow title={BookInfoTitles.ISBN} content={ISBN!} />
        <InfoRow title={BookInfoTitles.restrictions} content={restrictions!} only320={true} />
        <InfoRow title={BookInfoTitles.producer} content={producer!} />
      </FullInfoColumn>
    </FullInfoContainer>
  </BookSectionLayout>
);
