import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 350px;
  height: 550px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
  @media screen and (min-width: 1200px) {
    width: 800px;
  }
`;

export const Wrapper = styled.div`
  padding: 10px;

  @media screen and (min-width: 768px) {
    padding: 10px;
  }
  @media screen and (min-width: 1200px) {
    padding: 10px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 50px;
  height: 450px;
  overflow-y: auto;
  padding: 5px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: var(--accent-color);
  }

  &::-webkit-scrollbar-track {
    background-color: #e3fee1;
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    padding: 5px;
  }
  @media screen and (min-width: 1200px) {
    padding: 5px 52px;
  }
`;

export const Item = styled.li`
  width: 300px;
  height: 235px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;
`;

export const ImgWrapp = styled.div`
  border-radius: 14px;
  width: 300px;
  height: 150px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 150px;
  width: 300px;
`;

export const DescriptionWrapp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
`;

export const Name = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.1;
  color: var(--main-text-color);
`;

export const Group = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.1;
  color: var(--secondary-text-color);
`;

export const Price = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.1;
  color: var(--main-text-color);
`;

export const Button = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.1;
  color: var(--main-text-color);
  border: none;
  border-radius: 10px;
  background-color: var(--accent-color);
  padding: 5px;
  cursor: pointer;

  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-color);
  }
`;

export const Text = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.1;
  color: var(--main-text-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
  }
`;
