import './App.css';
import CreatePlaylist from './component/pages/CreatePlaylist';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './component/pages/Auth';
import GuardRoute from './component/components/GuardRoute';
import NotFound from './component/pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <GuardRoute path="/create-playlist" type="private" exact>
          <CreatePlaylist />
        </GuardRoute>
        <GuardRoute path="/" type="guest" exact>
          <Auth />
        </GuardRoute>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;