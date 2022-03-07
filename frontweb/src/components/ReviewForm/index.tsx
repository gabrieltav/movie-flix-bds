import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { requestPostReviews } from 'util/resquest';

import './styles.css';

type Props = {
  movieId: string;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();

  const [, setHasError] = useState(false);

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    requestPostReviews(formData)
      .then((response) => {
        setHasError(false);
        window.location.reload();
      })
      .catch((error) => {
        setHasError(true);
      });
  };

  return (
    <div className="base-card review-form-card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('text')}
            type="text"
            className="form-control review-input base-input"
            placeholder="Deixe a sua avaliação aqui"
            name="text"
          />
        </div>
        <div className="review-submit">
          <button className="btn btn-primary">
            <h6>SALVAR AVALIAÇÃO</h6>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
