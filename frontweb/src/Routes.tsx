import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Auth from 'pages/Auth';
import Movies from 'pages/Movies';
import { Route, Router, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <PrivateRoute path="/movies">
        <Route path="/movies" exact>
          <Movies />
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
