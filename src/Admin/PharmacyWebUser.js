import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Adminpanel.css";
import axios from "axios";
import { BiSolidEdit } from "react-icons/bi";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import { AiFillFileExcel } from "react-icons/ai";

export default function PharmacyWebUser() {
  let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));

  const [Blockdata, setBlockdata] = useState({});
  const [showBlock, setShowBlock] = useState(false);
  const handleCloseBlock = () => setShowBlock(false);
  const handleShowBlock = (data) => {
    setShowBlock(true);
    setBlockdata(data);
  };

  const [UnBlockdata, setUnBlockdata] = useState({});
  const [showUnBlock, setShowUnBlock] = useState(false);
  const handleCloseUnBlock = () => setShowUnBlock(false);
  const handleShowUnBlock = (data) => {
    setShowUnBlock(true);
    setUnBlockdata(data);
  };

  const [data, setdata] = useState([]);
  const getPharmacyUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/pharmacy/getPharmacyUsers"
      );
      if (res.status === 200) {
        setdata(res.data.UsersInfo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const PharmacyUserBlock = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/pharmacy/PharmacyUserBlock",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          UserId: Blockdata?._id,
        },
      };
      await axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          setBlockdata({});
          getPharmacyUser();
          window.location.reload();
        }
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const PharmacyUnUserBlock = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/pharmacy/PharmacyUserUnBlock",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          UserId: UnBlockdata?._id,
        },
      };
      await axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          setUnBlockdata({});
          getPharmacyUser();
          window.location.reload();
        }
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    if (!adminDetails) {
      return alert("Access Denied!!!");
    } else {
      getPharmacyUser();
    }
  }, []);

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data?.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = data.filter((o) =>
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

  const [fileName, setfileName] = useState("Pharmacy-User");

  const ExportToExcel = () => {
    if (fileName) {
      if (data.length != 0) {
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

  return (
    <div className="p-3">
      <h4 style={{ color: "#808080", fontWeight: "600", fontSize: "22px" }}>
        Customer's
      </h4>
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
      </div>
      <div className="mt-2">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.no.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact No.</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Marital Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((obj, i) => {
                    return (
                      <tr>
                        <td>{++i}</td>
                        <td>
                          {obj?.Firstname}&nbsp;{obj?.Lastname}
                        </td>
                        <td>{obj?.Email}</td>
                        <td>{obj?.PhoneNumber}</td>
                        <td>{obj?.DOB}</td>
                        <td>{obj?.Gender}</td>
                        <td>
                          {obj?.Address1},{obj?.Address2},{obj?.City},
                          {obj?.State}-{obj?.Zipcode}
                        </td>
                        <td>{obj?.MaritalStatus}</td>
                        <td>
                          {obj?.Blokingstatus ? (
                            <Button
                              style={{ backgroundColor: "#20958c" }}
                              onClick={() => {
                                handleShowUnBlock();
                              }}
                            >
                              Un-BLock
                            </Button>
                          ) : (
                            <Button
                              onClick={() => {
                                handleShowBlock();
                              }}
                            >
                              Block
                            </Button>
                          )}
                        </td>
                      </tr>
                    );
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((obj, i) => {
                    return (
                      <tr>
                        <td>{++i}</td>
                        <td>
                          {obj?.Firstname}&nbsp;{obj?.Lastname}
                        </td>
                        <td>{obj?.Email}</td>
                        <td>{obj?.PhoneNumber}</td>
                        <td>{obj?.DOB}</td>
                        <td>{obj?.Gender}</td>
                        <td>
                          {obj?.Address1},{obj?.Address2},{obj?.City},
                          {obj?.State}-{obj?.Zipcode}
                        </td>
                        <td>{obj?.MaritalStatus}</td>
                        <td>
                          {obj?.Blokingstatus ? (
                            <Button
                              style={{ backgroundColor: "#20958c" }}
                              onClick={() => {
                                handleShowUnBlock(obj);
                              }}
                            >
                              Un-BLock
                            </Button>
                          ) : (
                            <Button
                              onClick={() => {
                                handleShowBlock(obj);
                              }}
                            >
                              Block
                            </Button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
          </tbody>
        </Table>
      </div>
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

      {/* Block */}
      <Modal show={showBlock} onHide={handleCloseBlock}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p style={{ color: "white", textAlign: "center" }}>
            Are you sure you want to Block {Blockdata?.Firstname}&nbsp;
            {Blockdata?.Lastname}
          </p>
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
              onClick={handleCloseBlock}
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
              onClick={(e) => PharmacyUserBlock(e)}
            >
              Block
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Un-Block */}
      <Modal show={showUnBlock} onHide={handleCloseUnBlock}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p style={{ color: "white", textAlign: "center" }}>
            Are you sure you want to Un-Block {UnBlockdata?.Firstname}&nbsp;
            {UnBlockdata?.Lastname}
          </p>
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
              onClick={handleCloseUnBlock}
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
              onClick={(e) => PharmacyUnUserBlock(e)}
            >
              Un-Block
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
