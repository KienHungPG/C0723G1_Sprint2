import React from "react";
import Layout from "../../Layout/layout";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Grid, Input, TextareaAutosize } from "@mui/material";
import Cart from "../Cart/Cart";
function CartComponent() {
  return (
    <div>
      <Layout>
        <MDBContainer className="my-5">
          <MDBRow xs={6} md={6}>
            <MDBCol>
              <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={11} className="my-2">
                  <Input
                    placeholder="Tên Khách hàng"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid xs={5} className="my-3">
                  <Input placeholder="Email" style={{ width: "100%" }} />
                </Grid>
                <Grid xs={6} className="my-3 ms-2">
                  <Input placeholder="SĐT" style={{ width: "100%" }} />
                </Grid>
                <Grid xs={11} className="my-3">
                  <Input placeholder="Địa chỉ" style={{ width: "100%" }} />
                </Grid>
                <Grid xs={11} className="my-3">
                  <TextareaAutosize
                    minRows={2}
                    placeholder=" Ghi chú "
                    style={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </MDBCol>
            <MDBCol>
              <Cart></Cart>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </div>
  );
}

export default CartComponent;
