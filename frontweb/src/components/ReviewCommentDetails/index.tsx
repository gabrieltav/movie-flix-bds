import { ReactComponent as Star } from 'assets/images/star.svg';
import './styles.css';

type Props = {
  name: string;
  text: string;
};

const ReviewCommentDetails = ({ name, text }: Props) => {
  return (
    <div className="review-comment-details-container">
      <div className="review-comment-details-header">
        <Star />
        <h1>{name}</h1>
      </div>
      <div className="review-comment-details-card">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ReviewCommentDetails;