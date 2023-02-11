import { FC } from 'react';
import { CommentDTO } from 'types/types';
import { keyExtractor } from 'utils/key-extractor';

import { BookCommentItem } from '../comment-item';

import { ListContainer } from './comments-list.styles';

type CommentsListProps = {
  comments: CommentDTO[];
};

export const CommentsList: FC<CommentsListProps> = ({ comments }) => (
  <ListContainer>
    {comments.map((comment, index) => (
      <BookCommentItem key={`comment-${keyExtractor(index)}`} comment={comment} />
    ))}
  </ListContainer>
);
