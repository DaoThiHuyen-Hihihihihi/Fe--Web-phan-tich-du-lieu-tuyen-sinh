import React from "react";
import { Routes, Route } from "react-router-dom";

import TrangChu from "../pages/TrangChu/TrangChu";
import TraCuuDiemThi from "../pages/TraCuuDiemThi/TraCuuDiemThi";
import TraCuuDiemChuan from "../pages/TraCuuDiemChuan/TraCuuDiemChuan";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TrangChu />} />
      <Route path="/tra-cuu" element={<TraCuuDiemThi />} />
      <Route path="/diem-chuan" element={<TraCuuDiemChuan />} />
    </Routes>
  );
}

export default AppRoutes;
