import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Admin/Adminpanel.css";
import {
  faFileInvoice,
  faGear,
  faHouse,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export default function VendorSidebar() {
  const VendorDetails = JSON.parse(sessionStorage.getItem("VendorDetails"));
  console.log("VendorDetails", VendorDetails);
  const Logout = () => {
    sessionStorage.removeItem("VendorDetails");
    window.location.href = "/loginforeveryone";
  };
  const navigate = useNavigate();
  const [Product, setProduct] = useState(false);
  return (
    <div className="sidebar">
      <Navbar.Brand>
        <img
          style={{ width: "40px", height: "40px", marginLeft: "40px" }}
          className="logo me-2 "
          src="./img/logo.jpg"
          alt="Logo"
        />{" "}
        <span className="fw-bold fs-4" style={{ color: "rgb(32 139 140)" }}>
          JANANI
        </span>
      </Navbar.Brand>
      <div className=" text-center m-3 ms-4">
        <img
          // src="./img/admin-doctors-list-3.jpg"
          src={`http://localhost:8521/Vendor/${VendorDetails?.profilePic}`}
          alt=""
          style={{ width: "70px", height: "70px", borderRadius: "30%" }}
        />
        <p className="fs-4 fw-bold" style={{ color: "rgb(32 139 140)" }}>
          {`${VendorDetails?.fname} ${VendorDetails?.lname}`}
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "rgb(32 139 140)",
          }}
        >
          Vendor
        </p>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "rgb(32 139 140)",
          }}
        >
          ID : {VendorDetails?.vendorId}
        </p>
      </div>

      <h6
        className="sidebarItem"
        onClick={(e) => window.location.assign("/vendordashboard")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faHouse}
          style={{ color: "", marginRight: "7px" }}
        />
        Vendor Dashboard
      </h6>

      {/* product  */}

      <h6 className="sidebarItem" onClick={() => setProduct(!Product)}>
        <FontAwesomeIcon
          icon={faFileInvoice}
          style={{ marginRight: "5px", fontSize: "15px" }}
        />
        Products
        {Product ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6>

      <div
        style={{
          display: Product ? "block" : "none",
          backgroundColor: "#d0f7f4",
        }}
      >
        <h6
          className="sidebarItem1"
          onClick={() => navigate("/vendorproducttype")}
        >
          Product Type
        </h6>
        <h6
          className="sidebarItem1"
          onClick={() => navigate("/VendorAddProducts")}
        >
          Add Product
        </h6>
      </div>
      <Link to={"/vendorOrders"}>
        <h6
          className="sidebarItem"
          // onClick={() => window.location.assign("/vendorOrders")}
        >
          <FontAwesomeIcon
            icon={faFileInvoice}
            style={{ marginRight: "5px", fontSize: "15px" }}
          />
          Admin Ordered List
        </h6>
      </Link>

      {/* <Link to={"/productstatus"}>
        <h6 className="sidebarItem">
          <FontAwesomeIcon
            icon={faFileInvoice}
            style={{ marginRight: "5px", fontSize: "15px" }}
          />
          Product Status
        </h6>
      </Link> */}

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/vendorsettings")}
      >
        {" "}
        <FontAwesomeIcon
          icon={faGear}
          style={{ color: "", marginRight: "5px" }}
        />
        Settings
      </h6>

      <h6
        className="sidebarItem"
        // onClick={() => window.location.assign("/loginforeveryone")}
        onClick={() => Logout()}
      >
        {" "}
        <FontAwesomeIcon
          icon={faPowerOff}
          style={{ color: "", marginRight: "5px" }}
        />
        Logout
      </h6>
    </div>
  );
}
