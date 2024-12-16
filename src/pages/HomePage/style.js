import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperButtonMore = styled(ButtonComponent)`
  background: #fff;
  &:hover {
    color: #fff;
    background: rgb(13, 92, 182);
    span {
      color: #fff;
    }
  }
  width: 100%;
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointers")};
`;
export const WrapperProducts = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
export const WrapperBody = styled.div`
  width: 100%;
  background-color: #efefef;
  padding: 0 16px; /* Thêm padding cho không gian */

  @media (max-width: 1200px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
export const WrapperContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1270px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
