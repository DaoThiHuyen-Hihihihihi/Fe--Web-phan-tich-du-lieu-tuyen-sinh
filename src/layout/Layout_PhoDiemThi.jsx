import React from "react";

export default function Layout_PhoDiemThi({ children }) {
  return (
    <div className="Layout_PhoDiemThi">
      <header>
        <h1>Phổ điểm thi đại học</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
