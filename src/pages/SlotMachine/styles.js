import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1100px;
  margin: 50px auto;

  ul {
    margin-top: 40px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    img {
      align-self: center;
      width: 230px;
      padding: 20px;
      background: rgb(244, 213, 187);
      border: 1px solid #111111;
    }
    h2 {
      margin-right: 15px;
    }
    strong {
      color: #f58a22;
      font-size: 60px;
      font-weight: bold;
      margin-right: 5px;
    }
  }
  button {
    svg {
      margin: 0px 10px;
    }
    margin-right: 50px;
    display: flex;
    align-self: center;
    align-items: center;
    width: 100px;
    font-weight: bold;
    font-size: 16px;
    background: #ff298f;
    height: 42px;
    border: none;
    border-radius: 4px;
    color: #ffffff;

    &:hover {
      background: ${darken(0.06, '#ff298f')};
    }
  }
`;

export const ContentHeader = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between !important;
  align-items: center;

  button {
    svg {
      margin: 0px 10px;
    }
    display: flex;
    align-self: center;
    align-items: center;
    width: 192px !important;
    font-weight: bold;
    font-size: 16px;
    background: #f58a22;
    height: 42px;
    border: none;
    border-radius: 4px;
    color: #ffffff;

    &:hover {
      background: ${darken(0.06, '#f58a22')};
    }
  }
`;
