import React from "react";
import "./BangDiem.css";

const BangDiem = ({ duLieu = [] }) => {
  return (
    <div className="bang-diem-wrap">
      <table className="bang-diem">
        <thead>
          <tr>
            <th>Điểm</th>
            <th>Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {duLieu.map((r, i) => (
            <tr key={i}>
              <td>{r.diem}</td>
              <td>{r.soLuong}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BangDiem;
