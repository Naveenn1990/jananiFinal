import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { RxDashboard } from "react-icons/rx";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBook, faCashRegister, faClipboardList, faFileInvoice, faHouse, faPenToSquare, faPills, faPlus, faRightLeft, faSquarePlus, faStore } from "@fortawesome/free-solid-svg-icons";

export default function PharmacySidebar() {
  const [DoctorM, setDoctorM] = useState(false);
  const [PatientM, setPatientM] = useState(false);
  const [LabM, setLabM] = useState(false);
  const [SerM, setSerM] = useState(false);
  const [PharM, setPharM] = useState(false);
  const [HosM, setHosM] = useState(false);

  const [SelectedItem, setSelectedItem] = useState(1);

  return (
    <div className="sidebar">

<img style={{ width: '60px', height: '60px', marginLeft:'60px' }} className='logo m' src="./img/logo.jpg" alt="Logo" /> 

                         <p
                          style={{
                            fontSize: "25px",
                            fontWeight: "bold",
                            // fontFamily: "cursive",
                            marginTop: "10px",
                            color:'rgb(32 139 140)',
                            marginLeft:'30px'
                        }}
                    >
                        PHARMACY
                    </p>

      <h6
        className="sidebarItem"
        // style={{ backgroundColor: SelectedItem == 1 ? "#20958c" : "white" }}
        onClick={() => window.location.assign("/pharmastoredashboard")}
      >
       <FontAwesomeIcon icon={faHouse} style={{ marginRight: '5px', fontSize: '15px' }} />
        Dashboard
      </h6>
      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/websiteoreder")}
      >
        {" "}
        <FontAwesomeIcon icon={faBagShopping} style={{ marginRight: '5px', fontSize: '15px' }}/>
        Website Order
      </h6>

      <h6 className="sidebarItem" onClick={() => setDoctorM(!DoctorM)}>
      <FontAwesomeIcon icon={faPills} style={{ marginRight: '5px', fontSize: '15px' }}/>
      Medicine {DoctorM ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6>
      <div
        style={{
          display: DoctorM ? "block" : "none",
          backgroundColor: "#d0f7f4",
        }}
      >
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/addmedicine")}
        >
          <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px', fontSize: '15px' }}/>
          Add Medicine
        </h6>
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/medicinelist")}
        >
          <FontAwesomeIcon icon={faClipboardList}  style={{ marginRight: '5px', fontSize: '15px' }}/>
          Medicine List
        </h6>

        <h6
        className="sidebarItem1"
        onClick={() => window.location.assign("/medicinedetail")}
      >
        <FontAwesomeIcon icon={faBook} style={{ marginRight: '5px', fontSize: '15px' }}/>
        Medicine Details
      </h6>

      </div>

   

      <h6 className="sidebarItem" onClick={() => setPatientM(!PatientM)}>
      <FontAwesomeIcon icon={faStore} style={{ marginRight: '5px', fontSize: '15px' }}/>
        Purchase {PatientM ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6>
      <div
        style={{
          display: PatientM ? "block" : "none",
          backgroundColor: "#d0f7f4",
        }}
      >
       
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/purchaseorder")}
        >
          <FontAwesomeIcon icon={faSquarePlus} style={{ marginRight: '5px', fontSize: '15px' }}/>
          Create Purchase Order
        </h6>

        <h6
        className="sidebarItem1"
        onClick={() => window.location.assign("/purchaseorderlist")}
      >
          <FontAwesomeIcon icon={faClipboardList}  style={{ marginRight: '5px', fontSize: '15px' }}/>
        Purchase Order List
      </h6>

         <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/purchaseentry")}
        >
          <FontAwesomeIcon icon={faCashRegister} style={{ marginRight: '5px', fontSize: '15px' }} />
          Purchase Entry
        </h6>

      </div>
    


      <h6 className="sidebarItem" onClick={() => setPharM(!PharM)}>
      <FontAwesomeIcon icon={faFileInvoice} style={{ marginRight: '5px', fontSize: '15px' }} />
        Invoice {PharM ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6>

      <div
        style={{
          display: PharM ? "block" : "none",
          backgroundColor: "#d0f7f4",
        }}
      >
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/generateinvoice")}
        >
          <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: '5px', fontSize: '15px' }} />
          Generate Invoice
        </h6>

        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/pharmacyinvoicelist")}
        >
          <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: '5px', fontSize: '15px' }} />
           Invoice List
        </h6>
      </div>


      <h6 className="sidebarItem" onClick={() => setSerM(!SerM)}>
        <FontAwesomeIcon icon={faRightLeft} style={{ marginRight: '5px', fontSize: '15px' }} />
        Return {SerM ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6>
      <div
        style={{ display: SerM ? "block" : "none", backgroundColor: "#d0f7f4" }}
      >
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/addwastagereturn")}
        >
          Add Wastage Return
        </h6>
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/wastagereturn")}
        >
          Wastage Return List
        </h6>

        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/addmanufacturerreturn")}
        >
          Add Manufacture Return
        </h6>
        <h6
          className="sidebarItem1"
          onClick={() => window.location.assign("/manufacturerreturn")}
        >
           Manufacture Return List
        </h6>
      </div>

      <h6
        className="sidebarItem"
        onClick={() => window.location.assign("/loginforeveryone")}
      >
        {" "}
        <FontAwesomeIcon icon={faBagShopping} style={{ marginRight: '5px', fontSize: '15px' }}/>
        Log Out
      </h6>


{/*       
      <h6 className="sidebarItem" onClick={() => setHosM(!HosM)}>
        Hospital management{HosM ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h6> */}
      {/* <div
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
      </div> */}
      {/* <h6
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
      </h6> */}
    </div>
  );
}
















































