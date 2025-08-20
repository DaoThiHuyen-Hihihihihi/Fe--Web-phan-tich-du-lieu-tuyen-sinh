import React from "react";

import { Routes, Route } from "react-router-dom";
import TrangChu from "../pages/TrangChu/TrangChu";
import TraCuuDiemThi from "../pages/TraCuuDiemThi/TraCuuDiemThi";
import TraCuuDiemChuan from "../pages/TraCuuDiemChuan/TraCuuDiemChuan";
import PhoDiemThi from "../pages/PhoDiemThi/PhoDiemThi";
import GoiYNguyenVong from "../pages/GoiYNguyenVong/GoiYNguyenVong";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TrangChu />} />
      <Route path="/tra-cuu" element={<TraCuuDiemThi />} />
      <Route path="/diem-chuan" element={<TraCuuDiemChuan />} />
      <Route path="/pho-diem" element={<PhoDiemThi />} />
      <Route path="/goi-y-nguyen-vong" element={<GoiYNguyenVong />} />
    </Routes>
  );
}

export default AppRoutes;
