import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  height: 44px;
  @media (max-width: 768px) {
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  @media (max-width: 576px) {
    gap: 8px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;
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
