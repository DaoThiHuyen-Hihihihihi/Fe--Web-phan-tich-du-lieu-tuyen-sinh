import React, { useState, useMemo } from "react";
import ChonThongKe from "../../components/ChonThongKe/ChonThongKe";
import Dropdown from "../../components/Dropdown/Dropdown";
import BangDiem from "../../components/BangDiem/BangDiem";
import "./PhoDiemThi.css";

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

const PhoDiemThi = () => {
  const [tab, setTab] = useState("khoi-thi");
  const [khoi, setKhoi] = useState("Tất cả");
  const [mon, setMon] = useState("Toán");
  const [tinh, setTinh] = useState("Toàn quốc");
  const [nam, setNam] = useState("2024");

  // Tạo dữ liệu giả lập
  const duLieuGoc = useMemo(() => {
    const data = {};
    tinhOptions.forEach((t) => {
      data[t] = {};
      namOptions.forEach((n) => {
        data[t][n] = Array.from({ length: 21 }).map((_, i) => ({
          diem: (i * 0.2).toFixed(1),
          soLuong: 8,
        }));
      });
    });
    return data;
  }, []);

  // Lấy dữ liệu theo tab
  let dataBang = [];
  if (tab === "khoi-thi") {
    dataBang = duLieuGoc["Toàn quốc"]["2024"];
  } else if (tab === "tinh-thanh") {
    dataBang = duLieuGoc[tinh][nam];
  }

  // Tính tổng số thí sinh và điểm trung bình
  const tongSoThiSinh = dataBang.reduce((sum, item) => sum + item.soLuong, 0);
  const diemTrungBinh =
    dataBang.length > 0
      ? (
          dataBang.reduce(
            (sum, item) => sum + parseFloat(item.diem) * item.soLuong,
            0
          ) / tongSoThiSinh
        ).toFixed(2)
      : 0;

  return (
    <div
      className="pho-diem-thi"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #b7d8f7, #fff)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          margin: "32px 0 24px",
          fontWeight: 700,
          fontSize: 32,
        }}
      >
        Phổ điểm thi tốt nghiệp THPT
      </h1>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 16px #0001",
          padding: 32,
        }}
      >
        <ChonThongKe activeTab={tab} setActiveTab={setTab} />

        <div className="hop-noi-dung" style={{ marginTop: 24 }}>
          {tab === "khoi-thi" && (
            <>
              <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
                <div
                  className="chon-dieu-kien"
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span style={{ fontWeight: 500 }}>Khối thi</span>
                  <Dropdown
                    options={khoiOptions}
                    value={khoi}
                    onChange={(e) => setKhoi(e.target.value)}
                  />
                </div>
                <div
                  className="chon-dieu-kien"
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span style={{ fontWeight: 500 }}>Năm</span>
                  <Dropdown
                    options={namOptions}
                    value={nam}
                    onChange={(e) => setNam(e.target.value)}
                  />
                </div>
              </div>
              <div
                style={{
                  borderBottom: "3px solid #2196f3",
                  marginBottom: 16,
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#2196f3",
                  paddingBottom: 4,
                }}
              >
                PHỔ ĐIỂM KHỐI {khoi === "Tất cả" ? "A" : khoi}
              </div>
              <div style={{ display: "flex", gap: 32, marginBottom: 24 }}>
                <div
                  style={{
                    background: "#f5f6fa",
                    borderRadius: 12,
                    padding: 16,
                    minWidth: 160,
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "#888", fontWeight: 500, fontSize: 15 }}>
                    Tổng số thí sinh
                  </div>
                  <div
                    style={{
                      color: "#e53935",
                      fontWeight: 700,
                      fontSize: 28,
                      marginTop: 4,
                    }}
                  >
                    {tongSoThiSinh.toLocaleString()}
                  </div>
                </div>
                <div
                  style={{
                    background: "#f5f6fa",
                    borderRadius: 12,
                    padding: 16,
                    minWidth: 160,
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "#888", fontWeight: 500, fontSize: 15 }}>
                    Điểm trung bình
                  </div>
                  <div
                    style={{
                      color: "#e53935",
                      fontWeight: 700,
                      fontSize: 28,
                      marginTop: 4,
                    }}
                  >
                    {diemTrungBinh}
                  </div>
                </div>
              </div>
              <BangDiem data={dataBang} />
            </>
          )}

          {tab === "mon-thi" && (
            <>
              <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
                <div
                  className="chon-dieu-kien"
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span style={{ fontWeight: 500 }}>Môn thi</span>
                  <Dropdown
                    options={monOptions}
                    value={mon}
                    onChange={(e) => setMon(e.target.value)}
                  />
                </div>
                <div
                  className="chon-dieu-kien"
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span style={{ fontWeight: 500 }}>Năm</span>
                  <Dropdown
                    options={namOptions}
                    value={nam}
                    onChange={(e) => setNam(e.target.value)}
                  />
                </div>
              </div>
              <div
                style={{
                  borderBottom: "3px solid #2196f3",
                  marginBottom: 16,
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#2196f3",
                  paddingBottom: 4,
                }}
              >
                PHỔ ĐIỂM {tinh.toUpperCase()} - {nam}
              </div>
              <div style={{ display: "flex", gap: 32, marginBottom: 24 }}>
                <div
                  style={{
                    background: "#f5f6fa",
                    borderRadius: 12,
                    padding: 16,
                    minWidth: 160,
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "#888", fontWeight: 500, fontSize: 15 }}>
                    Tổng số thí sinh
                  </div>
                  <div
                    style={{
                      color: "#e53935",
                      fontWeight: 700,
                      fontSize: 28,
                      marginTop: 4,
                    }}
                  >
                    {tongSoThiSinh.toLocaleString()}
                  </div>
                </div>
                <div
                  style={{
                    background: "#f5f6fa",
                    borderRadius: 12,
                    padding: 16,
                    minWidth: 160,
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "#888", fontWeight: 500, fontSize: 15 }}>
                    Điểm trung bình
                  </div>
                  <div
                    style={{
                      color: "#e53935",
                      fontWeight: 700,
                      fontSize: 28,
                      marginTop: 4,
                    }}
                  >
                    {diemTrungBinh}
                  </div>
                </div>
              </div>
              <BangDiem data={dataBang} />
            </>
          )}

          {tab === "tinh-thanh" && (
            <>
              <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
                <div
                  className="chon-dieu-kien"
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span style={{ fontWeight: 500 }}>Tỉnh thành</span>
                  <Dropdown
                    options={tinhOptions}
                    value={tinh}
                    onChange={(e) => setTinh(e.target.value)}
                  />
                </div>
                <div
                  className="chon-dieu-kien"
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span style={{ fontWeight: 500 }}>Năm</span>
                  <Dropdown
                    options={namOptions}
                    value={nam}
                    onChange={(e) => setNam(e.target.value)}
                  />
                </div>
              </div>
              <div
                style={{
                  borderBottom: "3px solid #2196f3",
                  marginBottom: 16,
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#2196f3",
                  paddingBottom: 4,
                }}
              >
                PHỔ ĐIỂM {tinh.toUpperCase()} - {nam}
              </div>
              <div style={{ display: "flex", gap: 32, marginBottom: 24 }}>
                <div
                  style={{
                    background: "#f5f6fa",
                    borderRadius: 12,
                    padding: 16,
                    minWidth: 160,
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "#888", fontWeight: 500, fontSize: 15 }}>
                    Tổng số thí sinh
                  </div>
                  <div
                    style={{
                      color: "#e53935",
                      fontWeight: 700,
                      fontSize: 28,
                      marginTop: 4,
                    }}
                  >
                    {tongSoThiSinh.toLocaleString()}
                  </div>
                </div>
                <div
                  style={{
                    background: "#f5f6fa",
                    borderRadius: 12,
                    padding: 16,
                    minWidth: 160,
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "#888", fontWeight: 500, fontSize: 15 }}>
                    Điểm trung bình
                  </div>
                  <div
                    style={{
                      color: "#e53935",
                      fontWeight: 700,
                      fontSize: 28,
                      marginTop: 4,
                    }}
                  >
                    {diemTrungBinh}
                  </div>
                </div>
              </div>
              <BangDiem data={dataBang} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoDiemThi;
