import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";

export default function AddService() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [ServiceTitle, setServiceTitle] = useState("");
  const [ServiceDescription, setServiceDescription] = useState("");
  const [ServiceCategory, setServiceCategory] = useState("");
  const [ServiceNumber, setServiceNumber] = useState("");
  const [ServiceEmail, setServiceEmail] = useState("");
  const [ServiceImage, setServiceImage] = useState("");

  const AddService = async (e) => {
    e.preventDefault();
    if (
      !ServiceTitle ||
      !ServiceDescription ||
      !ServiceCategory ||
      !ServiceNumber ||
      !ServiceEmail ||
      !ServiceImage
    ) {
      alert("Please fill all the fields");
    } else {
      try {
        const config = {
          url: "/admin/adminaddservice",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "multipart/form-data" },
          data: {
            ServiceTitle: ServiceTitle,
            ServiceDescription: ServiceDescription,
            ServiceCategory: ServiceCategory,
            ServiceNumber: ServiceNumber,
            ServiceEmail: ServiceEmail,
            ServiceImage: ServiceImage,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          getService();
          alert("Service Added");
          handleClose();
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  const [data, setdata] = useState([]);
  const getService = () => {
    axios
      .get("http://localhost:8521/api/admin/getService")
      .then(function (response) {
        // handle success
        setdata(response.data.Service);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const [category, setcategory] = useState([]);
  const getcategory = () => {
    axios
      .get("http://localhost:8521/api/admin/getServiceCat")
      .then(function (response) {
        // handle success
        setcategory(response.data.ServiceCat);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  // edit
  const [editData, seteditData] = useState({});
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (id) => {
    setShow1(true);
    seteditData(id);
  };

  const [ServiceTitle1, setServiceTitle1] = useState("");
  const [ServiceDescription1, setServiceDescription1] = useState("");
  const [ServiceCategory1, setServiceCategory1] = useState("");
  const [ServiceNumber1, setServiceNumber1] = useState("");
  const [ServiceEmail1, setServiceEmail1] = useState("");
  const [ServiceImage1, setServiceImage1] = useState("");

  const editService = async () => {
    if (
      !ServiceTitle1 &&
      !ServiceDescription1 &&
      !ServiceCategory1 &&
      !ServiceNumber1 &&
      !ServiceEmail1 &&
      !ServiceImage1
    ) {
      alert("There is no changes to update");
    } else {
      try {
        const config = {
          url: "/admin/editService/" + editData?._id,
          baseURL: "http://localhost:8521/api",
          method: "put",
          headers: { "Content-Type": "multipart/form-data" },
          data: {
            ServiceTitle: ServiceTitle1
              ? ServiceTitle1
              : editData?.ServiceTitle,
            ServiceDescription: ServiceDescription1
              ? ServiceDescription1
              : editData?.ServiceDescription,
            ServiceCategory: ServiceCategory1
              ? ServiceCategory1
              : editData?.ServiceCategory,
            ServiceNumber: ServiceNumber1
              ? ServiceNumber1
              : editData?.ServiceNumber,
            ServiceEmail: ServiceEmail1
              ? ServiceEmail1
              : editData?.ServiceEmail,
            ServiceImage: ServiceImage1
              ? ServiceImage1
              : editData?.ServiceImage,
          },
        };
        const res = await axios(config);
        if (res.status === 200) {
          alert(res.data.success);
          handleClose1();
          getService();
        }
      } catch (error) {
        alert(error.response.data.error);
      }
    }
  };

  // delete
  const handleClose2 = () => setShow2(false);
  const handleShow2 = (id) => {
    setShow2(true);
    setDeleteData(id);
  };
  const [deleteData, setDeleteData] = useState();
  const deleteService = async () => {
    try {
      const config = {
        url: "/admin/deleteService/" + deleteData,
        baseURL: "http://localhost:8521/api",
        method: "delete",
        headers: { "Content-Type": "application/json" },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose2();
        getService();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getcategory();
    getService();
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

  const [fileName, setfileName] = useState("Best-Hospital");

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
            Add Service
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
              <th>Service Category</th>
              <th>Service Title</th>
              <th width="400px">Service Description</th>
              <th>Service Number</th>
              <th>Service Email</th>
              <th>Service Image</th>
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
                        <td>{item?.ServiceCategory}</td>
                        <td>{item?.ServiceTitle}</td>
                        <td>
                          {parse(`<div>${item?.ServiceDescription}</div>`)}
                        </td>
                        <td>{item?.ServiceNumber}</td>
                        <td>{item?.ServiceEmail}</td>
                        <td>
                          <img
                            src={`http://localhost:8521/ServiceManagement/${item?.ServiceImage}`}
                            alt="service image"
                            style={{
                              width: "100px",
                              height: "100px",
                              imageRendering: "pixelated",
                            }}
                          />
                        </td>
                        <td>
                          <div className="d-flex gap-4 fs-5">
                            <MdEdit
                              style={{ color: "#20958c" }}
                              onClick={() => {
                                handleShow1(item);
                              }}
                            />
                            <AiFillDelete
                              onClick={() => handleShow2(item?._id)}
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
                        <td>{item?.ServiceCategory}</td>
                        <td>{item?.ServiceTitle}</td>
                        <td>
                          {parse(`<div>${item?.ServiceDescription}</div>`)}
                        </td>
                        <td>{item?.ServiceNumber}</td>
                        <td>{item?.ServiceEmail}</td>
                        <td>
                          <img
                            src={`http://localhost:8521/ServiceManagement/${item?.ServiceImage}`}
                            alt="service image"
                            style={{
                              width: "100px",
                              height: "100px",
                              imageRendering: "pixelated",
                            }}
                          />
                        </td>
                        <td>
                          <div className="d-flex gap-4 fs-5">
                            <MdEdit
                              style={{ color: "#20958c" }}
                              onClick={() => {
                                handleShow1(item);
                              }}
                            />
                            <AiFillDelete
                              onClick={() => handleShow2(item?._id)}
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

      {/* Add Modal */}
      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Service </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <select
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setServiceCategory(e.target.value)}
              >
                <option>Select Category</option>
                {category?.map((item) => {
                  return <option>{item?.ServiceCategory}</option>;
                })}
              </select>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Service Title"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setServiceTitle(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Service Number"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setServiceNumber(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Service Email"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setServiceEmail(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12" htmlFor="upload">
              <input
                placeholder="Service Details"
                type="file"
                accept="image/*"
                id="upload"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  margin: "4% 0%",
                }}
                onChange={(e) => setServiceImage(e.target.files[0])}
              ></input>
            </div>

            <div className="col-lg-12">
              <CKEditor
                editor={ClassicEditor}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setServiceDescription(data);
                }}
              />
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
                border: "1px solid white",
                padding: "4px 10px",
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
                AddService(e);
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal size="md" show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title>Edit Service </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <label style={{ color: "white" }}>Category</label>
              <select
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setServiceCategory1(e.target.value)}
              >
                <option>{editData?.ServiceCategory}</option>
                {category?.map((item) => {
                  return <option>{item?.ServiceCategory}</option>;
                })}
              </select>
            </div>

            <div className="col-lg-12">
              <label style={{ color: "white" }}>Title</label>
              <input
                placeholder={editData?.ServiceTitle}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setServiceTitle1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12">
              <label style={{ color: "white" }}>Number</label>
              <input
                placeholder={editData?.ServiceNumber}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setServiceNumber1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12">
              <label style={{ color: "white" }}>Email</label>
              <input
                placeholder={editData?.ServiceEmail}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setServiceEmail1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12" htmlFor="upload">
              <label style={{ color: "white" }}>Image</label>
              <input
                placeholder="Service Details"
                type="file"
                accept="image/*"
                id="upload"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  margin: "4% 0%",
                }}
                onChange={(e) => setServiceImage1(e.target.files[0])}
              ></input>
            </div>

            <div className="col-lg-12">
              <label style={{ color: "white" }}>Description</label>
              <CKEditor
                editor={ClassicEditor}
                data={editData?.ServiceDescription}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setServiceDescription1(data);
                }}
              />
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
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={() => setShow1(false)}
            >
              CANCEL
            </button>

            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "4px",
                border: "1px solid white",
                fontWeight: "600",
                padding: "4px 10px",
              }}
              onClick={() => {
                editService();
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}
      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              src="../Images/Delete.png"
              alt=""
            />
            <h4 className="fw-bold text-light mb-2">Are You Sure</h4>
            <p className="text-light">
              This event data will be removed permanently
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose2}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteService}>
            <FontAwesomeIcon icon={faCancel} className=" me-2" />
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
