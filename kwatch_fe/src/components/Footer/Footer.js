// import React from 'react';
// import styles from './Footer.module.css'; // Import CSS module

// const Footer = () => {
//   return (
//     <footer className={`${styles.footer} pt-5 ${styles.border__footer}`}>
//       <div className="container">
//         <div className="row pt-2">
//           <div className="col-sm-12 col-md-3">
//             <div className={styles['col-detail']}>
//               <h5>Liên lạc</h5>
//               <ul>
//                 <li><a href=''>Câu hỏi thường gặp</a></li>
//                 <li><a href=''>Gửi phản hồi cho chúng tôi</a></li>
//                 <li><a href=''>Liên lạc</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-sm-12 col-md-3">
//             <div className={styles['col-detail']}>
//               <h5>Thông tin cửa hàng</h5>
//               <ul>
//                 <li><a href=''>Về chúng tôi</a></li>
//                 <li><a href=''>Tìm kiếm</a></li>
//                 <li><a href=''>Lịch trình</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-sm-12 col-md-3">
//             <div className={styles['col-detail']}>
//               <h5>Thủ tục pháp lý</h5>
//               <ul>
//                 <li><a href=''>Điều khoảng &amp; điều kiện</a></li>
//                 <li><a href=''>Chính sách bảo mật</a></li>
//                 <li><a href=''>Chính sách pháp lý</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-sm-12 col-md-3">
//             <div className={styles['col-detail']}>
//               <h5>Kết nối với chúng tôi</h5>
//               <ul>
//                 <li><a href=''><i className="fab fa-facebook-f" /><span className="px-3">Facebook</span></a></li>
//                 <li><a href=''><i className="fab fa-twitter" /><span className="px-3">Twitter</span></a></li>
//                 <li><a href=''><i className="fab fa-google-plus-g" /><span className="px-3">Google</span></a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