// import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// // import Dropdown from 'react-dropdown';
// // import 'react-dropdown/style.css';

// function PharmacySidebar() {
//     const [acc, setacc] = useState(true);
//     const [acc1, setacc1] = useState(false);
//     const [acc2, setacc2] = useState(false);
//     const [acc3, setacc3] = useState(false);
//     const [acc4, setacc4] = useState(false);
//     const [acc5, setacc5] = useState(false);
//     const [acc6, setacc6] = useState(false);
//     const [acc7, setacc7] = useState(false);
//     const [acc8, setacc8] = useState(false);
//     const [acc9, setacc9] = useState(false);
//     const [acc10, setacc10] = useState(false);
//     const [acc11, setacc11] = useState(false);
//     const [acc21, setacc21] = useState(false);
//     const [acc22, setacc22] = useState(false);
//     const [acc23, setacc23] = useState(false);
//     const [acc24, setacc24] = useState(false);
//     const [acc16, setacc16] = useState(false);
//     const [acc17, setacc17] = useState(false);
//     const [acc18, setacc18] = useState(false);
//     const [acc19, setacc19] = useState(false);
//     const [acc20, setacc20] = useState(false);

//     const [isShown, setIsShown] = useState(false);
//     const handleClick = (event) => {
//         setIsShown((current) => !current);
//     };
//     const [isShown1, setIsShown1] = useState(false);

//     const handleClick1 = (event) => {
//         setIsShown1((current) => !current);
//     };
//     const [isShown2, setIsShown2] = useState(false);

//     const handleClick2 = (event) => {
//         setIsShown2((current) => !current);
//     };

//     const [isShown3, setIsShown3] = useState(false);

//     const handleClick3 = (event) => {
//         setIsShown3((current) => !current);
//     };

//     const [isShown4, setIsShown4] = useState(false);
//     const handleClick4 = (e) => {
//         setIsShown4((current) => !current);
//     };
//     const [isShown5, setIsShown5] = useState(false);
//     const handleClick5 = (e) => {
//         setIsShown5((current) => !current);
//     };
//     const [isShown6, setIsShown6] = useState(false);
//     const handleClick6 = (e) => {
//         setIsShown6((current) => !current);
//     };
//     const [isShown7, setIsShown7] = useState(false);
//     const handleClick7 = (e) => {
//         setIsShown7((current) => !current);
//     };
//     return (
//         <div className="si09">
//             <div className="lo-ad">
//                 <figure
//                     style={{
//                         width: "100%",
//                         height: "80px",
//                         padding: "10px 11px",
//                         textAlign: "center",
//                     }}
//                 >
//                     <p
//                         style={{
//                             fontSize: "25px",
//                             fontWeight: "bold",
//                             // fontFamily: "cursive",
//                             marginTop: "10px",
//                             color:'rgb(32 139 140)'
//                         }}
//                     >
//                        <img style={{ width: '60px', height: '60px' }} className='logo me-2' src="./img/logo.jpg" alt="Logo" /> 
//                         PHARMACY
//                     </p>
//                 </figure>
//             </div>
//             <ul>
//                 <Link to="#" className="" id="nbhj_0">
//                     <li
//                         className={`a-ele  ${acc ? "active-0 " : ""}`}
//                         onClick={() => {
//                             setacc(true);
//                             setacc1(false);
//                             setacc2(false);
//                             setacc3(false);
//                             setacc4(false);
//                             setacc5(false);
//                             setacc6(false);
//                             setacc7(false);
//                             setacc8(false);
//                             // setacc9(false);
//                             setacc10(false);
//                             setacc11(false);

//                             setacc16(false);
//                             setacc17(false);
//                             setacc18(false);
//                             setacc19(false);
//                             setacc20(true);
//                         }}
//                     >
//                         DASHBOARD
//                     </li>
//                 </Link>
//                 <Link to="">
//                     <li
//                         className={`a-ele  ${acc1 ? "active-0" : "null"}`}
//                         onClick={() => {
//                             setacc(false);
//                             setacc1(true);
//                             setacc2(false);
//                             setacc3(false);
//                             setacc4(false);
//                             setacc5(false);
//                             setacc6(false);
//                             setacc7(false);
//                             setacc8(false);
//                             // setacc9(false);
//                             setacc10(false);

//                             setacc11(false);

//                             setacc16(false);
//                             setacc17(false);
//                             setacc18(false);
//                             setacc19(false);
//                             setacc20(false);

