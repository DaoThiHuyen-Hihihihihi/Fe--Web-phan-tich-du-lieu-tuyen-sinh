import React from "react";

export default function Layout_TraCuuDiemChuan({ children }) {
  return (
    <div className="Layout_TraCuuDiemChuan">
      <header>
        <h1>Tra cứu điểm chuẩn CĐ - ĐH</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
