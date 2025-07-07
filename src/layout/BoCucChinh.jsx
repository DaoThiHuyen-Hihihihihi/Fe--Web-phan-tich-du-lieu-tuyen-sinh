import React from "react";
import ThanhDieuHuong from "../components/ThanhDieuHuong/ThanhDieuHuong";
const BoCucChinh = ({ children }) => {
  return (
    <>
      <ThanhDieuHuong />
      <main>{children}</main>
    </>
  );
};

export default BoCucChinh;
