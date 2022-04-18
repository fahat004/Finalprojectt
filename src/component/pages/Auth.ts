import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import config from '../config/config';
import { useDocumentTitle } from '../config/customHooks';
import { getUserProfile } from '../config/fetchApi';
import { login } from '../../slice/authSlice';

export default function Auth() {
  const dispatch = useDispatch();
  const history = useHistory();
  useDocumentTitle('Auth - Spotipy');

  const setLogin = useCallback(async (accessToken, expiresIn) => {
    try {
      const responseUser = await getUserProfile(accessToken);

      dispatch(login({
        accessToken,
        expiredDate: +new Date() + expiresIn * 1000,
        user: responseUser,
      }));

      history.push('/create-playlist');
    } catch (error) {
      toast.error(error.message);
    }
  }, [dispatch, history]);

  useEffect(() => {
    const accessTokenParams = new URLSearchParams(window.location.hash).get('#access_token');
    const expiresIn = new URLSearchParams(window.location.hash).get('expires_in');

    if (accessTokenParams !== null) {
      setLogin(accessTokenParams, expiresIn);
    }
  }, [setLogin]);

  const getSpotifyLinkAuthorize = () => {
    const state = Date.now().toString();
    const clientId ="e3ef4ba369764a2d81a3edf88707f029";

    return 'https://accounts.spotify.com/authorize?' +
      `client_id=${clientId}` +
      '&response_type=token' +
      `&redirect_uri=http://localhost:3000/` +
      `&state=${state}` +
      `&scope=${config.SPOTIFY_SCOPE}`;
  }

  return (
    <main className="center">
      <p>Login for next step...</p>
      <Button href={getSpotifyLinkAuthorize()} external>Authorize</Button>
    </main>
  )
}