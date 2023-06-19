import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

export default function App() {
  const [form, setForm] = useState({});
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };
  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleValidate() {
    const errors = {};
    if (!form.hoten) {
      errors.hoten = "Required";
    }
    if (!form.cmnd) {
      errors.cmnd = "Required";
    } else if (!Number(form.cmnd)) {
      errors.cmnd = "Số CMND là số";
    }
    if (!form.namsinh) {
      errors.namsinh = "Required";
    } else if (form.namsinh <= 1990) {
      errors.namsinh = "Năm sinh lớn hơn 1900";
    }
    else if(!Number(form.namsinh)){
      errors.namsinh="Năm sinh là số"
    }
    if (!form.quoctich) {
      errors.quoctich = "Required";
    }
    if (!form.tinhthanh) {
      errors.tinhthanh = "Required";
    }
    if (!form.quan) {
      errors.quan = "Required";
    }
    if (!form.phuong) {
      errors.phuong = "Required";
    }
    if (!form.sonha) {
      errors.sonha = "Required";
    }
    if (!form.dienthoai) {
      errors.dienthoai = "Required";
    }
    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  }

  function handleSubmit() {
    alert("Add book successfully!!!");
  }

  return (
    <div>
      <h1>Tờ khai y tế</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.hoten ? "custom-input-error" : ""
              }`}
            >
              <label>Họ tên</label>
              <input
                type="text"
                name="hoten"
                value={form.hoten || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.hoten}</p>
            </div>
            <div
              className={`custom-input ${
                errors.cmnd ? "custom-input-error" : ""
              }`}
            >
              <label>Số hộ chiếu / CMND</label>
              <input
                type="text"
                name="cmnd"
                value={form.cmnd || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.cmnd}</p>
            </div>
            <div
              className={`custom-input ${
                errors.namsinh ? "custom-input-error" : ""
              }`}
            >
              <label>Năm sinh</label>
              <input
                type="text"
                name="namsinh"
                value={form.namsinh || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.namsinh}</p>
            </div>
            <div>
              <label className="label-inline">Giới tính</label>
              <input type="radio" name="nam" value="Nam"/>
              <label className="label-inline">Nam</label>
              <input type="radio" name="nu"/>
              <label className="label-inline">Nữ</label>
            </div>
            <div
              className={`custom-input ${
                errors.quoctich ? "custom-input-error" : ""
              }`} style={{marginTop:10}}
            >
              <label>Quốc tịch</label>
              <input
                type="text"
                name="quoctich"
                value={form.quoctich || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.quoctich}</p>
            </div>
            <div
              className={`custom-input ${
                errors.congty ? "custom-input-error" : ""
              }`}
            >
              <label>Công ty làm việc</label>
              <input
                type="text"
                name="congty"
                value={form.congty || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.congty}</p>
            </div>
            <div
              className={`custom-input ${
                errors.bophan ? "custom-input-error" : ""
              }`}
            >
              <label>Bộ phận làm việc</label>
              <input
                type="text"
                name="bophan"
                value={form.bophan || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.bophan}</p>
            </div>
            <div
              className={`custom-input ${
                errors.cotheBHYT ? "custom-input-error" : ""
              }`}
            >
              <label>Có thẻ bảo hiểm y tế</label>
              <input
                type="text"
                name="cotheBHYT"
                value={form.cotheBHYT || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.cotheBHYT}</p>
            </div>
            <div
              className={`custom-input ${
                errors.tinhthanh ? "custom-input-error" : ""
              }`}
            >
              <label>Tỉnh thành</label>
              <input
                type="text"
                name="tinhthanh"
                value={form.tinhthanh || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.tinhthanh}</p>
            </div>
            <div
              className={`custom-input ${
                errors.quan ? "custom-input-error" : ""
              }`}
            >
              <label>Quận/huyện</label>
              <input
                type="text"
                name="quan"
                value={form.quan || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.quan}</p>
            </div>
            <div
              className={`custom-input ${
                errors.phuong ? "custom-input-error" : ""
              }`}
            >
              <label>Phường/xã</label>
              <input
                type="text"
                name="phuong"
                value={form.phuong || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.phuong}</p>
            </div>
            <div
              className={`custom-input ${
                errors.sonha ? "custom-input-error" : ""
              }`}
            >
              <label>Số nhà, phố, tổ dân phố /thôn /đội</label>
              <input
                type="text"
                name="sonha"
                value={form.sonha || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.sonha}</p>
            </div>
            <div
              className={`custom-input ${
                errors.dienthoai ? "custom-input-error" : ""
              }`}
            >
              <label>Điện thoại</label>
              <input
                type="text"
                name="dienthoai"
                value={form.dienthoai || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.dienthoai}</p>
            </div>
            <div
              className={`custom-input ${
                errors.email ? "custom-input-error" : ""
              }`}
            >
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.email}</p>
            </div>
            <h4>Trong vòng 14 ngày qua, Anh/chị có đến quốc gia/vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</h4>
            <textarea style={{resize:"none",width:"100%"}}></textarea>
            <h4>Trong vòng 14 ngày qua, Anh/chị có thấy xuất hiện dấu hiệu nào sau đây không?</h4>
            <input type="checkbox"/><label className="label-inline">Sốt</label><br></br>
            <input type="checkbox"/><label className="label-inline">Ho</label><br></br>
            <input type="checkbox"/><label className="label-inline">Khó thở</label><br></br>
            <input type="checkbox"/><label className="label-inline">Viêm phổi</label><br></br>
            <input type="checkbox"/><label className="label-inline">Đau họng</label><br></br>
            <input type="checkbox"/><label className="label-inline">Mệt mỏi</label><br></br>
            <h4>Trong vòng 14 ngày qua, Anh/chị có tiếp xúc với?</h4>
            <input type="checkbox"/>
            <label className="label-inline">Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label><br></br>
            <input type="checkbox"/>
            <label className="label-inline">Người từ nước có bệnh COVID-19</label><br></br>
            <input type="checkbox"/>
            <label className="label-inline">Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</label><br></br>
            <button type="submit" style={{ marginTop: 10 }}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
