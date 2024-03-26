import "react-awesome-slider/dist/styles.css";
import "../Home/Home.css";

import Layout from "../../Layout/layout";

import CustomCarosel from "../custom-component/CustomCarosel";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

import { useState, useEffect } from "react";

import { FavoriteBorder, ShoppingBag } from "@mui/icons-material";
import * as productService from "../../service/ProductService";

function Home() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const formatCurrency = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(inOpen);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await productService.getAllProducts();
      console.log(result.content);
      setProducts(result.content);
      setFilteredProducts(result.content); // Khởi tạo filteredProducts với dữ liệu ban đầu
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const handleFilter = (filterOption) => {
    let sortedProducts = [...products];
    switch (filterOption) {
      case "Giá tăng dần":
        sortedProducts.sort((a, b) => a.productPrice - b.productPrice);
        break;
      case "Giá giảm dần":
        sortedProducts.sort((a, b) => b.productPrice - a.productPrice);
        break;
      case "Tên A-Z":
        sortedProducts.sort((a, b) => a.productName.localeCompare(b.productName));
        break;
      case "Tên Z-A":
        sortedProducts.sort((a, b) => b.productName.localeCompare(a.productName));
        break;
      default:
        sortedProducts = [...products];
        break;
    }
    setFilteredProducts(sortedProducts);
  };
  return (
    <Layout>
      <MDBRow>
        <MDBCol md="12" >
          <CustomCarosel />
        </MDBCol>
      </MDBRow>
      <MDBContainer>
        <MDBRow>
          <MDBCol></MDBCol>
          <MDBCol size={10} className="text-center  my-5">
            <MDBTypography tag="h1">
              ĐỒNG HỒ CẶP ĐÔI CHÍNH HÃNG HẤP DẪN | ĐỒNG HỒ ĐÔI | COUPLE WATCH |
              LUXURY SHOPPING
            </MDBTypography>
          </MDBCol>
          <MDBCol> </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol></MDBCol>
          <MDBCol size={10} className="text-center  my-5">
            <Link
              href="#levels"
              level="title-lg"
              className="text-center display-6"
            >
              Xem thêm
            </Link>
          </MDBCol>
          <MDBCol> </MDBCol>
        </MDBRow>
        {/* Button xem thêm ở trang home */}
        <MDBRow>
          <MDBCol></MDBCol>
          <MDBCol size={10} className="text-center  my-5">
            <Button
              variant="outlined"
              size="lg"
              style={{ width: "360px", borderColor: "#393939" }}
              className="rounded-pill"
              onClick={toggleDrawer(true)}
            >
              Lọc sản phẩm
            </Button>
          </MDBCol>
          <MDBCol> </MDBCol>
        </MDBRow>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {[
                "Giá tăng dần",
                "Giá giảm dần",
                "Tên A-Z",
                "Tên Z-A ",
              ].map((text) => (
                <ListItem key={text}>
                  <ListItemButton onClick={() => handleFilter(text)}>{text}</ListItemButton>

                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        {/* Data  from API: */}
        <div className="row">
          {/* {filteredProducts.map((product) => (
            <Card key={product.productId} sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                src="https://via.placeholder.com/300x200"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Đồng hồ
                </Typography>
                <Typography variant="body2">
                  MSP: {product.productCode}
                </Typography>
                <Typography variant="subtitle2">
                  {product.productName}
                </Typography>
                <Typography variant="overline" style={{ color: "#393939" }}>
                  {formatCurrency(product.productPrice)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <FavoriteBorder />
                </Button>
                <Button size="small">
                  <ShoppingBag />
                </Button>
              </CardActions>
            </Card>
          ))} */}
           {/* <Card key={product.productId} sx={{ maxWidth: 300 }}> */}
           <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                src="https://via.placeholder.com/300x200"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Link to="/details" className="text-decoration-none">Đồng hồ</Link>
                </Typography>
                <Typography variant="body2">
                  {/* MSP: {product.productCode} */} MSP:123123
                </Typography>
                <Typography variant="subtitle2">
                  {/* {product.productName} */}
                </Typography>
                <Typography variant="overline" style={{ color: "#393939" }}>
                  {/* {formatCurrency(product.productPrice)} */} 123123
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <FavoriteBorder />
                </Button>
                <Button size="small">
                  <ShoppingBag />
                </Button>
              </CardActions>
            </Card>
        </div>
      </MDBContainer>
    </Layout>
  );
}

export default Home;
