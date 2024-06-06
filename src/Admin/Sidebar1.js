import React, { useState } from "react";
import "./Adminpanel.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";

export default function Sidebar1() {
  const navigate = useNavigate();
  const Subadmin = JSON.parse(sessionStorage.getItem("Subadmin"));
  const admin = JSON.parse(sessionStorage.getItem("adminDetails"));

  const [DoctorM, setDoctorM] = useState(false);
  const [PatientM, setPatientM] = useState(false);
  const [LabM, setLabM] = useState(false);
  const [SerM, setSerM] = useState(false);
  const [PharM, setPharM] = useState(false);
  const [HosM, setHosM] = useState(false);

  function logoutFn() {
    sessionStorage.removeItem("Subadmin");
    navigate("/subadmin-login");
  }
  function logoutAdmin() {
    sessionStorage.removeItem("adminDetails");
    navigate("/admin");
  }

  return (
    <div
      className="sidebar"
      style={{ overflowY: "scroll", maxHeight: "550px" }}
    >
      {admin ? (
        <>
          <h6
            className="sidebarItem"
            // style={{ backgroundColor: SelectedItem == 1 ? "#20958c" : "white" }}
            onClick={() => window.location.assign("/admin/dashboard")}
          >
            Dashboard
          </h6>

          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/admin/subadmin")}
          >
            {" "}
            Subadmin
          </h6>

          <h6 className="sidebarItem" onClick={() => setDoctorM(!DoctorM)}>
            Doctor management {DoctorM ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h6>

          <div
            style={{
              display: DoctorM ? "block" : "none",
              backgroundColor: "#d0f7f4",
            }}
          >
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Hospitaldoctors")}
            >
              Hospital doctors
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Clinicaldoctors")}
            >
              Clinical doctors
            </h6>
          </div>

          <h6
            className="sidebarItem"
            onClick={() =>
              window.location.assign("/admin/Staffmanagementdashboard")
            }
          >
            Staff management
          </h6>

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
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Inpatientlist")}
            >
              In-patient list
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Outpatientlist")}
            >
              Out-patient list
            </h6>
          </div>

          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/admin/DoctorsAppointment")}
          >
            Doctors appointment
          </h6>

          <h6 className="sidebarItem" onClick={() => setLabM(!LabM)}>
            Lab management {LabM ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h6>

          <div
            style={{
              display: LabM ? "block" : "none",
              backgroundColor: "#d0f7f4",
            }}
          >
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/HospitalLabPanel")}
            >
              Hospital lab
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/ClinicalLabPanel")}
            >
              Clinical lab
            </h6>

            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Packages")}
            >
              Add Lab Packages
            </h6>
          </div>

          <h6 className="sidebarItem" onClick={() => setPharM(!PharM)}>
            Pharmacy management {PharM ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h6>

          <div
            style={{
              display: PharM ? "block" : "none",
              backgroundColor: "#d0f7f4",
            }}
          >
            <h6
              className="sidebarItem1"
              onClick={() =>
                window.location.assign("/admin/AddProductCategory")
              }
            >
              Add Product Category
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/ProductBrands")}
            >
              Add Brands
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/AddVendor")}
            >
              Add Vendor
            </h6>
            {/* v6 */}
            <Link to="/admin/VendorAddedProduct">
              <h6
                className="sidebarItem1"
                // onClick={() => window.location.assign("/admin/VendorAddedProduct")}
              >
                Vendor Added Products
              </h6>
            </Link>

            {/* v6 */}
            <Link to={"/admin/VendorAddedProductsStatus"}>
              <h6
                className="sidebarItem1"
                // onClick={() =>
                //   window.location.assign("/admin/VendorAddedProductsStatus")
                // }
              >
                Create Purchase Order
              </h6>
            </Link>

            {/* <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/ProductOrders")}
            >
              Order History
            </h6> */}
            <h6
              className="sidebarItem1"
              onClick={() =>
                window.location.assign("/admin/ProductCustomerOrders")
              }
            >
              Customer Orders
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/addinventory")}
            >
              Inventory
            </h6>
            <Link to={"/admin/AdminBookProduct"}>
              <h6 className="sidebarItem1">Admin Book Product</h6>
            </Link>
            <Link to={"/admin/Adminorder"}>
              <h6 className="sidebarItem1">Admin Order</h6>
            </Link>

            {/* <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/admin/AddWastageReturn")}
        >
          Add Wastage Return
        </h6>

        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/admin/AddManufacturerReturn")}
        >
          Add Manufacturer Return
        </h6> */}
          </div>
          {/* <h6 className="sidebarItem">Vendor management</h6> */}

          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/admin/Websitemanagement")}
          >
            Website management
          </h6>

          <h6 className="sidebarItem" onClick={() => setSerM(!SerM)}>
            Service management {SerM ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h6>

          <div
            style={{
              display: SerM ? "block" : "none",
              backgroundColor: "#d0f7f4",
            }}
          >
            <h6
              className="sidebarItem1"
              onClick={() =>
                window.location.assign("/admin/AddServiceCategory")
              }
            >
              Add Service Category
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/AddService")}
            >
              Add Service
            </h6>

            {/* <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/RequestedService")}
            >
              Requested Service
            </h6> */}
          </div>

          <h6 className="sidebarItem" onClick={() => setHosM(!HosM)}>
            Hospital management{HosM ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h6>

          <div
            style={{
              display: HosM ? "block" : "none",
              backgroundColor: "#d0f7f4",
            }}
          >
            <h6
              className="sidebarItem1"
              onClick={() =>
                window.location.assign("/admin/AddHospitalServices")
              }
            >
              Add hospital Services
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/AddHouseKeeping")}
            >
              Add hospital house keeping
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/AddAccesories")}
            >
              Add Accessories
            </h6>

            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/AddHospitalRooms")}
            >
              Add Rooms
            </h6>

            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Adddepartment")}
            >
              Add Department
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Notifications")}
            >
              Notification
            </h6>
          </div>

          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/admin/Bedmanagement")}
          >
            Bed management
          </h6>

          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/admin/Accounts")}
          >
            Accounts
          </h6>
          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/admin/Billinglist")}
          >
            Billing
          </h6>

          <h6
            className="sidebarItem"
            onClick={() => window.location.assign("/admin/Enquiry")}
          >
            Enquiries & Complaints
          </h6>

          <h6 className="sidebarItem" onClick={() => logoutAdmin()}>
            Logout
          </h6>
        </>
      ) : (
        <>
          <h6
            className="sidebarItem"
            // style={{ backgroundColor: SelectedItem == 1 ? "#20958c" : "white" }}
            onClick={() => window.location.assign("/admin/dashboard")}
          >
            Dashboard
          </h6>
          {/* {Subadmin?.subadmin === true ? (
            <h6
              className="sidebarItem"
              onClick={() => window.location.assign("/admin/subadmin")}
            >
              {" "}
              Subadmin
            </h6>
          ) : null} */}

          {Subadmin?.doctorManagement === true ? (
            <h6 className="sidebarItem" onClick={() => setDoctorM(!DoctorM)}>
              Doctor management{" "}
              {DoctorM ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h6>
          ) : null}
          <div
            style={{
              display: DoctorM ? "block" : "none",
              backgroundColor: "#d0f7f4",
            }}
          >
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Hospitaldoctors")}
            >
              Hospital doctors
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Clinicaldoctors")}
            >
              Clinical doctors
            </h6>
          </div>

          {Subadmin?.staffManagement === true ? (
            <h6
              className="sidebarItem"
              onClick={() =>
                window.location.assign("/admin/Staffmanagementdashboard")
              }
            >
              Staff management
            </h6>
          ) : null}
          {Subadmin?.patientManagement === true ? (
            <h6 className="sidebarItem" onClick={() => setPatientM(!PatientM)}>
              Patient management{" "}
              {PatientM ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h6>
          ) : null}
          <div
            style={{
              display: PatientM ? "block" : "none",
              backgroundColor: "#d0f7f4",
            }}
          >
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/opdtoipd")}
            >
              OPD TO IPD
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Inpatientlist")}
            >
              In-patient list
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Outpatientlist")}
            >
              Out-patient list
            </h6>
          </div>
          {Subadmin?.docAppointment === true ? (
            <h6
              className="sidebarItem"
              onClick={() =>
                window.location.assign("/admin/DoctorsAppointment")
              }
            >
              Doctors appointment
            </h6>
          ) : null}
          {Subadmin?.labManagement === true ? (
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
              onClick={() => window.location.assign("/admin/HospitalLabPanel")}
            >
              Hospital lab
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/ClinicalLabPanel")}
            >
              Clinical lab
            </h6>

            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Packages")}
            >
              Add Lab Packages
            </h6>
          </div>
          {Subadmin?.pharmacyManagement === true ? (
            <h6 className="sidebarItem" onClick={() => setPharM(!PharM)}>
              Pharmacy management{" "}
              {PharM ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h6>
          ) : null}

          <div
            style={{
              display: PharM ? "block" : "none",
              backgroundColor: "#d0f7f4",
            }}
          >
            <h6
              className="sidebarItem1"
              onClick={() =>
                window.location.assign("/admin/AddProductCategory")
              }
            >
              IPD Patients
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/OPDPharmacy")}
            >
              OPD Patients
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() =>
                window.location.assign("/admin/AddProductCategory")
              }
            >
              Add Product Category
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/ProductBrands")}
            >
              Add Brands
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/AddVendor")}
            >
              Add Vendor
            </h6>

            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/ProductOrders")}
            >
              Order History
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() =>
                window.location.assign("/admin/ProductCustomerOrders")
              }
            >
              Customer Orders
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/AddProduct")}
            >
              Inventory
            </h6>

            {/* <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/admin/AddWastageReturn")}
        >
          Add Wastage Return
        </h6>

        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/admin/AddManufacturerReturn")}
        >
          Add Manufacturer Return
        </h6> */}
          </div>
          {/* <h6 className="sidebarItem">Vendor management</h6> */}
          {Subadmin?.websiteManagement === true ? (
            <h6
              className="sidebarItem"
              onClick={() => window.location.assign("/admin/Websitemanagement")}
            >
              Website management
            </h6>
          ) : null}
          {Subadmin?.serviceManagement === true ? (
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
              onClick={() =>
                window.location.assign("/admin/AddServiceCategory")
              }
            >
              Add Service Category
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/AddService")}
            >
              Add Service
            </h6>

            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/RequestedService")}
            >
              Requested Service
            </h6>
          </div>

          {Subadmin?.hospitalManagement === true ? (
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
              onClick={() =>
                window.location.assign("/admin/AddHospitalServices")
              }
            >
              Add hospital Services
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/AddHouseKeeping")}
            >
              Add hospital house keeping
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/AddAccesories")}
            >
              Add Accessories
            </h6>

            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/AddHospitalRooms")}
            >
              Add Rooms
            </h6>

            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Adddepartment")}
            >
              Add Department
            </h6>
            <h6
              className="sidebarItem1"
              onClick={() => window.location.assign("/admin/Notifications")}
            >
              Notification
            </h6>
          </div>

          {Subadmin?.bedManagement === true ? (
            <h6
              className="sidebarItem"
              onClick={() => window.location.assign("/admin/Bedmanagement")}
            >
              Bed management
            </h6>
          ) : null}

          {Subadmin?.accounts === true ? (
            <h6
              className="sidebarItem"
              onClick={() => window.location.assign("/admin/Accounts")}
            >
              Accounts
            </h6>
          ) : null}
          {Subadmin?.billing === true ? (
            <h6
              className="sidebarItem"
              onClick={() => window.location.assign("/admin/Billinglist")}
            >
              Billing
            </h6>
          ) : null}
          {Subadmin?.enqAndComplaints === true ? (
            <h6
              className="sidebarItem"
              onClick={() => window.location.assign("/admin/Enquiry")}
            >
              Enquiries & Complaints
            </h6>
          ) : null}
          <h6 className="sidebarItem" onClick={logoutFn}>
            Logout
          </h6>
        </>
      )}
    </div>
  );
}
