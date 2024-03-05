import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: blue;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: 500px;
  overflow-y: scroll;
`;

export const Item = styled.li`
  background-color: beige;
  width: 300px;
  //   height: px;
`;

export const ImgWrapp = styled.div`
  border-radius: 14px;
  width: 300px;
  height: 200px;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 200px;
  width: 300px;
`;

export const Name = styled.div``;

export const Price = styled.div``;

export const Button = styled.button``;
