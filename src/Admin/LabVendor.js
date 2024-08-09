import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiFillFileExcel, AiOutlinePlusCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { Pagination, Stack } from "@mui/material";
import exportFromJSON from "export-from-json";
import { FaRegEdit } from "react-icons/fa";
import ReactPaginate from "react-paginate";

export default function LabVendor() {
  const formdata = new FormData();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [View, setView] = useState({});
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

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

  const addVendor = async (e) => {
    e.preventDefault();
    try {
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
      formdata.set("VendorType", "Lab");
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
          setfname("");
          setlname("");
          setphone("");
          setemail("");
          setpassword("");
          setaddress1("");
          setpincode("");
          setcity("");
          setstate("");
          getAllVendors();
          handleClose();
        }
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const [VendorList, setVendorList] = useState([]);
  const getAllVendors = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/vendor/getvendorList"
      );
      if (res.status === 200) {
        setVendorList(
          res.data.allVendors?.filter((item) => item?.VendorType === "Lab")
        );
        setFilteredCatList(
          res.data.allVendors?.filter((item) => item?.VendorType === "Lab")
        );
     
      }
    } catch (error) {
      console.log(error);
      //   setVendorList(
      //     error.response.data.allVendors?.filter(
      //       (item) => item?.VendorType === "Lab"
      //     )
      //   );
    }
  };

  const updateVendor = async (e) => {
    e.preventDefault();
    try {
      formdata.set("fname", fname);
      formdata.set("lname", lname);
      formdata.set("phone", phone);
      formdata.set("email", email);
      formdata.set("address1", address1);
      formdata.set("pincode", pincode);
      formdata.set("city", city);
      formdata.set("state", state);
      formdata.set("profilePic", profilePic);
      formdata.set("identityCard", identityCard);
      formdata.set("medicalLicence", medicalLicence);
      formdata.set("VendorId", View?._id);
      const config = {
        url: "/vendor/UpdateVendor",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };
      await axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          setfname("");
          setlname("");
          setphone("");
          setemail("");
          setpassword("");
          setaddress1("");
          setpincode("");
          setcity("");
          setstate("");
          getAllVendors();
          handleClose1();
        }
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const deleteVendor = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/vendor/DeleteVendor/" + View?._id,
        method: "delete",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
      };
      await axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          setfname("");
          setlname("");
          setphone("");
          setemail("");
          setpassword("");
          setaddress1("");
          setpincode("");
          setcity("");
          setstate("");
          getAllVendors();
          handleClose2();
        }
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getAllVendors();
  }, []);

  //====search
  const [search, setSearch] = useState("");
  let [FilteredCatList, setFilteredCatList] = useState([]);
  function handleFilter() {
    if (search != "") {
      // setSearch(search);
      const filterTable = VendorList.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(search.toLowerCase())
        )
      );
      setFilteredCatList([...filterTable]);
    } else {
      // setSearch(search);
      // subadminList();
      setFilteredCatList([...VendorList]);
    }
  }

  useEffect(() => {
    handleFilter();
  }, [search]);
  //===================

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(FilteredCatList?.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("Lab vendor-list");

  const ExportToExcel = () => {
    if (fileName) {
      if (VendorList.length != 0) {
        exportFromJSON({
          data: JSON.parse(JSON.stringify(VendorList)),
          fileName,
          exportType,
        });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
    }
  };
  return (
    <div>
      <div style={{ padding: "2%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "gray" }}>
          Vendor List
        </h6>
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              placeholder="Search"
              style={{
                marginTop: "11px",
                padding: `6px 11px`,
                border: "1px solid #20958c",
              }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-4">
            <button
              style={{
                backgroundColor: "#20958c",
                color: "white",
                border: "none",
                fontSize: "12px",
                borderRadius: "4px",
                width: "94px",
                height: "40px",
              }}
              onClick={ExportToExcel}
            >
              EXPORT <AiFillFileExcel />
            </button>
          </div>
        </div>

        <Table responsive style={{ marginTop: "7px" }}>
          <thead>
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
            {FilteredCatList?.slice(
              pagesVisited,
              pagesVisited + usersPerPage
            )?.map((obj) => {
              return (
                <tr>
                  <td>{obj?.vendorId}</td>
                  <td>
                    <div className="d-flex">
                      <img
                        src={`http://localhost:8521/Vendor/${obj?.profilePic}`}
                        width={40}
                        height={40}
                        style={{ borderRadius: "50%", marginRight: "10px" }}
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
                    {obj?.address1}, {obj?.pincode}, {obj?.city}, {obj?.state}
                  </td>
                  <td>
                    <div className="d-flex align-item-center">
                      <FaRegEdit
                        style={{ fontSize: "25px", color: "blue" }}
                        onClick={() => {
                          setView(obj);
                          handleShow1();
                        }}
                      />
                      <MdDelete
                        style={{ fontSize: "25px", color: "red" }}
                        onClick={() => {
                          setView(obj);
                          handleShow2();
                        }}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <div style={{ float: "left" }} className="my-3 d-flex justify-end">
          <div style={{ display: "flex" }}>
            <p style={{ width: "100%", marginTop: "20px" }}>
              Total Count: {FilteredCatList?.length}
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
                  type="number"
                  placeholder="Vendor's Phone Number"
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
              <div className="col-lg-6 col-sm-12 mt-2">
                <input
                  type="password"
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
                onClick={handleClose}
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

        {/* update vendor modal */}
        <Modal size="lg" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Edit Vendor Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6 col-sm-12 mt-2">
                <input
                  placeholder={View.fname}
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
                  placeholder={View.lname}
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
                  type="number"
                  placeholder={View.phone}
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
                  placeholder={View.email}
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

              <div className="col-lg-12 col-sm-12 mt-2">
                <textarea
                  rows={3}
                  cols={10}
                  placeholder={View.address1}
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
                  placeholder={View.pincode}
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
                  placeholder={View.city}
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
                  placeholder={View.state}
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
                onClick={handleClose1}
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
                  updateVendor(e);
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* delete vendor modal */}
        <Modal size="lg" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Delete Vendor Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              Are You Sure? These details are being{" "}
              <span style={{ color: "red" }}>
                <b>removed</b>
              </span>{" "}
              paramanently?
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
                onClick={handleClose2}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  deleteVendor(e);
                }}
              >
                DELETE
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
