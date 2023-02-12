import { FC } from 'react';
import { commentsNoAvatar } from 'assets/images';
import { AvatarImg } from 'components/avatar-img';
import { BookRating } from 'components/book-rating';
import { CommentDTO } from 'types/types';
import { getImageURL } from 'utils/get-image-url';

import { CommentContainer, CommentText, DateAndName, ShortInfoContainer } from './comment-item.styles';

type CommentProps = {
  comment: CommentDTO;
};

export const BookCommentItem: FC<CommentProps> = ({ comment }) => {
  const date = new Date(comment.createdAt).toLocaleDateString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <CommentContainer>
      <ShortInfoContainer>
        <AvatarImg
          size='32px'
          bgImage={comment.user.avatarUrl ? getImageURL(comment.user.avatarUrl) : commentsNoAvatar}
        />
        <DateAndName>
          <p>
            {comment.user.firstName} {comment.user.lastName}
          </p>
          <p>{date}</p>
        </DateAndName>
      </ShortInfoContainer>
      <BookRating rating={comment.rating} stylesClass='ratingInComments' />
      {comment.text && <CommentText>{comment.text}</CommentText>}
    </CommentContainer>
  );
};
