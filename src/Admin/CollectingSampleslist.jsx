import axios from "axios";
import exportFromJSON from "export-from-json";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import Barcode from "react-barcode";
import { Button, Modal, Table } from "react-bootstrap";
import { AiFillFileExcel } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { useReactToPrint } from "react-to-print";
import { Pagination, Stack } from "@mui/material";
import ReactPaginate from "react-paginate";
import { MdDeleteOutline } from "react-icons/md";

export default function CollectingSampleslist() {
  const AdminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // Sample collection confirmation...
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [ShowvialDetailsModal, setShowvialDetailsModal] = useState(false);
  const handleClosevialDetailsModal = () => setShowvialDetailsModal(false);
  const handleShowvialDetailsModal = () => setShowvialDetailsModal(true);

  const [ViewBarcode, setViewBarcode] = useState({});
  const [show10, setShow10] = useState(false);
  const handleClose10 = () => setShow10(false);
  const handleShow10 = (item) => {
    setShow10(true);
    setViewBarcode(item);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // Get All Lab Test Requests
  const [AllTestList, setAllTestList] = useState([]);
  const GetLabtestList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/user/getBookedHospitalLabTest"
      );
      setAllTestList(res.data.list);
      setFilteredCatList(res.data.list);
    } catch (error) {
      console.log(error);
    }
  };
  // const [labtestid, setlabtestid] = useState("");
  // const [sampleName, setsampleName] = useState("");
  const AddSampleData = async (labtestid, sampleName) => {
    try {
      const config = {
        url: "/addlabSample",
        method: "put",
        baseURL: "http://localhost:8521/api/user",
        headers: { "content-type": "application/json" },
        data: {
          hospitallabtestid: Labtests?._id,
          labtestid: labtestid,
          sampleName: sampleName,
          sampleCollectionDateTime: Date.now(),
          sampleCollectedBy: AdminDetails?._id,
          sampleCollectionUsedProducts: usedProducts,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        setEditCollectedSamples(false);
        setUsedProducts([]);
        handleClose2();
        GetLabtestList();
      }
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error);
    }
  };

  const removeSampleData = async (
    labtestid,
    removedUsedProductid,
    sampleProductid,
    sampleQuantity
  ) => {
    try {
      const config = {
        url: "/removeSampleCollectionUsedProduct",
        method: "put",
        baseURL: "http://localhost:8521/api/user",
        headers: { "content-type": "application/json" },
        data: {
          hospitallabtestid: Labtests?._id,
          labtestid: labtestid,
          removedUsedProductid,
          sampleProductid,
          sampleQuantity,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        setUsedProducts([]);
        handleClose2();
        GetLabtestList();
      }
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error);
    }
  };

  const sampleCollectionConfirmation = async () => {
    try {
      const config = {
        url: `/confirmSampleCollection/${Labtests?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api/user",
        headers: { "content-type": "application/json" },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        GetLabtestList();
        setEditCollectedSamples(false);
        setUsedProducts([]);
        handleClose3();
      } else {
        handleClose3();
      }
    } catch (error) {
      console.log(error);
      handleClose3();
      return alert(error.response.data.error);
    }
  };

  const [patientlist, setpatientlist] = useState([]);

  const getPatientlist = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        setpatientlist(response.data.UsersInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getPatientlist();
    GetLabtestList();
    HospitallabListFn();
  }, []);

  const [HospitalLabList, setHospitalLabList] = useState([]);
  const HospitallabListFn = () => {
    axios
      .get("http://localhost:8521/api/admin/getHospitalLabTestlist")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.HospitalLabTests;
          data.forEach((item) => {
            item.label = item.testName;
            item.value = item.testName;
          });
          setHospitalLabList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalLabList([]);
      });
  };

  // ==========================================

  const [InventoryOrderList, setInventoryOrderList] = useState([]);
  const LabInventoryListFn = async () => {
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
    LabInventoryListFn();
  }, []);

  const [usedProducts, setUsedProducts] = useState([]);
  const [chooseusedProducts, setchooseUsedProducts] = useState("");
  const [chooseusedProductsid, setchooseUsedProductsid] = useState("");
  const [ChoosedProductAvailQuantity, setChoosedProductAvailQuantity] =
    useState(0);
  const [chooseusedProductsQuantity, setchooseUsedProductsQuantity] =
    useState("");

  const [EditCollectedSamples, setEditCollectedSamples] = useState(false);

  function handleQuantityChange(e) {
    if (e.target.value) {
      if (
        Number(e.target.value) >= 1 &&
        Number(e.target.value) <= Number(ChoosedProductAvailQuantity)
      ) {
        setchooseUsedProductsQuantity(Number(e.target.value));
      } else {
        return alert("Product Quantity out of bound!");
      }
    }
  }

  function addUsedProductsInSampleCollection() {
    // let isProductAvail = usedProducts.some(
    //   (val) => val.productid?.toString() === chooseusedProductsid?.toString()
    // );
    // if(isProductAvail){

    // }

    const isDataAvail = usedProducts.some(
      (val) => val.productid?.toString() === chooseusedProductsid?.toString()
    );

    if (!isDataAvail) {
      setUsedProducts((curr) => [
        ...curr,
        {
          productid: chooseusedProductsid,
          productName: chooseusedProducts,
          Quantity: chooseusedProductsQuantity,
        },
      ]);
    } else {
      setUsedProducts([
        ...usedProducts?.map((val) => {
          if (val?.productid?.toString() === chooseusedProductsid?.toString()) {
            return {
              ...val,
              Quantity: val?.Quantity + chooseusedProductsQuantity,
            };
          }
          return val;
        }),
      ]);
    }
  }

  console.log("usedProducts: ", usedProducts);

  function removeUsedProductsInSampleCollection(id) {
    console.log("uiouio; ", id);
    setUsedProducts([
      ...usedProducts.filter(
        (val) => val?.productid?.toString() !== id?.toString()
      ),
    ]);
  }

  // ==============================================

  const [Labtests, setLabtests] = useState({});

  // search
  const [search, setSearch] = useState("");
  const [FilteredCatList, setFilteredCatList] = useState([]);
  function handleFilter() {
    if (search != "") {
      // setSearch(search);
      const filterTable = AllTestList.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(search.toLowerCase())
        )
      );
      setFilteredCatList([...filterTable]);
    } else {
      // setSearch(search);
      // vialList();
      setFilteredCatList([...AllTestList]);
    }
  }

  useEffect(() => {
    handleFilter();
  }, [search]);

  const [testDetails, settestDetails] = useState({});
  function vailNeededFn(arr) {
    for (let x = 0; x < arr.length; x++) {
      let datatestid = arr[x]["testid"];
      //   settestDetails(
      //     [
      //       ...HospitalLabList.filter(
      //         (val) => val?._id?.toString() === datatestid?.toString()
      //       ),
      //     ][0]
      //   );
      for (let i = 0; i < HospitalLabList.length; i++) {
        if (datatestid?.toString() === HospitalLabList[i]["_id"].toString()) {
          settestDetails({ ...HospitalLabList[i] });
        }
      }
    }
    handleShowvialDetailsModal();
  }

  //===================

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(
    FilteredCatList?.filter(
      (x) =>
        (x.patientType === "IPD" || x.paymentStatus === "PAID") &&
        x.labTestBookingStatus === "BOOKED"
    )?.length / usersPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("lab sample list");

  const ExportToExcel = () => {
    if (fileName) {
      if (AllTestList.length != 0) {
        exportFromJSON({
          data: JSON.parse(JSON.stringify(AllTestList)),
          fileName,
          exportType,
        });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
    }
  };

  console.log("yuyuyuioi: ", InventoryOrderList);

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
          <input
            placeholder="Search Hospital Lab"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
            value={search}
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
        <div style={{ overflow: "hidden", overflowX: "scroll" }}>
          <Table className="mt-2" bordered>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                {/* <th>Test Status</th> */}
                <th>Patient ID</th>
                <th>Name</th>
                <th>Phone No</th>
                <th>Email</th>
                <th>Test Date</th>
                <th>Add Sample</th>
                <th>Vials Needed</th>
                <th>Barcode</th>
                <th>Sample Collection confirmation</th>
              </tr>
            </thead>
            <tbody>
              {FilteredCatList?.filter(
                (x) =>
                  (x.paymentStatus === "PAID" || x.patientType === "IPD") &&
                  x.labTestBookingStatus === "BOOKED"
              )
                ?.slice(pagesVisited, pagesVisited + usersPerPage)
                ?.map((item, i) => {
                  return (
                    <tr style={{ fontSize: "15px", textAlign: "center" }}>
                      <td>
                        {item?.patientid?.PatientId ? (
                          <>
                            {item?.patientid?.PatientId}(
                            {item?.patientid?.registrationType})
                          </>
                        ) : (
                          <>--/--</>
                        )}
                      </td>
                      <td>{item?.patientname}</td>
                      <td>{item?.Phoneno}</td>
                      <td>{item?.email}</td>
                      <td>{moment(item?.testDate).format("DD/MM/YYYY")}</td>
                      <td>
                        <Button
                          onClick={() => {
                            handleShow2();
                            setLabtests(item);
                          }}
                        >
                          View
                        </Button>
                      </td>
                      <td>
                        <IoEye
                          style={{ fontSize: "20px", color: "#20958c" }}
                          onClick={() => {
                            vailNeededFn(item?.Labtests);
                          }}
                        />
                      </td>
                      <td>
                        <IoEye
                          style={{ fontSize: "20px", color: "#20958c" }}
                          onClick={() => {
                            handleShow10(item);
                          }}
                        />
                      </td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => {
                            setLabtests(item);
                            handleShow3();
                          }}
                        >
                          Confirm
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <div style={{ float: "left" }} className="my-3 d-flex justify-end">
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

        <Modal show={show2} onHide={handleClose2} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Add Sample</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="row p-3"
              style={{
                backgroundColor: "white",
                height: "400px",
                overflow: "hidden scroll",
                // overflowX: "scroll",
              }}
            >
              {Labtests?.Labtests?.map((item) => {
                let arrStr = [...item?._id?.split("")];
                let randomStr = arrStr
                  ?.slice(arrStr.length - 9, arrStr.length)
                  ?.join("");
                return (
                  <div
                    style={{
                      marginBottom: "20px",
                      border: "2px solid #20958c",
                      padding: "10px",
                      margin: "10px",
                    }}
                  >
                    <Table bordered>
                      <tbody>
                        <tr>
                          <td>Test Name</td>
                          <td>
                            <b>{item?.testName}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>Sample Name</td>
                          <td>
                            <input
                              type="text"
                              value={randomStr}
                              style={{
                                width: "100%",
                                height: "45px",
                                padding: "10px",
                              }}
                              placeholder={
                                item?.sampleName ? item?.sampleName : randomStr
                              }
                              disabled
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>Sample Collection Date & Time</td>
                          <td>
                            <input
                              type="text"
                              value={`${new Date().getDate()}-${
                                new Date().getMonth() + 1
                              }-${new Date().getFullYear()}   ${new Date().getHours()}:${new Date().getMinutes()}`}
                              style={{
                                width: "100%",
                                height: "45px",
                                padding: "10px",
                              }}
                              disabled
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>Sample Collected By</td>
                          <td>
                            <input
                              type="text"
                              value={AdminDetails?.name}
                              style={{
                                width: "100%",
                                height: "45px",
                                padding: "10px",
                              }}
                              disabled
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    {!EditCollectedSamples ? (
                      <div>
                        <Table bordered>
                          <thead>
                            <th>S.no.</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                          </thead>
                          <tbody>
                            {item?.sampleCollectionUsedProducts?.map(
                              (valdata, i) => {
                                return (
                                  <tr>
                                    <td>{i + 1}. </td>
                                    <td>{valdata?.productName}</td>
                                    <td>{valdata?.Quantity}</td>
                                    <td>
                                      <Button
                                        onClick={() =>
                                          setEditCollectedSamples(true)
                                        }
                                      >
                                        Edit
                                      </Button>
                                    </td>
                                  </tr>
                                );
                              }
                            )}
                          </tbody>
                        </Table>
                      </div>
                    ) : EditCollectedSamples ? (
                      // want delete button so it will delete from database and increase the quantity in the inventory.
                      <div>
                        <div
                          style={{ marginTop: "10px", marginBottom: "10px" }}
                        >
                          <Table bordered>
                            <thead>
                              <th>S.no.</th>
                              <th>Product Name</th>
                              <th>Quantity</th>
                              <th>Action</th>
                            </thead>
                            <tbody>
                              {item?.sampleCollectionUsedProducts?.map(
                                (valdata, i) => {
                                  return (
                                    <tr>
                                      <td>{i + 1}. </td>
                                      <td>{valdata?.productName}</td>
                                      <td>{valdata?.Quantity}</td>
                                      <td>
                                        <MdDeleteOutline
                                          onClick={() =>
                                            removeSampleData(
                                              item?._id,
                                              valdata?._id,
                                              valdata?.productid,
                                              valdata?.Quantity
                                            )
                                          }
                                          style={{
                                            color: "red",
                                            fontSize: "20px",
                                          }}
                                        />
                                      </td>
                                    </tr>
                                  );
                                }
                              )}
                            </tbody>
                          </Table>
                        </div>
                        {/* <Table bordered>
                          <tbody>
                            <tr>
                              <td>Sample Collected Used Products</td>
                              <td>
                                <select
                                  style={{
                                    width: "100%",
                                    height: "45px",
                                    padding: "10px",
                                  }}
                                  onChange={(e) => {
                                    setchooseUsedProducts(
                                      JSON.parse(e.target.value)
                                        ?.vendorProductId?.productName
                                    );
                                    setchooseUsedProductsid(
                                      JSON.parse(e.target.value)
                                        ?.vendorProductId?._id
                                    );
                                    setChoosedProductAvailQuantity(
                                      JSON.parse(e.target.value)?.quantity
                                    );
                                  }}
                                >
                                  <option>Choose Option</option>
                                  {InventoryOrderList?.filter(
                                    (data) => data.quantity > 0
                                  )?.map((valEle) => {
                                    return (
                                      <option value={JSON.stringify(valEle)}>
                                        {valEle?.vendorProductId?.productName}
                                      </option>
                                    );
                                  })}
                                </select>
                              </td>
                              <td>
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={chooseusedProductsQuantity}
                                  style={{
                                    width: "100%",
                                    height: "45px",
                                    padding: "10px",
                                  }}
                                  name="quantity"
                                  id="quantity"
                                  min="1"
                                  max={`${ChoosedProductAvailQuantity}`}
                                  onChange={(e) => handleQuantityChange(e)}
                                />
                              </td>
                              <td>
                                <Button
                                  onClick={addUsedProductsInSampleCollection}
                                >
                                  Add
                                </Button>
                              </td>
                            </tr>

                            {item?.sampleCollectedBy ? (
                              <></>
                            ) : (
                              <tr>
                                <td></td>
                                <td>
                                  <Button
                                    variant="primary"
                                    onClick={() => {
                                      AddSampleData(item?._id, randomStr);
                                    }}
                                  >
                                    Save
                                  </Button>
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </Table>
                        <div>
                          <Table bordered>
                            <thead>
                              <th>S.no.</th>
                              <th>Product Name</th>
                              <th>Quantity</th>
                              <th>Action</th>
                            </thead>
                            <tbody>
                              {usedProducts?.map((valdata, i) => {
                                return (
                                  <tr>
                                    <td>{i + 1}. </td>
                                    <td>{valdata?.productName}</td>
                                    <td>{valdata?.Quantity}</td>

                                    <td>
                                      <MdDeleteOutline
                                        onClick={() =>
                                          removeUsedProductsInSampleCollection(
                                            valdata?.productid
                                          )
                                        }
                                        style={{
                                          color: "red",
                                          fontSize: "20px",
                                        }}
                                      />
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>
                        </div>

                        <div className="d-flex justify-content-end">
                          <Button
                            onClick={() => AddSampleData(item?._id, randomStr)}
                          >
                            Add Sample
                          </Button>
                        </div> */}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div>
                      <Table bordered>
                        <tbody>
                          <tr>
                            <td>Sample Collected Used Products</td>
                            <td>
                              <select
                                style={{
                                  width: "100%",
                                  height: "45px",
                                  padding: "10px",
                                }}
                                onChange={(e) => {
                                  setchooseUsedProducts(
                                    JSON.parse(e.target.value)?.vendorProductId
                                      ?.productName
                                  );
                                  setchooseUsedProductsid(
                                    JSON.parse(e.target.value)?.vendorProductId
                                      ?._id
                                  );
                                  setChoosedProductAvailQuantity(
                                    JSON.parse(e.target.value)?.quantity
                                  );
                                }}
                              >
                                <option>Choose Option</option>
                                {InventoryOrderList?.filter(
                                  (data) => data.quantity > 0
                                )?.map((valEle) => {
                                  return (
                                    <option value={JSON.stringify(valEle)}>
                                      {valEle?.vendorProductId?.productName}
                                    </option>
                                  );
                                })}
                              </select>
                            </td>
                            <td>
                              <input
                                type="number"
                                placeholder="Quantity"
                                value={chooseusedProductsQuantity}
                                style={{
                                  width: "100%",
                                  height: "45px",
                                  padding: "10px",
                                }}
                                name="quantity"
                                id="quantity"
                                min="1"
                                max={`${ChoosedProductAvailQuantity}`}
                                onChange={(e) => handleQuantityChange(e)}
                              />
                            </td>
                            <td>
                              <Button
                                onClick={addUsedProductsInSampleCollection}
                              >
                                Add
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <div>
                        <Table bordered>
                          <thead>
                            <th>S.no.</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                          </thead>
                          <tbody>
                            {usedProducts?.map((valdata, i) => {
                              return (
                                <tr>
                                  <td>{i + 1}. </td>
                                  <td>{valdata?.productName}</td>
                                  <td>{valdata?.Quantity}</td>
                                  {/* {item?.sampleName ? (
                                  <td>
                                    <Button
                                      onClick={() =>
                                        setEditCollectedSamples(true)
                                      }
                                    >
                                      Edit
                                    </Button>
                                  </td>
                                ) : (
                                  <></>
                                )} */}

                                  <td>
                                    <MdDeleteOutline
                                      onClick={() =>
                                        removeUsedProductsInSampleCollection(
                                          valdata?.productid
                                        )
                                      }
                                      style={{
                                        color: "red",
                                        fontSize: "20px",
                                      }}
                                    />
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>

                      <div className="d-flex justify-content-end">
                        <Button
                          onClick={() => AddSampleData(item?._id, randomStr)}
                        >
                          Add Sample
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={AddSampleData}>
              Add Sample
            </Button> */}
          </Modal.Footer>
        </Modal>

        <Modal show={show3} onHide={handleClose3} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Sample Submission confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row p-3">
              <b style={{ color: "white" }}>
                Are you sure! You want to{" "}
                <span style={{ color: "green" }}> submit</span> the collected
                sample details?
              </b>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
              NO
            </Button>
            <Button variant="primary" onClick={sampleCollectionConfirmation}>
              YES
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          size="lg"
          show={ShowvialDetailsModal}
          onHide={handleClosevialDetailsModal}
        >
          <Modal.Header>
            <Modal.Title>Vial Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table responsive>
              <thead>
                <th>S.no.</th>
                <th>Vial</th>
                <th>Vial Description</th>
                <th>Image</th>
              </thead>
              <tbody style={{ backgroundColor: "#F5F5F5" }}>
                {testDetails?.vialsneeded?.map((val, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{val?.vialid?.vial}</td>
                      <td>{val?.vialid?.vialDescription}</td>
                      <td>
                        <img
                          src={`http://localhost:8521/Vials/${val?.vialid?.vialImg}`}
                          style={{ width: "100px" }}
                          alt="no-img"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
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
              onClick={handleClosevialDetailsModal}
            >
              CANCEL
            </button>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show10} onHide={handleClose10}>
          <Modal.Header>
            <Modal.Title>
              Barcode{" "}
              {/* <span>
                ({ViewBarcode?.Firstname} {ViewBarcode?.Lastname} )
              </span> */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div ref={componentRef} className="d-flex justify-content-center">
              <Barcode
                value={ViewBarcode?.patientid?.PatientId}
                width={1}
                height={50}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose10}>
              Close
            </Button>

            <Button variant="primary" onClick={handlePrint}>
              print
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