//                             handleClick3(true);
//                         }}
//                     >
//                         MEDICINE{" "}
//                         <i
//                             class="fa fa-caret-down"
//                             aria-hidden="true"
//                             style={{ float: "right", fontSize: "20px", paddingRight: "5px" }}
//                         ></i>
//                     </li>
//                 </Link>

//                 {isShown3 && (
//                     <div>
//                         <Link to="#" className="">
//                             <li
//                                 className={`a-ele sub ${acc2 ? "active-0 " : ""}`}
//                                 onClick={() => {
//                                     setacc(false);
//                                     setacc1(false);
//                                     setacc2(true);
//                                     setacc3(false);
//                                     setacc4(false);
//                                     setacc5(false);
//                                     setacc6(false);
//                                     setacc7(false);
//                                     setacc8(false);
//                                     // setacc9(false);
//                                     setacc10(false);
//                                     setacc11(false);

//                                     setacc16(false);
//                                     setacc17(false);
//                                     setacc18(false);
//                                     setacc19(false);
//                                     setacc20(false);
//                                 }}
//                             >
//                                 {" "}
//                                 ADD MEDICINE{" "}
//                                 <i
//                                     class="fa fa-angle-right"
//                                     aria-hidden="true"
//                                     style={{
//                                         float: "right",
//                                         fontSize: "20px",
//                                         paddingRight: "5px",
//                                     }}
//                                 ></i>
//                             </li>
//                         </Link>
//                         <Link to="/medicinelist" className="">
//                             <li
//                                 className={`a-ele sub ${acc2 ? "active-0 " : ""}`}
//                                 onClick={() => {
//                                     setacc(false);
//                                     setacc1(false);
//                                     setacc2(true);
//                                     setacc3(false);
//                                     setacc4(false);
//                                     setacc5(false);
//                                     setacc6(false);
//                                     setacc7(false);
//                                     setacc8(false);
//                                     // setacc9(false);
//                                     setacc10(false);
//                                     setacc11(false);

//                                     setacc16(false);
//                                     setacc17(false);
//                                     setacc18(false);
//                                     setacc19(false);
//                                     setacc20(false);
//                                 }}
//                             >
//                                 {" "}
//                                 MEDICINE LIST{" "}
//                                 <i
//                                     class="fa fa-angle-right"
//                                     aria-hidden="true"
//                                     style={{
//                                         float: "right",
//                                         fontSize: "20px",
//                                         paddingRight: "5px",
//                                     }}
//                                 ></i>
//                             </li>
//                         </Link>
//                         <Link to="/admintestimonials" className="">
//                             <li
//                                 className={`a-ele sub ${acc3 ? "active-0 " : ""}`}
//                                 onClick={() => {
//                                     setacc(false);
//                                     setacc1(false);
//                                     setacc2(false);
//                                     setacc3(true);
//                                     setacc4(false);
//                                     setacc5(false);
//                                     setacc6(false);
//                                     setacc7(false);
//                                     setacc8(false);
//                                     // setacc9(false);
//                                     setacc10(false);

//                                     setacc11(false);

//                                     setacc16(false);
//                                     setacc17(false);
//                                     setacc18(false);
//                                     setacc19(false);
//                                     setacc20(false);
//                                 }}
//                             >
//                                 {" "}
//                                 MEDICINE DETAILS{" "}
//                                 <i
//                                     class="fa fa-angle-right"
//                                     aria-hidden="true"
//                                     style={{
//                                         float: "right",
//                                         fontSize: "20px",
//                                         paddingRight: "5px",
//                                     }}
//                                 ></i>
//                             </li>
//                         </Link>
//                         {/* <Link to="/adminbranches" className="">
//               <li className={`a-ele sub ${acc4 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(true);
//                 setacc5(false);
//                 setacc6(false);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);
//                 setacc11(false);




//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false)
//                 setacc20(false)



//               }}  >  BRANCHES
//               </li>
//             </Link> */}
//                     </div>
//                 )}
//                 <Link to="">
//                     <li
//                         className={`a-ele  ${acc1 ? "active-0" : "null"}`}
//                         onClick={() => {
//                             setacc(false);
//                             setacc1(true);
//                             setacc2(false);
//                             setacc3(false);
//                             setacc4(false);
//                             setacc5(false);
//                             setacc6(false);
//                             setacc7(false);
//                             setacc8(false);
//                             // setacc9(false);
//                             setacc10(false);

//                             setacc11(false);

//                             setacc16(false);
//                             setacc17(false);
//                             setacc18(false);
//                             setacc19(false);
//                             setacc20(false);

//                             handleClick7(true);
//                         }}
//                     >
//                         MANUFACTURER{" "}
//                         <i
//                             class="fa fa-caret-down"
//                             aria-hidden="true"
//                             style={{ float: "right", fontSize: "20px", paddingRight: "5px" }}
//                         ></i>
//                     </li>
//                 </Link>

