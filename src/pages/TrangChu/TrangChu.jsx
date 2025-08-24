import React from "react";
import { useNavigate } from "react-router-dom";
import BoCucChinh from "../../layout/BoCucChinh";
import "./TrangChu.css";
import Nut from "../../components/Nut/Nut";
import sinhvien from "../../assets/sinhvien.png";

const TrangChu = () => {
  const navigate = useNavigate();
  return (
    //    <BoCucChinh>
    <div className="trang-chu">
      <div className="trang-chu__left">
        <div className="trang-chu__subtitle">NHANH CHÓNG & TIỆN ÍCH</div>
        <div className="trang-chu__title">
          <span>HỖ TRỢ TUYỂN</span>
          <br />
          <span>SINH ĐẠI HỌC</span>
        </div>
        <div className="trang-chu__desc">
          Trang web hỗ trợ tra cứu và phân tích điểm chuẩn đại học từ năm 2021
          đến 2025, đưa ra gợi ý giúp thí sinh lựa chọn ngành và trường học phù
          hợp
        </div>
        <Nut
          label="KHÁM PHÁ NGAY"
          onClick={() => navigate("/goi-y-nguyen-vong")}
        />
      </div>
      <div className="trang-chu__right">
        <div className="trang-chu__img-bg">
          <img src={sinhvien} alt="Sinh viên" className="trang-chu__img" />
        </div>
      </div>
    </div>
    //    </BoCucChinh>
  );
};

export default TrangChu;
