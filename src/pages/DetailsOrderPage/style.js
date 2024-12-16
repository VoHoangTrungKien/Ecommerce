import styled from "styled-components";

export const WrapperHeaderUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack các phần tử theo chiều dọc trên màn hình nhỏ */
    align-items: flex-start;
    gap: 15px;
  }
`;

export const WrapperInfoUser = styled.div`
  .name-info {
    font-size: 13px;
    color: rgb(36, 36, 36);
    font-weight: bold;
    text-transform: uppercase;
  }
  .address,
  .phone-info,
  .delivery-info,
  .delivery-fee,
  .payment-info {
    color: rgba(0, 0, 0, 0.65);
    font-size: 13px;
    margin-top: 8px;
  }
  .name-delivery {
    color: rgb(234, 133, 0);
    font-weight: bold;
    text-transform: uppercase;
  }
  .status-payment {
    margin-top: 8px;
    color: rgb(234, 133, 0);
  }
`;

export const WrapperLabel = styled.div`
  color: rgb(36, 36, 36);
  font-size: 13px;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const WrapperContentInfo = styled.div`
  height: 118px;
  width: 320px;
  background-color: #fff;
  border-radius: 6px;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%; /* Chiếm toàn bộ chiều ngang trên màn hình nhỏ */
    height: auto; /* Để chiều cao tự điều chỉnh */
  }
`;

export const WrapperStyleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 20px; /* Tăng khoảng cách giữa các mục */
  }
`;

export const WrapperProduct = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack thông tin sản phẩm theo chiều dọc */
    gap: 15px;
  }
`;

export const WrapperNameProduct = styled.div`
  display: flex;
  align-items: flex-start;
  width: 670px;

  @media (max-width: 768px) {
    width: 100%; /* Đảm bảo chiếm toàn bộ chiều ngang */
    flex-direction: column; /* Đặt ảnh và thông tin bên dưới nhau */
  }
`;

export const WrapperItem = styled.div`
  width: 200px;
  font-weight: bold;

  &:last-child {
    color: red;
  }

  @media (max-width: 768px) {
    width: 100%; /* Để mỗi item tự điều chỉnh chiều ngang */
    text-align: left;
  }
`;

export const WrapperItemLabel = styled.div`
  width: 200px;

  &:last-child {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 100%; /* Để label chiếm toàn bộ chiều ngang */
    text-align: left;
  }
`;

export const WrapperAllPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: flex-start; /* Đưa tổng giá sang trái trên màn hình nhỏ */
  }
`;
