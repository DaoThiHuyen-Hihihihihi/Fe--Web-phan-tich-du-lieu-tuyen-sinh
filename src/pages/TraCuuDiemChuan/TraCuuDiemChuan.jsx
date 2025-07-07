import React, { useState } from "react";
import LayoutTraCuuDiemChuan from "../../layout/Layout_TraCuuDiemChuan";
import SearchBarCaoDangDaiHoc from "../../components/SearchBar_CaoDang_DaiHoc/SearchBar_CaoDang_DaiHoc";
import Locnamtinh from "../../components/Loc_nam_tinh/Loc_nam_tinh";
import KQTraCuuDiemchuan from "../../components/KQTraCuuDiemChuan/KQTraCuuDiemChuan";

export default function TraCuuDiemChuan() {
  const [heDaoTao, setHeDaoTao] = useState("Hệ đại học");
  const [keyword, setKeyword] = useState("");
  const [tinhThanh, setTinhThanh] = useState("");
  const [nam, setNam] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    console.log("Hàm tìm kiếm được gọi!");

    setResults([]);
  };

  return (
    <LayoutTraCuuDiemChuan>
      <SearchBarCaoDangDaiHoc
        heDaoTao={heDaoTao}
        setHeDaoTao={setHeDaoTao}
        keyword={keyword}
        setKeyword={setKeyword}
        onSearch={handleSearch}
      />
      <Locnamtinh
        tinhThanh={tinhThanh}
        setTinhThanh={setTinhThanh}
        nam={nam}
        setNam={setNam}
      />
      <KQTraCuuDiemchuan loading={loading} results={results} />
    </LayoutTraCuuDiemChuan>
  );
}
