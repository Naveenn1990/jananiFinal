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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";

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
    if (!Name || !Description || !Img) {
      alert("Please fill all the fields");
    } else {
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
    }
  };

  // Get
  const [data, setdata] = useState([]);
  const GetTestimonial = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getTestimonial"
      );
      if (res.status === 200) {
        setdata(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Edit
  const [EditTestimonialData, setEditTestimonialData] = useState({});
  const [Name1, setName1] = useState("");
  const [Description1, setDescription1] = useState("");
  const [Img1, setImg1] = useState("");

  const handleClose1 = () => setShow1(false);
  const handleShow1 = (id) => {
    setShow1(true);
    setEditTestimonialData(id);
  };
  const EditTestimonial = async () => {
    if (!Name1 && !Description1 && !Img1) {
      alert("There is no changes to update");
    } else {
      try {
        const config = {
          url: "/admin/editTestimonial/" + EditTestimonialData?._id,
          baseURL: "http://localhost:8521/api",
          method: "put",
          headers: { "Content-Type": "multipart/form-data" },
          data: {
            Name: Name1 ? Name1 : EditTestimonialData?.Name,
            Description: Description1
              ? Description1
              : EditTestimonialData?.Description,
            Img: Img1 ? Img1 : EditTestimonialData?.Img,
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

  const [fileName, setfileName] = useState("Testimonial");

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
            Testimonial
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
              <th>Name</th>
              <th>Descritpion</th>
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
                          <td>{item?.Name}</td>
                          <td style={{ width: "500px" }}>
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
                                  handleShow1(item);
                                }}
                              />
                              <AiFillDelete
                                onClick={() => DeleteTestimonial(item?._id)}
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
                          <td>{item?.Name}</td>
                          <td style={{ width: "500px" }}>
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
                                  handleShow1(item);
                                }}
                              />
                              <AiFillDelete
                                onClick={() => DeleteTestimonial(item?._id)}
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
          <Modal.Title>Add Testimonial </Modal.Title>
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
          <Modal.Title>Edit Testimonial </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <label style={{ color: "white" }}>Name</label>
              <input
                placeholder={EditTestimonialData?.Name}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setName1(e.target.value)}
              ></input>
            </div>
            <div className="col-lg-12 mb-4" htmlFor="upload">
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
                onChange={(e) => setImg1(e.target.files[0])}
              ></input>
            </div>
            <div className="col-lg-12">
              <label style={{ color: "white" }}>Description</label>
              <CKEditor
                editor={ClassicEditor}
                data={EditTestimonialData?.Description}
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
            <Button variant="secondary" onClick={() => setShow1(false)}>
              Cancel
            </Button>
            <Button variant="warning" onClick={EditTestimonial}>
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
