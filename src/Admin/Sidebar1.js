import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./Adminpanel.css";
import { RxDashboard } from "react-icons/rx";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Sidebar1() {
  const Subadmin = JSON.parse(sessionStorage.getItem("Subadmin"));
  console.log(Subadmin, "klklklklklkl");

  const [DoctorM, setDoctorM] = useState(false);
  const [PatientM, setPatientM] = useState(false);
  const [LabM, setLabM] = useState(false);
  const [SerM, setSerM] = useState(false);
  const [PharM, setPharM] = useState(false);
  const [HosM, setHosM] = useState(false);
  const [BedM, setBedM] = useState(false);

  const [SelectedItem, setSelectedItem] = useState(1);

  return (
    <div
      className="sidebar"
      style={{ overflowY: "scroll", maxHeight: "550px" }}
    >
      <h6
        className="sidebarItem"
        // style={{ backgroundColor: SelectedItem == 1 ? "#20958c" : "white" }}
        onClick={() => window.location.assign("/")}
      >
        Dashboard
      </h6>
      {Subadmin?.subadmin === true ? (
        <h6
          className="sidebarItem"
          onClick={() => window.location.assign("/admin/subadmin")}
        >
          {" "}
          Subadmin
        </h6>
      ) : null}

      {Subadmin?.doctorManagement === true ? (
        <h6 className="sidebarItem" onClick={() => setDoctorM(!DoctorM)}>
          Doctor management {DoctorM ? <IoIosArrowUp /> : <IoIosArrowDown />}
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

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/admin/Staffmanagement")}
      >
        Staff management
      </h6>
      <h6 className="sidebarItem" onClick={() => setPatientM(!PatientM)}>
        Patient management {PatientM ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
        style={{ display: LabM ? "block" : "none", backgroundColor: "#d0f7f4" }}
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
          onClick={() => window.location.assign("/admin/AddProductCategory")}
        >
          Add Product Category
        </h6>
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/admin/AddProduct")}
        >
          Add Product
        </h6>

        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/admin/ProductOrders")}
        >
          Product Orders
        </h6>

        <h6
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
        </h6>
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
        style={{ display: SerM ? "block" : "none", backgroundColor: "#d0f7f4" }}
      >
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/admin/AddServiceCategory")}
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

      <h6 className="sidebarItem" onClick={() => setHosM(!HosM)}>
        Hospital management{HosM ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6>
      <div
        style={{ display: HosM ? "block" : "none", backgroundColor: "#d0f7f4" }}
      >
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

      <h6 className="sidebarItem" onClick={() => setBedM(!BedM)}>
        Bed management{BedM ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6>
      <div
        style={{ display: BedM ? "block" : "none", backgroundColor: "#d0f7f4" }}
      >
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/admin/GenralWard")}
        >
          Genral Ward
        </h6>
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/admin/LabourWard")}
        >
          Labour Ward
        </h6>
      </div>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/admin/Accounts")}
      >
        Accounts
      </h6>
      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/admin/Enquiry")}
      >
        Enquiries & Complaints
      </h6>
    </div>
  );
}
