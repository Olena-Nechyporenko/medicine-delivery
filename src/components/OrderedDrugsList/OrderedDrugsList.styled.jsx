import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 550px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`;

export const Wrapper = styled.div`
  padding: 15px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
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
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  height: 220px;
  gap: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 350px;
    height: 200px;
    gap: 15px;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    width: 500px;
    height: 200px;
    gap: 15px;
  }
`;

export const ImgWrapp = styled.div`
  border-radius: 14px;
  height: 100px;
  width: 200px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (min-width: 1200px) {
    width: 250px;
    height: 200px;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  height: 100px;
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 250px;
    height: 200px;
  }
`;

export const DescriptionWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-right: 5px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1200px) {
    gap: 20px;
  }
`;

export const Name = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.1;
  color: var(--main-text-color);
`;

export const Price = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.1;
  color: var(--main-text-color);
`;
export const InputWrapp = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.1;
  text-align: center;
  color: var(--main-text-color);
  width: 70px;
  height: 20px;
  border-color: transparent;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 0 2px;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
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
  padding: 5px 15px;
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
