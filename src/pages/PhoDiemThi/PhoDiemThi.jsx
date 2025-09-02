import React, { useState, useMemo } from "react";
import ChonThongKe from "../../components/ChonThongKe/ChonThongKe";
import Dropdown from "../../components/Dropdown/Dropdown";
import BangDiem from "../../components/BangDiem/BangDiem";
import BieuDoPhoDiem from "../../components/BieuDoPhoDiem/BieuDoPhoDiem";
import "./PhoDiemThi.css";

const khoiOptions = ["A", "A1", "B", "C", "D"];
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
const namOptions = ["2025", "2024", "2023", "2022"];

const PhoDiemThi = () => {
  const [tab, setTab] = useState("khoi-thi");
  const [khoi, setKhoi] = useState("Tất cả");
  const [mon, setMon] = useState("Toán");
  const [tinh, setTinh] = useState("Toàn quốc");
  const [nam, setNam] = useState("2024");

  // Tạo dữ liệu giả lập với dữ liệu thực tế hơn
  const duLieuGoc = useMemo(() => {
    const data = {};
    tinhOptions.forEach((t) => {
      data[t] = {};
      namOptions.forEach((n) => {
        data[t][n] = Array.from({ length: 51 }).map((_, i) => {
          const diem = (i * 0.2).toFixed(1);
          // Tạo phân phối giống thực tế - cao ở giữa, thấp ở 2 đầu
          let soLuong;
          if (i <= 5) soLuong = Math.floor(Math.random() * 1000) + 100; // 0-1.0
          else if (i <= 25)
            soLuong = Math.floor(Math.random() * 60000) + 10000; // 1.2-5.0
          else if (i <= 35)
            soLuong = Math.floor(Math.random() * 40000) + 20000; // 5.2-7.0
          else soLuong = Math.floor(Math.random() * 20000) + 5000; // 7.2-10.0

          return {
            diem: diem,
            soLuong: soLuong,
          };
        });
      });
    });
    return data;
  }, []);

  // Lấy dữ liệu theo tab
  let dataBang = [];
  if (tab === "khoi-thi") {
    dataBang = duLieuGoc["Toàn quốc"]["2024"];
  } else if (tab === "mon-thi") {
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

  // Tính số thí sinh điểm < 1 và < 5
  const diemDuoi1 = dataBang
    .filter((item) => parseFloat(item.diem) < 1)
    .reduce((sum, item) => sum + item.soLuong, 0);
  const diemDuoi5 = dataBang
    .filter((item) => parseFloat(item.diem) < 5)
    .reduce((sum, item) => sum + item.soLuong, 0);

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
                  borderBottom: "2px solid #0056b3",
                  paddingBottom: 8,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    backgroundColor: "#0056b3",
                    color: "white",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    fontSize: 18,
                    display: "inline-block",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                >
                  PHỔ ĐIỂM KHỐI {khoi.toUpperCase()}
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 24,
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: 12,
                    padding: "16px",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      color: "#343a40",
                      fontWeight: "bold",
                      fontSize: 16,
                      marginBottom: 8,
                    }}
                  >
                    Tổng số thí sinh
                  </div>
                  <div
                    style={{
                      color: "#dc3545",
                      fontWeight: "bold",
                      fontSize: 32,
                    }}
                  >
                    {tongSoThiSinh.toLocaleString()}
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: 12,
                    padding: "16px",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      color: "#343a40",
                      fontWeight: "bold",
                      fontSize: 16,
                      marginBottom: 8,
                    }}
                  >
                    Điểm trung bình
                  </div>
                  <div
                    style={{
                      color: "#dc3545",
                      fontWeight: "bold",
                      fontSize: 32,
                    }}
                  >
                    {diemTrungBinh}
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: 12,
                    padding: "16px",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      color: "#343a40",
                      fontWeight: "bold",
                      fontSize: 16,
                      marginBottom: 8,
                    }}
                  >
                    Điểm {"<"} 1
                  </div>
                  <div
                    style={{
                      color: "#dc3545",
                      fontWeight: "bold",
                      fontSize: 32,
                    }}
                  >
                    {diemDuoi1.toLocaleString()}
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: 12,
                    padding: "16px",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      color: "#343a40",
                      fontWeight: "bold",
                      fontSize: 16,
                      marginBottom: 8,
                    }}
                  >
                    Điểm {"<"} 5
                  </div>
                  <div
                    style={{
                      color: "#dc3545",
                      fontWeight: "bold",
                      fontSize: 32,
                    }}
                  >
                    {diemDuoi5.toLocaleString()}
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
              {/* Tiêu đề */}
              <div
                style={{
                  borderBottom: "2px solid #0056b3",
                  paddingBottom: 8,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    backgroundColor: "#0056b3",
                    color: "white",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    fontSize: 18,
                    display: "inline-block",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                >
                  PHỔ ĐIỂM MÔN {mon.toUpperCase()}
                </span>
              </div>

              {/* 4 thẻ thống kê */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 24,
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: 12,
                    padding: "16px",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      color: "#343a40",
                      fontWeight: "bold",
                      fontSize: 16,
                      marginBottom: 8,
                    }}
                  >
                    Tổng số thí sinh
                  </div>
                  <div
                    style={{
                      color: "#dc3545",
                      fontWeight: "bold",
                      fontSize: 32,
                    }}
                  >
                    {tongSoThiSinh.toLocaleString()}
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: 12,
                    padding: "16px",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      color: "#343a40",
                      fontWeight: "bold",
                      fontSize: 16,
                      marginBottom: 8,
                    }}
                  >
                    Điểm trung bình
                  </div>
                  <div
                    style={{
                      color: "#dc3545",
                      fontWeight: "bold",
                      fontSize: 32,
                    }}
                  >
                    {diemTrungBinh}
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: 12,
                    padding: "16px",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      color: "#343a40",
                      fontWeight: "bold",
                      fontSize: 16,
                      marginBottom: 8,
                    }}
                  >
                    Điểm {"<"} 1
                  </div>
                  <div
                    style={{
                      color: "#dc3545",
                      fontWeight: "bold",
                      fontSize: 32,
                    }}
                  >
                    {diemDuoi1.toLocaleString()}
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: 12,
                    padding: "16px",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      color: "#343a40",
                      fontWeight: "bold",
                      fontSize: 16,
                      marginBottom: 8,
                    }}
                  >
                    Điểm {"<"} 5
                  </div>
                  <div
                    style={{
                      color: "#dc3545",
                      fontWeight: "bold",
                      fontSize: 32,
                    }}
                  >
                    {diemDuoi5.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Layout biểu đồ và bảng */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                  gap: 32,
                }}
              >
                {/* Biểu đồ bên trái */}
                <div>
                  <BieuDoPhoDiem data={dataBang} />
                </div>

                {/* Bảng bên phải */}
                <div>
                  <BangDiem data={dataBang} />
                </div>
              </div>
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
                  borderBottom: "2px solid #0056b3",
                  paddingBottom: 8,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    backgroundColor: "#0056b3",
                    color: "white",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    fontSize: 18,
                    display: "inline-block",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                >
                  Điểm trung bình {tinh.toUpperCase()}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoDiemThi;
