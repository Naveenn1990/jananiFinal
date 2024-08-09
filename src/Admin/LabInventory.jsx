import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import exportFromJSON from "export-from-json";
import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillFileExcel, AiOutlinePlusCircle } from "react-icons/ai";
import ReactPaginate from "react-paginate";

function LabInventory() {
  let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
  useEffect(() => {
    adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    if (!adminDetails) {
      return alert("Access Denied!!!");
    } else {
    }
  }, []);
  const [show, setShow] = useState(false);
  const [InventoryOrderList, setInventoryOrderList] = useState([]);
  const LabInventoryList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/lab/getlabInventory "
      );
      if (res.status === 200) {
        setInventoryOrderList(res.data.inventoryList);
        settableFilter(res.data.inventoryList);
      }
    } catch (error) {
      console.log(error);
      setInventoryOrderList([]);
    }
  };

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(
    InventoryOrderList?.length /
      usersPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = InventoryOrderList.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      settableFilter([...filterTable]);
    } else {
      setSearch(e.target.value);
      setInventoryOrderList([...InventoryOrderList]);
    }
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("Lab Inventory list");

  const ExportToExcel = () => {
    if (fileName) {
      if (tableFilter.length != 0) {
        exportFromJSON({ data : tableFilter, fileName, exportType });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
    }
  };


  useEffect(() => {
    LabInventoryList();
  }, []);
  console.log("InventoryOrderList", InventoryOrderList);
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
            Lab Inventory List
          </h6>
          <input
            placeholder="Search Orders"
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
        <Table
          className="table "
          responsive
          //   style={{ width: "1500px" }}
          bordered
        >
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Vendor Price</th>
              <th>Admin Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {tableFilter.slice(pagesVisited, pagesVisited + usersPerPage)?.map((item, i) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>{item?.vendorProductId?._id}</td>
                  <td>{item?.vendorProductId?.productName}</td>
                  <td>₹ {item?.VendorPrice} /-</td>
                  <td>₹ {item?.AdminPrice} /-</td>
                  <td>{item?.quantity} /-</td>
                  <td>₹ {item?.AdminPrice * item?.quantity} /-</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div style={{ display: "flex" }}>
          <p style={{ width: "100%", marginTop: "20px" }}>
            Total Count: {InventoryOrderList?.length}
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
    </div>
  );
}

export default LabInventory;
