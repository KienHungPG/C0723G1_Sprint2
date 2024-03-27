import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

export default function ReviewPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Guess Dragon Black Analog Watch 44MM",
      price: 799,
      quantity: 1,
    },
    // Thêm sản phẩm mới vào đây
    {
      id: 2,
      name: "New Product",
      price: 999,
      quantity: 2,
    },
    {
      id: 3,
      name: "Guess Dragon Black Analog Watch 44MM",
      price: 777,
      quantity: 1,
    }
  ]);

  // Hàm để tăng số lượng của một sản phẩm trong giỏ hàng
  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Hàm để giảm số lượng của một sản phẩm trong giỏ hàng
// Hàm để giảm số lượng của một sản phẩm trong giỏ hàng
const decreaseQuantity = (productId) => {
  const updatedCart = cart.map((item) => {
    if (item.id === productId) {
      const newQuantity = item.quantity - 1;
      
      if (item.quantity === 1) {
        console.log("a");
        // Nếu số lượng sản phẩm giảm về 0, thì xóa sản phẩm ra khỏi giỏ hàng
        removeFromCart(productId);
      } else {
        return { ...item, quantity: newQuantity };
      }
    }
    return item;
  });
  setCart(updatedCart.filter(item => item !== null)); // Lọc bỏ các phần tử null nếu có
};


  // Hàm để xóa một sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Tính tổng tiền trong giỏ hàng
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <section  style={{ backgroundColor: "#fdccbc" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <p>
              <span className="h2">Giỏ hàng </span>
              <span className="h4">({cart.length} sản phẩm trong giỏ)</span>
            </p>

            {cart.map((item) => (
              <MDBCard key={item.id} className="mb-4">
                <MDBCardBody className="p-4">
                  <MDBRow className="align-items-center">
                    <MDBCol md="2">
                      <MDBCardImage
                        fluid
                        src="https://hammeronline.in/cdn/shop/files/Hammerglidebluetoothcallingsmartwatch_1.webp?v=1694851875"
                        alt="Generic placeholder image"
                      />
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Name</p>
                        <p className="lead fw-normal mb-0">{item.name}</p>
                      </div>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">MSP</p>
                        <p className="lead fw-normal mb-0">{item.id}</p>
                      </div>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Quantity</p>
                        <div className="d-flex align-items-center">
                          <MDBBtn
                            color="light"
                            size="sm"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </MDBBtn>
                          <p className="lead fw-normal mb-0 mx-2">
                            {item.quantity}
                          </p>
                          <MDBBtn
                            color="light"
                            size="sm"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </MDBBtn>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Price</p>
                        <p className="lead fw-normal mb-0">${item.price}</p>
                      </div>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Total</p>
                        <p className="lead fw-normal mb-0">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            ))}

            <MDBCard className="mb-5">
              <MDBCardBody className="p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Tổng tiền:</span>
                    <span className="lead fw-normal">${totalPrice}</span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>

            <div className="d-flex justify-content-end">
              <MDBBtn color="light" size="lg" className="me-2">
                Tiếp tục mua hàng
              </MDBBtn>
              <MDBBtn size="lg">Thêm vào giỏ hàng</MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
