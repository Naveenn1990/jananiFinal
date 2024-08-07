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

export default function Addsurgey() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Add data
  const [SurgeryName, setSurgeryName] = useState("");
  const [AmountFNI, setAmountFNI] = useState();
  const [AmountFI, setAmountFI] = useState();

  const ASurgery = async () => {
    try {
      const config = {
        url: "/Addsurgery",
        baseURL: "http://localhost:8521/api/admin",
        method: "post",
        headers: { "content-type": "application/json" },
        data: {
          SurgeryName: SurgeryName,
          AmountFNI: AmountFNI,
          AmountFI: AmountFI,
        },
      };
      axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          handleClose();
          Getsurgery();
        }
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  // Get Data
  const [data, setdata] = useState([]);
  const Getsurgery = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/Getsurgery");
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

  const [SurgeryName1, setSurgeryName1] = useState("");
  const [AmountFNI1, setAmountFNI1] = useState();
  const [AmountFI1, setAmountFI1] = useState();

  const Editsurgery = async () => {
    if (!SurgeryName1 && !AmountFNI1 && !AmountFI1) {
      alert("There is no changes to update");
    } else {
      try {
        const config = {
          url: "/Editsurgery",
          baseURL: "http://localhost:8521/api/admin",
          method: "post",
          headers: { "content-type": "application/json" },
          data: {
            id: EditData?._id,
            SurgeryName: SurgeryName1 ? SurgeryName1 : EditData?.SurgeryName,
            AmountFNI: AmountFNI1 ? AmountFNI1 : EditData?.AmountFNI,
            AmountFI: AmountFI1 ? AmountFI1 : EditData?.AmountFI,
          },
        };
        axios(config).then((res) => {
          if (res.status === 200) {
            alert(res.data.success);
            handleClose1();
            Getsurgery();
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
        url: "admin/Deletsurgerys/" + id,
        baseURL: "http://localhost:8521/api",
        method: "delete",
        headers: { "content-type": "application-json" },
      };
      await axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          Getsurgery();
        }
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    Getsurgery();
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
            Add surgery
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
              <th>Amount For Non-Insurance</th>
              <th>Amount For Insurance</th>
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
                          <td>{item?.SurgeryName}</td>
                          <td width="500px">{item?.AmountFNI}</td>
                          <td>{item?.AmountFI}</td>
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
                          <td>{item?.SurgeryName}</td>
                          <td width="500px">{item?.AmountFNI}</td>
                          <td>{item?.AmountFI}</td>
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
          <Modal.Title>Add surgery </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <input
                placeholder="Surgery Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setSurgeryName(e.target.value)}
              ></input>
            </div>
            <div className="col-lg-12">
              <input
                placeholder="Amount for Insurance"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                type="number"
                onChange={(e) => setAmountFI(e.target.value)}
              ></input>
            </div>
            <div className="col-lg-12">
              <input
                placeholder="Amount for Non-Insurance"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                type="number"
                onChange={(e) => setAmountFNI(e.target.value)}
              ></input>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button variant="warning" onClick={ASurgery}>
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
              <label style={{ color: "white" }}>Surgery Name</label>
              <input
                placeholder={EditData?.SurgeryName}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setSurgeryName1(e.target.value)}
              ></input>
            </div>
            <div className="col-lg-12">
              <label style={{ color: "white" }}>Amount for Non-Insurance</label>
              <input
                placeholder={EditData?.AmountFNI}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setAmountFNI1(e.target.value)}
              ></input>
            </div>
            <div className="col-lg-12">
              <label style={{ color: "white" }}>Amount for Insurance</label>
              <input
                placeholder={EditData?.AmountFI}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setAmountFI1(e.target.value)}
              ></input>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={handleClose1}>
              Cancel
            </Button>
            <Button variant="warning" onClick={Editsurgery}>
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
