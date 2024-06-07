import React, { useState, useEffect } from "react";
import { Button, Modal, Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { contextType } from "google-map-react";

const VendorAddedProductCart = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); // Function to open the modal
  const [amounts, setAmounts] = useState({});

  let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
  let Subadmin = JSON.parse(sessionStorage.getItem("Subadmin"));

  const [getAddtocart, setgetAddtocart] = useState([]);
  const getaddtocart = () => {
    axios
      .get("http://localhost:8521/api/vendor/getaddtocartdata")
      .then(function (response) {
        setgetAddtocart(response.data.addtocart);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getaddtocart();
  }, []);

  console.log("getAddtocart", getAddtocart);

  const handleAmountChange = (id, value) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [id]: value,
    }));
  };

  const incresequantity = async (item) => {
    try {
      const config = {
        url: "/vendor/updateAdminquantity",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          id: item?._id,
          quantity: item?.quantity + 1,
          totalamount:
            (amounts[item?.productid?._id] ||
              Number(item?.productid?.productPrice) -
                (Number(item?.productid?.productPrice) *
                  Number(item?.productid?.discount)) /
                  100) *
            (item?.quantity + 1),
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getaddtocart();
      }
    } catch (error) {
      console.log("error", error);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const drecressquantity = async (item) => {
    if (item?.quantity <= 1) {
      alert("Minimum quanitity is 1");
    } else {
      try {
        const config = {
          url: "/vendor/updateAdminquantity",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            id: item?._id,
            quantity: item?.quantity - 1,
            totalamount:
              (amounts[item?.productid?._id] ||
                Number(item?.productid?.productPrice) -
                  (Number(item?.productid?.productPrice) *
                    Number(item?.productid?.discount)) /
                    100) *
              (item?.quantity - 1),
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          getaddtocart();
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  const checkVendor = () => {
    const vendorId = getAddtocart[0]?.productid?.vendorid;
    const result = getAddtocart?.map(
      (cart) => cart.productid?.vendorid === vendorId
    );
  };

  const addBooking = async () => {
    // checkVendor();
    // if (!checkVendor) {
    //   alert("Please select all products from single vendor");
    // } else {
    try {
      const products = getAddtocart.map((item) => {
        const vendorPrice =
          Number(item?.productid?.productPrice) -
          (Number(item?.productid?.productPrice) *
            Number(item?.productid?.discount)) /
            100;
        const adminPrice = amounts[item?.productid?._id]
          ? amounts[item?.productid?._id]
          : 0;
        const totalPrice =
          (amounts[item?.productid?._id] || vendorPrice) * item?.quantity;

        return {
          adminId: adminDetails?._id,
          vendorId: item?.productid?.vendorid,
          productId: item?.productid?._id,
          VendorPrice: vendorPrice,
          AdminPrice: adminPrice,
          quantity: item?.quantity,
          totalPrice: totalPrice,
        };
      });
      console.log("products", products);
      const config = {
        url: "/vendor/postAdminOrders",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        // data: {
        //   adminId: adminDetails?._id,
        //   vendorId: item?.productid?.vendorid,
        //   productId: item?.productid?._id,
        //   cartId: item?._id,
        //   VendorPrice:
        //     Number(item?.productid?.productPrice) -
        //     (Number(item?.productid?.productPrice) *
        //       Number(item?.productid?.discount)) /
        //       100,
        //   AdminPrice: amounts[item?.productid?._id]
        //     ? amounts[item?.productid?._id]
        //     : 0,
        //   quantity: item?.quantity,
        //   totalPrice:
        //     (amounts[item?.productid?._id] ||
        //       Number(item?.productid?.productPrice) -
        //         (Number(item?.productid?.productPrice) *
        //           Number(item?.productid?.discount)) /
        //           100) * item?.quantity,
        // },
        data: { products },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getaddtocart();
        alert("Booking done successfully");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      }
    }
    // }
  };

  const deletecart = async (item) => {
    try {
      const config = {
        url: "/vendor/deletecart",
        method: "delete",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          id: item?._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getaddtocart();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <div className="p-5">
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mb-4">
        Admin Cart
      </h4>
      <div className="py-3 py-1">
        <Link to="/admin/VendorAddedProduct">
          <Button variant="primary">Go back</Button>
        </Link>
      </div>

      <div className="Table-container">
        <Table className="table" responsive>
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">Product ID</th>
              <th className="fw-bold">Product Name</th>
              <th className="fw-bold">Vendor Proposed Price</th>
              <th className="fw-bold">
                Admin Buying Price (Please select the quantity after adding
                Admin Amount)
                <span style={{ fontSize: "18px" }}>*</span>
              </th>
              <th className="fw-bold">Quantity</th>
              <th className="fw-bold">Total</th>
              <th className="fw-bold">Action</th>
            </tr>
          </thead>

          <tbody>
            {getAddtocart?.map((item, index) => {
              return (
                <tr className="admin-table-row" key={index}>
                  <td>{item?.productid?._id}</td>
                  <td>{item?.productid?.productName}</td>
                  <td>
                    <p>
                      ₹{" "}
                      {Number(item?.productid?.productPrice) -
                        (Number(item?.productid?.productPrice) *
                          Number(item?.productid?.discount)) /
                          100}
                    </p>
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      className="vi_0"
                      style={{ width: "150px" }}
                      onChange={(e) =>
                        handleAmountChange(item?.productid?._id, e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <div className="d-flex">
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                        onClick={(e) => drecressquantity(item)}
                      >
                        <RemoveIcon />
                      </button>
                      <Form.Group
                        className="mb-1"
                        controlId="exampleForm.ControlInput1"
                      >
                        {/* <input
                          type="text"
                          placeholder="Price"
                          style={{ width: "70px", textAlign: "center" }}
                        /> */}
                        <p
                          style={{
                            border: "1px solid black",
                            padding: "5px 10px",
                            margin: "5px",
                            marginTop: "-5px",
                          }}
                        >
                          {item?.quantity}
                        </p>
                      </Form.Group>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                        onClick={() => incresequantity(item)}
                      >
                        <AddIcon />
                      </button>
                    </div>
                  </td>
                  <td>
                    {(amounts[item?.productid?._id] ||
                      Number(item?.productid?.productPrice) -
                        (Number(item?.productid?.productPrice) *
                          Number(item?.productid?.discount)) /
                          100) * item?.quantity}
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "20px" }}>
                      {/* <button
                        style={{
                          border: "none",
                          backgroundColor: "#20958c",
                          color: "white",
                          borderRadius: "5px",
                          fontWeight: "500",
                        }}
                        onClick={() => addBooking(item)}
                      >
                        Book
                      </button>
                      / */}
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                        onClick={() => deletecart(item)}
                      >
                        <i class="fas fa-trash" style={{ color: "red" }}></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "space-between",
          }}
        >
          <p>
            Total Amount :{" "}
            {getAddtocart?.reduce(
              (a, item) =>
                a +
                (amounts[item?.productid?._id] ||
                  Number(item?.productid?.productPrice) -
                    (Number(item?.productid?.productPrice) *
                      Number(item?.productid?.discount)) /
                      100) *
                  item?.quantity,
              0
            )}
          </p>
          <button
            style={{
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "5px",
              fontWeight: "500",
            }}
            onClick={() => addBooking()}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorAddedProductCart;