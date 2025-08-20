import React from "react";
import { useNavigate } from "react-router-dom";
import BoCucChinh from "../../layout/BoCucChinh";
import "./TrangChu.css";
import Nut from "../../components/Nut/Nut";
import sinhvien from "../../assets/sinhvien.png";

const TrangChu = () => {
  const navigate = useNavigate();
  return (
    <BoCucChinh>
      <div className="trang-chu">
        <div className="noi-dung">
          <p className="tieu-de-phu">Nhanh chóng & tiện ích</p>
          <h1>Hỗ trợ tuyển sinh đại học</h1>
          <p>
            Trang web hỗ trợ tra cứu và phân tích điểm chuẩn đại học từ năm 2021
            đến 2025, đưa ra gợi ý giúp thí sinh lựa chọn ngành và trường học
            phù hợp.
          </p>
          <Nut
            label="Khám phá ngay"
            onClick={() => navigate("/goi-y-nguyen-vong")}
          />
        </div>
        <div className="hinh-anh">
          <img src={sinhvien} alt="Sinh viên" />
        </div>
      </div>
    </BoCucChinh>
  );
};

export default TrangChu;
