// src/pages/PhoDiemThi/PhoDiemThi.jsx
import React, { useState } from "react";
import BocucChinh from "../../layout/Layout_PhoDiemThi";
import ChonThongKe from "./ChonThongKe";
import NoiDungPhoDiem from "./NoiDungPhoDiem";
import "./PhoDiemThi.css";

const PhoDiemThi = () => {
  const [activeTab, setActiveTab] = useState("mon-thi");
  const [monThi, setMonThi] = useState("Toán");
  const [khoiThi, setKhoiThi] = useState("A");

  // Dữ liệu giả định
  const dataPhoDiem = {
    "mon-thi": {
      Toán: {
        tongThiSinh: "1137417",
        diemTrungBinh: "4.80",
        diemDuoi5: "637628",
        diemPhanBo: [
          /* dữ liệu bảng */
        ],
      },
    },
    "khoi-thi": {
      A: {
        tongThiSinh: "1137417",
        diemTrungBinh: "4.80",
        diemDuoi5: "637628",
        diemPhanBo: [
          /* dữ liệu bảng */
        ],
      },
    },
    "tinh-thanh": {
      /* dữ liệu cho tỉnh thành */
    },
  };

  const duLieuHienTai =
    activeTab === "mon-thi"
      ? dataPhoDiem["mon-thi"][monThi]
      : activeTab === "khoi-thi"
      ? dataPhoDiem["khoi-thi"][khoiThi]
      : dataPhoDiem["tinh-thanh"];

  return (
    <BocucChinh>
      <div className="pho-diem-container">
        <h1>Phổ điểm thi tốt nghiệp THPT</h1>
        <ChonThongKe activeTab={activeTab} setActiveTab={setActiveTab} />
        <NoiDungPhoDiem
          activeTab={activeTab}
          monThi={monThi}
          setMonThi={setMonThi}
          khoiThi={khoiThi}
          setKhoiThi={setKhoiThi}
          duLieu={duLieuHienTai}
        />
      </div>
    </BocucChinh>
  );
};

export default PhoDiemThi;
