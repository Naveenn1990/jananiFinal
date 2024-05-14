import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillEyeFill, BsImages } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { IoMdImages } from "react-icons/io";
import axios from "axios";
import parse from "html-react-parser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function AddTestimonial() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Img, setImg] = useState("");
  // Add
  const AddTestimonial = async () => {
    try {
      const config = {
        url: "/admin/addTestimonial",
        baseURL: "http://localhost:8521/api",
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        data: {
          Name: Name,
          Description: Description,
          Img: Img,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose();
        GetTestimonial();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  // Get
  const [GetTestimonialData, setGetTestimonialData] = useState([]);
  const GetTestimonial = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getTestimonial"
      );
      if (res.status === 200) {
        setGetTestimonialData(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Edit
  const [EditTestimonialData, setEditTestimonialData] = useState({});
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (id) => {
    setShow1(true);
    setEditTestimonialData(id);
  };
  const EditTestimonial = async () => {
    try {
      const config = {
        url: "/admin/editTestimonial/" + EditTestimonialData,
        baseURL: "http://localhost:8521/api",
        method: "put",
        headers: { "Content-Type": "multipart/form-data" },
        data: {
          Name: Name,
          Description: Description,
          Img: Img,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose1();
        GetTestimonial();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  // Delete
  const DeleteTestimonial = async (id) => {
    try {
      const config = {
        url: "admin/deleteTestimonial/" + id,
        baseURL: "http://localhost:8521/api/",
        method: "delete",
        headers: { "Content-Type": "application/json" },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        GetTestimonial();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    GetTestimonial();
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
            Testimonial
          </h6>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
          </div>
        </div>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.No</th>
              <th>Name</th>
              <th>Descritpion</th>
              <th>Image</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {GetTestimonialData?.map((item, i) => {
              return (
                <>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{i + 1}</td>
                    <td>{item?.Name}</td>
                    <td style={{width: "500px" }}>
                      {parse(`<div>${item?.Description}</div>`)}
                    </td>
                    <td>
                      <img
                        src={`http://localhost:8521/Testimonial/${item?.Img}`}
                        style={{ width: "150px", height: "150" }}
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
                        <AiFillDelete onClick={()=> DeleteTestimonial(item?._id)} style={{ color: "red" }} />
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/* Add Modal */}
      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add News </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <input
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="col-lg-12 mb-4" htmlFor="upload">
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
                onChange={(e) => setImg(e.target.files[0])}
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
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="warning" onClick={AddTestimonial}>
              Add Testimonial
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal size="md" show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title>Edit News </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <input
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="col-lg-12 mb-4" htmlFor="upload">
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
                onChange={(e) => setImg(e.target.files[0])}
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
            <Button variant="secondary" onClick={() => setShow1(false)}>
              Cancel
            </Button>
            <Button
              variant="warning"
              onClick={EditTestimonial}
            >
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
