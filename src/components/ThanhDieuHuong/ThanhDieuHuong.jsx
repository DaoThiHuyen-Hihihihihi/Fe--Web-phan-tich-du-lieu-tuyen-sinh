import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ThanhDieuHuong.css";

const navItems = [
  { label: "Trang chủ", to: "/" },
  { label: "Tra cứu điểm thi đại học", to: "/tra-cuu" },
  { label: "Phổ điểm thi đại học", to: "/pho-diem" },
  { label: "Điểm chuẩn CĐ - ĐH", to: "/diem-chuan" },
  { label: "Gợi ý tuyển sinh", to: "/goi-y-nguyen-vong" },
];

const ThanhDieuHuong = () => {
  const location = useLocation();
  return (
    <nav className="thanh-dieu-huong">
      <div className="logo">
        <span
          style={{
            fontFamily: "Kaushan Script, sans-serif",
            fontWeight: 500,
            fontStyle: "italic",
            fontSize: 32,
            letterSpacing: "30%",
            marginLeft: "80px",
          }}
        >
          BIT-BAV
        </span>
      </div>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={
                location.pathname === item.to ||
                (item.to === "/" && location.pathname === "/")
                  ? "active"
                  : ""
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ThanhDieuHuong;
