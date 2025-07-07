import React from "react";

export default function SearchBar_CaoDang_DaiHoc({
  heDaoTao,
  setHeDaoTao,
  keyword,
  setKeyword,
  onSearch,
}) {
  return (
    <div className="search-bar">
      <select value={heDaoTao} onChange={(e) => setHeDaoTao(e.target.value)}>
        <option>Hệ đại học</option>
        <option>Hệ cao đẳng</option>
      </select>

      <input
        type="text"
        placeholder="Nhập mã trường/ tên trường"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button onClick={onSearch}>Tìm kiếm</button>
    </div>
  );
}
