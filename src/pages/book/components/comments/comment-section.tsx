import { FC } from 'react';
import { BookSectionTitle } from 'types/enum';
import { CommentDTO } from 'types/types';

import { BookSectionLayout } from '../book-section-layout';

import { SectionContainer } from './comment-section.style';
import { CommentsList } from './comments-list';

type CommentsSectionProps = {
  comments: CommentDTO[];
};

export const CommentsSection: FC<CommentsSectionProps> = ({ comments }) => (
  <BookSectionLayout isPadding={true} title={BookSectionTitle.comments} details={comments?.length} withArrow={true}>
    <SectionContainer>
      <CommentsList comments={comments} />
    </SectionContainer>
  </BookSectionLayout>
);
