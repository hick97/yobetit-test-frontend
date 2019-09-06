import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }

  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <nav>
            <img src={logo} alt="Yobetit" />
          </nav>
        </Link>

        <aside>
          <Profile>
            <div>
              <strong>Welcome {profile.name}!</strong>
              <span>Your coins: {profile.coins}</span>
            </div>
            <button onClick={handleSignOut}>EXIT</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
