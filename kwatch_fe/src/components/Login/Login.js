import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "../Login/Login.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "../Footer/Footer";
import Headerz from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function Login() {
  return (
    <>
      <Headerz />
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phone image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Tên đăng nhập"
              id="formControlLg"
              type="text"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Mật khẩu"
              id="formControlLg"
              type="password"
              size="lg"
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Quên mật khẩu"
              />
              <a href="!#">Quên mật khẩu?</a>
            </div>

            <MDBBtn className="mb-4 w-100" size="lg">
              Đăng nhập
            </MDBBtn>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Hoặc</p>
            </div>
            <MDBBtn
              className="mb-2 w-100"
              size="lg"
              style={{ backgroundColor: "#dd4b39" }}
            >
              <MDBIcon fab icon="google" className="mx-2" />
              Đăng nhập với google
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
}
