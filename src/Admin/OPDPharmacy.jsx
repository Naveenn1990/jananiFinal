import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export function OPDPharmacy() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => {
    setShow1(false);
  };
  const handleShow1 = () => {
    setShow1(true);
  };
  const [modaldata, setmodaldata] = useState({});
  const [AppointmentList, setAppointmentList] = useState([]);
  const [PatientAppid, setPatientAppid] = useState("");

  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        // handle success
        const data = response.data.Info;
        // .filter(
        //   (item) => user?._id === item?.PatientId
        // );
        setAppointmentList(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const [medicinepaymentMethod, setmedicinepaymentMethod] = useState("");
  //   const [medicinepaymentStatus, setmedicinepaymentStatus] = useState("");
  const changePaymentStatus = async () => {
    if (!medicinepaymentMethod) {
      return alert("Please select the payment method");
    }
    try {
      const config = {
        url: `/user/editMedicinePayment`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          patientsAppId: PatientAppid,
          medicinepaymentMethod: medicinepaymentMethod,
          medicinepaymentStatus: "PAID",
        },
      };
      console.log("config", config);
      let response = await axios(config);
      if (response.status === 200) {
        alert(response.data.success);
        getAppointmentList();
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  console.log(AppointmentList, "klklklklkl");

  useEffect(() => {
    getAppointmentList();
  }, []);
  return (
    <>
      <div>
        <Table style={{ textAlign: "center" }}>
          <thead>
            <th>Name</th>
            <th>Mobileno.</th>
            <th>Doctor</th>
            <th>Prescribed Medicines</th>
            <th>Payment</th>
            <th>Payment status</th>
            <th>Invoice</th>
          </thead>
          <tbody>
            {AppointmentList?.map((item) => {
              return (
                <tr>
                  <td>{item?.Firstname}</td>
                  <td>{item?.PhoneNumber}</td>
                  <td>DR. {item?.ConsultantDoctor?.Firstname}</td>
                  <td>
                    <FaEye
                      style={{ color: "#20958c", marginRight: "1%" }}
                      onClick={() => {
                        setmodaldata(item);
                        setShow(true);
                      }}
                    />
                  </td>
                  <td>
                    {item?.medicinepaymentStatus === "UNPAID" ? (
                      <select
                        onClick={(e) =>
                          setmedicinepaymentMethod(e.target.value)
                        }
                      >
                        <option value="">Choose</option>
                        <option value="ONLINE">Online</option>
                        <option value="CASH">Cash</option>
                      </select>
                    ) : (
                      <>{item?.medicinepaymentMethod}</>
                    )}
                  </td>
                  <td>
                    {item?.medicinepaymentStatus === "UNPAID" ? (
                      <Button
                        style={{ backgroundColor: "#20958C", border: "0px " }}
                        onClick={() => {
                          setPatientAppid(item?._id);
                          handleShow1();
                        }}
                      >
                        Done
                      </Button>
                    ) : (
                      <div style={{ color: "green" }}>Done</div>
                    )}
                  </td>
                  <td>
                    {item?.medicinepaymentStatus === "PAID" ? (
                      <FaRegFilePdf
                        style={{ fontSize: "30px" }}
                        onClick={() =>
                          navigate("/admin/StaffOPDPharmacyBill", {
                            state: { modaldata: item },
                          })
                        }
                      />
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <Modal
        className="model-teri"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Prescription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>Consultant Doctor</h5>
            <h6 style={{ fontWeight: "bold" }}>
              Dr.{modaldata?.ConsultantDoctor?.Firstname}
            </h6>
            <h6>Contact : {modaldata?.ConsultantDoctor?.PhoneNumber}</h6>
            <h6>
              Appointment Date :{" "}
              {moment(modaldata?.createdAt).format("DD/MM/YYYY")}
            </h6>
            <h6>Patient Name : {modaldata?.Firstname}</h6>
          </div>
          <Table
          //  className=" table-striped"
          >
            <thead className="all-bg-green">
              <tr>
                <th className="text-light fw-bold" width="5%">
                  S. No
                </th>
                <th className="text-light fw-bold" width="10%">
                  Type
                </th>
                <th className="text-light fw-bold" width="15%">
                  Name
                </th>
                <th className="text-light fw-bold" width="15%">
                  Generic Name
                </th>
                <th className="text-light fw-bold" width="10%">
                  Dosage
                </th>
                <th className="text-light fw-bold" width="15%">
                  Frequency
                </th>
                <th className="text-light fw-bold" width="10%">
                  Duration
                </th>
                <th className="text-light fw-bold" width="15%">
                  Instruction
                </th>
                <th className="text-light fw-bold" width="15%">
                  Quantity
                </th>
                <th className="text-light fw-bold" width="15%">
                  Total
                </th>
                {/* <th className='text-light fw-bold' width="10%">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {modaldata?.medicineInfo?.map((item, index) => {
                return (
                  <tr className="admin-table-row">
                    <td>{index + 1}</td>

                    <td className=" me-2">{item?.medicineType}</td>
                    <td>{item?.medicineName}</td>

                    <td>{item?.genericName}</td>
                    <td>{item?.dosage} </td>

                    <td>
                      {item?.morningDose}-{item?.noonDose}-{item?.eveDose}-
                      {item?.nightDose}
                    </td>

                    <td>
                      {item?.duration} {item?.days}
                    </td>

                    <td>{item?.medicineTakingTime}</td>
                    <td>
                      {item?.Quantity ? (
                        <>{item?.Quantity}</>
                      ) : (
                        <>
                          <input type="number" />
                        </>
                      )}
                    </td>
                    <td>
                      {item?.totalAmtToPay ? (
                        <>{item?.totalAmtToPay}</>
                      ) : (
                        <>{/* <input type="number" onChange={()=>}/> */}</>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Submit</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Done</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Are you sure, Amount is paid?</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="success" onClick={changePaymentStatus}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
