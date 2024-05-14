import React, { useEffect, useState } from "react";
import { Button, Container, Dropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faMagnifyingGlass,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment-timezone";

export const StaffAttendance = () => {
  const navigate = useNavigate();
  let staffDetails = JSON.parse(sessionStorage.getItem("StaffDetails"));
  const [staffVal, setstaffVal] = useState({});
  const staffById = async (id) => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/staff/getStaffById/" + id
      );
      if (res.status === 200) {
        setstaffVal(res.data.staffDetails);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
  //   useEffect(() => {
  //     staffDetails = JSON.parse(sessionStorage.getItem("StaffDetails"));
  //     if (!staffDetails) {
  //       window.location.assign("/loginforeveryone");
  //     }
  //     staffById(staffDetails?._id);
  //   }, []);

  return (
    <div>
      <h4 className="p-4 mb-4 fw-bold " style={{ backgroundColor: "#dae1f3" }}>
        {" "}
        Attendance
      </h4>
      <Container>
        <div className="row">
          <div className="col-lg-4 d-flex mb-4">
            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                <FontAwesomeIcon icon={faUpload} /> Export
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Export CSV</Dropdown.Item>
                <Dropdown.Item href="#">Export JSON</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* <p><Button variant="danger" size="md" active>
                            <FontAwesomeIcon icon={faDownload} />  Import
                        </Button></p> */}
          </div>

          <div className="col-lg-8  d-flex gap-2 ">
            <Form className="ms-auto">
              <Form.Control
                style={{ width: "400px" }}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Button
              variant="danger"
              className="d-flex gap-1 align-items-center mb-4"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              Search
            </Button>

            {/* <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FontAwesomeIcon icon={faFilter} />  Filtered By
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                                <Dropdown.Item href="#">Last 1 Month</Dropdown.Item>
                                <Dropdown.Item href="#">Last 6 Month</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Button style={{ backgroundColor: 'rgb(32 139 140)', marginBottom: '20px', fontSize: '11px' }} onClick={() => navigate('/staffoutpatientform')}>
                            <FontAwesomeIcon icon={faPlus} /> Add Out Patinet
                        </Button> */}
          </div>
        </div>

        <hr />

        {/* <h5 className="staff-doctor-management-h5">Today Available Doctors</h5> */}

        {/* <div className="row gap-2 justify-content-center mb-4">
          <Card
            className="col-lg-3 text-light"
            style={{ width: "16rem", backgroundColor: "#363668" }}
          >
            <Card.Body className="text-center px-1">
              <Card.Title
                className="fw-bold"
                style={{ fontFamily: "Roboto_Slab variant0" }}
              >
                "Genral / Duty Doctor's"
              </Card.Title>
              <Card.Text className="fs-4 fw-bold">(25)</Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="col-lg-3 text-light"
            style={{ width: "16rem", backgroundColor: "#789d07" }}
          >
            <Card.Body className="text-center">
              <Card.Title
                className="fw-bold"
                style={{ fontFamily: "Roboto_Slab variant0" }}
              >
                "Surgeons"
              </Card.Title>
              <Card.Text className="fs-4 fw-bold">(12)</Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="col-lg-3 text-light"
            style={{ width: "16rem", backgroundColor: "#d38f11" }}
          >
            <Card.Body className="text-center">
              <Card.Title
                className="fw-bold"
                style={{ fontFamily: "Roboto_Slab variant0" }}
              >
                "Specialist"
              </Card.Title>
              <Card.Text className="fs-4 fw-bold">(8)</Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="col-lg-3 text-light"
            style={{ width: "16rem", backgroundColor: "#b10404" }}
          >
            <Card.Body className="text-center">
              <Card.Title
                className="fw-bold"
                style={{ fontFamily: "Roboto_Slab variant0" }}
              >
                "On Leave"
              </Card.Title>
              <Card.Text className="fs-4 fw-bold">(10)</Card.Text>
            </Card.Body>
          </Card>
        </div> */}

        <table className="table" style={{ fontSize: "12px" }}>
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">S.no.</th>
              <th className="fw-bold">Date</th>
              <th className="fw-bold">Punching In</th>
              {/* <th className="fw-bold">Doctor Type</th> */}
              <th className="fw-bold">Punching Out</th>
            </tr>
          </thead>
          <tbody>
            {staffVal?.attendance
              // ?.filter(
              //   (val) =>
              //     moment(val.date).format("DD-MM-YYYY") !==
              //       moment(new Date()).format("DD-MM-YYYY") &&
              //     val.approvedByAdmin
              // )
              ?.map((details, i) => {
                return (
                  <tr className="admin-table-row">
                    <td>{++i}</td>
                    <td>
                      {moment(details?.date).format("DD-MM-YYYY") ? (
                        moment(details?.date).format("DD-MM-YYYY")
                      ) : (
                        <>--/--</>
                      )}
                    </td>
                    <td>{details?.punchIn ? details?.punchIn : <>--/--</>}</td>
                    <td>
                      {details?.punchOut ? details?.punchOut : <>--/--</>}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Container>
    </div>
  );
};
