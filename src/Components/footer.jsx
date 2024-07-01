import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  AiOutlineMail,
  AiOutlineAppstoreAdd,
  AiOutlineWhatsApp,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import Aos from "aos";

export const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div>
      <div className="margin-top me-0">
        <MDBFooter className="text-white text-center text-lg-left all-bg-green">
          <MDBContainer className="p-4">
            <MDBRow className="gap-3">
              <MDBCol lg="6" md="12" className="mb-2 text-start">
                <h5 className="text-uppercase fs-2 fw-bold">
                  India's largest and highest rated hospital network
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing <br />{" "}
                  elit. Iste atque ea quis molestias.
                </p>
              </MDBCol>

              <MDBCol
                lg="2"
                md="6"
                className="mb-2"
                style={{ textAlign: "justify" }}
              >
                <div>
                  <h5 className="text-uppercase mb-4 fw-bold">Quick Links</h5>
                  <ul className="list-unstyled ">
                    <li>
                      <a href="/doctors" className="text-white">
                        <AiOutlineArrowRight /> Doctors
                      </a>
                    </li>
                    <li>
                      <a href="/Blog_Details" className="text-white">
                        <AiOutlineArrowRight /> Blog
                      </a>
                    </li>
                    <li>
                      <a href="/service" className="text-white">
                        <AiOutlineArrowRight /> Services
                      </a>
                    </li>
                    <li>
                      <a href="/departments" className="text-white">
                        <AiOutlineArrowRight /> Department
                      </a>
                    </li>
                    <li>
                      <a href="/gallery" className="text-white">
                        <AiOutlineArrowRight /> Gallery
                      </a>
                    </li>
                    <li>
                      <a href="/diagnostic" className="text-white">
                        <AiOutlineArrowRight /> Lab
                      </a>
                    </li>
                    <li>
                      <a href="/pharmacy" className="text-white">
                        <AiOutlineArrowRight /> Pharmacy
                      </a>
                    </li>
                  </ul>
                </div>
              </MDBCol>

              <MDBCol
                lg="3"
                md="6"
                className="mb-2 mb-md-0"
                style={{ textAlign: "justify" }}
              >
                <h5 className="text-uppercase mb-4 fw-bold">Contact</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/contact" className="text-white">
                      <AiOutlineMail
                        style={{ fontSize: "25px", marginRight: "10px" }}
                      />{" "}
                      example@example.com
                    </a>
                  </li>

                  <li className="mb-2">
                    <a href="/contact" className="text-white d-flex">
                      <CiLocationOn
                        style={{ fontSize: "25px", marginRight: "10px" }}
                      />
                      <p>
                        Singapoor layout <br />
                        pincode 110011 .
                      </p>
                    </a>
                  </li>

                  {/* <li className="mb-2">
                    <a href="#!" className="text-white">
                      <AiOutlineAppstoreAdd
                        style={{ fontSize: "25px", marginRight: "10px" }}
                      />{" "}
                      Appoinment
                    </a>
                  </li> */}

                  <li className="mb-2">
                    <a href="/contact" className="text-white">
                      <AiOutlineWhatsApp
                        style={{ fontSize: "25px", marginRight: "10px" }}
                      />{" "}
                      Contacts number
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="p-4 pb-0">
            <section className="mb-4">
              <h3 className="text-center fw-semibold">Follow Us On</h3>
              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="#!"
                role="button"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <MDBIcon fab icon="google" />
              </MDBBtn>
              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="#!"
                role="button"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>

              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="#!"
                role="button"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>

              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#333333" }}
                href="#!"
                role="button"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a className="text-white" href="https://Hospital.com/">
              Hospital.com
            </a>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};
