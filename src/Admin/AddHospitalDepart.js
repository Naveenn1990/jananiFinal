import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillEyeFill, BsImages } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { IoMdImages } from "react-icons/io";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser"

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
  // Add
  const AddDepartment = async () => {
    try {
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
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  // Get
  const [GetDepartmentData, setGetDepartmentData] = useState([]);
  const GetDepartment = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getDepartment"
      );
      if (res.status === 200) {
        setGetDepartmentData(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Edit
  const [EditDepartmentData, setEditDepartmentData] = useState({});
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (id) => {
    setShow1(true);
    setEditDepartmentData(id);
  };
  const EditDepartment = async () => {
    try {
      const config = {
        url: "/admin/editDepartment/" + EditDepartmentData,
        baseURL: "http://localhost:8521/api",
        method: "put",
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
        handleClose1();
        GetDepartment();
      }
    } catch (error) {
      alert(error.response.data.error);
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
            {GetDepartmentData?.map((item, i) => {
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
                          handleShow1(item?._id);
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
                type="text"
                placeholder="Contact Number "
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
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
                type="text"
                placeholder="Contact Number "
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
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
