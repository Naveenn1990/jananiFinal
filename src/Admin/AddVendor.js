import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import axios from "axios";

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
      formdata.set("vendortype", "PHARMACY");
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
  useEffect(() => {
    getAllVendors();
  }, []);

  return (
    <div>
      <div style={{ padding: "2%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "gray" }}>
          Vendor List
        </h6>
        <input
          type="text"
          placeholder="Search"
          style={{
            marginTop: "11px",
            padding: `6px 11px`,
            border: "1px solid #20958c",
          }}
        />
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
            {VendorList?.map((obj) => {
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
                      <MdDelete style={{ fontSize: "25px", color: "red" }} />
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
            })}
          </tbody>
        </Table>

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
      </div>
    </div>
  );
}
