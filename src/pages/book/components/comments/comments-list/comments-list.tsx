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
    {comments && comments.map((comment) => <BookCommentItem key={comment.id} comment={comment} />)}
  </ListContainer>
);
