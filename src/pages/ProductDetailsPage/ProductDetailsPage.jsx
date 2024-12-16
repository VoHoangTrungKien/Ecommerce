import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";
import { WrapperBody, WrapperContainer, Breadcrumb } from "./style"; // Thêm các styled-components đã tạo

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <WrapperBody>
      <WrapperContainer>
        <Breadcrumb>
          <span
            style={{ cursor: "pointer", fontWeight: "bold" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Trang chủ
          </span>{" "}
          - Chi tiết sản phẩm
        </Breadcrumb>
        <ProductDetailsComponent idProduct={id} />
      </WrapperContainer>
    </WrapperBody>
  );
};

export default ProductDetailsPage;
