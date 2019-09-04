import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1100px;
  margin: 50px auto;

  ul {
    margin-top: 40px;
  }
`;

export const ContentHeader = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 172px;
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

export const SearchContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px 40px 20px 20px;
  margin-bottom: 8px;
  margin-top: 5px;
  color: #ffffff !important;
  cursor: pointer;

  button {
    width: 50px;
    font-weight: bold;
    font-size: 16px;
    background: #ff298f;
    height: 35px;
    border: none;
    border-radius: 0 4px 4px 0;
    color: #ffffff;

    &:hover {
      background: ${darken(0.06, '#FF298F')};
    }
  }
  input {
    background: rgb(255, 255, 255);
    max-width: 170px;
    border: 0;
    border-radius: 4px 0 0 4px;
    height: 34px;
    padding: 0 15px;
    color: #111111;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  strong {
    font-size: 18px;
  }
  span {
    font-size: 16px;
    color: #999;
  }
`;
export const DefaultButton = styled.button`
  width: 100px !important;
  border-radius: 4px !important;
  font-weight: bold;
  font-size: 16px;
  background: #ff298f;
  height: 35px;
  border: none;
  color: #ffffff;
  margin-right: 2px;

  &:hover {
    background: ${darken(0.06, '#FF298F')};
  }
`;
export const PushedCountriesWrapper = styled.ul`
  margin-top: 0;
  width: 1100px;
  li {
    display: inline;
    margin-right: 5px;
    background: rgba(0, 0, 0, 0.2);
    padding: 10px;
  }
`;

export const CountriesWrapper = styled.div`
  max-width: 1100px;
  max-height: 600px;
`;

export const CountryInfo = styled.div`
  width: 545px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px 20px 20px 20px;
  margin-bottom: 8px;
  margin-right: 5px;
  color: #ffffff !important;

  img {
    width: 100px;
    margin-right: 5px;
  }

  div {
    margin-right: 5px;
    strong {
      display: block;
      margin-bottom: 5px;
      color: #ffffff;
      font-size: 14px;
    }

    span {
      display: block;
      margin-bottom: 5px;
      margin-top: 2px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
