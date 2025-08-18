
import React, { useState } from "react";
import Layout_TraCuuDiemChuan from "../../layout/Layout_TraCuuDiemChuan";
import ThanhDieuHuong from "../../components/ThanhDieuHuong/ThanhDieuHuong";
import Dropdown from "../../components/Dropdown/Dropdown";
import Loc_nam_tinh from "../../components/Loc_nam_tinh/Loc_nam_tinh";
import Nut from "../../components/Nut/Nut";
import ONhap from "../../components/ONhap/ONhap";
import "./TraCuuDiemChuan.css";

const heOptions = ["Hệ đại học", "Hệ cao đẳng"];


const mockData = [];

const TraCuuDiemChuan = () => {
	const [he, setHe] = useState(heOptions[0]);
		const [tinhThanh, setTinhThanh] = useState("");
		const [nam, setNam] = useState("");
	const [truong, setTruong] = useState("");
	const [data, setData] = useState(mockData);

	const handleSearch = () => {
		// TODO: fetch/filter data theo các trường đã chọn
		// setData(...)
	};

	return (
		<Layout_TraCuuDiemChuan>
			<ThanhDieuHuong />
			<div className="tra-cuu-diem-chuan-container">
				<div className="tra-cuu-header">
					<h2>Tra cứu điểm chuẩn CĐ - ĐH</h2>
				</div>
				<div className="tra-cuu-controls">
					<Dropdown options={heOptions} value={he} onChange={setHe} />
					<ONhap
						placeholder="Nhập mã trường/ tên trường"
						value={truong}
						onChange={e => setTruong(e.target.value)}
					/>
					<Nut label="Tìm kiếm" onClick={handleSearch} />
				</div>
						<div className="tra-cuu-filters">
							<Loc_nam_tinh tinhThanh={tinhThanh} setTinhThanh={setTinhThanh} nam={nam} setNam={setNam} />
						</div>
				<div className="tra-cuu-table-wrapper">
					<table className="tra-cuu-table">
						<thead>
							<tr>
								<th>STT</th>
								<th>Ngành</th>
								<th>Điểm chuẩn</th>
								<th>Hệ</th>
								<th>Khối thi</th>
								<th>Ghi chú</th>
							</tr>
						</thead>
						<tbody>
							{data.length === 0 ? (
								<tr>
									<td colSpan="6" style={{ textAlign: "center", color: "#888" }}>
										Không có dữ liệu
									</td>
								</tr>
							) : (
								data.map((row, idx) => (
									<tr key={idx}>
										<td>{idx + 1}</td>
										<td>{row.nganh}</td>
										<td>{row.diemChuan}</td>
										<td>{row.he}</td>
										<td>{row.khoiThi}</td>
										<td>{row.ghiChu}</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
		</Layout_TraCuuDiemChuan>
	);
};

export default TraCuuDiemChuan;
