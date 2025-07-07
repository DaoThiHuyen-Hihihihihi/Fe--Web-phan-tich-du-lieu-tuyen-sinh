import React from "react";

export default function Filters({ tinhThanh, setTinhThanh, nam, setNam }) {
  return (
    <div className="filters">
      <select value={tinhThanh} onChange={(e) => setTinhThanh(e.target.value)}>
        <option value="">Chọn Tỉnh thành</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="TP.HCM">TP.HCM</option>
      </select>

      <select value={nam} onChange={(e) => setNam(e.target.value)}>
        <option value="">Chọn năm</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}
