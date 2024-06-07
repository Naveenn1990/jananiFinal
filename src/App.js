import "./App.css";
import React from "react";
import { ReactDOM } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Components/footer";
import { Header } from "./Components/header";
import { Home } from "./Components/home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Doctors } from "./Components/doctors";
import { Departments } from "./Components/departments";
import Gallery from "./Components/gallery";
import Oldpost from "./Components/oldpost";
import { Service } from "./Components/service";
// import { Event } from './event';
import { Blog } from "./Components/Blog";
import { Schedules } from "./Components/schedules";
import { Pharmacy } from "./Components/WebsitePharmacy/pharmacy";
import { Headerpharmacy } from "./Components/WebsitePharmacy/headerpharmacy";
import { Diagnostic } from "./Components/Diagnostic/diagnostic";
import LabCard from "./Components/Diagnostic/labCard";
import { NephrologistCare } from "./Components/NephrologistCare";
import { Contact } from "./Components/contact";

// doctor portal
import { DoctorDashboard } from "./DoctorsPortal/DoctorDashboard";
import AdminDashboard from "./DoctorsPortal/AdminDashboard";
import { DoctorsList } from "./DoctorsPortal/DoctorsList";
import { PatientsList } from "./DoctorsPortal/PatientsList";
import { DoctorsSettings } from "./DoctorsPortal/DoctorsSettings";
import { DoctorsChat } from "./DoctorsPortal/DoctorsChat";
import { DoctorsCalender } from "./DoctorsPortal/DoctorsCalender";
import { DoctorsContact } from "./DoctorsPortal/DoctorsContact";

// patient Portal
import PatientsCommanDashboard from "./PatientsPortal/PatientsCommanDashboard";
import { Bookappointment } from "./PatientsPortal/Bookappointment";
import { PatientPortal } from "./PatientsPortal/patientPortal";
import { CreateAccount } from "./PatientsPortal/CreateAccount";
import { YourAppointment } from "./PatientsPortal/YourAppointment";
import { Prescription } from "./PatientsPortal/Prescription";
import PatientMedicalRecord from "./PatientsPortal/PatientMedicalRecord";
import { PatientBilling } from "./PatientsPortal/PatientBilling";
import { PatientChat } from "./PatientsPortal/PatientChat";
import { PatientSettings } from "./PatientsPortal/PatientSettings";

// login for doctor/refer doctor/refer lab/pharma store
import { LoginForEveryone } from "./Components/LoginForEveryone";

// PharmaStore
import { PharmacyCommanDashboard } from "./PharmaStore/PharmacyCommanDashboard";
import { MedicineList } from "./PharmaStore/MedicineList";
import { AddMedicine } from "./PharmaStore/AddMedicine";
import { MedicineDetail } from "./PharmaStore/MedicineDetail";
import PatientDashboard from "./PatientsPortal/PatientDashboard";
import { PurchaseOrder } from "./PharmaStore/PurchaseOrder";
import { PurchaseOrderInvoice } from "./PharmaStore/PurchaseOrderInvoice";
import { PurchaseOrderList } from "./PharmaStore/PurchaseOrderList";
import { TodayAppointment } from "./PatientsPortal/TodayAppointment";
import { DownloadInvoice } from "./PharmaStore/DownloadInvoice";
import { GenerateInvoice } from "./PharmaStore/GenerateInvoice";
import { PurchaseEntry } from "./PharmaStore/PurchaseEntry";
import { PharmaStoreDashboard } from "./PharmaStore/PharmaStoreDashboard";
import { WebsiteOreder } from "./PharmaStore/WebsiteOreder";
import { AddWastageReturn } from "./PharmaStore/AddWastageReturn";
import { WastageReturn } from "./PharmaStore/WastageReturn";
import { AddManufacturerReturn } from "./PharmaStore/AddManufacturerReturn";
import { ManufacturerReturn } from "./PharmaStore/ManufacturerReturn";

// refer Doctor
import { ReferDoctorCommanDashboard } from "./ReferDoctor/ReferDoctorCommanDashboard";
import { ReferDoctorDashboard } from "./ReferDoctor/ReferDoctorDashboard";
import { AddPatient } from "./ReferDoctor/AddPatient";
import { ReferDoctorPatientList } from "./ReferDoctor/ReferDoctorPatientList";
import { ReferSettings } from "./ReferDoctor/ReferSettings";
import { ReferDoctorsChat } from "./ReferDoctor/ReferDoctorChat";
import { ReferDoctorsCalender } from "./ReferDoctor/ReferDoctorCaledar";
import { ReferDoctorsContact } from "./ReferDoctor/ReferDoctorContact";
import { PharmacyInvoiceList } from "./PharmaStore/PharmacyInvoiceList";
import { ReferDoctorLabTest } from "./ReferDoctor/ReferDoctorLabTest";
import { ReferDoctorLabTestList } from "./ReferDoctor/ReferDoctorLabTestList";
import { ReferDoctorLabTestReport } from "./ReferDoctor/ReferDoctorLabTestReport";

// refer LAB
import { ReferLabCommanDashboard } from "./ReferLab/ReferLabCommanDashboard";
import { ReferLabAddPatient } from "./ReferLab/ReferLabAddPatient";
import { ReferLabDashboard } from "./ReferLab/ReferLabDashboard";
import { ReferLabCalender } from "./ReferLab/ReferLabCaledar";
import { ReferLabChat } from "./ReferLab/ReferLabChat";
import { ReferLabContact } from "./ReferLab/ReferLabContact";
import { ReferLabTest } from "./ReferLab/ReferLabTest";
import { ReferLabTestList } from "./ReferLab/ReferLabTestList";
import { ReferLabTestReport } from "./ReferLab/ReferLabTestReport";
import { ReferLabPatientList } from "./ReferLab/ReferLabPatientList";
import { ReferLabSettings } from "./ReferLab/ReferLabSettings";

