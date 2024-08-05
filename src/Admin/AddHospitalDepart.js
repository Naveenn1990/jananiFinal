import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiFillEye,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillEyeFill, BsImages } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { IoMdImages } from "react-icons/io";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";

export default function AddHospitalDepartment() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const [DepartmentName, setDepartmentName] = useState("");
  const [Description, setDescription] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [DepartmentImg, setDepartmentImg] = useState("");

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

  // Add
  const AddDepartment = async () => {
    if (
      !DepartmentName ||
      !Description ||
      !Email ||
      !Number ||
      !DepartmentImg
    ) {
      alert("Please fill all the fields");
    } else {
      try {
        if (ValidateEmail(Email) && phonenumber(Number)) {
          const config = {
            url: "/admin/addDepartment",
            baseURL: "http://localhost:8521/api",
            method: "post",
            headers: { "Content-Type": "multipart/form-data" },
            data: {
              DepartmentName: DepartmentName,
              Description: Description,
              Email: Email,
              Number: Number,
              DepartmentImg: DepartmentImg,
            },
          };
          const res = await axios(config);
          if (res.status === 200) {
            alert(res.data.success);
            handleClose();
            GetDepartment();
          }
        }
      } catch (error) {
        alert(error.response.data.error);
      }
    }
  };

  // Get
  const [data, setdata] = useState([]);
  const GetDepartment = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getDepartment"
      );
      if (res.status === 200) {
        setdata(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Edit
  const [EditDepartmentData, setEditDepartmentData] = useState({});
  const [DepartmentName1, setDepartmentName1] = useState("");
  const [Description1, setDescription1] = useState("");
  const [Email1, setEmail1] = useState("");
  const [Number1, setNumber1] = useState("");
  const [DepartmentImg1, setDepartmentImg1] = useState("");

  const handleClose1 = () => setShow1(false);
  const handleShow1 = (id) => {
    setShow1(true);
    setEditDepartmentData(id);
  };
  const EditDepartment = async () => {
    if (
      !DepartmentName1 &&
      !Description1 &&
      !Email1 &&
      !Number1 &&
      !DepartmentImg1
    ) {
      alert("There is no changes to update");
    } else {
      try {
        const config = {
          url: "/admin/editDepartment/" + EditDepartmentData?._id,
          baseURL: "http://localhost:8521/api",
          method: "put",
          headers: { "Content-Type": "multipart/form-data" },
          data: {
            DepartmentName: DepartmentName1
              ? DepartmentName1
              : EditDepartmentData?.DepartmentName,
            Description: Description1
              ? Description1
              : EditDepartmentData?.Description,
            Email: Email1 ? Email1 : EditDepartmentData?.Email,
            Number: Number1 ? Number1 : EditDepartmentData?.Number,
            DepartmentImg: DepartmentImg1
              ? DepartmentImg1
              : EditDepartmentData?.DepartmentImg,
          },
        };
        const res = await axios(config);
        if (res.status === 200) {
          alert(res.data.success);
          handleClose1();
          GetDepartment();
        }
      } catch (error) {
        alert(error.response.data.error);
      }
    }
  };

  // Delete
  const DeleteDepartment = async (id) => {
    try {
      const config = {
        url: "admin/deleteDepartment/" + id,
        baseURL: "http://localhost:8521/api/",
        method: "delete",
        headers: { "Content-Type": "application/json" },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        GetDepartment();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    GetDepartment();
  }, []);

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
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

  const [fileName, setfileName] = useState("Blog");

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
      <div style={{ padding: "1%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            Hospital Department
          </h6>
        </div>

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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
          </div>
        </div>

        <Table responsive style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.No</th>
              <th>Department Name</th>
              <th width="400px">Description</th>
              <th>Email</th>
              <th>Number</th>
              <th>Department Image</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, i) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{i + 1}</td>
                        <td>{item?.DepartmentName}</td>
                        <td>{parse(`<div>${item?.Description}</div>`)}</td>
                        <td>{item?.Email}</td>
                        <td>{item?.Number}</td>
                        <td>
                          <img
                            src={`http://localhost:8521/HospitalDepartment/${item?.DepartmentImg}`}
                            style={{ width: "150px", height: "150px" }}
                          />
                        </td>
                        <td>
                          <div className="d-flex gap-5 fs-5">
                            <MdEdit
                              style={{ color: "#20958c" }}
                              onClick={() => {
                                handleShow1(item);
                              }}
                            />
                            <AiFillDelete
                              onClick={() => DeleteDepartment(item?._id)}
                              style={{ color: "red" }}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, i) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{i + 1}</td>
                        <td>{item?.DepartmentName}</td>
                        <td>{parse(`<div>${item?.Description}</div>`)}</td>
                        <td>{item?.Email}</td>
                        <td>{item?.Number}</td>
                        <td>
                          <img
                            src={`http://localhost:8521/HospitalDepartment/${item?.DepartmentImg}`}
                            style={{ width: "150px", height: "150px" }}
                          />
                        </td>
                        <td>
                          <div className="d-flex gap-5 fs-5">
                            <MdEdit
                              style={{ color: "#20958c" }}
                              onClick={() => {
                                handleShow1(item);
                              }}
                            />
                            <AiFillDelete
                              onClick={() => DeleteDepartment(item?._id)}
                              style={{ color: "red" }}
                            />
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
      </div>

      {/* Add modal */}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <input
                placeholder="Department Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setDepartmentName(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Email"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Contact Number"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                type="tele"
                maxLength={10}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => setNumber(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6 mb-4" htmlFor="upload">
              <input
                type="file"
                id="upload"
                accept="image/*"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setDepartmentImg(e.target.files[0])}
              ></input>
            </div>

            <div className="col-lg-12">
              <CKEditor
                editor={ClassicEditor}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setDescription(data);
                }}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button variant="warning" onClick={AddDepartment}>
              Add Department
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal size="lg" show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <label style={{ color: "white" }}>Department Name</label>
              <input
                placeholder={EditDepartmentData?.DepartmentName}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setDepartmentName1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <label style={{ color: "white" }}>Email</label>
              <input
                placeholder={EditDepartmentData?.Email}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setEmail1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <label style={{ color: "white" }}>Contact Number </label>
              <input
                placeholder={EditDepartmentData?.Number}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                type="tele"
                maxLength={10}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => setNumber1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6 mb-4" htmlFor="upload">
              <label style={{ color: "white" }}>Image</label>
              <input
                type="file"
                id="upload"
                accept="image/*"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setDepartmentImg1(e.target.files[0])}
              ></input>
            </div>

            <div className="col-lg-12">
              <label style={{ color: "white" }}>Description</label>
              <CKEditor
                editor={ClassicEditor}
                data={EditDepartmentData?.Description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setDescription1(data);
                }}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={handleClose1}>
              Cancel
            </Button>
            <Button variant="warning" onClick={EditDepartment}>
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
