import React, { useState } from "react";
import ONhap from "../../components/ONhap/ONhap";
import Dropdown from "../../components/Dropdown/Dropdown";
import Nut from "../../components/Nut/Nut";
import "./GoiYNguyenVong.css";

const toHopOptions = ["Chọn tổ hợp môn thi", "A00", "A01", "B00", "C00", "D01"];
const thanhPhoOptions = [
  "Chọn Tỉnh thành",
  "Hà Nội",
  "TP.HCM",
  "Đà Nẵng",
  "Cần Thơ",
];

const GoiYNguyenVong = () => {
  const [diemThi, setDiemThi] = useState("");
  const [diemCong, setDiemCong] = useState("");
  const [diemHocBa, setDiemHocBa] = useState("");
  const [diemNangLuc, setDiemNangLuc] = useState("");
  const [toHop, setToHop] = useState(toHopOptions[0]);
  const [thanhPho, setThanhPho] = useState(thanhPhoOptions[0]);
  const [khuVuc, setKhuVuc] = useState(0);
  const [mien, setMien] = useState({ bac: false, trung: false, nam: false });

  const handleKhuVucToggle = () => setKhuVuc(khuVuc === 0 ? 1 : 0);
  const handleMienChange = (e) => {
    setMien({ ...mien, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="goi-y-container">
      <h2 className="goi-y-title">Gợi ý ngành, trường học phù hợp</h2>
      <p className="goi-y-desc">
        Bạn đang chưa biết ngành học hay trường học phù hợp ?
      </p>
      <form className="goi-y-form" onSubmit={handleSubmit}>
        <div className="goi-y-row">
          <label>
            Điểm thi <span className="star">*</span>:
          </label>
          <ONhap
            placeholder="Nhập điểm ..."
            value={diemThi}
            onChange={(e) => setDiemThi(e.target.value)}
          />
          <label>Điểm học bạ:</label>
          <ONhap
            placeholder="Nhập điểm ..."
            value={diemHocBa}
            onChange={(e) => setDiemHocBa(e.target.value)}
          />
        </div>
        <div className="goi-y-row">
          <label>Điểm cộng (nếu có):</label>
          <ONhap
            placeholder="Nhập điểm ..."
            value={diemCong}
            onChange={(e) => setDiemCong(e.target.value)}
          />
          <label>Điểm năng lực:</label>
          <ONhap
            placeholder="Nhập điểm ..."
            value={diemNangLuc}
            onChange={(e) => setDiemNangLuc(e.target.value)}
          />
        </div>
        <div className="goi-y-row">
          <label>Tổ hợp xét tuyển:</label>
          <Dropdown
            options={toHopOptions}
            value={toHop}
            onChange={setToHop}
          />
        </div>
        <div className="goi-y-row goi-y-khuvuc">
          <label>Chọn Khu vực</label>
          <span className="goi-y-switch" onClick={handleKhuVucToggle}>
            <span className={khuVuc ? "switch-on" : "switch-off"}>
              {khuVuc ? "1" : "0"}
            </span>
          </span>
          <label>
            <input
              type="checkbox"
              name="bac"
              checked={mien.bac}
              onChange={handleMienChange}
            />{" "}
            Bắc
          </label>
          <label>
            <input
              type="checkbox"
              name="trung"
              checked={mien.trung}
              onChange={handleMienChange}
            />{" "}
            Trung
          </label>
          <label>
            <input
              type="checkbox"
              name="nam"
              checked={mien.nam}
              onChange={handleMienChange}
            />{" "}
            Nam
          </label>
        </div>
        <div className="goi-y-row">
          <label>Thành phố:</label>
          <Dropdown
            options={thanhPhoOptions}
            value={thanhPho}
            onChange={setThanhPho}
          />
        </div>
        <div className="goi-y-row goi-y-submit">
          <Nut label="Xem ngay" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default GoiYNguyenVong;
