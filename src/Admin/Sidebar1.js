import React, { useState } from "react";
import "./Adminpanel.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";

export default function Sidebar1() {
  const navigate = useNavigate();
  const admin = JSON.parse(sessionStorage.getItem("adminDetails"));

  const [DoctorM, setDoctorM] = useState(false);
  const [PatientM, setPatientM] = useState(false);
  const [PatientR, setPatientR] = useState(false);
  const [LabM, setLabM] = useState(false);
  const [SerM, setSerM] = useState(false);
  const [PharM, setPharM] = useState(false);
  const [Ecom, setEcom] = useState(false);
  const [Vendor, setVendor] = useState(false);
  const [Pharmacy, setPharmacy] = useState(false);
  const [HosM, setHosM] = useState(false);
  const [BedM, setBedM] = useState(false);
  const [surgery, setsurgery] = useState(false);

  function logoutAdmin() {
    sessionStorage.removeItem("adminDetails");
    navigate("/admin");
  }

  return (
    <div
      className="sidebar"
      style={{ overflowY: "scroll", maxHeight: "550px" }}
    >
      <>
        <h6
          className="sidebarItem"
          onClick={() => navigate("/admin/dashboard")}
        >
          Dashboard
        </h6>

        {admin?.subadmin === true ? (
          <h6
            className="sidebarItem"
            onClick={() => navigate("/admin/subadmin")}
          >
            {" "}
            Subadmin
          </h6>
        ) : null}

        {admin?.doctorManagement === true ? (
          <>
            <h6 className="sidebarItem" onClick={() => setDoctorM(!DoctorM)}>
              Doctor management{" "}
              {DoctorM ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h6>
            <div
              style={{
                display: DoctorM ? "block" : "none",
                backgroundColor: "#d0f7f4",
              }}
            >
              <h6
                className="sidebarItem1"
                onClick={() => navigate("/admin/Hospitaldoctors")}
              >
                Hospital doctors
              </h6>
              <h6
                className="sidebarItem1"
                onClick={() => navigate("/admin/Clinicaldoctors")}
              >
                Clinical doctors
              </h6>
              <Link to={"/admin/referfromclinicpatientlist"}>
                <h6 className="sidebarItem1">Refer Patient List</h6>
              </Link>
            </div>
          </>
        ) : null}

        {/* {admin?.staffManagement === true ? (
          <h6
            className="sidebarItem"
            onClick={() =>
              navigate("/admin/Staffmanagementdashboard")
            }
          >
            Staff management
          </h6>
        ) : null} */}

        {admin?.patientManagement === true ? (
          <>
            <h6 className="sidebarItem" onClick={() => setPatientM(!PatientM)}>
              Patient management{" "}
              {PatientM ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h6>
            <div
              style={{
                display: PatientM ? "block" : "none",
                backgroundColor: "#d0f7f4",
              }}
            >
              <Link to="/admin/ipdpatientlist">
                <h6 className="sidebarItem1">IPD Patient List</h6>
              </Link>
            </div>
          </>
        ) : null}

        {admin?.PatientReceptionist === true ? (
          <>
            <h6 className="sidebarItem" onClick={() => setPatientR(!PatientR)}>
              Patient Receptionist{" "}
              {PatientR ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h6>
            <div
              style={{
                display: PatientR ? "block" : "none",
                backgroundColor: "#d0f7f4",
              }}
            >
              <h6
                className="sidebarItem1"
                onClick={() => navigate("/admin/opdtoipd")}
              >
                OPD TO IPD
              </h6>
              <h6
                className="sidebarItem1"
                onClick={() => navigate("/admin/Inpatientlist")}
              >
                In-patient list
              </h6>
              <h6
                className="sidebarItem1"
                onClick={() => navigate("/admin/Outpatientlist")}
              >
                Out-patient list
              </h6>
            </div>
          </>
        ) : null}

        {admin?.docAppointment === true ? (
          <h6
            className="sidebarItem"
            onClick={() => navigate("/admin/DoctorsAppointment")}
          >
            Appointment
          </h6>
        ) : null}

        {admin?.labManagement === true ? (
          <h6 className="sidebarItem" onClick={() => setLabM(!LabM)}>
            Lab management {LabM ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h6>
        ) : null}

        <div
          style={{
            display: LabM ? "block" : "none",
            backgroundColor: "#d0f7f4",
          }}
        >
          <h6
            className="sidebarItem1"
            onClick={() => navigate("/admin/HospitalLabPanel")}
          >
            Hospital lab
          </h6>
          <h6
            className="sidebarItem1"
            onClick={() => navigate("/admin/ClinicalLabPanel")}
          >
            Clinical lab
          </h6>

          <h6
            className="sidebarItem1"
            onClick={() => navigate("/admin/LabVendor")}
          >
            Create Vendor
          </h6>
          <h6
            className="sidebarItem1"
            onClick={() => navigate("/admin/Labvendorproducts")}
          >
            Vendor Products
          </h6>
          <Link to="/admin/LaborderHistory">
            <h6
              className="sidebarItem1"
              // onClick={() => navigate("/admin/LaborderHistory")}
            >
              Purchase Order History
            </h6>
          </Link>

          <Link to="/admin/LabInventory">
            <h6 className="sidebarItem1">Lab Inventory</h6>
          </Link>
        </div>

        {admin?.labReceptionist ? (
          <Link to="/admin/HospitalLabRecepPanel">
            <h6 className="sidebarItem">Lab Receptionist</h6>
          </Link>
        ) : null}

        {admin?.labSampleCollector ? (
          <Link to="/admin/HospitalLabSampleCollector">
            <h6 className="sidebarItem">Lab Sample Collector</h6>
          </Link>
        ) : null}

        {admin?.labTechnician === true ? (
          <Link to="/admin/HospitalLabtechnician">
            <h6 className="sidebarItem">Lab Technician</h6>
          </Link>
        ) : null}

        {admin?.pharmacyManagement === true ? (
          <h6 className="sidebarItem" onClick={() => setPharM(!PharM)}>
            Pharmacy management {PharM ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h6>
        ) : null}

        <div
          style={{
            display: PharM ? "block" : "none",
            backgroundColor: "#d0f7f4",
          }}
        >
          <Link to={"/admin/AddProductCategory"}>
            <h6 className="sidebarItem1">Add Product Category</h6>
          </Link>

          <Link to={"/admin/ProductBrands"}>
            <h6 className="sidebarItem1">Add Brands</h6>
          </Link>

          <Link to={"/admin/addinventory"}>
            <h6 className="sidebarItem1">Inventory</h6>
          </Link>
        </div>
        <h6 className="sidebarItem" onClick={() => setEcom(!Ecom)}>
          E-Commerce Pharmacy {Ecom ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h6>
        <div
          style={{
            display: Ecom ? "block" : "none",
            backgroundColor: "#d0f7f4",
          }}
        >
          <Link to="/admin/PharmacyWebUser">
            <h6 className="sidebarItem1">Customer's</h6>
          </Link>
          <Link to="/admin/ProductCustomerOrders">
            <h6 className="sidebarItem1">Customer Orders</h6>
          </Link>
        </div>
        <h6 className="sidebarItem" onClick={() => setVendor(!Vendor)}>
          Pharmacy Vendor{Vendor ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h6>
        <div
          style={{
            display: Vendor ? "block" : "none",
            backgroundColor: "#d0f7f4",
          }}
        >
          <Link to="/admin/AddVendor">
            <h6 className="sidebarItem1">Create Vendor</h6>
          </Link>
          <Link to="/admin/VendorAddedProduct">
            <h6 className="sidebarItem1">Vendor Added Products</h6>
          </Link>
          <Link to={"/admin/VendorAddedProductsStatus"}>
            <h6 className="sidebarItem1">Purchase Order History</h6>
          </Link>
        </div>
        <h6 className="sidebarItem" onClick={() => setPharmacy(!Pharmacy)}>
          Hospital Pharmacy {Pharmacy ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h6>
        <div
          style={{
            display: Pharmacy ? "block" : "none",
            backgroundColor: "#d0f7f4",
          }}
        >
          <Link to={"/admin/AdminBookProduct"}>
            <h6 className="sidebarItem1">Book Product</h6>
          </Link>
          <Link to={"/admin/Adminorder"}>
            <h6 className="sidebarItem1">Order History</h6>
          </Link>
        </div>

        {admin?.websiteManagement === true ? (
          <Link to={"/admin/Websitemanagement"}>
            <h6 className="sidebarItem">Website management</h6>
          </Link>
        ) : null}

        {/* {admin?.serviceManagement === true ? (
          <h6 className="sidebarItem" onClick={() => setSerM(!SerM)}>
            Service management {SerM ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h6>
        ) : null}
        <div
          style={{
            display: SerM ? "block" : "none",
            backgroundColor: "#d0f7f4",
          }}
        >
          <h6
            className="sidebarItem1"
            onClick={() => navigate("/admin/AddServiceCategory")}
          >
            Add Service Category
          </h6>
          <h6
            className="sidebarItem1"
            onClick={() => navigate("/admin/AddService")}
          >
            Add Service
          </h6>
        </div> */}

        {admin?.hospitalManagement === true ? (
          <h6 className="sidebarItem" onClick={() => setHosM(!HosM)}>
            Hospital management{HosM ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h6>
        ) : null}
        <div
          style={{
            display: HosM ? "block" : "none",
            backgroundColor: "#d0f7f4",
          }}
        >
          <h6
            className="sidebarItem1"
            onClick={() => navigate("/admin/AddHospitalServices")}
          >
            Add hospital Services
          </h6>
          {/* <h6
              className="sidebarItem1"
              onClick={() => navigate("/admin/AddHouseKeeping")}
            >
              Add hospital house keeping
            </h6> */}
          {/* <h6
            className="sidebarItem1"
            onClick={() => navigate("/admin/AddAccesories")}
          >
            Add Accessories
          </h6> */}

          {/* <h6
            className="sidebarItem1"
            onClick={() => navigate("/admin/AddHospitalRooms")}
          >
            Add Rooms
          </h6> */}

          {/* <h6
            className="sidebarItem1"
            onClick={() => navigate("/admin/Adddepartment")}
          >
            Add Department
          </h6> */}
          {/* <h6
            className="sidebarItem1"
            onClick={() => navigate("/admin/Notifications")}
          >
            Notification
          </h6> */}
        </div>

        {admin?.bedManagement === true ? (
          <h6 className="sidebarItem" onClick={() => setsurgery(!surgery)}>
            surgery Management{surgery ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h6>
        ) : null}
        <div
          style={{
            display: surgery ? "block" : "none",
            backgroundColor: "#d0f7f4",
          }}
        >
          <h6
            className="sidebarItem1"
            onClick={() => navigate("/admin/Addsurgey")}
          >
            Add surgery
          </h6>
        </div>

        {admin?.bedManagement === true ? (
          <h6 className="sidebarItem" onClick={() => setBedM(!BedM)}>
            Bed management{BedM ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h6>
        ) : null}
        <div
          style={{
            display: BedM ? "block" : "none",
            backgroundColor: "#d0f7f4",
          }}
        >
          <h6 className="sidebarItem1" onClick={() => navigate("/admin/wards")}>
            Wards
          </h6>
          <h6
            className="sidebarItem1"
            onClick={() => navigate("/admin/Bedmanagement")}
          >
            Bed
          </h6>
        </div>

        {admin?.accounts === true ? (
          <h6
            className="sidebarItem"
            onClick={() => navigate("/admin/Accounts")}
          >
            Accounts
          </h6>
        ) : null}

        {admin?.billing === true ? (
          <h6
            className="sidebarItem"
            onClick={() => navigate("/admin/Billinglist")}
          >
            Billing
          </h6>
        ) : null}

        {admin?.notification === true ? (
          <Link to={"/admin/notificationlist"}>
            <h6 className="sidebarItem">Notification</h6>
          </Link>
        ) : null}
        {admin?.enqAndComplaints === true ? (
          <h6
            className="sidebarItem"
            onClick={() => navigate("/admin/Enquiry")}
          >
            Enquiries & Complaints
          </h6>
        ) : null}

        <h6 className="sidebarItem" onClick={() => logoutAdmin()}>
          Logout
        </h6>
      </>
    </div>
  );
}
