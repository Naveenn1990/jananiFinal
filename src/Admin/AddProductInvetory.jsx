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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faTag,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Carousel from "react-multi-carousel";
import moment from "moment/moment";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";

export default function AddProductInvetory() {
  let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const [EditData, setEditData] = useState({});
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const [pdfdata, setpdfdata] = useState({});
  const handleClose4 = () => setShow4(false);
  const handleShow4 = (data) => {
    setShow4(true);
    setpdfdata(data);
  };

  const [catid, setcatid] = useState("");
  const [subcatid, setsubcatid] = useState("");
  const [categoryList, setcategoryList] = useState([]);
  const [prodid, setprodid] = useState("");
  const [ChosenProd, setChosenProd] = useState({});
  const [stock, setstock] = useState(null);
  const [minstock, setminstock] = useState(null);
  const [maxOrderlimit, setmaxOrderlimit] = useState(null);
  const [price, setprice] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [InvoiceNumber, setInvoiceNumber] = useState("");
  const [Invoicedate, setInvoicedate] = useState("");
  const [InvoiceDoc, setInvoiceDoc] = useState("");

  const [afterDiscountPrice, setafterDiscountPrice] = useState(0);
  const [productImgs, setproductImgs] = useState([]);
  const [showproductImgs, setshowproductImgs] = useState([]);
  const [productInfo, setproductInfo] = useState({});

  // Edit product information:
  console.log("EditData", EditData);
  const [EditafterDiscountPrice, setEditafterDiscountPrice] = useState(0);
  const [editProdName, seteditProdName] = useState("");
  const [editProdPrice, seteditProdPrice] = useState();
  const [editcatid, seteditcatid] = useState("");
  const [editsubcatid, seteditsubcatid] = useState("");
  const [editstock, seteditstock] = useState();
  const [editproductType, seteditproductType] = useState("");
  const [editproductSize, seteditproductSize] = useState("");
  const [editpackSize, seteditpackSize] = useState("");
  const [editmanufacturingDate, seteditmanufacturingDate] = useState("");
  const [editExpiryDate, seteditExpiryDate] = useState("");
  const [editcolour, seteditcolour] = useState("");
  const [editflavour, seteditflavour] = useState("");
  const [editfragrance, seteditfragrance] = useState("");
  const [editvariant, seteditvariant] = useState("");
  const [editbrand, seteditbrand] = useState("");
  const [editcountryOfOrigin, seteditcountryOfOrigin] = useState("");
  const [editManufacturercompanyname, seteditManufacturercompanyname] =
    useState("");
  const [editManufactureraddress, seteditManufactureraddress] = useState("");
  const [editproductImgs, seteditproductImgs] = useState([]);
  const [editshowproductImgs, seteditshowproductImgs] = useState([]);
  const [editdescription, seteditdescription] = useState("");

  const [editDiscount, seteditDiscount] = useState();
  const [editMinAlertStock, seteditMinAlertStock] = useState("");
  const [editmaxOrderlimit, seteditmaxOrderlimit] = useState("");

  const getAllCategory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getcategoryList"
      );
      if (res.status === 200) {
        setcategoryList(res.data.allcategory);
      }
    } catch (error) {
      console.log(error);
      setcategoryList(error.response.data.allcategory);
    }
  };

  const [subcategoryList, setsubcategoryList] = useState([]);
  const getAllSubCategory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getsubcategoryList"
      );
      if (res.status === 200) {
        setsubcategoryList(res.data.allsubcategory);
      }
    } catch (error) {
      console.log(error);
      setsubcategoryList(error.response.data.allsubcategory);
    }
  };
  const [orderedProductsList, setorderedProductsList] = useState([]);
  const listOfOrderedProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8521/api/vendor/getAllAdminOrders/${adminDetails?._id}`
      );
      if (res.status === 200) {
        // let seen = {};

        setorderedProductsList(
          res.data.allAdminOrders.filter((obj) => {
            if (
              // !seen[obj.productId] &&
              obj.orderStatus === "DELIVERED" &&
              obj.orderPayment === "DONE"
            ) {
              // seen[obj.productId] = true;
              return true;
            }
            return false;
          })
        );
      }
    } catch (error) {
      console.log(error);
      setorderedProductsList([]);
    }
  };
  console.log("9090: ", orderedProductsList);
  // ======================== Add Product in the inventory========================
  async function addToInventory() {
    try {
      const obj = {
        categoryid: catid,
        subcategoryid: subcatid,
        stock: stock,
        minstock: minstock,
        maxOrderlimit: maxOrderlimit,
        productPrice: newarray?.find((item) => item?._id === prodid)?.productId
          ?.MRP,
        discount: discount,
        InvoiceNumber: InvoiceNumber,
        Invoicedate: Invoicedate,
        InvoiceDoc: InvoiceDoc,
        // productImgs: productImgs,
        vendorIdProductId: ChosenProd?.productId?._id,
        productName: ChosenProd?.productId?.productName,
        currencyFormat: ChosenProd?.productId?.currencyFormat,
        productType: ChosenProd?.productId?.productType,
        manufacturingDate: ChosenProd?.productId?.manufacturingDate,
        expiryDate: ChosenProd?.productId?.expiryDate,
        shortexpiryDate: ChosenProd?.productId?.shortexpiryDate,
        description: ChosenProd?.productId?.description,
        brand: ChosenProd?.productId?.brand,
        productSize: ChosenProd?.productId?.productSize,
        packSize: ChosenProd?.productId?.packSize,
        colour: ChosenProd?.productId?.colour,
        flavour: ChosenProd?.productId?.flavour,
        fragrance: ChosenProd?.productId?.fragrance,
        variant: ChosenProd?.productId?.variant,
        countryOfOrigin: ChosenProd?.productId?.countryOfOrigin,
        manufacturercompanyname: ChosenProd?.productId?.manufacturercompanyname,
        manufactureraddress: ChosenProd?.productId?.manufactureraddress,
      };
      console.log("obj", obj);
      const config = {
        url: "/admin/addToInventory",
        method: "post",
        headers: { "content-type": "multipart/form-data" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      await axios(config)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            alert(res.data.success);
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
          return alert(err.response.data.error);
        });
    } catch (error) {
      console.log(error);
      return alert("Error: Product is not added to the inventory!!!");
    }
  }

  // ======================= Edit product info from the INventory============
  async function EditInventory() {
    try {
      const obj = {
        inventoryid: EditData?._id,
        discount: editDiscount ? editDiscount : EditData?.discount,
        minstock: editMinAlertStock ? editMinAlertStock : EditData?.minstock,
        maxOrderlimit: editmaxOrderlimit
          ? editmaxOrderlimit
          : EditData?.maxOrderlimit,
      };
      const config = {
        url: "/admin/editInventory",
        method: "put",
        headers: { "content-type": "multipart/form-data" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      await axios(config)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            alert(res.data.success);
            getInventoryList();
            handleClose3();
          }
        })
        .catch((err) => {
          console.log(err);
          return alert(err.response.data.error);
        });
    } catch (error) {
      console.log(error);
      return alert("Error: Product is not edited in the inventory!!!");
    }
  }

  const [data, setdata] = useState([]);
  async function getInventoryList() {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/inventoryList"
      );
      if (res.status === 200) {
        setdata(res.data.inventoryList?.filter((val) => val?.stock > 0));
      }
    } catch (error) {
      setdata([]);
    }
  }

  const deleteInventory = async (id) => {
    try {
      const config = {
        url: "/admin/deleteInventory/" + id,
        baseURL: "http://localhost:8521/api",
        method: "delete",
        header: { "Content-Type": "application/json" },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getInventoryList();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const deleteInvoice = async (productInfo, datas) => {
    try {
      const config = {
        url: "/admin/deleteInvoice/" + productInfo?._id + "/" + datas?._id,
        baseURL: "http://localhost:8521/api",
        method: "delete",
        header: { "Content-Type": "application/json" },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getInventoryList();
        window.location.reload();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    if (!adminDetails) {
      return alert("Access Denied!!!");
    } else {
      // getProductList();
      // getAllVendors();
      getAllCategory();
      getAllSubCategory();
      listOfOrderedProducts();
      getInventoryList();
    }
  }, []);

  useEffect(() => {
    const xyz = newarray?.find((item) => item?._id === prodid)?.productId?.MRP;
    const abc = xyz - xyz * (discount / 100);
    setafterDiscountPrice(abc);
  }, [discount]);

  useEffect(() => {
    if (editDiscount) {
      const abc =
        EditData?.vendorIdProductId?.MRP -
        EditData?.vendorIdProductId?.MRP * (editDiscount / 100);
      setEditafterDiscountPrice(abc);
    }
  }, [editDiscount]);

  {
    /*  


  const removeDuplicates = (orderedProductsList) => {
    const productIdMap = new Map();

    return orderedProductsList.filter((item) => {
      const productId = item.productId?._id;
      if (!productIdMap.has(productId)) {
        productIdMap.set(productId, true);
        return true;
      }
      return false;
    });
  };

  const newarray = removeDuplicates(orderedProductsList);

   */
  }
  const newarray = [];
  for (let i = 0; i < orderedProductsList.length; i++) {
    for (let j = 0; j < orderedProductsList[i]?.items.length; j++) {
      newarray.push(orderedProductsList[i]?.items[j]);
    }
  }

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

  const [fileName, setfileName] = useState("Inventory Products");

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

  console.log("newarray434", newarray);
  console.log("catid", catid, subcatid);
  return (
    <div>
      <div style={{ padding: "1%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Inventory
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
          </div>

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

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add To Inventory</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-4 col-sm-12 mt-2">
                <select
                  style={{
                    width: "100%",
                    backgroundColor: "#EBEBEB",
                    padding: "8px 20px",
                    border: "1px solid #EBEBEB",
                  }}
                  onChange={(e) => setcatid(e.target.value)}
                >
                  <option>Choose Category</option>
                  {categoryList?.map((item) => {
                    return (
                      <option value={item?._id}>{item?.categoryName}</option>
                    );
                  })}
                </select>
              </div>
              <div className="col-lg-4 col-sm-12 mt-2">
                <select
                  style={{
                    width: "100%",
                    backgroundColor: "#EBEBEB",
                    padding: "8px 20px",
                    border: "1px solid #EBEBEB",
                  }}
                  onChange={(e) => setsubcatid(e.target.value)}
                >
                  <option>Choose Subategory</option>
                  {subcategoryList
                    .filter((val) => val?.categoryid?._id === catid)
                    ?.map((item) => {
                      return (
                        <option value={item?._id}>
                          {item?.subcategoryName}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-lg-4 col-sm-12 mt-2">
                <select
                  style={{
                    width: "100%",
                    backgroundColor: "#EBEBEB",
                    padding: "8px 20px",
                    border: "1px solid #EBEBEB",
                  }}
                  onChange={(e) => {
                    setChosenProd(JSON.parse(e.target.value));
                    setprodid(JSON.parse(e.target.value)._id);
                  }}
                >
                  <option>Choose Products</option>
                  {newarray
                    ?.filter(
                      (val) =>
                        // val.vendorid._id === venid &&
                        val?.productId?.categoryid?.toString() ===
                          catid?.toString() &&
                        val?.productId?.subcategoryid?.toString() ===
                          subcatid?.toString()
                    )
                    ?.map((item) => {
                      return (
                        <option value={JSON.stringify(item)}>
                          {item?.productId?.productName}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Selling Price
                </label>
                <input
                  placeholder="Price"
                  value={
                    newarray?.find((item) => item?._id === prodid)?.productId
                      ?.MRP
                  }
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  // onChange={(event) => setprice(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Discount (%)
                </label>
                <input
                  placeholder="Discount"
                  value={discount}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setdiscount(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Price After Discount
                </label>
                <div
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  ₹{afterDiscountPrice ? afterDiscountPrice : 0}
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Minimum alert stock
                </label>
                <input
                  placeholder="Minimum count"
                  value={minstock}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setminstock(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Maximum Order limit
                </label>
                <input
                  placeholder="Maximum order limit"
                  value={maxOrderlimit}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setmaxOrderlimit(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Stocks Available
                </label>
                <input
                  placeholder="Stocks Available"
                  value={stock}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setstock(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Invoice Number
                </label>
                <input
                  placeholder="Invoice Number"
                  value={InvoiceNumber}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setInvoiceNumber(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Invoice Date
                </label>
                <input
                  type="date"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setInvoicedate(event.target.value)}
                ></input>
              </div>
              {!InvoiceDoc ? (
                <div className="mt-3">
                  <span
                    style={{
                      fontWeight: "500",
                      color: "#ebebeb",
                    }}
                  >
                    Upload Invoice:{" "}
                  </span>
                  <input
                    type="file"
                    id="fileInput"
                    accept="application/pdf"
                    hidden
                    multiple
                    onChange={(e) => {
                      setInvoiceDoc(e.target.files[0]);
                    }}
                  />
                  <label for="fileInput">
                    <FontAwesomeIcon
                      icon={faUpload}
                      type="file"
                      style={{
                        color: "#ebebeb",
                        fontSize: "25px",
                        border: "0px solid #ebebeb",
                        // borderRadius: "15px",
                      }}
                    />
                  </label>
                </div>
              ) : (
                <div className="mt-3">
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/128/202/202298.png"
                    }
                    alt="avathar"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50px",
                    }}
                    // onClick={() => handleShow4(InvoiceDoc)}
                  />
                </div>
              )}
              {prodid ? (
                <div>
                  {newarray
                    .filter((item) => item?._id === prodid)
                    .map((val) => {
                      return (
                        <div style={{ padding: "13px 13px" }}>
                          <div
                            className="col-lg-12 col-sm-12 mt-2 "
                            style={{
                              border: "1px solid #ebebeb",
                              padding: "8px 20px",
                              backgroundColor: "#ebebeb",
                            }}
                          >
                            <p
                              style={{
                                color: "rgb(69 69 72)",
                                fontWeight: "600",
                                marginBottom: "0px",
                              }}
                            >
                              {val?.productId?.productName}
                            </p>

                            <div className="row">
                              {val?.productId?.productType ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  <span style={{ fontWeight: "bold" }}>
                                    Product Type:
                                  </span>{" "}
                                  {val?.productId?.productType}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.AdminPrice ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  <span style={{ fontWeight: "bold" }}>
                                    Buying Price:
                                  </span>{" "}
                                  ₹ {val?.totalPrice} /-
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.productId?.productType?.toLowerCase() ===
                              "tablet" ? (
                                <>
                                  {val?.productId?.No_of_Strips ? (
                                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                      <span style={{ fontWeight: "bold" }}>
                                        No of Strips/Box:
                                      </span>{" "}
                                      {val?.productId?.No_of_Strips}
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                  {val?.productId?.No_Tablets_strips ? (
                                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                      <span style={{ fontWeight: "bold" }}>
                                        No of Tablet/Strips:
                                      </span>{" "}
                                      {val?.productId?.No_Tablets_strips}
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                  <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                    <span style={{ fontWeight: "bold" }}>
                                      Price/Strips:
                                    </span>{" "}
                                    {val?.totalPrice /
                                      val?.quantity /
                                      val?.productId?.No_of_Strips}
                                  </div>
                                </>
                              ) : (
                                ""
                              )}
                              {val?.quantity ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  <span style={{ fontWeight: "bold" }}>
                                    Quantity:
                                  </span>{" "}
                                  {val?.quantity}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.productId?.productSize ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  <span style={{ fontWeight: "bold" }}>
                                    Product Size :
                                  </span>{" "}
                                  {val?.productId?.productSize}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.productId?.packSize ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  <span style={{ fontWeight: "bold" }}>
                                    Pack Size :
                                  </span>{" "}
                                  {val?.productId?.packSize}
                                </div>
                              ) : (
                                <></>
                              )}
                              <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                <span style={{ fontWeight: "bold" }}>
                                  Manufacturing Date :{" "}
                                </span>
                                {moment(val?.manufacturingDate).format(
                                  "DD-MM-YYYY"
                                )}
                              </div>
                              <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                <span style={{ fontWeight: "bold" }}>
                                  Expiry Date :{" "}
                                </span>
                                {moment(val?.expiryDate).format("DD-MM-YYYY")}
                              </div>
                              {val?.productId?.colour ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  <span style={{ fontWeight: "bold" }}>
                                    Colour :
                                  </span>{" "}
                                  {val?.productId?.colour}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.productId?.flavour ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  <span style={{ fontWeight: "bold" }}>
                                    {" "}
                                    Flavour :
                                  </span>{" "}
                                  {val?.productId?.flavour}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.productId?.fragrance ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  <span style={{ fontWeight: "bold" }}>
                                    {" "}
                                    Fragrance :
                                  </span>{" "}
                                  {val?.productId?.fragrance}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.productId?.variant ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  <span style={{ fontWeight: "bold" }}>
                                    Varient :
                                  </span>{" "}
                                  {val?.productId?.variant}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.productId?.brand ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  <span style={{ fontWeight: "bold" }}>
                                    Brand :
                                  </span>{" "}
                                  {val?.productId?.brand}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.productId?.countryOfOrigin ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  <span style={{ fontWeight: "bold" }}>
                                    Country Of Origin :
                                  </span>
                                  {val?.productId?.countryOfOrigin}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.productId?.manufacturercompanyname ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  <span style={{ fontWeight: "bold" }}>
                                    Manufacturer Company :
                                  </span>
                                  {val?.productId?.manufacturercompanyname}
                                </div>
                              ) : (
                                <></>
                              )}
                              {val?.productId?.manufactureraddress ? (
                                <div className="col-lg-6 col-sm-12 mt-2 CZ">
                                  <span style={{ fontWeight: "bold" }}>
                                    Manufacturer Address :
                                  </span>
                                  {val?.productId?.manufactureraddress}
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <></>
              )}
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
                  padding: "4px 10px",
                  border: "1px solid white",
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
                onClick={() => {
                  addToInventory();
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* information of specific product */}
        <Modal size="lg" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Product Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              {/* <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Vendor:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  #{productInfo?.vendorId?.vendorId}{" "}
                  {productInfo?.vendorId?.fname} {productInfo?.vendorId?.lname}
                </span>
              </div> */}
              {/* <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Category:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  {productInfo?.categoryid?.categoryName}
                </span>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Subcategory:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  {productInfo?.subcategoryid?.subcategoryName}
                </span>
              </div> */}
              {/* <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Total Amount:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  {productInfo?.totalPaidPrice}
                </span>
              </div> */}
              {/* <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Payment Option:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  {productInfo?.paymentOption}
                </span>
              </div> */}
              {/* <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Order Status:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  {productInfo?.orderStatus}
                </span>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  Order Payment:
                </label>
                <span
                  style={{
                    fontWeight: "600",
                    color: "aliceblue",
                    fontSize: "20px",
                    marginRight: "5px",
                    color:
                      productInfo.orderPayment === "PENDING" ? "red" : "green",
                  }}
                >
                  {productInfo?.orderPayment}
                </span>
              </div> */}
              <div style={{ padding: "13px 13px" }}>
                <div
                  className="col-lg-12 col-sm-12 mt-2 "
                  style={{
                    border: "1px solid #ebebeb",
                    padding: "8px 20px",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  {/* <h5 style={{ color: "#808084" }}>Description: </h5> */}
                  <p
                    style={{
                      color: "rgb(69 69 72)",
                      fontWeight: "600",
                      marginBottom: "0px",
                    }}
                  >
                    {productInfo?.productName}
                  </p>
                  <div
                    style={{
                      color: "#4A4A4D",
                      fontWeight: "600",
                    }}
                  >
                    ₹
                    {(
                      productInfo?.productPrice -
                      (productInfo?.productPrice * productInfo?.discount) / 100
                    ).toFixed(1)}{" "}
                    <span
                      style={{
                        color: "#4A4A4D",
                        fontWeight: "600",
                        textDecoration: "line-through",
                      }}
                    >
                      ₹{productInfo?.productPrice}
                    </span>{" "}
                    <span>{productInfo?.discount}% off</span>
                    <FontAwesomeIcon
                      icon={faTag}
                      shake
                      style={{ color: "#f24318", paddingLeft: "6px" }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Category: {productInfo?.categoryid?.categoryName}
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Subcategory: {productInfo?.subcategoryid?.subcategoryName}
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Stock: {productInfo?.stock}
                    </div>
                    {productInfo?.productType ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Product Type: {productInfo?.productType}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.productSize ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Product Size: {productInfo?.productSize}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.packSize ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Pack Size: {productInfo?.packSize}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Manufacturing Date:{" "}
                      {moment(productInfo?.manufacturingDate).format(
                        "DD-MM-YYYY"
                      )}
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-2 CZ">
                      Expiry Date:{" "}
                      {moment(productInfo?.expiryDate).format("DD-MM-YYYY")}
                    </div>
                    {productInfo?.colour ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Colour: {productInfo?.colour}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.flavour ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Flavour: {productInfo?.flavour}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.fragrance ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Fragrance: {productInfo?.fragrance}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.variant ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Varient: {productInfo?.variant}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.brand ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Brand: {productInfo?.brand}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.countryOfOrigin ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Country Of Origin: {productInfo?.countryOfOrigin}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.manufacturercompanyname ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Manufacturer Company:{" "}
                        {productInfo?.manufacturercompanyname}
                      </div>
                    ) : (
                      <></>
                    )}
                    {productInfo?.manufactureraddress ? (
                      <div className="col-lg-6 col-sm-12 mt-2 CZ">
                        Manufacturer Address: {productInfo?.manufactureraddress}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>
                    <Table responsive="md" style={{ marginTop: "1%" }}>
                      <thead>
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                          <th>Invoice Number</th>
                          <th>Invoice Date</th>
                          <th>Invoice Document</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productInfo?.InvoiceArray?.map((details) => {
                          return (
                            <tr
                              style={{
                                fontSize: "15px",
                                textAlign: "center",
                              }}
                            >
                              <td>{details?.InvoiceNumber}</td>

                              <td style={{ textAlign: "center" }}>
                                {details?.Invoicedate}
                              </td>

                              <td style={{ textAlign: "center" }}>
                                <img
                                  src={
                                    "https://cdn-icons-png.flaticon.com/128/202/202298.png"
                                  }
                                  alt="avathar"
                                  style={{
                                    width: "35px",
                                    height: "35px",
                                    borderRadius: "50px",
                                  }}
                                  onClick={() =>
                                    window.open(
                                      `http://localhost:8521/AdminInventory/${details?.InvoiceDoc}`
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <AiFillDelete
                                  style={{ color: "red", fontSize: "25px" }}
                                  onClick={() =>
                                    deleteInvoice(productInfo, details)
                                  }
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                  <div className="mt-3">
                    <Carousel responsive={responsive}>
                      {productInfo?.productImgs?.map((imgName) => {
                        return (
                          <div>
                            <img
                              src={`http://localhost:8521/AdminInventory/${imgName}`}
                              alt=""
                              style={{
                                width: "200px",
                                height: "200px",
                              }}
                            />
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>
                </div>
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
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => setShow2(false)}
              >
                CANCEL
              </button>

              {/* <button
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
                  orderProducts(e);
                }}
              >
                SUBMIT
              </button> */}
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={show3} onHide={handleClose3}>
          <Modal.Header>
            <Modal.Title>Edit Product Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-4 col-sm-12 mt-2">
                <select
                  style={{
                    width: "100%",
                    backgroundColor: "#EBEBEB",
                    padding: "8px 20px",
                    border: "1px solid #EBEBEB",
                  }}
                >
                  <option>{EditData?.categoryid?.categoryName}</option>
                </select>
              </div>
              <div className="col-lg-4 col-sm-12 mt-2">
                <select
                  style={{
                    width: "100%",
                    backgroundColor: "#EBEBEB",
                    padding: "8px 20px",
                    border: "1px solid #EBEBEB",
                  }}
                >
                  <option>{EditData?.subcategoryid?.subcategoryName}</option>
                </select>
              </div>
              <div className="col-lg-4 col-sm-12 mt-2">
                <select
                  style={{
                    width: "100%",
                    backgroundColor: "#EBEBEB",
                    padding: "8px 20px",
                    border: "1px solid #EBEBEB",
                  }}
                >
                  <option>{EditData?.productName}</option>
                </select>
              </div>

              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Selling Price
                </label>
                <input
                  placeholder="Price"
                  value={EditData?.vendorIdProductId?.MRP}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Discount (%)
                </label>
                <input
                  placeholder={EditData?.discount}
                  value={editDiscount}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => seteditDiscount(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Price After Discount
                </label>
                <input
                  placeholder={
                    EditData?.vendorIdProductId?.MRP -
                    (EditData?.vendorIdProductId?.MRP * EditData?.discount) /
                      100
                  }
                  value={
                    EditafterDiscountPrice
                      ? EditafterDiscountPrice
                      : EditData?.vendorIdProductId?.MRP -
                        (EditData?.vendorIdProductId?.MRP *
                          EditData?.discount) /
                          100
                  }
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Minimum alert stock
                </label>
                <input
                  placeholder={EditData?.minstock}
                  value={editMinAlertStock}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => seteditMinAlertStock(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Maximum Order limit
                </label>
                <input
                  placeholder={EditData?.maxOrderlimit}
                  value={editmaxOrderlimit}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => seteditmaxOrderlimit(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label
                  style={{
                    fontWeight: "500",
                    color: "#ebebeb",
                  }}
                >
                  Stocks Available
                </label>
                <input
                  placeholder={EditData?.stock}
                  value={EditData?.stock}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
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
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => setShow3(false)}
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
                onClick={() => {
                  EditInventory();
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal show={show4} onHide={handleClose4} className="pdfmodal">
          <Modal.Header closeButton>
            <Modal.Title>Invoice</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ overflow: "hidden" }}>
            <div>
              {/* {pdfdata ? (
                <iframe
                  src={pdfdata ? URL.createObjectURL(pdfdata) : ""}
                  width="100%"
                  height="500px"
                />
              ) : (
                ""
              )} */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose4}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>

        <div style={{ overflow: "hidden", overflowX: "scroll" }}>
          <Table responsive="md" style={{ marginTop: "1%" }}>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <th>Sl No.</th>
                <th>Inventory Id</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Subcategory</th>
                <th>Amount</th>
                <th>Discount (%)</th>
                <th>Offer Amount</th>
                <th>Stock Availability</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {search.length > 0
                ? tableFilter
                    .slice(pagesVisited, pagesVisited + usersPerPage)
                    ?.map((details, i) => {
                      return (
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                          <td>{i + 1}</td>
                          <td>#{details?.inventoryid}</td>
                          <td>{details?.productName}</td>
                          <td>{details?.categoryid?.categoryName}</td>
                          <td>{details?.subcategoryid?.subcategoryName}</td>
                          <td style={{ textAlign: "center" }}>
                            {details?.currencyFormat}
                            {details?.productPrice}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {details?.discount}
                          </td>
                          <td>
                            {(
                              details?.productPrice -
                              (details?.productPrice * details?.discount) / 100
                            ).toFixed(1)}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {details?.stock}
                          </td>
                          <td>
                            <div
                              style={{
                                display: "flex",
                                textAlign: "center",
                                justifyContent: "space-evenly",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faCircleInfo}
                                style={{ color: "#20958c", fontSize: "25px" }}
                                onClick={() => {
                                  setproductInfo(details);
                                  handleShow2();
                                }}
                              />
                              <MdEdit
                                style={{
                                  color: "#20958c",
                                  fontSize: "25px",
                                  marginRight: "1%",
                                }}
                                onClick={() => {
                                  setEditData(details);
                                  handleShow3();
                                }}
                              />
                              <AiFillDelete
                                style={{ color: "red", fontSize: "25px" }}
                                onClick={() => deleteInventory(details?._id)}
                              />
                              {/* <button
                          style={{
                            fontSize: "12px",
                            border: "none",
                            backgroundColor: "#20958c",
                            color: "white",
                            fontWeight: "600",
                            borderRadius: "4px",
                          }}
                        >
                          BLOCK
                        </button> */}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                : data
                    ?.slice(pagesVisited, pagesVisited + usersPerPage)
                    ?.map((details, i) => {
                      return (
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                          <td>{i + 1}</td>
                          <td>#{details?.inventoryid}</td>
                          <td>{details?.productName}</td>
                          <td>{details?.categoryid?.categoryName}</td>
                          <td>{details?.subcategoryid?.subcategoryName}</td>
                          <td style={{ textAlign: "center" }}>
                            {details?.currencyFormat}
                            {details?.productPrice}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {details?.discount}
                          </td>
                          <td>
                            {(
                              details?.productPrice -
                              (details?.productPrice * details?.discount) / 100
                            ).toFixed(1)}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {details?.stock}
                          </td>
                          <td>
                            <div
                              style={{
                                display: "flex",
                                textAlign: "center",
                                justifyContent: "space-evenly",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faCircleInfo}
                                style={{ color: "#20958c", fontSize: "25px" }}
                                onClick={() => {
                                  setproductInfo(details);
                                  handleShow2();
                                }}
                              />
                              <MdEdit
                                style={{
                                  color: "#20958c",
                                  fontSize: "25px",
                                  marginRight: "1%",
                                }}
                                onClick={() => {
                                  setEditData(details);
                                  handleShow3();
                                }}
                              />
                              <AiFillDelete
                                style={{ color: "red", fontSize: "25px" }}
                                onClick={() => deleteInventory(details?._id)}
                              />
                              {/* <button
                          style={{
                            fontSize: "12px",
                            border: "none",
                            backgroundColor: "#20958c",
                            color: "white",
                            fontWeight: "600",
                            borderRadius: "4px",
                          }}
                        >
                          BLOCK
                        </button> */}
                            </div>
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
      </div>
    </div>
  );
}
