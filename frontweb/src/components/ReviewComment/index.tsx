import { AxiosRequestConfig } from 'axios';
import ReviewCommentDetails from 'components/ReviewCommentDetails';
import { useEffect, useState } from 'react';
import { Review } from 'type/review';
import { BASE_URL, requestBackend } from 'util/resquest';
import './styles.css';

type Props = {
  movieId: string;
};

const ReviewComment = ({ movieId }: Props) => {
  const [review, setReview] = useState<Review[]>();

   useEffect(() => {
    const params: AxiosRequestConfig = {
      url: BASE_URL + '/movies/' + movieId + '/reviews', //`${BASE_URL}/movies/${movieId}/reviews`,
      withCredentials: true,
   };

    requestBackend(params).then((response) => {
      setReview(response.data);
    });
  }, [movieId]);

  return (
    <div className="base-card review-comment-card">
      {review?.map((item) => (
        <div key={item.id}>
          <ReviewCommentDetails name={item.user.name} text={item.text} />
        </div>
      ))}
    </div>
  );
};

export default ReviewComment;