import React from "react";
import Layout from "../../Layout/layout";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Grid, Input } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize"; // Import TextareaAutosize from @mui/material
import Cart from "../Cart/Cart";

function CartComponent() {
  return (
    <div>
      <Layout>
        <MDBContainer className="my-5">
          <MDBRow>
            <MDBCol>
              <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid item xs={12} sm={6} md={4} className="my-2">
                  <Input
                    placeholder="Tên Khách hàng"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className="my-3">
                  <Input placeholder="Email" style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className="my-3">
                  <Input placeholder="SĐT" style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={12} className="my-3">
                  <Input placeholder="Địa chỉ" style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={12} className="my-3">
                  <TextareaAutosize
                    minRows={2}
                    placeholder="Ghi chú"
                    style={{ width: "100%", resize: "none" }}
                  />
                </Grid>
              </Grid>
            </MDBCol>
            <MDBCol>
              <Cart />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </div>
  );
}

export default CartComponent;
