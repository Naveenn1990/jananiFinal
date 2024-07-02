import { Pagination, Stack } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

function NotificationList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [SearchItem, setSearchItem] = useState("");
  // Pagination
  const [pagination, setPagination] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 2;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(pagination?.length / usersPerPage);
  const changePage = (selected) => {
    setPageNumber(selected);
  };

  const [NotificationList, setNotificationList] = useState([]);
  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mt-4">
        Notification List
      </h4>

      <div className="container mb-3">
        <div className="d-flex mb-3">
          <Form className="">
            <Form.Control
              style={{ width: "400px" }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchItem(e.target.value)}
            />
            {/* <Button variant="outline-primary">Search</Button> */}
          </Form>

          <Button variant="success" onClick={() => handleShow()}>
            Add Notification
          </Button>
        </div>
        <Table bordered>
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">Name</th>
              <th className="fw-bold">Gender</th>
              <th className="fw-bold">Address</th>
              <th className="fw-bold">Mobile</th>
              <th className="fw-bold">DOB</th>
              <th className="fw-bold">Blood Group </th>
              <th className="fw-bold">Diesease </th>
              <th className="fw-bold">Approve </th>
            </tr>
          </thead>

          <tbody>
            {NotificationList?.slice(pagesVisited, pagesVisited + usersPerPage)
              ?.filter((ele) => ele?.isRefer === true)
              ?.map((item) => {
                if (
                  SearchItem === "" ||
                  Object.values(item).some((value) =>
                    String(value)
                      .toLowerCase()
                      .includes(SearchItem.toLowerCase())
                  )
                )
                  return (
                    <tr className="admin-table-row">
                      <td>{`${item?.PatientsFname} ${item?.PatientsLname}`}</td>
                      <td>{item?.Gender}</td>
                      <td>{item?.Address1}</td>
                      <td>{item?.PhoneNumber}</td>
                      <td>{moment(item?.DOB).format("DD-MM-YYYY")}</td>
                      <td>{item?.BloodGroup}</td>
                      <td>
                        <div
                          className="Diseases-btn"
                          style={{
                            color: "red",
                            border: "1px solid green",
                          }}
                        >
                          {item?.InjuryCondition}
                        </div>
                      </td>
                      <td></td>
                    </tr>
                  );
              })}
          </tbody>
        </Table>

        <div style={{ float: "right" }} className="my-3 d-flex justify-end">
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              onChange={(event, value) => {
                changePage(value - 1);
              }}
              color="primary"
            />
          </Stack>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Select Department</Form.Label>
              <Form.Select>
                <option>Select Department</option>
                <option>Doctor</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NotificationList;
