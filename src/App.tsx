import CreatePlaylist from './component/pages/CreatePlaylist';
import { useLocation, Switch, Route } from 'react-router-dom';
import Auth from './component/pages/Auth';
import GuardRoute from './component/components/GuardRoute';
import NotFound from './component/pages/NotFound';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store';
import { login, logout } from './slice/authSlice';
import { User } from './types/user';

const App: React.FC = () => {
  const { pathname }: { pathname: string } = useLocation();
  const dispatch = useAppDispatch();
  const accessTokenState: string = useAppSelector((state) => state.auth.accessToken);

  useEffect(() => {
    const accessToken: string | null = localStorage.getItem('accessToken');

    if (accessToken) {
      const expiredDate: string | null = localStorage.getItem('expiredDate');

      if (+(expiredDate as string) < +new Date()) {
        dispatch((logout()));
      } else if (!accessTokenState) {
        const user: User | string = JSON.parse(localStorage.getItem('user') || "");
        dispatch(login({
          accessToken,
          user,
          expiredDate,
        }));
      }
    }
  }, [accessTokenState, dispatch, pathname]);

  return (
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
  );
}

export default App;