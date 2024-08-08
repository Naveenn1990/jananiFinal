import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiOutlinePlusCircle } from "react-icons/ai";

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
        " http://localhost:8521/api/lab/getlabInventory "
      );
      if (res.status === 200) {
        setInventoryOrderList(res.data.inventoryList);
      }
    } catch (error) {
      console.log(error);
      setInventoryOrderList([]);
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
            //   onChange={handleFilter}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
          </div>
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
            {InventoryOrderList?.map((item, i) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>{item?.vendorProductId?._id}</td>
                  <td>{item?.vendorProductId?.productName}</td>
                  <td>₹ {item?.VendorPrice} /-</td>
                  <td>₹ {item?.AdminPrice} /-</td>
                  <td>{item?.quantity} /-</td>
                  <td>₹ {item?.totalPrice} /-</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default LabInventory;
