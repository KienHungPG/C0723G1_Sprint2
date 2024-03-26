import React, { useState } from "react";
import Layout from "../../Layout/layout";
import "./index.css";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import RatingComponent from "../rating";
 
function DetailsProduct() {
  const product = {
    name: "Product 1",
    images: [
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ultra-band-unselect-gallery-1-202309_GEO_VN_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=1693544672916", // Large image
      "https://cdn.hoanghamobile.com/i/preview/Uploads/2024/01/08/dong-ho-redmi-watch-4-chinh-hang-5.png", // Thumbnail 1
      "https://media.gq-magazine.co.uk/photos/642ec00d8b7ee0dbcaa09496/1:1/w_1080,h_1080,c_limit/WatchBrandsHP.jpg", // Thumbnail 2
      "https://hammeronline.in/cdn/shop/files/Hammerglidebluetoothcallingsmartwatch_1.webp?v=1694851875", // Thumbnail 3
    ],
    price: "$59.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi vitae atque exercitationem ut tempore beatae odio fugit velit, laboriosam unde ipsa aspernatur minus rerum alias soluta laudantium asperiores. Ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi vitae atque exercitationem ut tempore beatae odio fugit velit, laboriosam unde ipsa aspernatur minus rerum alias soluta laudantium asperiores. Ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi vitae atque exercitationem ut tempore beatae odio fugit velit, laboriosam unde ipsa aspernatur minus rerum alias soluta laudantium asperiores. Ducimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi vitae atque exercitationem ut tempore beatae odio fugit velit, laboriosam unde ipsa aspernatur minus rerum alias soluta laudantium asperiores. Ducimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi vitae atque exercitationem ut tempore beatae odio fugit velit, laboriosam unde ipsa aspernatur minus rerum alias soluta laudantium asperiores. Ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi vitae atque exercitationem ut tempore beatae odio fugit velit, laboriosam unde ipsa aspernatur minus rerum alias soluta laudantium asperiores. Ducimus?",
  };
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };
  return (
    <Layout>
      <MDBContainer>
        <MDBRow className="product-detail-container">
          <MDBCol xs={12} md={6}>
            <div className="product-thumbnail">
              <img src={currentImage} alt={product.name} />
            </div>
            <div className="image-list">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={product.name}
                  onClick={() => handleThumbnailClick(image)}
                />
              ))}
            </div>
          </MDBCol>
          <MDBCol xs={12} md={6}>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
              <p>
                <strong>Description:</strong> {product.description}
              </p>
              <Button
                variant="outlined"
                size="lg"
                style={{ width: "100%", borderColor: "#393939" }}
                className="rounded-pill"
              >
                Đặt hàng ngay
              </Button>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol xs={12} md={12}>
            <h1>Watch Details</h1>
            <div class="container-table">
              <div class="property">
                <span class="section-title">Bộ sưu tập:</span>
                <span>- Chưa phân loại -</span>
              </div>
              <div class="property">
                <span class="section-title">Giới tính:</span>
                <span>Nam</span>
              </div>
              <div class="property">
                <span class="section-title">Đường kính:</span>
                <span>44mm</span>
              </div>
              <div class="property">
                <span class="section-title">Mã sản phẩm:</span>
                <span>104633</span>
              </div>
              <div class="property">
                <span class="section-title">Loại máy:</span>
                <span>Quartz</span>
              </div>
              <div class="property">
                <span class="section-title">Màu sắc:</span>
                <span>Black</span>
              </div>
              <div class="property">
                <span class="section-title">Phong cách:</span>
                <span>- Chưa phân loại -</span>
              </div>
              <div class="property">
                <span class="section-title">Chất liệu dây:</span>
                <span>Silicone</span>
              </div>
              <div class="property">
                <span class="section-title">Tính năng:</span>
                <span>- Chưa phân loại -</span>
              </div>
              <div class="property">
                <span class="section-title">Độ chịu nước:</span>
                <span>5 ATM</span>
              </div>
            </div>
          </MDBCol>
          
        </MDBRow>
        <MDBCol xs={12} md={6}>
            <RatingComponent/>
          </MDBCol>
      </MDBContainer>
    </Layout>
  );
}

export default DetailsProduct;
