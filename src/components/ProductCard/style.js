import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 200px;
  border-radius: 20px;

  gap: 10px;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 20px 40px rgba(52, 53, 99, 0.2),
    0px 1px 3px rgba(0, 0, 0, 0.05);
`;

export const ContentWrapper = styled.div``;

export const Image = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  margin: 0;
`;

export const TextWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-radius: 0 0 20px 20px;
  background: rgba(255, 255, 255, 0.2);
  width: 200px;
  padding: 10px 0;
  backdrop-filter: blur(40px);
`;

export const Title = styled.p`
  font-weight: 600;
  text-align: center;
  margin: 0;
  color: #014c40;
`;

export const Price = styled.p`
  font-weight: normal;
  text-align: center;
  margin: 0;
`;

export const AddButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #014c40;
  padding: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    transform: scale(1.2);
    transition: 0.2s;
  }

  p {
    margin: 0;
    color: white;
    font-weight: bold;
  }
`;
