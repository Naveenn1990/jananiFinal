import axios from "axios";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import Barcode from "react-barcode";
import { Button, Modal, Table } from "react-bootstrap";
import { IoEye } from "react-icons/io5";
import { useReactToPrint } from "react-to-print";

export default function CollectingSampleslist() {
  const AdminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

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
  const [labtestid, setlabtestid] = useState("");
  const [sampleName, setsampleName] = useState("");
  const AddSampleData = async () => {
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
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        GetLabtestList();
        handleClose2();
      }
    } catch (error) {
      console.log(error);
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
              </tr>
            </thead>
            <tbody>
              {FilteredCatList?.filter(
                (x) =>
                  (x.patientType === "IPD" || x.paymentStatus === "PAID") &&
                  x.labTestBookingStatus === "BOOKED"
              )?.map((item, i) => {
                return (
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>
                      {item?.patientid?._id ? (
                        <>
                          {item?.patientid?._id}(
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
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        <Modal show={show2} onHide={handleClose2} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Add Sample</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row p-3" style={{ backgroundColor: "white" }}>
              <Table bordered>
                <thead className="">
                  <tr>
                    <th>Sl.</th>
                    <th>Test Name</th>
                    <th>Test Price</th>
                    <th>Test Price(Insurance)</th>
                    <th>Sample name</th>
                  </tr>
                </thead>
                <tbody>
                  {Labtests?.Labtests?.map((item, i) => {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{item?.testName}</td>
                        <td>{item?.priceNonInsurance}</td>
                        <td>{item?.priceInsurance}</td>
                        <td>
                          <input
                            type="text"
                            onChange={(e) => {
                              setlabtestid(item?._id);
                              setsampleName(e.target.value);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="primary" onClick={AddSampleData}>
              Add Sample
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
                value={ViewBarcode?.patientid?._id}
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
