import Navbar from 'components/Navbar';
import Auth from 'pages/Auth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/">
        <Auth />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
