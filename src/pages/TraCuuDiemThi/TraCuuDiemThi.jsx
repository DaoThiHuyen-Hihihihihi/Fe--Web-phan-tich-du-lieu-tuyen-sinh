import React, { useState } from "react";
import "./TraCuuDiemThi.css";
import ONhap from "../../components/ONhap/ONhap";
import Nut from "../../components/Nut/Nut";
import Layout_TraCuuDiemThi from "../../layout/Layout_TraCuuDiemThi";

const TraCuuDiemThi = () => {
  const [soBaoDanh, setSoBaoDanh] = useState("");

  const handleSearch = () => {
    alert(`Tìm kiếm điểm của số báo danh: ${soBaoDanh}`);
  };

  return (
    <Layout_TraCuuDiemThi>
      <div className="tra-cuu">
        <h1>Tra cứu điểm thi tốt nghiệp THPT 2025</h1>
        <div className="form-tra-cuu">
          <ONhap
            placeholder="Nhập vào số báo danh"
            value={soBaoDanh}
            onChange={(e) => setSoBaoDanh(e.target.value)}
            style={{ width: "500px" }}
          />

          <Nut label="Tìm kiếm" onClick={handleSearch} />
        </div>
      </div>
    </Layout_TraCuuDiemThi>
  );
};

export default TraCuuDiemThi;
