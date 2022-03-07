import ReviewComment from 'components/ReviewComment';
import ReviewForm from 'components/ReviewForm';
import { useParams } from 'react-router-dom';
import { hasAnyRoles } from 'util/auth';

import './styles.css';


type UrlParams = {
  moviesId: string;
};

const MovieDetails = () => {
  const { moviesId } = useParams<UrlParams>();

  return (
    <div className="movie-details-container">      
        <h2>Tela detalhes do filme id: {moviesId}</h2>        
          {hasAnyRoles(['ROLE_MEMBER']) && <ReviewForm movieId={moviesId} />}
           <div>
             <ReviewComment movieId={moviesId} />
             </div>
     </div>     
  );
};

export default MovieDetails;