//                 {isShown7 && (
//                     <div>
//                         <Link to="/adminhelp" className="">
//                             <li
//                                 className={`a-ele sub ${acc2 ? "active-0 " : ""}`}
//                                 onClick={() => {
//                                     setacc(false);
//                                     setacc1(false);
//                                     setacc2(true);
//                                     setacc3(false);
//                                     setacc4(false);
//                                     setacc5(false);
//                                     setacc6(false);
//                                     setacc7(false);
//                                     setacc8(false);
//                                     // setacc9(false);
//                                     setacc10(false);
//                                     setacc11(false);

//                                     setacc16(false);
//                                     setacc17(false);
//                                     setacc18(false);
//                                     setacc19(false);
//                                     setacc20(false);
//                                 }}
//                             >
//                                 {" "}
//                                 PURCHASE {" "}
//                                 <i
//                                     class="fa fa-angle-right"
//                                     aria-hidden="true"
//                                     style={{
//                                         float: "right",
//                                         fontSize: "20px",
//                                         paddingRight: "5px",
//                                     }}
//                                 ></i>
//                             </li>
//                         </Link>
//                         <Link to="/adminsimple" className="">
//                             <li
//                                 className={`a-ele sub ${acc2 ? "active-0 " : ""}`}
//                                 onClick={() => {
//                                     setacc(false);
//                                     setacc1(false);
//                                     setacc2(true);
//                                     setacc3(false);
//                                     setacc4(false);
//                                     setacc5(false);
//                                     setacc6(false);
//                                     setacc7(false);
//                                     setacc8(false);
//                                     // setacc9(false);
//                                     setacc10(false);
//                                     setacc11(false);

//                                     setacc16(false);
//                                     setacc17(false);
//                                     setacc18(false);
//                                     setacc19(false);
//                                     setacc20(false);
//                                 }}
//                             >
//                                 {" "}
//                                 PURCHASE ORDER {" "}
//                                 <i
//                                     class="fa fa-angle-right"
//                                     aria-hidden="true"
//                                     style={{
//                                         float: "right",
//                                         fontSize: "20px",
//                                         paddingRight: "5px",
//                                     }}
//                                 ></i>
//                             </li>
//                         </Link>

//                         <Link to="/adminsteps" className="">
//                             <li className={`a-ele sub ${acc4 ? "active-0 " : ""}`} onClick={() => {
//                                 setacc(false);
//                                 setacc1(false);
//                                 setacc2(false);
//                                 setacc3(false);
//                                 setacc4(true);
//                                 setacc5(false);
//                                 setacc6(false);
//                                 setacc7(false);
//                                 setacc8(false);
//                                 // setacc9(false);
//                                 setacc10(false);
//                                 setacc11(false);




//                                 setacc16(false);
//                                 setacc17(false);
//                                 setacc18(false);
//                                 setacc19(false)
//                                 setacc20(false)



//                             }}  >  PURCHASE LIST
//                                 <i
//                                     class="fa fa-angle-right"
//                                     aria-hidden="true"
//                                     style={{
//                                         float: "right",
//                                         fontSize: "20px",
//                                         paddingRight: "5px",
//                                     }}
//                                 ></i>
//                             </li>
//                         </Link>
//                     </div>
//                 )}
//                 <Link to="">
//                     <li
//                         className={`a-ele ${acc5 ? "active-0" : "null"}`}
//                         onClick={() => {
//                             setacc(false);
//                             setacc1(false);
//                             setacc2(false);
//                             setacc3(false);
//                             setacc4(false);
//                             setacc5(true);
//                             setacc6(false);
//                             setacc7(false);
//                             setacc8(false);
//                             // setacc9(false);
//                             setacc10(false);
//                             setacc11(false);

//                             setacc16(false);
//                             setacc17(false);
//                             setacc18(false);
//                             setacc19(false);
//                             setacc20(false);

//                             handleClick2(true);
//                         }}
//                     >
//                         {" "}
//                         RETURN
//                         <i
//                             class="fa fa-caret-down"
//                             aria-hidden="true"
//                             style={{ float: "right", fontSize: "20px", paddingRight: "5px" }}
//                         ></i>
//                     </li>
//                 </Link>
//                 {isShown2 && (
//                     <div>
//                         <Link to="/admincourse" className="">
//                             <li
//                                 className={`a-ele sub ${acc6 ? "active-0 " : ""}`}
//                                 onClick={() => {
//                                     setacc(false);
//                                     setacc1(false);
//                                     setacc2(false);
//                                     setacc3(false);
//                                     setacc4(false);
//                                     setacc5(false);
//                                     setacc6(true);
//                                     setacc7(false);
//                                     setacc8(false);
//                                     // setacc9(false);
//                                     setacc10(false);

//                                     setacc11(false);

//                                     setacc16(false);
//                                     setacc17(false);
//                                     setacc18(false);
//                                     setacc19(false);
//                                     setacc20(false);
//                                 }}
//                             >
//                                 {" "}
//                                 ADD WASTAGE RETURN{" "}
//                                 <i
//                                     class="fa fa-angle-right"
//                                     aria-hidden="true"
//                                     style={{
//                                         float: "right",
//                                         fontSize: "20px",
//                                         paddingRight: "5px",
//                                     }}
//                                 ></i>
//                             </li>
//                         </Link>
//                         <Link to="/adminbookedcourse" className="">
//                             <li
//                                 className={`a-ele sub ${acc6 ? "active-0 " : ""}`}
//                                 onClick={() => {
//                                     setacc(false);
//                                     setacc1(false);
//                                     setacc2(false);
//                                     setacc3(false);
//                                     setacc4(false);
//                                     setacc5(false);
//                                     setacc6(true);
//                                     setacc7(false);
//                                     setacc8(false);
//                                     // setacc9(false);
//                                     setacc10(false);

