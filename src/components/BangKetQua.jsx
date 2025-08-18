import React from "react";

const BangKetQua = ({ data }) => {
  return (
    <div className="tra-cuu-table-wrapper">
      <table className="tra-cuu-table">
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
          {data.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", color: "#888" }}>
                Không có dữ liệu
              </td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{row.nganh}</td>
                <td>{row.diemChuan}</td>
                <td>{row.he}</td>
                <td>{row.khoiThi}</td>
                <td>{row.ghiChu}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BangKetQua;
