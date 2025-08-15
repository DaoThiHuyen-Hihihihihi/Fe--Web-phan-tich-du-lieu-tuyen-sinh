import React from "react";
import { Link } from "react-router-dom";
import "./ThanhDieuHuong.css";

const ThanhDieuHuong = () => {
  return (
    <nav className="thanh-dieu-huong">
      <div className="logo">BIT-BAV</div>
      <ul>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/tra-cuu">Tra cứu điểm thi đại học</Link>
        </li>
        <li>
          <Link to="/pho-diem">Phổ điểm thi đại học</Link>
        </li>

        <li>
          <Link to="/diem-chuan">Điểm chuẩn CĐ - ĐH</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ThanhDieuHuong;