//                                     setacc11(false);

//                                     setacc16(false);
//                                     setacc17(false);
//                                     setacc18(false);
//                                     setacc19(false);
//                                     setacc20(false);
//                                 }}
//                             >
//                                 {" "}
//                                 WASTAGE RETURN LIST{" "}
//                                 <i
//                                     class="fa fa-angle-right"
//                                     aria-hidden="true"
//                                     style={{
//                                         float: "right",
//                                         fontSize: "20px",
//                                         paddingRight: "5px",
//                                     }}
//                                 ></i>
//                             </li>
//                         </Link>
//                         {/* <Link to="/adminwhychooseus" className="">
//               <li className={`a-ele sub ${acc6 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(true);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);



//                 setacc11(false);

//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false)
//                 setacc20(false)
//               }}  >WHY CHOOSE US
//               </li>
//             </Link>
//             <Link to="/admingallery " className="">
//               <li className={`a-ele sub ${acc7 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(false);
//                 setacc7(true);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);



//                 setacc11(false);

//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false)
//                 setacc20(false)
//               }}  > GALLERY
//               </li>
//             </Link> */}
//                     </div>
//                 )}
//                 {/* <Link to="/admingallery">
//                     <li
//                         className={`a-ele ${acc20 ? "active-0 " : "null"}`}
//                         onClick={() => {
//                             setacc(false);
//                             setacc1(false);
//                             setacc2(false);
//                             setacc3(false);
//                             setacc4(false);
//                             setacc5(false);
//                             setacc7(false);
//                             setacc8(false);
//                             // setacc9(false);
//                             setacc10(false);

//                             setacc11(false);

//                             setacc16(false);
//                             setacc17(false);
//                             setacc18(false);
//                             setacc19(false);
//                             setacc20(true);
//                         }}
//                     >
//                         CUSTOMER{" "}
//                         <i
//                             class="fa fa-angle-right"
//                             aria-hidden="true"
//                             style={{
//                                 float: "right",
//                                 fontSize: "20px",
//                                 paddingRight: "5px",
//                             }}
//                         ></i>
//                     </li>
//                 </Link> */}
//                 <Link to="" className="">
//                     <li
//                         className={`a-ele ${acc8 ? "active-0 " : ""}`}
//                         onClick={() => {
//                             setacc(false);
//                             setacc1(false);
//                             setacc2(false);
//                             setacc3(false);
//                             setacc4(false);
//                             setacc5(false);
//                             setacc6(false);
//                             setacc7(false);
//                             setacc8(true);
//                             // setacc9(false);
//                             setacc10(false);

//                             setacc11(false);

//                             setacc16(false);
//                             setacc17(false);
//                             setacc18(false);
//                             setacc19(false);
//                             setacc20(false);

//                             handleClick(true);
//                         }}
//                     >
//                         CUSTOMER
//                         <i
//                             class="fa fa-caret-down"
//                             aria-hidden="true"
//                             style={{ float: "right", fontSize: "20px", paddingRight: "5px" }}
//                         ></i>
//                     </li>
//                 </Link>

//                 {isShown && (
//                     <div>
//                         <Link to="/adminblogslider">
//                             <li
//                                 className={`a-ele sub ${acc9 ? "active-0 " : ""}`}
//                                 onClick={() => {
//                                     setacc(false);
//                                     setacc1(false);
//                                     setacc2(false);
//                                     setacc3(false);
//                                     setacc4(false);
//                                     setacc5(false);
//                                     setacc6(false);
//                                     setacc7(false);
//                                     setacc8(false);
//                                     // setacc9(true);
//                                     setacc10(false);

//                                     setacc11(false);

//                                     setacc16(false);
//                                     setacc17(false);
//                                     setacc18(false);
//                                     setacc19(false);
//                                     setacc20(false);
//                                 }}
//                             >
//                                 ADD CUSTOMER
//                                 <i
//                                     class="fa fa-angle-right"
//                                     aria-hidden="true"
//                                     style={{
//                                         float: "right",
//                                         fontSize: "20px",
//                                         paddingRight: "5px",
//                                     }}
//                                 ></i>
//                             </li>
//                         </Link>
//                         {/* <Link to="/adminsubjective" className="">
//               <li className={`a-ele sub ${acc10 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(false);
//                 setacc7(false);
//                 setacc8(false);
//                 setacc10(true);
//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false)
//                 setacc20(false)
//               }}  >  SUBJECTIVE TEST
//               </li>
//             </Link> */}
//                         <Link to="/adminblog" className="">
//                             <li
//                                 className={`a-ele sub ${acc11 ? "active-0 " : ""}`}
//                                 onClick={() => {
//                                     setacc(false);
//                                     setacc1(false);
//                                     setacc2(false);
//                                     setacc3(false);
//                                     setacc4(false);
//                                     setacc5(false);
//                                     setacc6(false);
//                                     setacc7(false);
//                                     setacc8(false);
//                                     // setacc9(false);
//                                     setacc10(false);
//                                     setacc11(true);

