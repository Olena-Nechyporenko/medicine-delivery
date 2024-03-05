import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 550px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 25px;
  line-height: 1.1;
  color: var(--main-text-color);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Item = styled.li`
  width: 150px;
`;

export const Button = styled.button`
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.1;
  color: var(--main-text-color);

  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${props =>
    props.active ? 'var(--hover-color)' : 'var(--accent-color)'};
  cursor: pointer;

  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-color);
  }
`;
