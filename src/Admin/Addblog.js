import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillEyeFill, BsImages } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { IoMdImages } from "react-icons/io";
import axios from "axios";
import parse from "html-react-parser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";

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
  const [data, setdata] = useState([]);
  const GetBlog = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/getBlog");
      if (res.status === 200) {
        setdata(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Edit Data
  const [EditData, setEditData] = useState("");

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (id) => {
    setShow1(true);
    setEditData(id);
  };

  const [BlogTag1, setBlogTag1] = useState("");
  const [BlogDescription1, setBlogDescription1] = useState("");
  const [BlogImg1, setBlogImg1] = useState("");

  const EditBlog = async () => {
    if (!BlogTag1 && !BlogDescription1 && !BlogImg1) {
      alert("There is no changes to update");
    } else {
      formdata.append("BlogTag", BlogTag1 ? BlogTag1 : EditData?.BlogTag);
      formdata.append(
        "BlogDescription",
        BlogDescription1 ? BlogDescription1 : EditData?.BlogDescription
      );
      formdata.append("BlogImg", BlogImg1 ? BlogImg1 : EditData?.BlogImg);
      try {
        const config = {
          url: "/editBlog/" + EditData?._id,
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
            Blog / Latest News
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
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, i) => {
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
                                style={{ color: "#20958c" }}
                                onClick={() => {
                                  handleShow1(item);
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
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, i) => {
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
                                style={{ color: "#20958c" }}
                                onClick={() => {
                                  handleShow1(item);
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
              <label style={{ color: "white" }}>Blog Tag</label>
              <input
                placeholder={EditData?.BlogTag}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setBlogTag1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12 mb-4" htmlFor="upload">
              <label style={{ color: "white" }}>Blog Image</label>
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
                onChange={(e) => setBlogImg1(e.target.files[0])}
              ></input>
            </div>

            <div className="col-lg-12">
              <label style={{ color: "white" }}>Blog Discription</label>
              <CKEditor
                editor={ClassicEditor}
                data={EditData?.BlogDescription}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setBlogDescription1(data);
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