//                                     setacc16(false);
//                                     setacc17(false);
//                                     setacc18(false);
//                                     setacc19(false);
//                                     setacc20(false);
//                                 }}
//                             >
//                                 {" "}
//                                  CUSTOMER LIST
//                                 <i
//                                     class="fa fa-angle-right"
//                                     aria-hidden="true"
//                                     style={{
//                                         float: "right",
//                                         fontSize: "20px",
//                                         paddingRight: "5px",
//                                     }}
//                                 ></i>
//                             </li>
//                         </Link>
//                     </div>
//                 )}
//                 {/* <Link to="">
//           <li className={`a-ele ${acc21 ? "active-0 " : "null"}`} onClick={() => {
//             setacc(false);
//             setacc1(false);
//             setacc2(true);
//             setacc3(false);
//             setacc4(false);
//             setacc5(false);
//             setacc6(false);
//             setacc7(false);
//             setacc8(false);
//             // setacc9(false);
//             setacc10(false);



//             setacc11(false);

//             setacc16(false);
//             setacc17(false);
//             setacc18(false);
//             setacc19(false);
//             setacc20(false);
//             setacc21(true)


//             handleClick4(true)

//           }} style={{ paddingTop: "16px" }}>TUTION

//           </li>
//         </Link> */}

//                 {isShown4 && (
//                     <div>
//                         {/* <Link to="/admintution" className="">
//                             <li
//                                 className={`a-ele sub ${acc22 ? "active-0 " : ""}`}
//                                 onClick={() => {
//                                     setacc(false);
//                                     setacc1(false);
//                                     setacc2(false);
//                                     setacc3(false);
//                                     setacc4(false);
//                                     setacc5(false);
//                                     setacc6(false);
//                                     setacc7(false);
//                                     setacc8(false);
//                                     // setacc9(false);
//                                     setacc10(false);

//                                     setacc11(false);

//                                     setacc16(false);
//                                     setacc17(false);
//                                     setacc18(false);
//                                     setacc19(false);
//                                     setacc20(false);
//                                     setacc21(false);
//                                     setacc22(true);
//                                 }}
//                             >
//                                 {" "}
//                                 TUTION CONTENTS
//                             </li>
//                         </Link> */}
//                         {/* <Link to="/admintutiononline" className="">
//                             <li
//                                 className={`a-ele sub ${acc22 ? "active-0 " : ""}`}
//                                 onClick={() => {
//                                     setacc(false);
//                                     setacc1(false);
//                                     setacc2(false);
//                                     setacc3(false);
//                                     setacc4(false);
//                                     setacc5(false);
//                                     setacc6(false);
//                                     setacc7(false);
//                                     setacc8(false);
//                                     // setacc9(false);
//                                     setacc10(false);

//                                     setacc11(false);

//                                     setacc16(false);
//                                     setacc17(false);
//                                     setacc18(false);
//                                     setacc19(false);
//                                     setacc20(false);
//                                     setacc21(false);
//                                     setacc22(true);
//                                 }}
//                             >
//                                 {" "}
//                                 ONLINE
//                             </li>
//                         </Link> */}
//                         {/* <Link to="/admnhometution" className="">
//                             <li
//                                 className={`a-ele sub ${acc23 ? "active-0 " : ""}`}
//                                 onClick={() => {
//                                     setacc(true);
//                                     setacc1(false);
//                                     setacc2(false);
//                                     setacc3(false);
//                                     setacc4(false);
//                                     setacc5(false);
//                                     setacc6(false);
//                                     setacc7(false);
//                                     setacc8(false);
//                                     // setacc9(false);
//                                     setacc10(false);

//                                     setacc11(false);

//                                     setacc16(false);
//                                     setacc17(false);
//                                     setacc18(false);
//                                     setacc19(false);
//                                     setacc20(false);
//                                     setacc21(false);
//                                     setacc22(false);
//                                     setacc23(true);
//                                 }}
//                             >
//                                 {" "}
//                                 HOME TUTION/INSTITUTE
//                             </li>
//                         </Link> */}
//                         {/* <Link to="/autocriteria03" className="">
//               <li className={`a-ele sub ${acc24 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(true);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(false);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);



//                 setacc11(false);

//                 setacc16(false);
//                 setacc17(false);
//                 setacc16(false);
//                 setacc18(false);
//                 setacc19(false);
//                 setacc20(false);
//                 setacc21(false)
//                 setacc22(false)
//                 setacc23(false)
//                 setacc24(true)


//               }}  >  INSTITUTE
//               </li>
//             </Link> */}

//                         {/* <Link to="/autocriteria07" className="">
//               <li className={`a-ele sub ${acc19 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(false);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);
                
                
               
               
                
//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(true);
//                 setacc20(false);


//               }}  >  Criteria 7
//               </li>
//             </Link> 
//           </div>

