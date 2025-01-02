import { Badge, Button, Col, Popover, Row } from "antd";
import React from "react";
import {
  WrapperContentPopup,
  WrapperHeader,
  WrapperHeaderAccout,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import ButttonInputSearch from "../ButtonInputSearch/ButttonInputSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { resetUser } from "../../redux/slides/userSlide";
import { useState } from "react";
import Loading from "../LoadingComponent/Loading";
import { useEffect } from "react";
import * as ProductService from "../../services/ProductService";
import { searchProduct } from "../../redux/slides/productSlide";

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [search, setSearch] = useState("");
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const order = useSelector((state) => state.order);
  const [loading, setLoading] = useState(false);
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typeProducts, setTypeProducts] = useState([]);
  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct();
    if (res?.status === "OK") {
      setTypeProducts(res?.data);
    }
  };
  useEffect(() => {
    fetchAllTypeProduct();
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    await UserService.logoutUser(); // Gọi API đăng xuất

    // Kiểm tra xem token có tồn tại trong localStorage không và xóa nó
    localStorage.removeItem("access_token"); // Xóa token với khóa là "access_token"

    // Xóa thông tin người dùng, nếu có
    localStorage.removeItem("user");
    localStorage.removeItem("refresh_token");

    // Xóa trạng thái Redux
    dispatch(resetUser());

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setUserName(user?.name);
    setUserAvatar(user?.avatar);
    setLoading(false);
  }, [user?.name, user?.avatar]);

  const content = (
    <div>
      <WrapperContentPopup onClick={() => handleClickNavigate("profile")}>
        Thông tin người dùng
      </WrapperContentPopup>
      {user?.isAdmin && (
        <WrapperContentPopup onClick={() => handleClickNavigate("admin")}>
          Quản lí hệ thống
        </WrapperContentPopup>
      )}
      <WrapperContentPopup onClick={() => handleClickNavigate(`my-order`)}>
        Đơn hàng của tôi
      </WrapperContentPopup>
      <WrapperContentPopup onClick={() => handleClickNavigate()}>
        Đăng xuất
      </WrapperContentPopup>
    </div>
  );

  const handleClickNavigate = (type) => {
    if (type === "profile") {
      navigate("/profile-user");
    } else if (type === "admin") {
      navigate("/system/admin");
    } else if (type === "my-order") {
      navigate("/my-order", {
        state: {
          id: user?.id,
          token: user?.access_token,
        },
      });
    } else {
      handleLogout();
    }
    setIsOpenPopup(false);
  };

  const onSearch = (e) => {
    navigate("/");
    setSearch(e.target.value);
    dispatch(searchProduct(e.target.value));
  };

  return (
    <div
      style={{
        heiht: "100%",
        width: "100%",
        display: "flex",
        background: "#38d7e7",
        justifyContent: "center",
      }}
    >
      <WrapperHeader>
        <Row
          style={{ width: "100%" }}
          gutter={[16, 16]}
          align="middle"
          justify="space-between"
        >
          {/* Logo */}
          <Col xs={24} sm={12} md={6} lg={5}>
            <WrapperTextHeader to="/">H&K SHOP</WrapperTextHeader>
          </Col>

          {/* Tìm kiếm */}
          {!isHiddenSearch && (
            <Col xs={24} sm={12} md={13} lg={13}>
              <ButttonInputSearch
                size="large"
                bordered={false}
                textbutton="Tìm kiếm"
                placeholder="Tìm kiếm..."
                onChange={onSearch}
                backgroundColorButton="#1f4172"
              />
            </Col>
          )}

          {/* Tài khoản và giỏ hàng */}
          <Col
            xs={24}
            sm={24}
            md={5}
            lg={6}
            style={{ display: "flex", gap: "20px" }}
          >
            <Loading isLoading={loading}>
              <WrapperHeaderAccout>
                {userAvatar ? (
                  <img
                    src={userAvatar}
                    alt="avatar"
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <UserOutlined style={{ fontSize: "30px" }} />
                )}
                {user?.access_token ? (
                  <Popover content={content} trigger="click" open={isOpenPopup}>
                    <div
                      style={{
                        cursor: "pointer",
                        maxWidth: 100,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      onClick={() => setIsOpenPopup((prev) => !prev)}
                    >
                      {userName?.length ? userName : user?.email}
                    </div>
                  </Popover>
                ) : (
                  <div
                    onClick={handleNavigateLogin}
                    style={{ cursor: "pointer" }}
                  >
                    <WrapperTextHeaderSmall>
                      Đăng nhập/ Đăng ký
                    </WrapperTextHeaderSmall>
                  </div>
                )}
              </WrapperHeaderAccout>
            </Loading>
            {!isHiddenCart && (
              <div
                onClick={() =>
                  navigate(user?.access_token ? "/order" : "/sign-in")
                }
                style={{ cursor: "pointer" }}
              >
                <Badge count={order?.orderItems?.length} size="small">
                  <ShoppingCartOutlined
                    style={{ fontSize: "30px", color: "#fff" }}
                  />
                </Badge>
                <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
              </div>
            )}
            <MenuOutlined
              style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
              onClick={() => setIsMenuOpen((prev) => !prev)} // Đảo ngược trạng thái
            />

            {/* Hamburger Menu */}
            {isMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "0",
                  width: "250px",
                  background: "#fff",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                  zIndex: 10,
                }}
              >
                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                  {typeProducts?.map((item) => (
                    <li
                      key={item}
                      style={{ padding: "8px 0", cursor: "pointer" }}
                    >
                      <TypeProduct name={item} key={item} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Col>
        </Row>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
