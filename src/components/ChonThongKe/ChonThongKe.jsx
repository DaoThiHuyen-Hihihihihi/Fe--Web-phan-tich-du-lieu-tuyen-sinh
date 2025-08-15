import React from "react";

const ChonThongKe = ({ activeTab, setActiveTab }) => {
  return (
    <div className="chon-thong-ke">
      <button
        className={activeTab === "mon-thi" ? "active" : ""}
        onClick={() => setActiveTab("mon-thi")}
      >
        Phổ điểm theo môn thi
      </button>
      <button
        className={activeTab === "khoi-thi" ? "active" : ""}
        onClick={() => setActiveTab("khoi-thi")}
      >
        Phổ điểm theo khối thi
      </button>
      <button
        className={activeTab === "tinh-thanh" ? "active" : ""}
        onClick={() => setActiveTab("tinh-thanh")}
      >
        Điểm trung bình các tỉnh thành
      </button>
    </div>
  );
};

export default ChonThongKe;