//         )}


//         <Link to="">
//           <li className={`a-ele ${acc14 ? "active-0 " : "null"}`} onClick={() => {
//             setacc(false);
//             setacc1(false);
//             setacc2(true);
//             setacc3(false);
//             setacc4(false);
//             setacc5(false);
//             setacc6(false);
//             setacc7(false);
//             setacc8(false);
//             // setacc9(false);
//             setacc10(false);
            
//             setacc13(false)
//             setacc14(true);
//             setacc11(false);
            
//             setacc16(false);
//             setacc17(false);
//             setacc18(false);
//             setacc19(false);
//             setacc20(false);


//             handleClick1(true)

//           }} style={{paddingTop:"16px"}}>TEACHERS TRAINING AND PLACEMENTS

//           </li>
//         </Link>

//         {isShown1 && (
//           <div>
//             <Link to="/autocriteria01" className="">
//               <li className={`a-ele sub ${acc15 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(false);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);
                
                
               
//                 setacc11(false);
//                 setacc15(true);
//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false);
//                 setacc20(false);
//               }}  >  PLACEMENTS
//               </li>
//             </Link>
//             {/* <Link to="/autocriteria02" className="">
//               <li className={`a-ele sub ${acc16 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(true);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(false);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);
                
                
               
//                 setacc11(false);
                
//                 setacc16(true);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false);
//                 setacc20(false);
//               }}  >  Criteria 2
//               </li>
//             </Link>
//             <Link to="/autocriteria03" className="">
//               <li className={`a-ele sub ${acc17 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(true);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(false);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);
                
                
               
//                 setacc11(false);
                
//                 setacc16(false);
//                 setacc17(true);
//                 setacc16(false);
//                 setacc18(false);
//                 setacc19(false);
//                 setacc20(false);


//               }}  >  Criteria 3
//               </li>
//             </Link>
//             <Link to="/autocriteria05" className="">
//               <li className={`a-ele sub ${acc18 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(true);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(false);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);
                
                
               
//                 setacc11(false);
                
//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(true);
//                 setacc19(false);
//                 setacc20(false);




//               }}  >  Criteria 5
//               </li>
//             </Link> */}
//                         {/* <Link to="/autocriteria07" className="">
//               <li className={`a-ele sub ${acc19 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(false);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);
                
                
               
               
                
//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(true);
//                 setacc20(false);


//               }}  >  Criteria 7
//               </li>
//             </Link> */}
//                     </div>
//                 )}
//                 {/* <Link to="">
//           <li className={`a-ele ${acc5 ? "active-0" : "null"}`} onClick={() => {
//             setacc(false);
//             setacc1(false);
//             setacc2(false);
//             setacc3(false);
//             setacc4(false);
//             setacc5(true);
//             setacc6(false);
//             setacc7(false);
//             setacc8(false);
//             // setacc9(false);
//             setacc10(false);
//             setacc11(false);




//             setacc16(false);
//             setacc17(false);
//             setacc18(false);
//             setacc19(false);
//             setacc20(false);


//             handleClick5(true)
//           }}>  SKILL DEVELOPMENT
//           </li>
//         </Link> */}
//                 {/* {isShown5 && (
//           <div>
//             <Link to="/adminpdp" className="">
//               <li className={`a-ele sub ${acc6 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(true);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);



//                 setacc11(false);

//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false)
//                 setacc20(false)
//               }}  > PDP COURSE
//               </li>
//             </Link>
//             <Link to="/adminplacements" className="">
//               <li className={`a-ele sub ${acc6 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(true);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);



//                 setacc11(false);

//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false)
//                 setacc20(false)
//               }}  > PLACEMENTS
//               </li>
//             </Link>
//             <Link to="/admincompanies " className="">
//               <li className={`a-ele sub ${acc7 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(false);
//                 setacc7(true);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);



//                 setacc11(false);

//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false)
//                 setacc20(false)
//               }}  > COMPANIES
//               </li>
//             </Link>

//           </div>
//         )} */}
//                 {/* <Link to="">
//           <li className={`a-ele ${acc5 ? "active-0" : "null"}`} onClick={() => {
//             setacc(false);
//             setacc1(false);
//             setacc2(false);
//             setacc3(false);
//             setacc4(false);
//             setacc5(true);
//             setacc6(false);
//             setacc7(false);
//             setacc8(false);
//             // setacc9(false);
//             setacc10(false);
//             setacc11(false);




//             setacc16(false);
//             setacc17(false);
//             setacc18(false);
//             setacc19(false);
//             setacc20(false);


//             handleClick6(true)
//           }}>  TEACHERS TRAINING & PLACEMENTS
//           </li>
//         </Link> */}
//                 {/* {isShown6 && (
//           <div>
//             <Link to="/admintpcontent" className="">
//               <li className={`a-ele sub ${acc6 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(true);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);



//                 setacc11(false);

//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false)
//                 setacc20(false)
//               }}  > TRAINING & PLACEMENTS CONTENT
//               </li>
//             </Link>
//             <Link to="/admincertificates" className="">
//               <li className={`a-ele sub ${acc6 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(true);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);



