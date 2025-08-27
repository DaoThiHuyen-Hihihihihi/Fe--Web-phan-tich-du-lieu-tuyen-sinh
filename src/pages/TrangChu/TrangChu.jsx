import React from "react";
import { useNavigate } from "react-router-dom";
import BoCucChinh from "../../layout/BoCucChinh";
import "./TrangChu.css";
import Nut from "../../components/Nut/Nut";
import AnhTuDongDoi from "../../components/AnhTuDongDoi/AnhTuDongDoi";
import sinhvien from "../../assets/sinhvien.png";
import sinhvien2 from "../../assets/sinhvien2.png";
import sinhvien3 from "../../assets/sinhvien3.png";

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
          <AnhTuDongDoi
            images={[sinhvien3, sinhvien2, sinhvien]}
            interval={3000}
            alt="Sinh viên"
            className="trang-chu__img"
            style={{ objectFit: "cover", maxHeight: "100vh" }}
          />
        </div>
      </div>
    </div>
    //    </BoCucChinh>
  );
};

export default TrangChu;
