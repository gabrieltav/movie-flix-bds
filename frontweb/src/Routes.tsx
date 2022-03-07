import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home';
import MovieDetails from 'pages/Private/MovieDetails';
import Movies from 'pages/Private/Movies';
import { Route, Router, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <PrivateRoute path="/movies">
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/movies/:moviesId">
          <MovieDetails/>
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
