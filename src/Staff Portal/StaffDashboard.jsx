import { faArrowLeft, faArrowRight, faBed, faCalendarCheck, faFileInvoice, faMoneyBillTransfer, faRestroom, faRightFromBracket, faUserGroup, faVialVirus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const StaffDashboard = () => {

    const navigate = useNavigate()

    const [RoomsList, setRoomsList] = useState({});

    const getRoomsList = () => {
      axios
        .get("http://localhost:8521/api/admin/getAllRooms")
        .then(function (response) {
          // handle success
          setRoomsList(response.data.roomsList);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };

    const [AppointmentList, setAppointmentList] = useState([]);

    const getAppointmentList = () => {
      axios
        .get("http://localhost:8521/api/user/getlist")
        .then(function (response) {
          // handle success
          setAppointmentList(response.data.Info);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };

    useEffect(() => {
        getRoomsList();
        getAppointmentList()
      }, []);

      console.log(RoomsList,"room list");
    return (
        <div>
            <Container>

                <div className='p-4 mb-4 row align-items-center justify-content-between' style={{ backgroundColor: '#dae1f3' }} >

                    <h4 className='fw-bold col-lg-4'>Dashboard</h4>

                    <div className='col-lg-6 d-flex gap-3 '>
                        <Form.Select style={{ width: '200px', marginLeft: 'auto' }} aria-label="Default select example">
                            <option value="1">Last 30 Days</option>
                            <option value="2">Last 6 Months</option>
                            <option value="3">Last 1 Year</option>
                        </Form.Select>
                        <Button className='d-flex gap-2' style={{ backgroundColor: 'rgb(32 139 140)' }}><FontAwesomeIcon icon={faFileInvoice} className='fs-6' /> Report</Button>
                    </div>
                </div>

                <div className="row justify-content-center mb-5">
                    <div className="col-lg-4 text-light me-3 ms-auto" style={{ backgroundColor: 'rgb(32 139 140)', borderRadius: '20px', width: '350px' }}>
                        <div className=" refer-dashboard " >
                            <span><FontAwesomeIcon icon={faRestroom} className='fs-2 p-4  ' style={{ borderRadius: '50%', backgroundColor: 'rgb(18 114 101)' }} /></span>
                            <div >
                                <span className="fs-6 fw-bold">TOTAL ROOMS</span> <br />
                                <span className="fs-4 mb-2">{RoomsList?.length}</span>
                                <div className="progress mb-2">
                                    <div className="progress-bar" style={{ width: "45%" }}></div>
                                </div>
                                {/* <span className="">
                                    45% Increase in 28 Days
                                </span> */}
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4 text-light  me-3" style={{ backgroundColor: 'rgb(193 13 96)', borderRadius: '20px', width: '350px' }}>
                        <div className=" refer-dashboard " >
                            <span><FontAwesomeIcon icon={faBed} className='fs-2 p-4  ' style={{ borderRadius: '50%', backgroundColor: 'rgb(179 39 142 / 72%)' }} /></span>
                            <div >
                                <span className="fs-6 fw-bold">BEDS AVAILABLE</span> <br />
                                <span className="fs-4 mb-2">{RoomsList[0]?.bedsinfo?.length}</span>
                                <div className="progress mb-2">
                                    <div className="progress-bar" style={{ width: "65%" }}></div>
                                </div>
                                {/* <span className="">
                                    68% Bed Are Full
                                </span> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 text-light  me-3" style={{ backgroundColor: 'rgb(137 95 19)', borderRadius: '20px', width: '350px' }}>
                        <div className=" refer-dashboard " >
                            <span><FontAwesomeIcon icon={faCalendarCheck} className='fs-2 p-4  ' style={{ borderRadius: '50%', backgroundColor: 'rgb(155 120 24)' }} /></span>
                            <div >
                                <span className="fs-6 fw-bold">APPOINTMENTS</span> <br />
                                <span className="fs-4 mb-2">{AppointmentList?.length}</span>
                                <div className="progress mb-2">
                                    <div className="progress-bar" style={{ width: "85%" }}></div>
                                </div>
                                {/* <span className="">
                                    60% Increase in 28 Days
                                </span> */}
                            </div>
                        </div>
                    </div>



                </div>


                <div className="row justify-content-center">
                    <div className="col-lg-6 text-light me-3 " style={{ backgroundColor: 'rgb(22 149 32)', borderRadius: '20px', width: '450px' }}>
                        <div className=" refer-dashboard " >
                            <span><FontAwesomeIcon icon={faArrowLeft} className='fs-2 p-4  ' style={{ borderRadius: '50%', backgroundColor: 'rgb(3 122 29)' }} /></span>
                            <div >
                                <span className="fs-3 fw-bold">IN PATIENTS</span> <br />
                                <div className="progress mb-2">
                                    <div className="progress-bar" style={{ width: "20%" }}></div>
                                </div>
                                <span className="fs-5">
                                    20% Increase from Last month
                                </span>
                            </div>
                            <span className="fs-2 mb-2">35</span>
                        </div>
                        <Button onClick={() => navigate('/staffinpatientform')} className='green-btn-11 m-auto d-flex mb-3'></Button>
                    </div>

                    <div className="col-lg-6 text-light  " style={{ backgroundColor: 'rgb(193 34 34', borderRadius: '20px', width: '450px' }}>
                        <div className=" refer-dashboard " >
                            <span><FontAwesomeIcon icon={faArrowRight} className='fs-2 p-4  ' style={{ borderRadius: '50%', backgroundColor: 'rgb(159 39 39)' }} /></span>
                            <div >
                                <span className="fs-3 fw-bold">OUT PATIENTS</span> <br />
                                <div className="progress mb-2">
                                    <div className="progress-bar" style={{ width: "32%"  }}></div>
                                </div>
                                <span className="fs-5">
                                    32 patints discharge in this month
                                </span>
                            </div>
                            <span className="fs-2 mb-2">32</span>
                        </div>

                        <Button  onClick={() => navigate('/staffoutpatientform')}  className='green-btn-12 m-auto d-flex'></Button>
                    </div>

                </div>

            </Container>
        </div>
    )
}
