import "react-awesome-slider/dist/styles.css";
import "../Home/Home.css";

import Layout from "../../Layout/layout";

import CustomCarosel from "../custom-component/CustomCarosel";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Drawer, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useState } from "react";
import {  FavoriteBorder, ShoppingBag } from '@mui/icons-material';

function Home() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (inOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(inOpen);
  };
  
  return (
    
    <Layout>
      <MDBRow>
        <MDBCol md="12">
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
            <Link href="#levels" level="title-lg"  className='text-center display-6'>
             Xem thêm
            </Link>
          </MDBCol>
          <MDBCol> </MDBCol>
        </MDBRow>
{/* Button xem thêm ở trang home */}
        <MDBRow>
          <MDBCol></MDBCol>
          <MDBCol size={10} className="text-center  my-5">
            <Button variant="outlined" size="lg" style={{width:'360px' ,borderColor:'#393939',}} className="rounded-pill" onClick={toggleDrawer(true)} > Lọc sản phẩm</Button>
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
            {['Thương hiệu', 'Loại máy', 'Chất liệu dây', 'Màu sắc ','Đường kính', 'Style', 'Tính năng'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Card sx={{ maxWidth: 345 }}>
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
        <Typography variant="body2" >
        MSP: 102561
        </Typography>
        <Typography variant="subtitle2" >
        Fossil BQ2643SET His and Her Men Watch 45 - 34mm
        </Typography>
        <Typography variant="overline" style={{color:'#393939'}}>
        9,560,000 VNĐ
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><FavoriteBorder/></Button>
        <Button size="small"><ShoppingBag/></Button>
      </CardActions>
    </Card>
      </MDBContainer>
    </Layout>
  );
}

export default Home;
