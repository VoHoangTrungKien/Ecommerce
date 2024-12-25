import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h4>H&K SHOP</h4>
          <p>
            Chuyên cung cấp áo Anime thời trang chất lượng cao. Hãy đến và trải
            nghiệm sự khác biệt tại H&K Store!
          </p>
        </div>
        <div className="footer-section contact">
          <h4>Liên hệ</h4>
          <p>Địa chỉ: 242 Đường Điện Biên Phủ, TP. Da Nang</p>
          <p>SĐT: 0869600976</p>
          <p>Email: nvhieu.20it10@vku.udn.vn</p>
        </div>
        <div className="footer-section social">
          <h4>Kết nối với chúng tôi</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com/hkstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/hkstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/hkstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/hkstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="footer-section links">
          <h4>Liên kết</h4>
          <a href="/privacy-policy">Chính sách bảo mật</a>
          <a href="/terms">Điều khoản sử dụng</a>
          <a href="/about">Giới thiệu</a>
          <a href="/contact">Liên hệ</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 H&K Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
