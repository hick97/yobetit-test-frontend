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
    justify-content: space-between;
    align-items: center;
    img {
      width: 300px;
    }
  }
`;
