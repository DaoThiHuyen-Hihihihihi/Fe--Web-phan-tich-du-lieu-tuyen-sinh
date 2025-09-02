import React from "react";
import "./BieuDoPhoDiem.css";

const BieuDoPhoDiem = ({ data = [] }) => {
  // Tìm giá trị max để scale biểu đồ
  const maxValue = Math.max(...data.map((item) => item.soLuong));

  return (
    <div className="bieu-do-pho-diem">
      <div className="bieu-do-container">
        {/* Trục Y */}
        <div className="truc-y">
          <div className="gia-tri-y">80k</div>
          <div className="gia-tri-y">60k</div>
          <div className="gia-tri-y">40k</div>
          <div className="gia-tri-y">20k</div>
          <div className="gia-tri-y">0</div>
        </div>

        {/* Vùng biểu đồ */}
        <div className="vung-bieu-do">
          {/* Lưới ngang */}
          <div className="luoi-ngang">
            <div className="duong-luoi"></div>
            <div className="duong-luoi"></div>
            <div className="duong-luoi"></div>
            <div className="duong-luoi"></div>
            <div className="duong-luoi"></div>
          </div>

          {/* Các cột */}
          <div className="cac-cot">
            {data.map((item, index) => {
              const height = (item.soLuong / maxValue) * 100;
              return (
                <div key={index} className="cot-wrapper">
                  <div
                    className="cot"
                    style={{ height: `${height}%` }}
                    title={`Điểm ${item.diem}: ${item.soLuong} thí sinh`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Trục X */}
          <div className="truc-x">
            {data.map((item, index) => (
              <div key={index} className="nhan-x">
                {item.diem}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chú thích */}
      <div className="chu-thich">
        <div className="chu-thich-item">
          <div className="mau-chu-thich"></div>
          <span>Phổ điểm môn Toán</span>
        </div>
        <button className="nut-nhung">
          <span>⚡</span> Nhúng
        </button>
      </div>
    </div>
  );
};

export default BieuDoPhoDiem;
