import React from "react";
import "./KQTraCuuDiemChuan.css";

export default function KQTraCuuDiemChuan({ loading, results }) {
  if (loading) return <p className="loading-text">Đang tìm kiếm...</p>;
  if (!loading && (!results || results.length === 0))
    return <p className="no-results">Không có kết quả</p>;

  return (
    <div className="results-container">
      <table className="results-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Ngành</th>
            <th>Điểm chuẩn</th>
            <th>Hệ</th>
            <th>Khối thi</th>
            <th>Ghi chú</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.nganh}</td>
              <td>{item.diemChuan}</td>
              <td>{item.he || "-"}</td>
              <td>{item.khoiThi || "-"}</td>
              <td>{item.ghiChu || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
