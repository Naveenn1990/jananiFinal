import React, { useEffect, useState } from "react";
import { Button, Container, InputGroup, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { CkEditorComponent } from "../CkEditor/CkEditorComponent";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

export const AddProduct = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const Vendor = JSON.parse(sessionStorage.getItem("VendorDetails"));

  const NormalValuesClose = () => setShow(false);
  const NormalValuesShow = () => setShow(true);
  const MandatoryValueClose = () => setShow1(false);
  const MandatoryValueShow = () => setShow1(true);

  const formdata = new FormData();
  const [productType, setproductType] = useState();
  const [productName, setproductName] = useState();
  const [HSN, setHSN] = useState("");
  const [Batch, setBatch] = useState("");
  const [No_of_Strips, setNo_of_Strips] = useState(0);
  const [No_Tablets_strips, setNo_Tablets_strips] = useState(0);
  const [Scheme, setScheme] = useState("");
  const [productPrice, setproductPrice] = useState();
  const [MRP, setMRP] = useState(0);
  const [CGST, setCGST] = useState(0);
  const [SGST, setSGST] = useState(0);

  const [ProductCategory, setProductCategory] = useState();
  const [ProductSubCategory, setProductSubCategory] = useState();

  const [manufacturingDate, setmanufacturingDate] = useState();
  const [expiryDate, setexpiryDate] = useState();
  const [discount, setdiscount] = useState();
  const [productSize, setproductSize] = useState();
  const [packSize, setpackSize] = useState();
  const [colour, setcolour] = useState();
  const [flavour, setflavour] = useState();
  const [fragrance, setfragrance] = useState();
  const [variant, setvariant] = useState();

  const [description, setdescription] = useState();
  const [brand, setbrand] = useState();
  const [countryOfOrigin, setcountryOfOrigin] = useState();
  const [manufacturercompanyname, setmanufacturercompanyname] = useState();
  const [manufactureraddress, setmanufactureraddress] = useState();
  const [stock, setstock] = useState();
  // const [minstock, setminstock] = useState();
  const [currencyFormat, setcurrencyFormat] = useState();
  const [productImgs, setproductImgs] = useState([]);
  const [safetyDoc, setsafetyDoc] = useState("");
  const [GstDocument, setGstDocument] = useState("");

  const AddProduct = async (e) => {
    e.preventDefault();

    if (productType?.toLowerCase() === "tablet") {
      if (!No_of_Strips) {
        alert("Please Enter Number of Strips");
      } else if (!No_Tablets_strips) {
        alert("Please Enter Number of Tablets in Strips");
      } else if (
        !HSN ||
        !Batch ||
        !MRP ||
        !CGST ||
        !SGST ||
        !productType ||
        !productName ||
        !productPrice ||
        !ProductCategory ||
        !ProductSubCategory ||
        !manufacturingDate ||
        !expiryDate ||
        !discount ||
        !productSize ||
        !packSize ||
        !colour ||
        !flavour ||
        !fragrance ||
        !variant ||
        !description ||
        !brand ||
        !countryOfOrigin ||
        !manufacturercompanyname ||
        !manufactureraddress ||
        !stock ||
        !currencyFormat ||
        productImgs?.length === 0 ||
        !safetyDoc ||
        !GstDocument
      ) {
        alert("Please fill all the fields");
      } else {
        let obj1 = {
          HSN: HSN,
          Batch: Batch,
          No_of_Strips: No_of_Strips,
          No_Tablets_strips: No_Tablets_strips,
          Scheme: Scheme,
          MRP: MRP,
          CGST: CGST,
          SGST: SGST,
          vendorid: Vendor?._id,
          productName: productName,
          productPrice: productPrice,
          productType: productType,
          categoryid: ProductCategory,
          subcategoryid: ProductSubCategory,
          // Category: ProductCategory?.categoryName,
          // Subcategory: ProductSubCategory?.subcategoryName,
          manufacturingDate: manufacturingDate,
          expiryDate: expiryDate,
          discount: discount,
          productSize: productSize,
          packSize: packSize,
          colour: colour,
          flavour: flavour,
          fragrance: fragrance,
          variant: variant,
          description: description,
          brand: brand,
          countryOfOrigin: countryOfOrigin,
          manufacturercompanyname: manufacturercompanyname,
          manufactureraddress: manufactureraddress,
          stock: stock,
          // minstock: minstock,
          currencyFormat: currencyFormat,
          productImgs: productImgs,
          safetyDoc: safetyDoc,
          GstDocument: GstDocument,
        };

        try {
          const config = {
            url: "/vendor/addProduct",
            method: "post",
            baseURL: "http://localhost:8521/api",
            headers: { "content-type": "multipart/form-data" },
            data: obj1,
          };
          let res = await axios(config);
          if (res.status === 200) {
            console.log(res.data);
            console.log(res.data.success);
            alert("Product Added");
            window.location.assign("/VendorAddProducts");
          }
        } catch (error) {
          console.log(error.response);
          if (error.response) {
            alert(error.response.data.error);
          }
        }
      }
    } else {
      if (
        !HSN ||
        !Batch ||
        !MRP ||
        !CGST ||
        !SGST ||
        !productType ||
        !productName ||
        !productPrice ||
        !ProductCategory ||
        !ProductSubCategory ||
        !manufacturingDate ||
        !expiryDate ||
        !discount ||
        !productSize ||
        !packSize ||
        !colour ||
        !flavour ||
        !fragrance ||
        !variant ||
        !description ||
        !brand ||
        !countryOfOrigin ||
        !manufacturercompanyname ||
        !manufactureraddress ||
        !stock ||
        !currencyFormat ||
        productImgs?.length === 0 ||
        !safetyDoc ||
        !GstDocument
      ) {
        alert("Please fill all the fields");
      } else {
        let obj1 = {
          HSN: HSN,
          Batch: Batch,
          MRP: MRP,
          CGST: CGST,
          SGST: SGST,
          No_of_Strips: No_of_Strips,
          No_Tablets_strips: No_Tablets_strips,
          Scheme: Scheme,
          vendorid: Vendor?._id,
          productName: productName,
          productPrice: productPrice,
          productType: productType,
          categoryid: ProductCategory,
          subcategoryid: ProductSubCategory,
          // Category: ProductCategory?.categoryName,
          // Subcategory: ProductSubCategory?.subcategoryName,
          manufacturingDate: manufacturingDate,
          expiryDate: expiryDate,
          discount: discount,
          productSize: productSize,
          packSize: packSize,
          colour: colour,
          flavour: flavour,
          fragrance: fragrance,
          variant: variant,
          description: description,
          brand: brand,
          countryOfOrigin: countryOfOrigin,
          manufacturercompanyname: manufacturercompanyname,
          manufactureraddress: manufactureraddress,
          stock: stock,
          // minstock: minstock,
          currencyFormat: currencyFormat,
          productImgs: productImgs,
          safetyDoc: safetyDoc,
          GstDocument: GstDocument,
        };

        try {
          const config = {
            url: "/vendor/addProduct",
            method: "post",
            baseURL: "http://localhost:8521/api",
            headers: { "content-type": "multipart/form-data" },
            data: obj1,
          };
          let res = await axios(config);
          if (res.status === 200) {
            console.log(res.data);
            console.log(res.data.success);
            alert("Product Added");
            window.location.assign("/VendorAddProducts");
          }
        } catch (error) {
          console.log(error.response);
          if (error.response) {
            alert(error.response.data.error);
          }
        }
      }
    }
  };

  const [categoryList, setcategoryList] = useState([]);
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
  const [productTypes, setProductTypes] = useState([]);
  const getAllData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/vendor/producttype"
      );
      setProductTypes(res.data.success);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllCategory();
    getAllSubCategory();
    getAllData();
  }, []);
  console.log("categoryList", categoryList);
  console.log("subcategoryList", subcategoryList);
  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mb-4">
        Product
      </h4>
      <Container>
        <div className="row">
          <div className="col-lg-3">
            <label className="fw-bold text-dark">Product Type*</label>
            <Form.Select
              aria-label="Default select example"
              value={productType}
              onChange={(e) => setproductType(e.target.value)}
            >
              <option>Select Product Type</option>
              {productTypes?.map((item) => {
                return (
                  <option value={item?.Producttype}>{item?.Producttype}</option>
                );
              })}
            </Form.Select>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Product Name*</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Product Name"
                aria-describedby="basic-addon1"
                onChange={(e) => setproductName(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">HSN*</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="HSN"
                aria-describedby="basic-addon1"
                onChange={(e) => setHSN(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Batch*</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Batch"
                aria-describedby="basic-addon1"
                onChange={(e) => setBatch(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Product Category*</label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option>Select Product Category</option>
              {categoryList?.map((item) => {
                return <option value={item?._id}>{item?.categoryName}</option>;
              })}
            </Form.Select>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Product Sub-Category*</label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setProductSubCategory(e.target.value)}
            >
              <option>Select Product Sub-Category</option>
              {subcategoryList
                ?.filter((sub) => sub?.categoryid?._id === ProductCategory)
                .map((item) => {
                  return (
                    <option value={item?._id}>{item?.subcategoryName}</option>
                  );
                })}
            </Form.Select>
          </div>

          {productType?.toLowerCase() === "tablet" ? (
            <>
              <div className="col-lg-3">
                <label className="fw-bold text-dark">
                  No. of Strips in Box*
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="No. of Strips in Box"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setNo_of_Strips(e.target.value)}
                  />
                </InputGroup>
              </div>
              <div className="col-lg-3">
                <label className="fw-bold text-dark">
                  No. of Tablets in strips*
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="No. of Tablets in strips"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setNo_Tablets_strips(e.target.value)}
                  />
                </InputGroup>
              </div>
              <div className="col-lg-3">
                <label className="fw-bold text-dark">Scheme</label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Scheme (Ex: 20 + 1)"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setScheme(e.target.value)}
                  />
                </InputGroup>
              </div>
            </>
          ) : (
            ""
          )}
          {/* <div className="col-lg-3">
            <label className="fw-bold text-dark">Product Type Descprition*</label>
            <span></span>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="description"
                aria-describedby="basic-addon1"
                onChange={(e) => setproductType(e.target.value)}
              />
            </InputGroup>
          </div> */}
          <div className="col-lg-3">
            <label className="fw-bold text-dark">Currency Type*</label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setcurrencyFormat(e.target.value)}
            >
              <option>Select Currency Type</option>
              <option value="₹">₹</option>
              <option value="$">$</option>
            </Form.Select>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">
              {productType?.toLowerCase() === "tablet"
                ? "Product Price/Strips*"
                : "Product Price/Product*"}
            </label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Product Price"
                aria-describedby="basic-addon1"
                onChange={(e) => setproductPrice(e.target.value)}
              />
            </InputGroup>
          </div>
          <div className="col-lg-3">
            <label className="fw-bold text-dark">SGST*</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="SGST"
                aria-describedby="basic-addon1"
                onChange={(e) => setSGST(e.target.value)}
              />
            </InputGroup>
          </div>
          <div className="col-lg-3">
            <label className="fw-bold text-dark">CGST*</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="CGST"
                aria-describedby="basic-addon1"
                onChange={(e) => setCGST(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">MRP*</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="MRP"
                aria-describedby="basic-addon1"
                onChange={(e) => setMRP(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Product Discount*</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Product Discount"
                aria-describedby="basic-addon1"
                onChange={(e) => setdiscount(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Stock*</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Stock"
                aria-describedby="basic-addon1"
                onChange={(e) => setstock(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Product variant*</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Product variant"
                aria-describedby="basic-addon1"
                onChange={(e) => setvariant(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Manufacturing Date*</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="date"
                placeholder="Manufacturing Date"
                aria-describedby="basic-addon1"
                onChange={(e) => setmanufacturingDate(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Expiry Date*</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="date"
                placeholder="Expiry Date"
                aria-describedby="basic-addon1"
                onChange={(e) => setexpiryDate(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Product Size</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="productSize"
                aria-describedby="basic-addon1"
                onChange={(e) => setproductSize(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Pack Size</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="packSize"
                aria-describedby="basic-addon1"
                onChange={(e) => setpackSize(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Colour</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="SAC"
                placeholder="Colour"
                aria-describedby="basic-addon1"
                onChange={(e) => setcolour(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Flavour</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="flavour"
                aria-describedby="basic-addon1"
                onChange={(e) => setflavour(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Fragrance</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="fragrance"
                aria-describedby="basic-addon1"
                onChange={(e) => setfragrance(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Description</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="description"
                aria-describedby="basic-addon1"
                onChange={(e) => setdescription(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Brand</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="brand"
                aria-describedby="basic-addon1"
                onChange={(e) => setbrand(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Country Of Origin</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="countryOfOrigin"
                aria-describedby="basic-addon1"
                onChange={(e) => setcountryOfOrigin(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">
              Manufacturer Company Name *
            </label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Manufacturer Company Name"
                aria-describedby="basic-addon1"
                onChange={(e) => setmanufacturercompanyname(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Manufacturer address</label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="manufacturer address"
                aria-describedby="basic-addon1"
                onChange={(e) => setmanufactureraddress(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-lg-3">
            <label className="fw-bold text-dark">Product Images*</label>
            <InputGroup className="mb-3">
              <input
                type="file"
                id="files"
                name="files"
                multiple
                onChange={(e) => setproductImgs(e.target.files)}
              />
            </InputGroup>
          </div>
          <div className="col-lg-3">
            <label className="fw-bold text-dark">Safety Document*</label>
            <InputGroup className="mb-3">
              <input
                type="file"
                id="files"
                name="files"
                onChange={(e) => setsafetyDoc(e.target.files[0])}
              />
            </InputGroup>
          </div>
          <div className="col-lg-3">
            <label className="fw-bold text-dark">Gst Document*</label>
            <InputGroup className="mb-3">
              <input
                type="file"
                id="files"
                name="files"
                onChange={(e) => setGstDocument(e.target.files[0])}
              />
            </InputGroup>
          </div>
        </div>

        <div className="d-flex gap-4 mb-4 ">
          <Button
            style={{
              backgroundColor: "#208b8c",
              width: "200px",
              fontSize: "16px",
              height: "38px",
            }}
            onClick={(e) => AddProduct(e)}
          >
            Submit
          </Button>
        </div>
      </Container>

      <Modal
        show={show}
        onHide={NormalValuesClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Normal values </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-3">
            <div className="col-lg-3">
              <label className=" text-dark fw-bold"> Type* :</label>
              <Form.Select
                aria-label="Default select example"
                style={{ height: "35px" }}
              >
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Infant">Infant</option>
                <option value="Child">Child</option>
                <option value="Adult">Adult</option>
              </Form.Select>
            </div>
            <div className="col-lg-3">
              <label className=" text-dark fw-bold"> </label>
              <InputGroup className="">
                <Form.Control
                  placeholder="Other"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>

            <div className="col-lg-3">
              <label className=" text-dark fw-bold"> Range :</label>
              <InputGroup className="">
                <Form.Control
                  placeholder="Min"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="col-lg-3">
              <label className=" text-dark fw-bold"> </label>
              <InputGroup className="">
                <Form.Control
                  placeholder="Max"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-4">
              <label className=" text-dark fw-bold"> Age* :</label>
              <InputGroup className="">
                <Form.Control
                  type="number"
                  placeholder="age"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="col-lg-4">
              <label className=" text-dark fw-bold"> Range :</label>
              <InputGroup className="">
                <Form.Control
                  placeholder="Min"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>

            <div className="col-lg-4">
              <label className=" text-dark fw-bold"> </label>
              <InputGroup className="">
                <Form.Control
                  placeholder="Max"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-4">
              <label className=" text-dark fw-bold"> Critical Range :</label>
              <InputGroup className="">
                <Form.Control
                  placeholder="<Low"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>

            <div className="col-lg-4">
              <label className=" text-dark fw-bold"> </label>
              <InputGroup className="">
                <Form.Control
                  placeholder="High>"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
          </div>

          <div className="d-flex gap-3">
            <div className="d-flex gap-2 align-items-center mb-2 justify-content-between">
              <label className="fw-bold text-dark">
                Check the box, If the range is abnormal :
              </label>
              <input type="checkbox" />
            </div>
            <div className="d-flex gap-2 align-items-center mb-2 justify-content-between">
              <label className="fw-bold text-dark">
                Check the box, To avoid the range in report :
              </label>
              <input type="checkbox" />
            </div>
          </div>

          <Button className="all-bg-green mb-3">Add</Button>

          <h6 className="fw-bold">Edited Normal value list</h6>

          <Table responsive className="table table-bordered">
            <thead>
              <tr>
                <th style={{ color: "#208b8c", fontWeight: "bold" }}>Type</th>
                <th style={{ color: "#208b8c", fontWeight: "bold" }}>Others</th>
                <th style={{ color: "#208b8c", fontWeight: "bold" }}>
                  Age(Min)
                </th>
                <th style={{ color: "#208b8c", fontWeight: "bold" }}>
                  Age(Max)
                </th>
                <th style={{ color: "#208b8c", fontWeight: "bold" }}>
                  Range (Min)
                </th>
                <th style={{ color: "#208b8c", fontWeight: "bold" }}>
                  Range (Max)
                </th>
                <th style={{ color: "#208b8c", fontWeight: "bold" }}>
                  Valid Range (Min)
                </th>
                <th style={{ color: "#208b8c", fontWeight: "bold" }}>
                  Valid Range (Max)
                </th>
                <th style={{ color: "#208b8c", fontWeight: "bold" }}>
                  Critical Range (Low)
                </th>
                <th style={{ color: "#208b8c", fontWeight: "bold" }}>
                  Critical Range (High)
                </th>
              </tr>
            </thead>
            <tbody>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={NormalValuesClose}>
            Close
          </Button>
          <Button className="all-bg-green">Submit</Button>
        </Modal.Footer>
      </Modal>

      {/* Mandrotory Values */}

      <Modal
        show={show1}
        onHide={MandatoryValueClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Mandatory Condition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-3">
            <div className="col-lg-6">
              <label className=" text-dark fw-bold"> Result Name :</label>
              <InputGroup className="">
                <Form.Control
                  placeholder="Result Name"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>

            <div className="col-lg-6">
              <label className=" text-dark fw-bold"> Result Value : </label>
              <InputGroup className="">
                <Form.Control
                  placeholder="Result Value"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={MandatoryValueClose}>
            Close
          </Button>
          <Button className="all-bg-green">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
