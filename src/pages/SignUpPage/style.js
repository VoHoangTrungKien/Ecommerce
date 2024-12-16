import styled from "styled-components";

export const WrapperContainerLeft = styled.div`
  flex: 1;
  padding: 40px 45px 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 20px;
    h1 {
      font-size: 24px;
      text-align: center;
    }
    p {
      font-size: 14px;
      text-align: center;
    }
  }
`;

export const WrapperContainerRight = styled.div`
  width: 300px;
  background: linear-gradient(
    136deg,
    rgb(240, 248, 255) -1%,
    rgb(219, 238, 255) 85%
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    h4 {
      font-size: 16px;
      text-align: center;
    }
    img {
      max-width: 150px;
    }
  }
`;

export const WrapperTextLight = styled.span`
  color: rgb(13, 92, 182);
  font-size: 13px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
