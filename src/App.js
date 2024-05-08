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
import { DoctorsAppointment } from "./DoctorsPortal/DoctorsAppointment";
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
import { StaffAttendance } from "./Staff Portal/StaffAttendance";
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
import { PatientBillInvoice } from "./PatientsPortal/PatientBillInvoice";
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
import PatientConsentForms from "./PatientsPortal/PatientConsentForms";
import PharmacyProducts from "./Components/WebsitePharmacy/PharmacyProducts";
import DoctorForms from "./DoctorsPortal/DoctorForms";

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
            <Route
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
            />
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
              path="/gastroenterology"
              element={
                <>
                  <HeaderDiagnostic />
                  <Gastroenterology />
                  <Footer />
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
              path="/patientbillinvoice"
              element={
                <PatientsCommanDashboard
                  children={
                    <>
                      <PatientBillInvoice />
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
              path="/doctorsappointment"
              element={
                <AdminDashboard
                  children={
                    <>
                      <DoctorsAppointment />
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
