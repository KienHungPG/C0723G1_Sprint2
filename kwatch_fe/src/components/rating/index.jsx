import * as React from "react";

import "./index.css";

import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

export default function RatingComponent() {
  return (
    <div className="container-review">
      <MDBContainer>
        <MDBRow>
          <MDBCol  xs={12} md={12}>
            <div class="comment-form">
              <h4 class="mb-15">Leave a Review </h4>
              <div class="product-rate d-inline-block mb-30"></div>
              <div class="row">
                <div class="col-lg-8 col-md-12">
                  <form
                    class="form-contact comment_form"
                    action="#"
                    id="commentForm"
                  >
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <textarea
                            class="form-control w-100"
                            name="comment"
                            id="comment"
                            cols="30"
                            rows="9"
                            placeholder="Write Comment"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            class="form-control"
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            class="form-control"
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <input
                            class="form-control"
                            name="website"
                            id="website"
                            type="text"
                            placeholder="Website"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="button button-contactForm">
                        Post Comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
