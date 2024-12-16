import styled from "styled-components";

// Wrapper cho body
export const WrapperBody = styled.div`
  width: 100%;
  background: #efefef;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

// Wrapper cho container
export const WrapperContainer = styled.div`
  width: 100%;
  max-width: 1270px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Breadcrumb (đường dẫn)
export const Breadcrumb = styled.h5`
  font-size: 18px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
