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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";

export default function Addblog() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Add data
  const [BlogTag, setBlogTag] = useState("");
  const [BlogDescription, setBlogDescription] = useState("");
  const [BlogImg, setBlogImg] = useState("");
  const formdata = new FormData();
  const AddBlog = async () => {
    formdata.append("BlogTag", BlogTag);
    formdata.append("BlogDescription", BlogDescription);
    formdata.append("BlogImg", BlogImg);
    try {
      const config = {
        url: "/addBlog",
        baseURL: "http://localhost:8521/api/admin",
        method: "post",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };
      axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          handleClose();
          GetBlog();
        }
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  // Get Data
  const [BlogDetails, setBlogDetails] = useState([]);
  const GetBlog = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/getBlog");
      if (res.status === 200) {
        setBlogDetails(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Edit Data
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (id) => { setShow1(true); setEditData(id)}
  const [EditData, setEditData] = useState('')
  const EditBlog = async () => {
    formdata.append("BlogTag", BlogTag);
    formdata.append("BlogDescription", BlogDescription);
    formdata.append("BlogImg", BlogImg);
    try {
      const config = {
        url: "/editBlog/" + EditData,
        baseURL: "http://localhost:8521/api/admin",
        method: "put",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };
      axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          handleClose1();
          GetBlog();
        }
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  // Delete Data
  const DeleteBlog = async (id) => {
    try {
      const config = {
        url: "admin/deleteBlog/" + id,
        baseURL: "http://localhost:8521/api",
        method: "DELETE",
        headers: { "content-type": "application-json" },
      };
      await axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          GetBlog();
        }
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    GetBlog();
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
            Blog / Latest News
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
              <th>Tag</th>
              <th>Description</th>
              <th>Image</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {BlogDetails?.map((item, i) => {
              return (
                <>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{i + 1}</td>
                    <td>{item?.BlogTag}</td>
                    <td width="500px">
                      {parse(`<div>${item?.BlogDescription}</div>`)}
                    </td>
                    <td>
                      <img
                        src={`http://localhost:8521/Blog/${item?.BlogImg}`}
                        style={{ width: "160px", height: "140px" }}
                      />
                    </td>
                    <td>
                      <div className="d-flex gap-5 fs-5">
                        <MdEdit 
                        style={{color:'#20958c'}}
                          onClick={() => {
                            handleShow1(item?._id);
                          }}
                        />
                        <AiFillDelete
                          onClick={() => DeleteBlog(item?._id)}
                          style={{ color: "red" }}
                        />
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
          <Modal.Title>Add Blog </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <input
                placeholder="Blog Tag"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setBlogTag(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12 mb-4" htmlFor="upload">
              <input
                type="file"
                accept="image/*"
                id="upload"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setBlogImg(e.target.files[0])}
              ></input>
            </div>

            <div className="col-lg-12">
              <CKEditor
                editor={ClassicEditor}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setBlogDescription(data);
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
            <Button variant="warning" onClick={AddBlog}>
              Add
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal size="md" show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title>Add Blog </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <input
                placeholder="Blog Tag"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setBlogTag(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12 mb-4" htmlFor="upload">
              <input
                type="file"
                accept="image/*"
                id="upload"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setBlogImg(e.target.files[0])}
              ></input>
            </div>

            <div className="col-lg-12">
              <CKEditor
                editor={ClassicEditor}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setBlogDescription(data);
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
            <Button variant="warning" onClick={EditBlog}>
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
