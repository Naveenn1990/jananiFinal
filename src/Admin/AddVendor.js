import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import { AiFillDelete, AiFillFileExcel } from "react-icons/ai";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddVendor() {
  const formdata = new FormData();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [address1, setaddress1] = useState("");
  const [pincode, setpincode] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [profilePic, setprofilePic] = useState({});
  const [identityCard, setidentityCard] = useState({});
  const [medicalLicence, setmedicalLicence] = useState({});

  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  function validatename(inputtxt) {
    var phoneno = /^[a-zA-Z ]{2,30}$/; // var no = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      alert("You have entered an invalid name!");
      return false;
    }
  }

  function phonenumber(inputtxt) {
    var phoneno = /^[6-9]\d{9}$/; // var no = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      alert("You have entered an invalid mobile number!");
      return false;
    }
  }

  function CheckPassword(inputtxt) {
    var decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if (inputtxt.match(decimal)) {
      return true;
    } else {
      alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character!"
      );
      return false;
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const addVendor = async (e) => {
    e.preventDefault();
    if (
      !fname ||
      !lname ||
      !phone ||
      !email ||
      !password ||
      !address1 ||
      !pincode ||
      !city ||
      !state ||
      !profilePic ||
      !identityCard ||
      !medicalLicence
    ) {
      alert("Please fill all the fields");
    } else {
      try {
        if (
          validatename(fname) &&
          ValidateEmail(email) &&
          phonenumber(phone) &&
          CheckPassword(password)
        ) {
          formdata.set("fname", fname);
          formdata.set("lname", lname);
          formdata.set("phone", phone);
          formdata.set("email", email);
          formdata.set("password", password);
          formdata.set("address1", address1);
          formdata.set("pincode", pincode);
          formdata.set("city", city);
          formdata.set("state", state);
          formdata.set("profilePic", profilePic);
          formdata.set("identityCard", identityCard);
          formdata.set("medicalLicence", medicalLicence);
          formdata.set("VendorType", "Pharmacy");
          const config = {
            url: "/vendor/addvendor",
            method: "post",
            baseURL: "http://localhost:8521/api",
            headers: { "content-type": "multipart/form-data" },
            data: formdata,
          };
          await axios(config).then((res) => {
            if (res.status === 201) {
              alert(res.data.success);
              window.location.reload();
            }
          });
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data.error);
      }
    }
  };

  const [data, setdata] = useState([]);
  const getAllVendors = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/vendor/getvendorList"
      );
      if (res.status === 200) {
        setdata(
          res.data.allVendors?.filter((item) => item?.VendorType === "Pharmacy")
        );
      }
    } catch (error) {
      console.log(error);
      // setVendorList(
      //   error.response.data.allVendors?.filter(
      //     (item) => item?.VendorType === "Pharmacy"
      //   )
      // );
    }
  };

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = (item) => {
    setShowEdit(true);
    setEditDate(item);
  };

  const [EditDate, setEditDate] = useState({});
  const [fname1, setfname1] = useState("");
  const [lname1, setlname1] = useState("");
  const [phone1, setphone1] = useState("");
  const [email1, setemail1] = useState("");
  const [password1, setpassword1] = useState("");
  const [address11, setaddress11] = useState("");
  const [pincode1, setpincode1] = useState("");
  const [city1, setcity1] = useState("");
  const [state1, setstate1] = useState("");
  const [profilePic1, setprofilePic1] = useState();
  const [identityCard1, setidentityCard1] = useState();
  const [medicalLicence1, setmedicalLicence1] = useState();

  const UpdateVendor = async (e) => {
    e.preventDefault();
    if (
      !fname1 &&
      !lname1 &&
      !phone1 &&
      !email1 &&
      // !password1 &&
      !address11 &&
      !pincode1 &&
      !city1 &&
      !state1 &&
      !profilePic1 &&
      !identityCard1 &&
      !medicalLicence1
    ) {
      alert("There is no changes to update");
    } else {
      try {
        const config = {
          url: "/vendor/UpdateVendor",
          method: "put",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "multipart/form-data" },
          data: {
            VendorId: EditDate?.vendorId,
            fname: fname1 ? fname1 : EditDate?.fname,
            lname: lname1 ? lname1 : EditDate?.lname,
            phone: phone1 ? phone1 : EditDate?.phone1,
            email: email1 ? email1 : EditDate?.email,
            // password: password1 ? password1 : EditDate?.password,
            pincode: pincode1 ? pincode1 : EditDate?.pincode1,
            city: city1 ? city1 : EditDate?.city,
            state: state1 ? state1 : EditDate?.state,
            address1: address11 ? address11 : EditDate?.address1,
            profilePic: profilePic1 ? profilePic1 : EditDate?.profilePic,
            identityCard: identityCard1
              ? identityCard1
              : EditDate?.identityCard,
            medicalLicence: medicalLicence1
              ? medicalLicence1
              : EditDate?.medicalLicence1,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          alert("Data updated successfully");
          window.location.reload();
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  useEffect(() => {
    getAllVendors();
  }, []);

  const [deleteData, setdeleteData] = useState({});
  const [showdelete, setShowdelete] = useState(false);
  const handleClosedelete = () => setShowdelete(false);
  const handleShowdelete = (data) => {
    setShowdelete(true);
    setdeleteData(data);
  };

  const [BlockData, setBlockData] = useState({});
  const [showBlock, setShowBlock] = useState(false);
  const handleCloseBlock = () => setShowBlock(false);
  const handleShowBlock = (data) => {
    setShowBlock(true);
    setBlockData(data);
  };

  const [UnblockData, setUnblockData] = useState({});
  const [showUnblock, setShowUnblock] = useState(false);
  const handleCloseUnblock = () => setShowUnblock(false);
  const handleShowUnblock = (data) => {
    setShowUnblock(true);
    setUnblockData(data);
  };

  const deleteVendor = async () => {
    try {
      const config = {
        url: "/vendor/DeleteVendor/" + deleteData?._id,
        method: "delete",
        baseURL: "http://localhost:8521/api",
        // headers: { "content-type": "application/json" },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert("Vendor deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const BlockVendor = async () => {
    try {
      const config = {
        url: "/vendor/BlockVendor",
        method: "post",
        baseURL: "http://localhost:8521/api",
        // headers: { "content-type": "application/json" },
        data: {
          vendorid: BlockData?._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert("Vendor blocked successfully");
        getAllVendors();
        handleCloseBlock();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const UnBlockVendor = async () => {
    try {
      const config = {
        url: "/vendor/UnBlockVendor",
        method: "post",
        baseURL: "http://localhost:8521/api",
        // headers: { "content-type": "application/json" },
        data: {
          vendorid: UnblockData?._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert("Vednor unblocked successfully");
        getAllVendors();
        handleCloseUnblock();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data?.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = data?.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      settableFilter([...filterTable]);
    } else {
      setSearch(e.target.value);
      setdata([...data]);
    }
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("Doctors");

  const ExportToExcel = () => {
    if (fileName) {
      if (data?.length != 0) {
        exportFromJSON({ data, fileName, exportType });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
    }
  };

  console.log("data", data);
  return (
    <div>
      <div style={{ padding: "2%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "gray" }}>
          Vendor List
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
            marginBottom: "2%",
          }}
        >
          <input
            placeholder="Search"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
            onChange={handleFilter}
          />
          <button
            style={{
              backgroundColor: "#20958c",
              color: "white",
              border: "none",
              fontSize: "12px",
              borderRadius: "4px",
            }}
            onClick={ExportToExcel}
          >
            EXPORT <AiFillFileExcel />
          </button>
        </div>
        <Table responsive style={{ marginTop: "7px" }}>
          <thead>
            <th>Sl No.</th>
            <th>ID</th>
            <th>Vendor Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Identity Card</th>
            <th>Medical Licence</th>
            <th>Address</th>
            <th>Action</th>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((obj, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{obj?.vendorId}</td>
                        <td>
                          <div className="d-flex">
                            <img
                              src={`http://localhost:8521/Vendor/${obj?.profilePic}`}
                              width={40}
                              height={40}
                              style={{
                                borderRadius: "50%",
                                marginRight: "10px",
                              }}
                              alt="Identity"
                            />
                            <span>
                              {obj?.fname} {obj?.lname}
                            </span>
                          </div>
                        </td>
                        <td>{obj?.phone}</td>
                        <td>{obj?.email}</td>
                        <td>
                          <img
                            src={`http://localhost:8521/Vendor/${obj?.identityCard}`}
                            width={90}
                            height={90}
                            alt="Identity"
                          />
                        </td>
                        <td>
                          <img
                            src={`http://localhost:8521/Vendor/${obj?.medicalLicence}`}
                            width={90}
                            height={90}
                            alt="Medical-licence"
                          />
                        </td>
                        <td>
                          {obj?.address1}, {obj?.pincode}, {obj?.city},{" "}
                          {obj?.state}
                        </td>
                        <td>
                          <div className="d-flex align-item-center">
                            <MdDelete
                              style={{ fontSize: "25px", color: "red" }}
                            />
                            <button
                              style={{
                                backgroundColor: "#20958c",
                                border: "1px solid #20958c",
                                color: "white",
                                borderRadius: "4px",
                                width: "57px",
                              }}
                            >
                              Block
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((obj, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{obj?.vendorId}</td>
                        <td>
                          <div className="d-flex">
                            <img
                              src={`http://localhost:8521/Vendor/${obj?.profilePic}`}
                              width={40}
                              height={40}
                              style={{
                                borderRadius: "50%",
                                marginRight: "10px",
                              }}
                              alt="Identity"
                            />
                            <span>
                              {obj?.fname} {obj?.lname}
                            </span>
                          </div>
                        </td>
                        <td>{obj?.phone}</td>
                        <td>{obj?.email}</td>
                        <td>
                          <img
                            src={`http://localhost:8521/Vendor/${obj?.identityCard}`}
                            width={90}
                            height={90}
                            alt="Identity"
                          />
                        </td>
                        <td>
                          <img
                            src={`http://localhost:8521/Vendor/${obj?.medicalLicence}`}
                            width={90}
                            height={90}
                            alt="Medical-licence"
                          />
                        </td>
                        <td>
                          {obj?.address1}, {obj?.pincode}, {obj?.city},{" "}
                          {obj?.state}
                        </td>
                        <td>
                          <div className="d-flex align-item-center">
                            <MdDelete
                              style={{
                                fontSize: "25px",
                                color: "red",
                                marginTop: "5px",
                              }}
                              onClick={() => handleShowdelete(obj)}
                            />
                            <button
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                              }}
                              onClick={() => handleShowEdit(obj)}
                            >
                              <i
                                class="fas fa-edit"
                                style={{
                                  marginRight: "2%",
                                }}
                              ></i>
                            </button>

                            {obj?.isblocked ? (
                              <Button
                                style={{
                                  backgroundColor: "#20958c",
                                  color: "white",
                                }}
                                onClick={() => handleShowUnblock(obj)}
                              >
                                Un-Block
                              </Button>
                            ) : (
                              <Button
                                style={{
                                  color: "white",
                                }}
                                onClick={() => handleShowBlock(obj)}
                              >
                                Block
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
          </tbody>
        </Table>
        <div style={{ display: "flex" }}>
          <p style={{ width: "100%", marginTop: "20px" }}>
            Total Count: {data?.length}
          </p>
          <ReactPaginate
            previousLabel={"Back"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>

        <AiOutlinePlusCircle className="AddIcon1" onClick={handleShow} />

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Vendor Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6 col-sm-12 mt-2">
                <input
                  placeholder="Vendor's First Name"
                  value={fname}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setfname(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <input
                  placeholder="Vendor's last Name"
                  value={lname}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setlname(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <input
                  type="tele"
                  placeholder="Vendor's Phone Number"
                  maxLength={10}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  value={phone}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setphone(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <input
                  type="email"
                  placeholder="Vendor's Email"
                  value={email}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setemail(event.target.value)}
                ></input>
              </div>
              <div
                className="col-lg-6 col-sm-12 mt-2"
                style={{ display: "flex" }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Vendor's Password"
                  value={password}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setpassword(event.target.value)}
                ></input>
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  // className="doctor-login-eye"
                  onClick={togglePasswordVisibility}
                  style={{ marginLeft: "-32px", marginTop: "10px" }}
                />
              </div>
              <div className="col-lg-12 col-sm-12 mt-2">
                <textarea
                  rows={3}
                  cols={10}
                  placeholder="Address 1"
                  value={address1}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setaddress1(event.target.value)}
                ></textarea>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <input
                  type="number"
                  placeholder="Pincode"
                  value={pincode}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setpincode(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setcity(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setstate(event.target.value)}
                ></input>
              </div>

              <div className="col-lg-6 col-sm-12 mt-2"></div>
              <div className="col-lg-6 mt-2">
                <div style={{ color: "white", fontWeight: "600" }}>
                  Profile Image
                </div>
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setprofilePic(event.target.files[0])}
                ></input>
              </div>
              <div className="col-lg-6 mt-2">
                <div style={{ color: "white", fontWeight: "600" }}>
                  Identity Card
                </div>
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setidentityCard(event.target.files[0])}
                ></input>
              </div>
              <div className="col-lg-12 col-sm-12 mt-2">
                <div style={{ color: "white", fontWeight: "600" }}>
                  Medical Licence
                </div>
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setmedicalLicence(event.target.files[0])}
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => setShow(false)}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  addVendor(e);
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal size="lg" show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header>
            <Modal.Title>Edit Vendor Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6 col-sm-12 mt-2">
                <label style={{ color: "white" }}>Vendor's First Name</label>
                <input
                  placeholder={EditDate?.fname}
                  value={fname1}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setfname1(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label style={{ color: "white" }}>Vendor's last Name</label>
                <input
                  placeholder={EditDate?.lname}
                  value={lname1}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setlname1(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label style={{ color: "white" }}>Vendor's Phone Number</label>
                <input
                  type="tele"
                  placeholder={EditDate?.phone}
                  maxLength={10}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  value={phone1}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setphone1(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label style={{ color: "white" }}>Vendor's Email</label>
                <input
                  type="email"
                  placeholder={EditDate?.email}
                  value={email1}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setemail1(event.target.value)}
                ></input>
              </div>
              {/* <div className="col-lg-6 col-sm-12 mt-2">
                <label style={{ color: "white" }}>Vendor's Password</label>
                <br></br>
                <input
                  type={showPassword1 ? "text" : "password"}
                  placeholder="*********"
                  value={password1}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setpassword1(event.target.value)}
                ></input>
                <FontAwesomeIcon
                  icon={showPassword1 ? faEye : faEyeSlash}
                  // className="doctor-login-eye"
                  onClick={togglePasswordVisibility1}
                  style={{ marginLeft: "-32px", marginTop: "10px" }}
                />
              </div> */}
              <div className="col-lg-12 col-sm-12 mt-2">
                <label style={{ color: "white" }}>Address 1</label>
                <textarea
                  rows={3}
                  cols={10}
                  placeholder={EditDate?.address1}
                  value={address11}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setaddress11(event.target.value)}
                ></textarea>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label style={{ color: "white" }}>Pincode</label>
                <input
                  type="number"
                  placeholder={EditDate?.pincode}
                  value={pincode1}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setpincode1(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label style={{ color: "white" }}>City</label>
                <input
                  type="text"
                  placeholder={EditDate?.city}
                  value={city1}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setcity1(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label style={{ color: "white" }}>State</label>
                <input
                  type="text"
                  placeholder={EditDate?.state}
                  value={state1}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setstate1(event.target.value)}
                ></input>
              </div>

              <div className="col-lg-6 col-sm-12 mt-2"></div>
              <div className="col-lg-6 mt-2">
                <div style={{ color: "white", fontWeight: "600" }}>
                  Profile Image
                </div>
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setprofilePic1(event.target.files[0])}
                ></input>
              </div>
              <div className="col-lg-6 mt-2">
                <div style={{ color: "white", fontWeight: "600" }}>
                  Identity Card
                </div>
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setidentityCard1(event.target.files[0])}
                ></input>
              </div>
              <div className="col-lg-12 col-sm-12 mt-2">
                <div style={{ color: "white", fontWeight: "600" }}>
                  Medical Licence
                </div>
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) =>
                    setmedicalLicence1(event.target.files[0])
                  }
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => setShowEdit(false)}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  UpdateVendor(e);
                }}
              >
                UPDATE
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal show={showdelete} onHide={handleClosedelete}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <p style={{ color: "white", textAlign: "center" }}>
              Are you sure you want to delete Vendor
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={handleClosedelete}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={deleteVendor}
              >
                DELETE
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal show={showBlock} onHide={handleCloseBlock}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <p style={{ color: "white", textAlign: "center" }}>
              Are you sure you want to Block Vendor
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={handleCloseBlock}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={BlockVendor}
              >
                BLOCK
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal show={showUnblock} onHide={handleCloseUnblock}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <p style={{ color: "white", textAlign: "center" }}>
              Are you sure you want to Un-Block Vendor
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={handleCloseUnblock}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={UnBlockVendor}
              >
                UN-BLOCK
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