//                 setacc11(false);

//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false)
//                 setacc20(false)
//               }}  > CERTIFICATES
//               </li>
//             </Link>
//             <Link to="/admintraining" className="">
//               <li className={`a-ele sub ${acc6 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(true);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);



//                 setacc11(false);

//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false)
//                 setacc20(false)
//               }}  > ENQUIRY
//               </li>
//             </Link>


//           </div>
//         )} */}
//                 {/* <Link to="">
//           <li className={`a-ele ${acc5 ? "active-0" : "null"}`} onClick={() => {
//             setacc(false);
//             setacc1(false);
//             setacc2(false);
//             setacc3(false);
//             setacc4(false);
//             setacc5(true);
//             setacc6(false);
//             setacc7(false);
//             setacc8(false);
//             // setacc9(false);
//             setacc10(false);
//             setacc11(false);




//             setacc16(false);
//             setacc17(false);
//             setacc18(false);
//             setacc19(false);
//             setacc20(false);


//             handleClick7(true)
//           }}>  BECOME A TUTOR
//           </li>
//         </Link> */}
//                 {/* {isShown7 && (
//           <div>
//             <Link to="/adminbecomeatutorcontent" className="">
//               <li className={`a-ele sub ${acc6 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(true);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);



//                 setacc11(false);

//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false)
//                 setacc20(false)
//               }}  > BECOME A TUTOR CONTENT
//               </li>
//             </Link>
//             <Link to="/adminbecomeatutor" className="">
//               <li className={`a-ele sub ${acc6 ? "active-0 " : ""}`} onClick={() => {
//                 setacc(false);
//                 setacc1(false);
//                 setacc2(false);
//                 setacc3(false);
//                 setacc4(false);
//                 setacc5(false);
//                 setacc6(true);
//                 setacc7(false);
//                 setacc8(false);
//                 // setacc9(false);
//                 setacc10(false);



//                 setacc11(false);

//                 setacc16(false);
//                 setacc17(false);
//                 setacc18(false);
//                 setacc19(false)
//                 setacc20(false)
//               }}  > ENQUIRY
//               </li>
//             </Link>


//           </div>
//         )} */}
//                 <Link to="/admincontactus">
//                     <li
//                         className={`a-ele ${acc20 ? "active-0 " : "null"}`}
//                         onClick={() => {
//                             setacc(false);
//                             setacc1(false);
//                             setacc2(false);
//                             setacc3(false);
//                             setacc4(false);
//                             setacc5(false);
//                             setacc7(false);
//                             setacc8(false);
//                             // setacc9(false);
//                             setacc10(false);

//                             setacc11(false);

//                             setacc16(false);
//                             setacc17(false);
//                             setacc18(false);
//                             setacc19(false);
//                             setacc20(true);
//                         }}
//                     >
//                         CONTACT US{" "}
//                         <i
//                             class="fa fa-angle-right"
//                             aria-hidden="true"
//                             style={{
//                                 float: "right",
//                                 fontSize: "20px",
//                                 paddingRight: "5px",
//                             }}
//                         ></i>
//                     </li>
//                 </Link>
//                 {/* <Link to="/admincomment">
//                     <li
//                         className={`a-ele ${acc20 ? "active-0 " : "null"}`}
//                         onClick={() => {
//                             setacc(false);
//                             setacc1(false);
//                             setacc2(false);
//                             setacc3(false);
//                             setacc4(false);
//                             setacc5(false);
//                             setacc7(false);
//                             setacc8(false);
//                             // setacc9(false);
//                             setacc10(false);

//                             setacc11(false);

//                             setacc16(false);
//                             setacc17(false);
//                             setacc18(false);
//                             setacc19(false);
//                             setacc20(true);
//                         }}
//                     >
//                         COMMENTS{" "}
//                         <i
//                             class="fa fa-angle-right"
//                             aria-hidden="true"
//                             style={{
//                                 float: "right",
//                                 fontSize: "20px",
//                                 paddingRight: "5px",
//                             }}
//                         ></i>
//                     </li>
//                 </Link> */}
//                 {/* <Link to="/adminenquiry">
//                     <li
//                         className={`a-ele ${acc20 ? "active-0 " : "null"}`}
//                         onClick={() => {
//                             setacc(false);
//                             setacc1(false);
//                             setacc2(false);
//                             setacc3(false);
//                             setacc4(false);
//                             setacc5(false);
//                             setacc7(false);
//                             setacc8(false);
//                             // setacc9(false);
//                             setacc10(false);

//                             setacc11(false);

//                             setacc16(false);
//                             setacc17(false);
//                             setacc18(false);
//                             setacc19(false);
//                             setacc20(true);
//                         }}
//                     >
//                         ENQUIRY{" "}
//                         <i
//                             class="fa fa-angle-right"
//                             aria-hidden="true"
//                             style={{
//                                 float: "right",
//                                 fontSize: "20px",
//                                 paddingRight: "5px",
//                             }}
//                         ></i>
//                     </li>
//                 </Link> */}
//             </ul>
//         </div>
//     );
// }

// export default PharmacySidebar;
