import axios from "axios";
import exportFromJSON from "export-from-json";
import React, { useEffect, useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import ReactPaginate from "react-paginate";

export default function Ward() {
  const [addWardModel, setaddWardModel] = useState(false);
  const [updateWardModel, setupdateWardModel] = useState(false);
  const [deleteWardModel, setdeleteWardModel] = useState(false);

  const [WardObj, setWardObj] = useState({});

  //   ================ Add Ward fn ================
  const [wardName, setWardName] = useState("");
  const AddWards = async (e) => {
    e.preventDefault();

    try {
      const config = {
        url: "/admin/addWard",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          wardName: wardName?.toUpperCase(),
        },
      };
      let res = await axios(config);
      if (res.status === 201) {
        WardsList();
        setWardName("");
        setaddWardModel(false);
        alert("Ward Added");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  //   ================ Update Ward fn ================
  const updateWards = async (e) => {
    e.preventDefault();

    try {
      const config = {
        url: "/admin/updateWard",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          id: WardObj?._id,
          wardName: wardName?.toUpperCase(),
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        WardsList();
        setWardName("");
        setupdateWardModel(false);
        alert("Ward updated successfully");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  //   ================ Delete Ward fn ================
  const deleteWards = async (e) => {
    e.preventDefault();

    try {
      const config = {
        url: "/admin/deleteWard",
        method: "delete",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          id: WardObj?._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        WardsList();
        setdeleteWardModel(false);
        alert("Ward deleted successfully");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [wards, setwards] = useState([]);
  async function WardsList() {
    try {
      let res = await axios.get(`http://localhost:8521/api/admin/Wardlist`);
      if (res.status === 200) {
        setwards(res.data.wardlist);
        settableFilter(res.data.wardlist);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    WardsList();
  }, []);

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);

  const handleFilter = () => {
    if (search !== "") {
      const filterTable = wards.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(search.toLowerCase())
        )
      );
      settableFilter([...filterTable]);
    } else {
      settableFilter([...wards]);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [search]);

  const exportType = "xls";

  const [fileName] = useState("Wards-list");

  const ExportToExcel = () => {
    if (fileName) {
      if (wards.length !== 0) {
        exportFromJSON({ data: wards, fileName, exportType });
      } else {
        alert("There is no data to export");
      }
    } else {
      alert("Enter file name to export");
    }
  };

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(tableFilter?.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <h6
        style={{
          fontSize: "22px",
          fontWeight: "600",
          color: "grey",
          marginTop: "20px",
        }}
      >
        Wards
      </h6>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
        }}
      >
        <AiOutlinePlusCircle
          className="AddIcon1"
          onClick={() => setaddWardModel(true)}
        />
        <input
          placeholder="Search"
          style={{
            padding: "5px 10px",
            border: "1px solid #20958c",
            borderRadius: "0px",
          }}
          onChange={(e) => setSearch(e.target.value)}
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
      <Table
        responsive="md"
        style={{
          marginTop: "1%",
        }}
      >
        <thead>
          <tr style={{ fontSize: "15px", textAlign: "center" }}>
            <th>S.no.</th>
            <th>Ward</th>

            <th> Action</th>
          </tr>
        </thead>
        <tbody
          style={{
            fontSize: "15px",
            textAlign: "center",
            color: "red",
          }}
        >
          {tableFilter
            .slice(pagesVisited, pagesVisited + usersPerPage)
            ?.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.wardName}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <FaRegEdit
                        style={{ color: "blue" }}
                        onClick={() => {
                          setWardObj(item);
                          setupdateWardModel(true);
                        }}
                      />
                      <AiFillDelete
                        style={{ color: "red" }}
                        onClick={() => {
                          setWardObj(item);
                          setdeleteWardModel(true);
                        }}
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
          Total Count: {tableFilter?.length}
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

      {/* =================Add Wards================= */}
      <Modal show={addWardModel} onHide={() => setaddWardModel(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Wards</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ color: "white" }}>
            <div>
              <b>Ward Name</b>
            </div>
            <input
              style={{ width: "100%" }}
              value={wardName}
              onChange={(e) => setWardName(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setaddWardModel(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => AddWards(e)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* =================Update Wards================= */}
      <Modal
        show={updateWardModel}
        onHide={() => {
          setWardName("");
          setupdateWardModel(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Wards</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ color: "white" }}>
            <div>
              <b>Ward Name</b>
            </div>
            <input
              style={{ width: "100%" }}
              value={wardName ? wardName : WardObj?.wardName}
              onChange={(e) => setWardName(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setWardName("");
              setupdateWardModel(false);
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={(e) => updateWards(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* =================Delete Wards================= */}
      <Modal
        show={deleteWardModel}
        onHide={() => {
          setdeleteWardModel(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Wards</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ color: "white" }}>
            Are you sure? you want to{" "}
            <span style={{ color: "red" }}>delete</span> the ward.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setdeleteWardModel(false);
            }}
          >
            Close
          </Button>
          <Button variant="danger" onClick={(e) => deleteWards(e)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
