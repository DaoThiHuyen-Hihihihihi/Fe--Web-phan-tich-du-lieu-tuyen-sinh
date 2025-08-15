import React, { useState, useMemo } from "react";
import BoCucChinh from "../../layout/BoCucChinh";
import ChonThongKe from "../../components/ChonThongKe";
import Dropdown from "../../components/Dropdown";
import BangDiem from "../../components/BangDiem"; // ✅ thêm vào đây
import "../../styles/PhoDiemThi.css";

const PhoDiemThi = () => {
  const [tab, setTab] = useState("khoi-thi");
  const [khoi, setKhoi] = useState("Tất cả");
  const [mon, setMon] = useState("Toán");
  const [tinh, setTinh] = useState("Toàn quốc");
  const [nam, setNam] = useState("2024");

  const khoiOptions = ["Tất cả", "A", "A1", "B", "C", "D"];
  const monOptions = [
    "Toán",
    "Ngữ văn",
    "Tiếng Anh",
    "Lý",
    "Hóa",
    "Sinh",
    "Sử",
    "Địa",
    "GDCD",
  ];
  const tinhOptions = ["Toàn quốc", "Hà Nội", "TP HCM", "Đà Nẵng", "Cần Thơ"];
  const namOptions = ["2024", "2023", "2022"];

  // Dữ liệu mẫu
  const duLieuGoc = useMemo(() => {
    const data = {};
    tinhOptions.forEach((t) => {
      data[t] = {};
      namOptions.forEach((n) => {
        data[t][n] = Array.from({ length: 20 }).map((_, i) => ({
          diem: (i * 0.5).toFixed(1),
          soLuong: Math.floor(Math.random() * 100 + 10),
        }));
      });
    });
    return data;
  }, []);

  return (
    <BoCucChinh>
      <section className="hero">
        <h1>Phổ điểm thi tốt nghiệp THPT</h1>
      </section>

      <ChonThongKe activeTab={tab} setActiveTab={setTab} />

      <div className="hop-noi-dung">
        {tab === "khoi-thi" && (
          <>
            <div className="chon-dieu-kien">
              <span>Khối thi</span>
              <Dropdown
                options={khoiOptions}
                value={khoi}
                onChange={(e) => setKhoi(e.target.value)}
              />
            </div>

            <BangDiem data={duLieuGoc["Toàn quốc"]["2024"]} />
          </>
        )}

        {tab === "mon-thi" && (
          <div className="chon-dieu-kien">
            <span>Môn thi</span>
            <Dropdown
              options={monOptions}
              value={mon}
              onChange={(e) => setMon(e.target.value)}
            />
          </div>
        )}

        {tab === "tinh-thanh" && (
          <>
            <div className="chon-dieu-kien">
              <span>Tỉnh thành</span>
              <Dropdown
                options={tinhOptions}
                value={tinh}
                onChange={(e) => setTinh(e.target.value)}
              />
            </div>

            <div className="chon-dieu-kien">
              <span>Năm</span>
              <Dropdown
                options={namOptions}
                value={nam}
                onChange={(e) => setNam(e.target.value)}
              />
            </div>

            <BangDiem data={duLieuGoc[tinh][nam]} />
          </>
        )}
      </div>
    </BoCucChinh>
  );
};

export default PhoDiemThi;