// Staff Portal
import { StaffCommanDashboard } from "./Staff Portal/StaffCommanDashboard";
// import { StaffAttendance } from "./Staff Portal/StaffAttendance";
import { StaffDashboard } from "./Staff Portal/StaffDashboard";
import { StaffOutPatientForm } from "./Staff Portal/StaffOutPatientForm";
import { StaffInPatientForm } from "./Staff Portal/StaffInPatientForm";
import { StaffOutPatientList } from "./Staff Portal/StaffOutPatientList";
import { StaffInPatientList } from "./Staff Portal/StaffInPatientList";
import { StaffBedManagement } from "./Staff Portal/StaffBedManagement";
import { StaffDoctorManagement } from "./Staff Portal/StaffDoctorManagement";
import { StaffDoctorAppointment } from "./Staff Portal/StaffDoctorAppointment";
import { StaffCheckSchedule } from "./Staff Portal/StaffCheckSchedule";
import { StaffRecordManagement } from "./Staff Portal/StaffRecordManagement";
import { DoctorsCaseStudy } from "./DoctorsPortal/DoctorsCaseStudy.1";
import { StaffQuickBill } from "./Staff Portal/StaffQuickBill";
import { StaffBill } from "./Staff Portal/StaffBill";
import { LabCommanDashboard } from "./LabPortal/LabCommanDashboard";
import { LaBAccession } from "./LabPortal/LabAccession";
import { LabTest } from "./LabPortal/LabTest";
import { LabAddTest } from "./LabPortal/LabAddTest";
import { LabPatientProfile } from "./LabPortal/LabPatientProfile";
import { LabAddPatient } from "./LabPortal/LabAddPatient";
import { LabOrder } from "./LabPortal/LabOrder";
import { LabOrderRequest } from "./LabPortal/LabOrderRequest";
import { LabNewOrder } from "./LabPortal/LabNewOrder";
import { LabHomeCollection } from "./LabPortal/LabHomeCollection";
import { LabOutsource } from "./LabPortal/LabOutsource";
import { LabRefOutManagement } from "./LabPortal/LabRefOutManagement";
import { LabQualityControl } from "./LabPortal/LabQualityControl";
import { LabGenerateBarcode } from "./LabPortal/LabGenerateBarcode";
import { LabPrintWork } from "./LabPortal/LabPrintWork";
import { LabCampManagement } from "./LabPortal/LabCampManagement";
import { LabAddNewCamp } from "./LabPortal/LabAddNewCamp";
import { LabDashboard } from "./LabPortal/LabDashboard";
import { Gastroenterology } from "./Components/Diagnostic/gastroenterology";
import { LoginPharmacy } from "./Components/WebsitePharmacy/LoginPharmacy";
import { RegisterPharmacy } from "./Components/WebsitePharmacy/RegisterPharmacy";
import { PharmacyCart } from "./Components/WebsitePharmacy/PharmacyCart";
import { PharmacyWishList } from "./Components/WebsitePharmacy/PharmacyWishList";
import { HeaderDiagnostic } from "./Components/Diagnostic/HeaderDiagnostic";
import { LoginDiagnostic } from "./Components/Diagnostic/LoginDiagnostic";
import { RegisterDiagnostic } from "./Components/Diagnostic/RegisterDiagnostic";
import { DiagnosticCart } from "./Components/Diagnostic/DiagnosticCart";
import { DiagnosticWishList } from "./Components/Diagnostic/DiagnosticWishList";
import { PharmacyCheckOut } from "./Components/WebsitePharmacy/PharmacyCheckOut";
import { PharmacyTrackOrder } from "./Components/WebsitePharmacy/PharmacyTrackOrder";
import { PharmacyViewOrder } from "./Components/WebsitePharmacy/PharmacyViewOrder";
import { PharmacyOrderInvoice } from "./Components/WebsitePharmacy/PharmacyOrderInvoice";
import { PharmacyMyProfile } from "./Components/WebsitePharmacy/PharmacyMyProfile";
import { DiagnosticCheckOut } from "./Components/Diagnostic/DiagnosticCheckOut";
import { DiagnosticTrackOrder } from "./Components/Diagnostic/DiagnosticTrackOrder";
import { DiagnosticViewOrder } from "./Components/Diagnostic/DiagnosticViewOrder";
import { DiagnosticOrderInvoice } from "./Components/Diagnostic/DiagnosticOrderInvoice";
import { DiagnosticMyProfile } from "./Components/Diagnostic/DiagnosticMyProfile";
import { FourNotFour } from "./Components/FourNotFour";
import PageLoader from "./Components/PageLoder/PageLoader";
import { VendorCommanDashboard } from "./Vendor/VendorCommondashboard";
import { VendorDashboard } from "./Vendor/Vendordashboard";
import { VendorSettings } from "./Vendor/VendorSettings";
import { VendorAddProducts } from "./Vendor/VendorAddProduct";
import { AddProduct } from "./Vendor/AddProduct";
import { VendorOrders } from "./Vendor/VendorOrders";
import Pharmacydescription from "./Components/WebsitePharmacy/Pharmacydescription";
import { ServiceDetails } from "./Components/ServiceDetails";
import { BlogDetails } from "./Components/BlogDetails";
import { DepartmentDetails } from "./Components/DepartmentDetails";
import DoctorDetails from "./Components/DoctorDetails";
import PatientProfile from "./PatientsPortal/PatientProfile";
import HealthPack from "./Components/Diagnostic/HealthPack";
import PatientConsentForms from "./PatientsPortal/PatientConsentForms";
import PharmacyProducts from "./Components/WebsitePharmacy/PharmacyProducts";
import DoctorForms from "./DoctorsPortal/DoctorForms";
import PatientReport from "./DoctorsPortal/PatientReport";
import DoctorsViewForms from "./DoctorsPortal/DoctorsViewForms";
import PatientAdmissionForm from "./PatientsPortal/PatientAdmissionForm";
import AdminLogin from "./Admin/AdminLogin";
import PageLoaderA from "./Admin/PageloaderA";
import Adminpanel from "./Admin/Adminpanel";
import Dashboard from "./Admin/Dashboard";
import SubAdminLogin from "./Admin/SubadminLogin";
import Subadmin from "./Admin/Subadmin";
import Hospitaldoctors from "./Admin/Hospitaldoctors";
import Clinicaldoctors from "./Admin/Clinicaldoctors";
import Staffmanagement from "./Admin/Staffmanagement";
import Staffmanagementdashboard from "./Admin/Staffmanagementdashboard";
import Inpatientlist from "./Admin/Inpatientlist";
import PatientForm from "./Admin/PatientForm";
import PatientDetails from "./Admin/patientDetails/PatientDetails";
import IPDConsentFroms from "./Admin/IPDConsentFroms";
import Outpatientlist from "./Admin/Outpatientlist";
import Hospitallab from "./Admin/Hospitallab";
import Clinicallab from "./Admin/Clinicallab";
import AddServiceCategory from "./Admin/AddServiceCategory";
import AddService from "./Admin/AddService";
import RequestedService from "./Admin/RequestedService";
import Websitemanagement from "./Admin/Websitemanagement";
import AddproductCategory from "./Admin/AddproductCategory";
import { OPDPharmacy } from "./Admin/OPDPharmacy";
import StaffOPDPharmacyBill from "./Admin/StaffOPDPharmacyBill";
import OPDtoIPD from "./Admin/OPDtoIPD";
import AddVendor from "./Admin/AddVendor";
import ProductOrders from "./Admin/ProductOrders";
import ProductCustomerOrder from "./Admin/ProductCustomerOrder";
import ProductBrands from "./Admin/ProductBrands";
import AddHouseKeeping from "./Admin/AddHouseKeeping";
import AddHospitalServices from "./Admin/AddHospitalServices";
import AddAccesories from "./Admin/AddAccesories";
import BillingList from "./Admin/BillingList";
import Enquiry from "./Admin/Enquiry";
import Accounts from "./Admin/Accounts";
import AddHospitalRooms from "./Admin/AddHospitalRooms";
import Adddepartment from "./Admin/Adddepartment";
import Notifications from "./Admin/Notifications";
import AddLabPackages from "./Admin/AddLabPackages";
import HospitalLabPanel from "./Admin/HospitalLabPanel";
import Hospitallabtestlist from "./Admin/HospitalLabTest";
import ClinicalLabPanel from "./Admin/ClinicalLabPanel";
import Bedmanagement from "./Admin/Bedmanagement";
import AddFloor from "./Admin/AddFloor";
import GenralWard from "./Admin/GenralWard";
import LabourWard from "./Admin/LabourWard";
import IpBillingSheet from "./Admin/patientDetails/IpBillingSheet";
import DocTreatmentChart from "./Admin/PatientAdmitForms/DocTreatmentChart";
import DocNotes from "./Admin/PatientAdmitForms/DocNotes";
import MedicationChart from "./Admin/patientDetails/MedicationChart";
import NursingAssessOnAdmit from "./Admin/PatientAdmitForms/NursingAssessOnAdmit";
import NursesNotes from "./Admin/PatientAdmitForms/NursesNotes";
import HouslyObserveChart from "./Admin/PatientAdmitForms/HouslyObserveChart";
import SurgeryReport from "./Admin/patientDetails/SurgeryReport";
import InatkeOutput from "./Admin/PatientAdmitForms/InatkeOutput";
import PreOperativeChecklist from "./Admin/PatientAdmitForms/PreOperativeChecklist";
import PreAnestheticAssessment from "./Admin/PatientAdmitForms/PreAnestheticAssessment";
import ChecklistForSurgical from "./Admin/PatientAdmitForms/ChecklistForSurgical";
import PostSurgical from "./Admin/PatientAdmitForms/PostSurgical";
import AddProductInvetory from "./Admin/AddProductInvetory";
import { PatientInvoice } from "./PatientsPortal/PatientInvoice";
import { PatientBillInvoice } from "./Admin/PatientBillInvoice";
import { AppointmentList } from "./DoctorsPortal/AppointmentList";
import DoctorsAppointment from "./Admin/Doctorsappointment";
import { StaffAttendance } from "./Admin/StaffAttendance";
import ReportsList from "./PatientsPortal/ReportsList";
import MedicationChartAdd from "./Admin/PatientAdmitForms/MedicationChartAdd";
import ProductType from "./Vendor/ProductType";
import DiagnosticMyReport from "./Components/Diagnostic/DiagnosticMyReport";
import VendorAddedProducts from "./Admin/VendorAddedProducts";
import VendorAddedProductCart from "./Admin/VendorAddedProductCart";
import ProductStatus from "./Vendor/ProductStatus";
import VendorAddedProductsStatus from "./Admin/VendorAddedProductsStatus";
import AdminBookProduct from "./Admin/AdminBookProduct";
import AdminBookProductCart from "./Admin/AdminBookProductCart";
import Adminorder from "./Admin/Adminorder";
import PatientCaseStudy from "./DoctorsPortal/PatientCaseStudy";
import VendorAdminInvoice from "./Vendor/VendorAdminInvoice";
import VendorAdminInv from "./Admin/VendorAdminInv";
import LabVendor from "./Admin/LabVendor";
import Labvendorproducts from "./Admin/Labvendorproducts";
import Labvendorproductcart from "./Admin/Labvendorproductcart";
import LaborderHistory from "./Admin/LaborderHistory";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            {/* PageLoader */}
            <Route
              path="/"
              element={
                <>
                  <PageLoader />
                </>
              }
            />

            <Route
              path="/home"
              element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/doctors"
              element={
                <>
                  <Header />
                  <Doctors />
                  <Footer />
                </>
              }
            />
            <Route
              path="/departments"
              element={
                <>
                  <Header />
                  <Departments />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Department_Details"
              element={
                <>
                  <Header />
                  <DepartmentDetails />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Doctor_Details"
              element={
                <>
                  <Header />
                  <DoctorDetails />
                  <Footer />
                </>
              }
            />
            <Route
              path="/gallery"
              element={
                <>
                  <Header />
                  <Gallery />
                  <Footer />
                </>
              }
            />
            <Route
              path="/oldpost"
              element={
                <>
                  <Header />
                  <Oldpost />
                  <Footer />
                </>
              }
            />
            <Route
              path="/service"
              element={
                <>
                  <Header />
                  <Service />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route
              path="/nephrologistcare"
              element={
                <>
                  <Header />
                  <NephrologistCare />
                  <Footer />
                </>
              }
            />
            <Route
              path="/service_details"
              element={
                <>
                  <Header />
                  <ServiceDetails />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Blog_Details"
              element={
                <>
                  <Header />
                  <BlogDetails />
                  <Footer />
                </>
              }
            />
            <Route
              path="/eventBlog"
              element={
                <>
                  <Header />
                  <Blog />
                  <Footer />
                </>
              }
            />
            <Route
              path="/schedules"
              element={
                <>
                  <Header />
                  <Schedules />
                  <Footer />
                </>
              }
            />

            {/* Pharmacy page */}
            <Route
              path="/pharmacy"
              element={
                <>
                  {/* <Headerpharmacy /> */}
                  <Pharmacy />
                  <Footer />
                </>
              }
            />
            <Route
              path="/loginpharmacy"
              element={
                <>
                  {/* <Headerpharmacy /> */}
                  <LoginPharmacy />
                  <Footer />
                </>
              }
            />
            <Route
              path="/registerpharmacy"
              element={
                <>
                  {/* <Headerpharmacy /> */}
                  <RegisterPharmacy />
                  <Footer />
                </>
              }
            />
            <Route
              path="/pharmacyproducts"
              element={
                <>
                  {/* <Headerpharmacy /> */}
                  <PharmacyProducts />
                  <Footer />
                </>
              }
            />
            <Route
              path="/pharmacydesc"
              element={
                <>
                  {/* <Headerpharmacy /> */}
                  <Pharmacydescription />
                  <Footer />
                </>
              }
            />
            <Route
              path="/pharmacycart"
              element={
                <>
                  {/* <Headerpharmacy /> */}
                  <PharmacyCart />
                  <Footer />
                </>
              }
            />
            <Route
              path="/pharmacywishlist"
              element={
                <>
                  {/* <Headerpharmacy /> */}
                  <PharmacyWishList />
                  <Footer />
                </>
              }
            />
            <Route
              path="/pharmacycheckout"
              element={
                <>
                  {/* <Headerpharmacy /> */}
                  <PharmacyCheckOut />
                  <Footer />
                </>
              }
            />
            {/* <Route
              path="/staffattendance"
              element={
                <StaffCommanDashboard
                  children={
                    <>
                      <StaffAttendance />
                    </>
                  }
                />
              }
            /> */}
            <Route
              path="/pharmacytrackorder"
              element={
                <>
                  {/* <Headerpharmacy /> */}
                  <PharmacyTrackOrder />
                  <Footer />
                </>
              }
            />
            <Route
              path="/pharmacyvieworder"
              element={
                <>
                  {/* <Headerpharmacy /> */}
                  <PharmacyViewOrder />
                  <Footer />
                </>
              }
            />
            <Route
              path="/pharmacyorderinvoice"
              element={
                <>
                  {/* <Headerpharmacy /> */}
                  <PharmacyOrderInvoice />
                  <Footer />
                </>
              }
            />
            <Route
              path="/pharmacymyprofile"
              element={
                <>
                  {/* <Headerpharmacy /> */}
                  <PharmacyMyProfile />
                  <Footer />
                </>
              }
            />

            {/* Diagnostic page */}
            <Route
              path="/diagnostic"
              element={
                <>
                  <HeaderDiagnostic />
                  <Diagnostic />
                  <Footer />
                </>
              }
            />
            <Route
              path="/labCard"
              element={
                <>
                  <LabCard />
                </>
              }
            />
            <Route
              path="/hospital-lab-test-list"
              element={
                <>
                  <HeaderDiagnostic />
                  <Gastroenterology />
                  <Footer />
                </>
              }
            />
            <Route
              path="/healthpack"
              element={
                <>
                  {/* <HeaderDiagnostic /> */}
                  <HealthPack />
                  {/* <Footer /> */}
                </>
              }
            />
            <Route
              path="/logindiagnostic"
              element={
                <>
                  <HeaderDiagnostic />
                  <LoginDiagnostic />
                  <Footer />
                </>
              }
            />
            <Route
              path="/registerdiagnostic"
              element={
                <>
                  <HeaderDiagnostic />
                  <RegisterDiagnostic />
                  <Footer />
                </>
              }
            />
            <Route
              path="/diagnosticcart"
              element={
                <>
                  <HeaderDiagnostic />
                  <DiagnosticCart />
                  <Footer />
                </>
              }
            />
            <Route
              path="/diagnosticwishlist"
              element={
                <>
                  <HeaderDiagnostic />
                  <DiagnosticWishList />
                  <Footer />
                </>
              }
            />
            <Route
              path="/diagnosticcheckout"
              element={
                <>
                  <HeaderDiagnostic />
                  <DiagnosticCheckOut />
                  <Footer />
                </>
              }
            />
            <Route
              path="/diagnostictrackorder"
              element={
                <>
                  <HeaderDiagnostic />
                  <DiagnosticTrackOrder />
                  <Footer />
                </>
              }
            />
            <Route
              path="/diagnosticvieworder"
              element={
                <>
                  <HeaderDiagnostic />
                  <DiagnosticViewOrder />
                  <Footer />
                </>
              }
            />
            <Route
              path="/diagnosticorderinvoice"
              element={
                <>
                  <HeaderDiagnostic />
                  <DiagnosticOrderInvoice />
                  <Footer />
                </>
              }
            />
            <Route
              path="/diagnosticmyprofile"
              element={
                <>
                  <HeaderDiagnostic />
                  <DiagnosticMyProfile />
                  <Footer />
                </>
              }
            />
            <Route
              path="/diagnosticmyReports"
              element={
                <>
                  <HeaderDiagnostic />
                  <DiagnosticMyReport />
                  <Footer />
                </>
              }
            />

            {/* PATIENTS DASHBOARD */}
            <Route
              path="/patientPortal"
              element={
                <>
                  <PatientPortal />
                </>
              }
            />
            <Route
              path="/createaccount"
              element={
                <>
                  <CreateAccount />
                </>
              }
            />
            <Route
              path="/patientdashboard"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <PatientDashboard />
                    </>
                  }
                />
              }
            />
            <Route
              path="/reportslist"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <ReportsList />
                    </>
                  }
                />
              }
            />
            <Route
              path="/yourappointment"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <YourAppointment />
                    </>
                  }
                />
              }
            />
            <Route
              path="/patientprofile"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <PatientProfile />
                    </>
                  }
                />
              }
            />
            <Route
              path="/bookappointment"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <Bookappointment />
                    </>
                  }
                />
              }
            />
            <Route
              path="/todayappointment"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <TodayAppointment />
                    </>
                  }
                />
              }
            />
            <Route
              path="/prescription"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <Prescription />
                    </>
                  }
                />
              }
            />
            <Route
              path="/patientmedicalrecord"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <PatientMedicalRecord />
                    </>
                  }
                />
              }
            />
            <Route
              path="/patientbilling"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <PatientBilling />
                    </>
                  }
                />
              }
            />
            <Route
              path="/patientConsentForms"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <PatientConsentForms />
                    </>
                  }
                />
              }
            />
            <Route
              path="/patientAdmisssionForm"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <PatientAdmissionForm />
                    </>
                  }
                />
              }
            />
            <Route
              path="/patientinvoice"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <PatientInvoice />
                    </>
                  }
                />
              }
            />
            <Route
              path="/patientchat"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <PatientChat />
                    </>
                  }
                />
              }
            />
            <Route
              path="/patientsettings"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <PatientSettings />
                    </>
                  }
                />
              }
            />

            {/* DOCTORS DASHBOARD */}
            <Route
              path="/doctorsdashboard"
              element={
                <AdminDashboard
                  children={
                    <>
                      <DoctorDashboard />
                    </>
                  }
                />
              }
            />
            <Route
              path="/appointmentlist"
              element={
                <AdminDashboard
                  children={
                    <>
                      <AppointmentList />
                    </>
                  }
                />
              }
            />
            <Route
              path="/patientcasestudy"
              element={
                <AdminDashboard
                  children={
                    <>
                      <PatientCaseStudy />
                    </>
                  }
                />
              }
            />
            <Route
              path="/doctorslist"
              element={
                <AdminDashboard
                  children={
                    <>
                      <DoctorsList />
                    </>
                  }
                />
              }
            />
            <Route
              path="/patientreports"
              element={
                <AdminDashboard
                  children={
                    <>
                      <PatientReport />
                    </>
                  }
                />
              }
            />
            <Route
              path="/doctorforms"
              element={
                <AdminDashboard
                  children={
                    <>
                      <DoctorForms />
                    </>
                  }
                />
              }
            />
            <Route
              path="/doctorsviewforms"
              element={
                <AdminDashboard
                  children={
                    <>
                      <DoctorsViewForms />
                    </>
                  }
                />
              }
            />
            <Route
              path="/patientslist"
              element={
                <AdminDashboard
                  children={
                    <>
                      <PatientsList />
                    </>
                  }
                />
              }
            />
            <Route
              path="/doctorssettings"
              element={
                <AdminDashboard
                  children={
                    <>
                      <DoctorsSettings />
                    </>
                  }
                />
              }
            />
            <Route
              path="/doctorschat"
              element={
                <AdminDashboard
                  children={
                    <>
                      <DoctorsChat />
                    </>
                  }
                />
              }
            />
            <Route
              path="/doctorscalender"
              element={
                <AdminDashboard
                  children={
                    <>
                      <DoctorsCalender />
                    </>
                  }
                />
              }
            />
            <Route
              path="/doctorscontact"
              element={
                <AdminDashboard
                  children={
                    <>
                      <DoctorsContact />
                    </>
                  }
                />
              }
            />
            <Route
              path="/doctorscasestudy"
              element={
                <AdminDashboard
                  children={
                    <>
                      <DoctorsCaseStudy />
                    </>
                  }
                />
              }
            />

            {/* Doctors login / refral doctors login / Pharmacy login */}
            <Route
              path="/loginforeveryone"
              element={
                <>
                  <LoginForEveryone />
                </>
              }
            />
            <Route
              path="/pharmastoredashboard"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <PharmaStoreDashboard />
                    </>
                  }
                />
              }
            />
            <Route
              path="/medicinelist"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <MedicineList />
                    </>
                  }
                />
              }
            />
            <Route
              path="/addmedicine"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <AddMedicine />
                    </>
                  }
                />
              }
            />
            <Route
              path="/medicinedetail"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <MedicineDetail />
                    </>
                  }
                />
              }
            />
            <Route
              path="/purchaseorder"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <PurchaseOrder />
                    </>
                  }
                />
              }
            />
            <Route
              path="/purchaseorderinvoice"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <PurchaseOrderInvoice />
                    </>
                  }
                />
              }
            />
            <Route
              path="/purchaseorderlist"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <PurchaseOrderList />
                    </>
                  }
                />
              }
            />
            <Route
              path="/generateinvoice"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <GenerateInvoice />
                    </>
                  }
                />
              }
            />
            <Route
              path="/pharmacyinvoicelist"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <PharmacyInvoiceList />
                    </>
                  }
                />
              }
            />
            <Route
              path="/purchaseentry"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <PurchaseEntry />
                    </>
                  }
                />
              }
            />
            <Route
              path="/downloadinvoice"
              element={
                <>
                  <DownloadInvoice />
                </>
              }
            />
            <Route
              path="/websiteoreder"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <WebsiteOreder />
                    </>
                  }
                />
              }
            />
            <Route
              path="/addwastagereturn"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <AddWastageReturn />
                    </>
                  }
                />
              }
            />
            <Route
              path="/wastagereturn"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <WastageReturn />
                    </>
                  }
                />
              }
            />
            <Route
              path="/addmanufacturerreturn"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <AddManufacturerReturn />
                    </>
                  }
                />
              }
            />
            <Route
              path="/manufacturerreturn"
              element={
                <PharmacyCommanDashboard
                  children={
                    <>
                      <ManufacturerReturn />
                    </>
                  }
                />
              }
            />

            {/* Refer Doctor */}
            <Route
              path="/referdoctordashboard"
              element={
                <ReferDoctorCommanDashboard
                  children={
                    <>
                      <ReferDoctorDashboard />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referaddpatient"
              element={
                <ReferDoctorCommanDashboard
                  children={
                    <>
                      <AddPatient />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referdoctorpatientlist"
              element={
                <ReferDoctorCommanDashboard
                  children={
                    <>
                      <ReferDoctorPatientList />
                    </>
                  }
                />
              }
            />
            <Route
              path="/refersettings"
              element={
                <ReferDoctorCommanDashboard
                  children={
                    <>
                      <ReferSettings />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referdoctorschat"
              element={
                <ReferDoctorCommanDashboard
                  children={
                    <>
                      <ReferDoctorsChat />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referdoctorscalender"
              element={
                <ReferDoctorCommanDashboard
                  children={
                    <>
                      <ReferDoctorsCalender />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referdoctorscontact"
              element={
                <ReferDoctorCommanDashboard
                  children={
                    <>
                      <ReferDoctorsContact />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referdoctorlabtest"
              element={
                <ReferDoctorCommanDashboard
                  children={
                    <>
                      <ReferDoctorLabTest />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referdoctorlabtestlist"
              element={
                <ReferDoctorCommanDashboard
                  children={
                    <>
                      <ReferDoctorLabTestList />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referdoctorlabtestreport"
              element={
                <ReferDoctorCommanDashboard
                  children={
                    <>
                      <ReferDoctorLabTestReport />
                    </>
                  }
                />
              }
            />

            {/*Vendor Management */}

            <Route
              path="/vendordashboard"
              element={
                <VendorCommanDashboard
                  children={
                    <>
                      <VendorDashboard />
                    </>
                  }
                />
              }
            />

            <Route
              path="/VendorAddProducts"
              element={
                <VendorCommanDashboard
                  children={
                    <>
                      <VendorAddProducts />
                    </>
                  }
                />
              }
            />

            <Route
              path="/VendorAddProductsModal"
              element={
                <VendorCommanDashboard
                  children={
                    <>
                      <AddProduct />
                    </>
                  }
                />
              }
            />

            <Route
              path="/vendorOrders"
              element={
                <VendorCommanDashboard
                  children={
                    <>
                      <VendorOrders />
                    </>
                  }
                />
              }
            />
            <Route
              path="/Vendor-admin-invoice"
              element={
                <VendorCommanDashboard
                  children={
                    <>
                      <VendorAdminInvoice />
                    </>
                  }
                />
              }
            />
            <Route
              path="/productstatus"
              element={
                <VendorCommanDashboard
                  children={
                    <>
                      <ProductStatus />
                    </>
                  }
                />
              }
            />
            {/* Product types */}
            <Route
              path="/vendorproducttype"
              element={
                <VendorCommanDashboard
                  children={
                    <>
                      <ProductType />
                    </>
                  }
                />
              }
            />
            {/* Product types */}

            <Route
              path="/vendorsettings"
              element={
                <VendorCommanDashboard
                  children={
                    <>
                      <VendorSettings />
                    </>
                  }
                />
              }
            />

            {/* Refer Lab */}
            <Route
              path="/referlabdashboard"
              element={
                <ReferLabCommanDashboard
                  children={
                    <>
                      <ReferLabDashboard />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referlabaddpatient"
              element={
                <ReferLabCommanDashboard
                  children={
                    <>
                      <ReferLabAddPatient />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referlabcalender"
              element={
                <ReferLabCommanDashboard
                  children={
                    <>
                      <ReferLabCalender />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referlabchat"
              element={
                <ReferLabCommanDashboard
                  children={
                    <>
                      <ReferLabChat />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referlabcontact"
              element={
                <ReferLabCommanDashboard
                  children={
                    <>
                      <ReferLabContact />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referlabtest"
              element={
                <ReferLabCommanDashboard
                  children={
                    <>
                      <ReferLabTest />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referlabtestlist"
              element={
                <ReferLabCommanDashboard
                  children={
                    <>
                      <ReferLabTestList />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referlabtestreport"
              element={
                <ReferLabCommanDashboard
                  children={
                    <>
                      <ReferLabTestReport />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referlabpatientlist"
              element={
                <ReferLabCommanDashboard
                  children={
                    <>
                      <ReferLabPatientList />
                    </>
                  }
                />
              }
            />
            <Route
              path="/referlabsettings"
              element={
                <ReferLabCommanDashboard
                  children={
                    <>
                      <ReferLabSettings />
                    </>
                  }
                />
              }
            />

            {/* Staff Portal */}
            <Route
              path="/staffdashboard"
              element={
                <StaffCommanDashboard
                  children={
                    <>
                      <StaffDashboard />
                    </>
                  }
                />
              }
            />
            <Route
              path="/staffoutpatientform"
              element={
                <StaffCommanDashboard
                  children={
                    <>
                      <StaffOutPatientForm />
                    </>
                  }
                />
              }
            />
            <Route
              path="/staffinpatientform"
              element={
                <StaffCommanDashboard
                  children={
                    <>
                      <StaffInPatientForm />
                    </>
                  }
                />
              }
            />
            <Route
              path="/staffoutpatientlist"
              element={
                <StaffCommanDashboard
                  children={
                    <>
                      <StaffOutPatientList />
                    </>
                  }
                />
              }
            />
            <Route
              path="/staffinpatientlist"
              element={
                <StaffCommanDashboard
                  children={
                    <>
                      <StaffInPatientList />
                    </>
                  }
                />
              }
            />
            <Route
              path="/staffbedmanagement"
              element={
                <StaffCommanDashboard
                  children={
                    <>
                      <StaffBedManagement />
                    </>
                  }
                />
              }
            />
            <Route
              path="/staffdoctormanagement"
              element={
                <StaffCommanDashboard
                  children={
                    <>
                      <StaffDoctorManagement />
                    </>
                  }
                />
              }
            />
            <Route
              path="/staffdoctorappointment"
              element={
                <StaffCommanDashboard
                  children={
                    <>
                      <StaffDoctorAppointment />
                    </>
                  }
                />
              }
            />
            <Route
              path="/staffcheckschedule"
              element={
                <StaffCommanDashboard
                  children={
                    <>
                      <StaffCheckSchedule />
                    </>
                  }
                />
              }
            />
            <Route
              path="/staffrecordmanagement"
              element={
                <StaffCommanDashboard
                  children={
                    <>
                      <StaffRecordManagement />
                    </>
                  }
                />
              }
            />
            <Route
              path="/staffquickbill"
              element={
                <StaffCommanDashboard
                  children={
                    <>
                      <StaffQuickBill />
                    </>
                  }
                />
              }
            />
            <Route
              path="/staffbill"
              element={
                <StaffCommanDashboard
                  children={
                    <>
                      <StaffBill />
                    </>
                  }
                />
              }
            />

            {/* Lab Portal  */}
            <Route
              path="/labdashboard"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabDashboard />
                    </>
                  }
                />
              }
            />
            <Route
              path="/labaccession"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LaBAccession />
                    </>
                  }
                />
              }
            />
            <Route
              path="/labtest"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabTest />
                    </>
                  }
                />
              }
            />
            <Route
              path="/labaddtest"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabAddTest />
                    </>
                  }
                />
              }
            />
            <Route
              path="/labpatientprofile"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabPatientProfile />
                    </>
                  }
                />
              }
            />
            <Route
              path="/labaddpatient"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabAddPatient />
                    </>
                  }
                />
              }
            />
            <Route
              path="/laborder"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabOrder />
                    </>
                  }
                />
              }
            />
            {/* <Route path='/labneworder' element={<LabCommanDashboard children={<><LabNewOrder /></>} />} /> */}
            <Route
              path="/laborderrequest"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabOrderRequest />
                    </>
                  }
                />
              }
            />
            <Route
              path="/labhomecollection"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabHomeCollection />
                    </>
                  }
                />
              }
            />
            <Route
              path="/laboutsource"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabOutsource />
                    </>
                  }
                />
              }
            />
            <Route
              path="/labrefoutmanagement"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabRefOutManagement />
                    </>
                  }
                />
              }
            />
            <Route
              path="/labqualitycontrol"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabQualityControl />
                    </>
                  }
                />
              }
            />
            <Route
              path="/labgeneratebarcode"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabGenerateBarcode />
                    </>
                  }
                />
              }
            />
            <Route
              path="/labprintwork"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabPrintWork />
                    </>
                  }
                />
              }
            />
            <Route
              path="/labcampmanagement"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabCampManagement />
                    </>
                  }
                />
              }
            />
            <Route
              path="/labaddnewcamp"
              element={
                <LabCommanDashboard
                  children={
                    <>
                      <LabAddNewCamp />
                    </>
                  }
                />
              }
            />

            {/* =======================> Admin Panel <============================= */}

            <Route
              path="/admin"
              element={
                <>
                  <PageLoaderA />
                  <AdminLogin />
                </>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Dashboard />} />
                </>
              }
            />
            <Route
              path="/Subadmin-login"
              element={
                <>
                  <SubAdminLogin />
                </>
              }
            />

            <Route
              path="/admin/subadmin"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Subadmin />} />
                </>
              }
            />
            <Route
              path="/admin/Hospitaldoctors"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Hospitaldoctors />} />
                </>
              }
            />
            <Route
              path="/admin/Clinicaldoctors"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Clinicaldoctors />} />
                </>
              }
            />

            <Route
              path="/admin/Staffmanagement"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Staffmanagement />} />{" "}
                </>
              }
            />
            <Route
              path="/admin/Staffmanagementdashboard"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Staffmanagementdashboard />} />{" "}
                </>
              }
            />

            <Route
              path="/admin/StaffAttendance"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<StaffAttendance />} />{" "}
                </>
              }
            />

            <Route
              path="/admin/Inpatientlist"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Inpatientlist />} />{" "}
                </>
              }
            />
            <Route
              path="/admin/patientdetails/:id"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<PatientDetails />} />{" "}
                </>
              }
            />
            <Route
              path="/admin/patientform"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<PatientForm />} />{" "}
                </>
              }
            />
            <Route
              path="/admin/InpatientlistConsentForms/:id"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<IPDConsentFroms />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/Outpatientlist"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Outpatientlist />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/DoctorsAppointment"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<DoctorsAppointment />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/Hospitallab"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Hospitallab />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/Clinicallab"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Clinicallab />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/AddServiceCategory"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<AddServiceCategory />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/AddService"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<AddService />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/RequestedService"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<RequestedService />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/Websitemanagement"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Websitemanagement />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/AddProductCategory"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<AddproductCategory />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/patientbillinvoice"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<PatientBillInvoice />} />{" "}
                </>
              }
            ></Route>

            {/* <Route
            path="/admin/opdMedicineInvoice"
            element={
              <>
                <PageLoaderA />
                <Adminpanel children={<OPDMedicineInvoice />} />{" "}
              </>
            }
          ></Route> */}
            <Route
              path="/admin/OPDPharmacy"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<OPDPharmacy />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/StaffOPDPharmacyBill"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<StaffOPDPharmacyBill />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/opdtoipd"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<OPDtoIPD />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/AddVendor"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<AddVendor />} />{" "}
                </>
              }
            ></Route>

            {/* v6 */}
            <Route
              path="/admin/VendorAddedProduct"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<VendorAddedProducts />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/VendorAddedProductsStatus"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<VendorAddedProductsStatus />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/Vendor-Admin-Inv"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<VendorAdminInv />} />{" "}
                </>
              }
            ></Route>
            {/* v6 */}
            {/* v6 */}
            <Route
              path="/admin/VendorAddedProductCart"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<VendorAddedProductCart />} />{" "}
                </>
              }
            ></Route>
            {/* v6 */}
            <Route
              path="/admin/addinventory"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<AddProductInvetory />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/AdminBookProduct"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<AdminBookProduct />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/AdminBookProductCart"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<AdminBookProductCart />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/Adminorder"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Adminorder />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/ProductOrders"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<ProductOrders />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/ProductCustomerOrders"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<ProductCustomerOrder />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/ProductBrands"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<ProductBrands />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/AddHouseKeeping"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<AddHouseKeeping />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/LabVendor"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<LabVendor />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/Labvendorproducts"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Labvendorproducts />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/LaborderHistory"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<LaborderHistory />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/Labvendorproductcart"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Labvendorproductcart />} />
                </>
              }
            ></Route>

            <Route
              path="/admin/AddHospitalServices"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<AddHospitalServices />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/AddAccesories"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<AddAccesories />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/Billinglist"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<BillingList />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/Enquiry"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Enquiry />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/Accounts"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Accounts />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/AddHospitalRooms"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<AddHospitalRooms />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/Adddepartment"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Adddepartment />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/Notifications"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Notifications />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/Packages"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<AddLabPackages />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/HospitalLabPanel"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<HospitalLabPanel />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/Hospitallabtestlist"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Hospitallabtestlist />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/ClinicalLabPanel"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<ClinicalLabPanel />} />{" "}
                </>
              }
            ></Route>

            {/* <Route
            path="/admin/AddWastageReturn"
            element={
              <>
                <PageLoaderA />
                <Adminpanel children={<AddWastageReturn />} />{" "}
              </>
            }
          ></Route> */}

            {/* <Route
            path="/admin/AddManufacturerReturn"
            element={
              <>
                <PageLoaderA />
                <Adminpanel children={<AddManufacturerReturn />} />{" "}
              </>
            }
          ></Route> */}

            <Route
              path="/admin/Bedmanagement"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<Bedmanagement />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/AddFloor"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<AddFloor />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/GenralWard"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<GenralWard />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/LabourWard"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<LabourWard />} />{" "}
                </>
              }
            ></Route>
            {/* Patient Admission Forms starts */}
            <Route
              path="/admin/IPBillingSheet"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<IpBillingSheet />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/DocTreatmentChart"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<DocTreatmentChart />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/DocNotes"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<DocNotes />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/MedicationChart"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<MedicationChart />} />{" "}
                </>
              }
            ></Route>

            <Route
              path="/admin/medicationchartadd"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<MedicationChartAdd />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/NursingAssessOnAdmit"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<NursingAssessOnAdmit />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/NursesNotes"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<NursesNotes />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/HouslyObserveChart"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<HouslyObserveChart />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/SurgeryReport"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<SurgeryReport />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/InatkeOutput"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<InatkeOutput />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/PreOperativeChecklist"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<PreOperativeChecklist />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/PreAnestheticAssessment"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<PreAnestheticAssessment />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/ChecklistForSurgical"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<ChecklistForSurgical />} />{" "}
                </>
              }
            ></Route>
            <Route
              path="/admin/PostSurgical"
              element={
                <>
                  <PageLoaderA />
                  <Adminpanel children={<PostSurgical />} />{" "}
                </>
              }
            ></Route>

            {/* 404 Page */}
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <FourNotFour />
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
