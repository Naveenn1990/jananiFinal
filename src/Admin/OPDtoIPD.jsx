import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";

export default function OPDtoIPD() {
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => {
    setShow1(false);
  };
  const handleShow1 = () => {
    setShow1(true);
  };
  const [data, setdata] = useState([]);
  const [selectedPatientid, setselectedPatientid] = useState("");
  const getdata = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        // handle success
        setdata(
          response.data.UsersInfo?.filter(
            (val) => val?.registrationType === "OPD" && val?.docReqToIPD
          )
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  async function opdtoipdFn() {
    try {
      const config = {
        url: `/user/makeOPDtoIPD`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          patientid: selectedPatientid,
        },
      };
      console.log("config", config);
      let response = await axios(config);
      if (response.status === 200) {
        alert(response.data.success);
        getdata();
        handleClose1();
      }
    } catch (error) {
      console.log(error);
      return alert("Something went wrong!");
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
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

  const [fileName, setfileName] = useState("OPD-IPD-Conversion");

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

  console.log("data", data);

  return (
    <div>
      <h6
        style={{
          fontSize: "22px",
          fontWeight: "600",
          color: "grey",
          marginTop: "2%",
        }}
      >
        OPD to IPD Conversion
      </h6>
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
      <div style={{ overflow: "hidden", overflowX: "scroll" }}>
        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Profile</th>
              <th>Patient-Id</th>

              <th> Name</th>
              <th>Sex</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Action</th>
              {/* <th>Action</th>
            <th>Read More</th> */}
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, index) => {
                    return (
                      <tr
                        style={{
                          fontSize: "15px",
                          textAlign: "center",
                          color: "red",
                        }}
                      >
                        <td>
                          <img
                            src="/Images/doctor1.jpg"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          />
                        </td>
                        <td>{item?.PatientId}</td>
                        <td>{item?.Firstname}</td>
                        <td>{item?.Gender}</td>
                        <td>{item?.Address1}</td>
                        <td>{item?.PhoneNumber}</td>
                        <td>{item?.DOB}</td>
                        <td>
                          <Button
                            onClick={() => {
                              setselectedPatientid(item?._id);
                              handleShow1();
                            }}
                            style={{ backgroundColor: "#20958C" }}
                          >
                            OPD to IPD
                          </Button>
                        </td>
                        {/* <td>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <MdEdit style={{ color: "#20958c", marginRight: "1%" }} />
                      <AiFillDelete style={{ color: "red" }} />
                    </div>
                  </td>
                  <td>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={() => setShow(true)}
                    >
                      Read More
                    </button>
                  </td> */}
                      </tr>
                    );
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, index) => {
                    return (
                      <tr
                        style={{
                          fontSize: "15px",
                          textAlign: "center",
                          color: "red",
                        }}
                      >
                        <td>
                          <img
                            src="/Images/doctor1.jpg"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          />
                        </td>
                        <td>{item?.PatientId}</td>
                        <td>{item?.Firstname}</td>
                        <td>{item?.Gender}</td>
                        <td>{item?.Address1}</td>
                        <td>{item?.PhoneNumber}</td>
                        <td>{item?.DOB}</td>
                        <td>
                          <Button
                            onClick={() => {
                              setselectedPatientid(item?._id);
                              handleShow1();
                            }}
                            style={{ backgroundColor: "#20958C" }}
                          >
                            OPD to IPD
                          </Button>
                        </td>
                        {/* <td>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <MdEdit style={{ color: "#20958c", marginRight: "1%" }} />
                      <AiFillDelete style={{ color: "red" }} />
                    </div>
                  </td>
                  <td>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={() => setShow(true)}
                    >
                      Read More
                    </button>
                  </td> */}
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
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Are you sure, you want to change OPD to IPD?</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="success" onClick={opdtoipdFn}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
