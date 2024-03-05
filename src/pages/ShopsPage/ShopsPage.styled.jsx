import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
