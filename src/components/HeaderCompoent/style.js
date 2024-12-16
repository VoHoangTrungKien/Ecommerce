import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  background-color: var(--primary-color);
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  width: 1270px;
  padding: 10px 0;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 10px;
  }
`;

export const WrapperTextHeader = styled(Link)`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
  &:hover {
    font-size: 18px;
    color: #fff;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const WrapperHeaderAccout = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  max-width: 200px;
  @media (max-width: 576px) {
    gap: 5px;
  }
`;

export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 576px) {
    font-size: 10px;
  }
`;

export const WrapperContentPopup = styled.p`
  cursor: pointer;
  &:hover {
    color: rgb(26, 148, 255);
  }
`;
