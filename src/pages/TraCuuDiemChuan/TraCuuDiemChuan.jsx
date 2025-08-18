import BangKetQua from "../../components/BangKetQua";

import React, { useState } from "react";
import Layout_TraCuuDiemChuan from "../../layout/Layout_TraCuuDiemChuan";
import ThanhDieuHuong from "../../components/ThanhDieuHuong/ThanhDieuHuong";
import Dropdown from "../../components/Dropdown/Dropdown";
import Loc_nam_tinh from "../../components/Loc_nam_tinh/Loc_nam_tinh";
import Nut from "../../components/Nut/Nut";
import ONhap from "../../components/ONhap/ONhap";
import "./TraCuuDiemChuan.css";

const heOptions = ["Hệ đại học", "Hệ cao đẳng"];

const mockData = [];

const TraCuuDiemChuan = () => {
  const [he, setHe] = useState(heOptions[0]);
  const [tinhThanh, setTinhThanh] = useState("");
  const [nam, setNam] = useState("");
  const [truong, setTruong] = useState("");
  const [data, setData] = useState(mockData);

  const handleSearch = () => {
    // TODO: fetch/filter data theo các trường đã chọn
    // setData(...)
  };

  return (
    <Layout_TraCuuDiemChuan>
      <ThanhDieuHuong />
      <div className="tra-cuu-diem-chuan-container">
        <div className="tra-cuu-header">
          <h2>Tra cứu điểm chuẩn CĐ - ĐH</h2>
        </div>
        <div className="tra-cuu-controls">
          <Dropdown options={heOptions} value={he} onChange={setHe} />
          <ONhap
            placeholder="Nhập mã trường/ tên trường"
            value={truong}
            onChange={(e) => setTruong(e.target.value)}
          />
          <Nut label="Tìm kiếm" onClick={handleSearch} />
        </div>
        <div className="tra-cuu-filters">
          <Loc_nam_tinh
            tinhThanh={tinhThanh}
            setTinhThanh={setTinhThanh}
            nam={nam}
            setNam={setNam}
          />
        </div>
        <BangKetQua data={data} />
      </div>
    </Layout_TraCuuDiemChuan>
  );
};

export default TraCuuDiemChuan;
