import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 80px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 49px;
      margin-right: 20px;
      margin-left: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #ffffff;
      font-size: 14px;
    }

    span {
      display: block;
      margin-top: 2px;
      font-size: 14px;
      color: #999;
    }
  }
  button {
    background: #ff298f;
    width: 71px;
    height: 42px;
    border-radius: 4px;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
    border: none;
    margin-left: 5px;

    &:hover {
      background: ${darken(0.08, '#FF298F')};
    }
  }
`;
