import { faBuilding, faCalendarDays, faCancel, faEllipsis, faPenToSquare, faPlus, faSignal, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Container, FloatingLabel, FormLabel, Form, Dropdown } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { CkEditorComponent } from '../CkEditor/CkEditorComponent';
import axios from 'axios';
import moment from 'moment';


export const DoctorsCaseStudy = () => {
    const CaseStudy = sessionStorage.getItem("CaseStudy")
    console.log(CaseStudy,"shghsg");

    const [AppointmentList, setAppointmentList] = useState({});

    const getAppointmentList = () => {
      axios
        .get("http://localhost:8521/api/user/getlist")
        .then(function (response) {
          // handle success
          const data = response.data.Info.filter((item)=>item?._id == CaseStudy)
          setAppointmentList(data[0]);
          alert("lll")
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };

    console.log(AppointmentList,"klklklklkl");
  
    useEffect(() => {
      getAppointmentList();
    }, []);

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteBtnClose = () => setShow1(false)
    const deleteBtnShow = () => setShow1(true)

 
  
    return (
        <div>
            <Container className='p-4' >

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                    <Nav variant="pills" className="d-flex justify-content-evenly" style={{ backgroundColor: "#9ecbc2"}}>

                        <Nav.Item>
                            <Nav.Link eventKey="first" className='fw-bold' style={{ border: '1px solid #208b8c', color: '#208b8c', padding: '15px' }}>Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second" className='fw-bold' style={{ border: '1px solid #208b8c', color: '#208b8c', padding: '15px' }}>Prescription</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" className='fw-bold' style={{ border: '1px solid #208b8c', color: '#208b8c', padding: '15px' }}>Investigation</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="four" className='fw-bold' style={{ border: '1px solid #208b8c', color: '#208b8c', padding: '15px' }}>Examination</Nav.Link>
                        </Nav.Item>

                    </Nav>

                    <hr />

                    <Tab.Content>
                        <Tab.Pane eventKey="first" className='p-2'>
                            <h4 className='fw-bold text-dark p-2'>Patient Details</h4>

                            <div className='row justify-content-evenly mb-4' style={{ border: '1px solid black', padding: '5px' }}>
                                <p className="col-lg-2"><span className='fw-bold text-dark'>Name</span> : {AppointmentList?.Firstname}</p>
                                <p className="col-lg-2"><span className='fw-bold text-dark'>ID</span> : {AppointmentList?.PatientId?.slice(0,10)}</p>
                                <p className="col-lg-2"><span className='fw-bold text-dark'>Age</span> :{moment().diff(AppointmentList?.DOB, 'years',false)}</p>
                                <p className="col-lg-2"><span className='fw-bold text-dark'>Gender</span> : {AppointmentList?.Gender}</p>
                                <p className="col-lg-2"><span className='fw-bold text-dark'>Mobile</span> : {AppointmentList?.PhoneNumber}</p>
                            </div>

                            <div className="row justify-content-evenly">
                                {/* TABLE PATIENT INFORMATION */}

                                <table className="table table-bordered col-lg-6 " style={{ width: '500px' }}>
                                    <thead className='table-secondary'>
                                        <tr>
                                            <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Patient Information</th>
                                            <th ></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td className='fw-bold text-dark'>Patient Status : </td>
                                            <td className='text-success fw-bold'>Active</td>

                                        </tr>

                                        {/* <tr>

                                            <td className='fw-bold text-dark'>ABHA</td>
                                            <td>Verify ABHA</td>

                                        </tr> */}

                                        <tr>
                                            <td className='fw-bold text-dark'>Family ID :</td>
                                            <td>1</td>
                                        </tr>

                                        <tr>
                                            <td className='fw-bold text-dark'>Reg Date :</td>
                                            <td>03/08/2023 12:33 PM</td>
                                        </tr>


                                        <tr>
                                            <td className='fw-bold text-dark'>Mebmber Ship :</td>
                                            <td className='text-danger fw-bold'>No Member Ship</td>
                                        </tr>



                                        <tr>
                                            <td className='fw-bold text-dark'>Group Tag :</td>
                                            <td>#ahg424</td>
                                        </tr>

                                        <tr>
                                            <td className='fw-bold text-dark'>Address :</td>
                                            <td>Singapoor Layout <br />
                                                Banglore
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* TABLE MEDICAL HISTOR */}
                                <table className="table table-bordered col-lg-6" style={{ width: '400px' }}>
                                    <thead className='table-secondary'>
                                        <tr>
                                            <th style={{ color: '#208b8c', fontWeight: 'bold' }} >Medical History</th>
                                            <th ></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td className='fw-bold text-dark'>Medical : </td>
                                            <td >Tb</td>

                                        </tr>

                                        <tr>

                                            <td className='fw-bold text-dark'>Family :</td>
                                            <td>Fever</td>

                                        </tr>

                                        <tr>
                                            <td className='fw-bold text-dark'>Drug :</td>
                                            <td>Dolo 650</td>
                                        </tr>

                                        <tr>
                                            <td className='fw-bold text-dark'>Social :</td>
                                            <td>Tobbacco Chewing</td>
                                        </tr>


                                        <tr>
                                            <td className='fw-bold text-dark'>Allergies :</td>
                                            <td >--</td>
                                        </tr>



                                        <tr>
                                            <td className='fw-bold text-dark'>Surgical :</td>
                                            <td>--</td>
                                        </tr>

                                        <tr>
                                            <td className='fw-bold text-dark'>Address :</td>
                                            <td>Singapoor Layout <br />
                                                Banglore
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Tab.Pane>

                        {/* SECOND TAB */}

                        <Tab.Pane eventKey="second" className='p-2'>


                        <div className='row justify-content-evenly mb-4' style={{ border: '1px solid black', padding: '5px' }}>
                                <p className="col-lg-2"><span className='fw-bold text-dark'>Name</span> : {AppointmentList?.Firstname}</p>
                                <p className="col-lg-2"><span className='fw-bold text-dark'>ID</span> : {AppointmentList?.PatientId?.slice(0,10)}</p>
                                <p className="col-lg-2"><span className='fw-bold text-dark'>Age</span> :{moment().diff(AppointmentList?.DOB, 'years',false)}</p>
                                <p className="col-lg-2"><span className='fw-bold text-dark'>Gender</span> : {AppointmentList?.Gender}</p>
                                <p className="col-lg-2"><span className='fw-bold text-dark'>Mobile</span> : {AppointmentList?.PhoneNumber}</p>
                            </div>

                            {/* <table className="table table-bordered" style={{ width: '' }}>
                                <thead className='table-secondary'>
                                    <tr>
                                        <th className='fw-bold' style={{ width: '130px', color: '#208b8c' }} >Prescription Date</th>
                                        <th className='fw-bold ' style={{ width: '420px', color: '#208b8c' }}>Prescription</th>
                                        <th className='fw-bold' style={{ width: '100px', color: '#208b8c' }}>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>

                                        <td>03/08/2023 12:34 PM</td>

                                        <td>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text">1.</span>
                                                <input type="text" class="form-control" placeholder='DOLO 650' aria-label="Amount (to the nearest dollar)" />
                                              
                                                <span class="input-group-text">1 x 0 x 1 / 2 Days</span>
                                            </div>
                                        </td>
                                        <td><Button className='all-bg-green'>Add</Button></td>

                                    </tr>

                                    <tr>

                                        <td>06/08/2023 01:24 PM</td>

                                        <td>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text">1.</span>
                                                <input type="text" class="form-control" placeholder='KHASI KI DAWAI ' aria-label="Amount (to the nearest dollar)" />
                                                <span class="input-group-text">1 x 1 x 1 / 3 Days</span>
                                            </div>
                                        </td>

                                        <td><Button className='all-bg-green'>Add</Button></td>

                                    </tr>
                                </tbody>
                            </table> */}

                            <h4 className='fw-bold text-dark'>Medicine Information</h4>
                            <hr />
                            <div className='row'>
                                <div className="col-lg-4 ">
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Medicine Name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Genric Name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <Form.Select aria-label="Default select example" className='mb-3'>
                                        <option value="">Select</option>
                                        <option value="Tablet">Tablet</option>
                                        <option value="Capsule">Capsule</option>
                                        <option value="Cream">Cream</option>
                                        <option value="Drops">Drops</option>
                                        <option value="Gel">Gel</option>
                                        <option value="Inhaler">Inhaler</option>
                                        <option value="Injection">Injection</option>
                                        <option value="Lotion">Lotion</option>
                                        <option value="MotherTincture">Mother Tincture</option>
                                        <option value="Mouthwash">Mouthwash</option>
                                        <option value="Oil">Oil</option>
                                        <option value="Ointment">Ointment</option>
                                        <option value="Pills">Pills</option>
                                        <option value="Powder">Powder</option>
                                        <option value="Shampoo">Shampoo</option>
                                        <option value="Spray">Spray</option>
                                        <option value="Suspension">Suspension</option>
                                        <option value="Syringe">Syringe</option>
                                        <option value="Syrup">Syrup</option>
                                        <option value="Toothpaste">Toothpaste</option>
                                    </Form.Select>

                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Dosage"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>

                                <div className="col-lg-4">

                                    <td width="24%">
                                        <table className="table table-striped table-bordered table-condensed">
                                            <tbody><tr>
                                                <td>Morn</td>
                                                <td>Noon</td>
                                                <td>Eve</td>
                                                <td>Night</td>
                                            </tr>
                                                <tr>
                                                    <td>
                                                        <input type="text" id="morning" name="morning" className="input-md form-control " />
                                                    </td>
                                                    <td>
                                                        <input type="text" id="afternoon" name="afternoon" className="input-md form-control " />
                                                    </td>
                                                    <td>
                                                        <input type="text" id="evening" name="evening" className="input-md form-control " />
                                                    </td>
                                                    <td>
                                                        <input type="text" id="night" name="night" className="input-md form-control " />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="4" align="center">
                                                        <strong>(or)</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="4">
                                                        <select className="input-md form-control">
                                                            <option>Select</option>
                                                            <option value="OO">Only Once</option>
                                                            <option value="OA">Only Afternoon</option>
                                                            <option value="QD">QD (Once a day)</option>
                                                            <option value="BID">BID (Twice a day)</option>
                                                            <option value="TID">TID (Three times a day)</option>
                                                            <option value="QID">QID (Four times a day)</option>
                                                            <option value="FID">FID (Five times a day)</option>
                                                            <option value="6x">Six times a day</option>
                                                            <option value="7x">Seven times a day</option>
                                                            <option value="8x">Eight times a day</option>
                                                            <option value="9x">Nine times a day</option>
                                                            <option value="10x">Ten times a day</option>
                                                            <option value="11x">Eleven times a day</option>
                                                            <option value="12x">Twelve times a day</option>
                                                            <option value="13x">Thirteen times a day</option>
                                                            <option value="14x">Fourteen times a day</option>
                                                            <option value="15x">Fifteen times a day</option>
                                                            <option value="Q4H">Q4H (Every 4 hours)</option>
                                                            <option value="Q6H">Q6H (Every 6 hours)</option>
                                                            <option value="Q2H">Q2H (Every 2 hours)</option>
                                                            <option value="QOD">QOD (Every other hour)</option>
                                                            <option value="QH">QH (Every hour)</option>
                                                            <option value="QAM">QAM (Every morning)</option>
                                                            <option value="QN">QN (Every night)</option>
                                                            <option value="QWK">QWK (Every week)</option>
                                                            <option value="QWK2">QWK2 (Every two weeks)</option>
                                                            <option value="BIS in 7d">BIS in 7d (Twice a week)</option>
                                                            <option value="TIW">TIW (Three times a week)</option>
                                                            <option value="OM">OM (Once in a month)</option>
                                                            <option value="SOS">SOS (If Necessary)</option>
                                                            <option value="Frequently">Frequently</option>
                                                            <option value="Dieb. Alt.">Dieb. Alt. (Alternate Days)</option>
                                                            <option value="STAT">STAT</option>
                                                        </select>
                                                    </td>
                                                </tr>

                                                <tr className='text-dark'>
                                                    <td colspan="4">
                                                        <input type="radio" id="beforefood" name="beforeorafterfood" value="Before Food" />Before Food
                                                        <input type="radio" id="afterfood" name="beforeorafterfood" value="After Food" />After Food
                                                        <br />
                                                        <input type="radio" id="withoutfood" name="beforeorafterfood" value="With Food" checked="" />With Food
                                                        <input type="radio" id="nafood" name="beforeorafterfood" value="N/A" checked="" />N/A
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </td>
                                </div>
                                <div className="col-lg-4">
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Duration"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <Form.Select aria-label="Default select example" className='mb-3'>
                                        <option id="days" value="days">Days</option>
                                        <option id="hrs" value="hrs">Hours</option>
                                        <option id="weeks" value="weeks">Weeks</option>
                                        <option id="months" value="months">Months</option>
                                    </Form.Select>

                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Result"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <div className='mb-2'>
                                        <Button className='d-flex align-items-center gap-2 all-bg-green' ><FontAwesomeIcon icon={faPlus} />ADD MEDICINE</Button>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-4 mb-5'>
                                <h5 className='fw-bold text-dark'>Medicine List</h5>
                                <hr />
                                <table className='table table-striped'>
                                    <thead className='all-bg-green'>
                                        <tr><th className='text-light fw-bold' width="5%">S. No</th>
                                            <th className='text-light fw-bold' width="10%">Type</th>
                                            <th className='text-light fw-bold' width="15%">Name</th>
                                            <th className='text-light fw-bold' width="15%">Generic Name</th>
                                            <th className='text-light fw-bold' width="10%">Dosage</th>
                                            <th className='text-light fw-bold' width="15%">Frequency</th>
                                            <th className='text-light fw-bold' width="10%">Duration</th>
                                            <th className='text-light fw-bold' width="15%">Instruction</th>
                                            <th className='text-light fw-bold' width="10%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        <tr className="admin-table-row" >

                                            <td >
                                                1
                                            </td>

                                            <td className=" me-2">
                                                Tablet
                                            </td>

                                            <td>DOLO</td>
                                            <td>Medicine </td>
                                            <td>500</td>

                                            <td>
                                                1-0-0-1
                                            </td>

                                            <td>
                                                x 2 Days
                                            </td>

                                            <td>After Food</td>

                                            <td>

                                                {/* onClick={handleShow} */}
                                                <Dropdown >
                                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu >
                                                        <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>

                                            </td>
                                        </tr>
                                        <tr className="admin-table-row" >

                                            <td >
                                                1
                                            </td>

                                            <td className=" me-2">
                                                Tablet
                                            </td>

                                            <td>DOLO</td>
                                            <td>Medicine </td>
                                            <td>500</td>

                                            <td>
                                                1-0-0-1
                                            </td>

                                            <td>
                                                x 2 Days
                                            </td>

                                            <td>After Food</td>

                                            <td>

                                                {/* onClick={handleShow} */}
                                                <Dropdown >
                                                    <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                                                        {/* <FontAwesomeIcon icon={faBook} style={{ color: "#803c3c", marginRight: '5px' , fontSize:'15px'}} /> */}
                                                        <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu >
                                                        <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                                                        <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className='fw-bold'>Advice :</p>
                            <div style={{ width: '800px' }}>
                                <CkEditorComponent />
                            </div>

                            <div className='row gap-3 ms-2'>
                                <Button className='col-lg-2' style={{ backgroundColor: '#008900' }}>Save</Button>
                                <Button className='col-lg-2' style={{ backgroundColor: '#208b8c' }}>Save & Bill</Button>
                                <Button className='col-lg-2' style={{ backgroundColor: '#cd0b0be3' }}>Print</Button>
                                <Button className='col-lg-2' style={{ backgroundColor: '#990399' }}>Email</Button>
                            </div>

                        </Tab.Pane>

                        {/* THIRD TAB */}
                        <Tab.Pane eventKey="third">

                            <h5 className='fw-bold'>Choose Investigation</h5>
                            <div className="row align-items-center mb-4">
                                <div className='col-lg-4'>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Add Investigstion</option>
                                        <option value="1">X-RAY FOREARM</option>
                                        <option value="2">X-RAY CHEST</option>
                                        <option value="3">X-RAY DORSAL</option>
                                        <option value="4">X-RAY FOOT AP</option>
                                        <option value="5">X-RAY WRIST</option>
                                        <option value="6">X-RAY KUB</option>
                                        <option value="7">X-RAY THIGH</option>
                                        <option value="8">X-RAY SKULL</option>
                                        <option value="9">X-RAY ANKLE</option>
                                    </select>
                                </div>
                                <div className="col-lg-4">
                                    <InputGroup size="lg">
                                        <Form.Control
                                            aria-label="Large"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </InputGroup>
                                </div>

                                <div className="col-lg-2">
                                    <Button className='all-bg-green'><FontAwesomeIcon icon={faPlus} /> ADD </Button>
                                </div>
                            </div>

                            <h5 className='fw-bold'>Select Investigation (Tick the checkbox include in the report)</h5>

                            <Form style={{ border: '1px solid grey', width: '180px', padding: '5px', borderRadius: '5px', marginBottom: '10px' }}>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="d-flex gap-4">
                                        <label className='fw-bold'> Investigation : </label>
                                        <Form.Check // prettier-ignore
                                            type={type}
                                            id={`default-${type}`}
                                        // label={`default ${type}`}
                                        />

                                    </div>
                                ))}
                            </Form>

                            <p className='fw-bold'>Notes :</p>
                            <div style={{ width: '800px' }}>
                                <CkEditorComponent />
                            </div>

                            <div className='row gap-3 ms-2'>
                                <Button className='col-lg-2' style={{ backgroundColor: '#008900' }}>Save</Button>
                                <Button className='col-lg-2' style={{ backgroundColor: '#cd0b0be3' }}>Print</Button>
                                <Button className='col-lg-2' style={{ backgroundColor: '#990399' }}>Email</Button>
                            </div>

                        </Tab.Pane>

                        <Tab.Pane eventKey="four" className='p-2'>

                            <h5 className='fw-bold'>Vitals</h5>

                            <hr />

                            <div className="row justify-content-evenly mb-3">
                                <div className="col-lg-3 ">
                                    <label className='fw-bold text-dark mb-1'>Height(cm) :</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>

                                <div className="col-lg-3 ">
                                    <label className='fw-bold text-dark mb-1'>Weight(kg) :</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>

                                <div className="col-lg-3 ">
                                    <label className='fw-bold text-dark mb-1'>BMI :</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>
                            </div>



                            <div className="row justify-content-evenly mb-3 ">
                                <div className="col-lg-3 ">
                                    <label className='fw-bold text-dark mb-1'>Temperature(F) :</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>

                                <div className="col-lg-3 ">
                                    <label className='fw-bold text-dark mb-1'>Plus Rate :</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>

                                <div className="col-lg-3 ">
                                    <label className='fw-bold text-dark mb-1'>Blood Pressure(mm Hg) :</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>
                            </div>



                            <div className="row justify-content-evenly mb-3">
                                <div className="col-lg-3 ">
                                    <label className='fw-bold text-dark mb-1'>Spo2(% at RA) :</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>

                                <div className="col-lg-3 ">
                                    <label className='fw-bold text-dark mb-1'>Sugar(mg/dl) :</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>

                                <div className="col-lg-3 ">
                                    <label className='fw-bold text-dark mb-1'>Head Circumference(cm) :</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>
                            </div>


                            <h5 className='fw-bold'>Systemic Examination</h5>

                            <hr />

                            <div className="row justify-content-evenly mb-3">
                                <div className="col-lg-4 ">
                                    <label className='fw-bold text-dark mb-1'>RS :</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>

                                <div className="col-lg-4 ">
                                    <label className='fw-bold text-dark mb-1'>CVS :</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>
                            </div>

                            <div className="row justify-content-evenly mb-3">
                                <div className="col-lg-4 ">
                                    <label className='fw-bold text-dark mb-1'>CNS :</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>

                                <div className="col-lg-4 ">
                                    <label className='fw-bold text-dark mb-1'>PA :</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>
                            </div>

                            <h5 className='fw-bold'> Examination</h5>
                            <hr />

                            <label className='fw-bold mb-2'>Genral Examination :</label>
                            <div style={{ width: '800px' }}>
                                <CkEditorComponent />
                            </div>

                            <label className='fw-bold mb-2'>Local Examination :</label>
                            <div style={{ width: '800px' }}>
                                <CkEditorComponent />
                            </div>

                            <div className='row gap-3 ms-2'>
                                <Button className='col-lg-2' style={{ backgroundColor: '#008900' }}>Save</Button>
                                <Button className='col-lg-2' style={{ backgroundColor: '#208b8c' }}>Save & Bill</Button>
                                <Button className='col-lg-2' style={{ backgroundColor: '#cd0b0be3' }}>Print</Button>
                                <Button className='col-lg-2' style={{ backgroundColor: '#990399' }}>Email</Button>
                            </div>

                        </Tab.Pane>

                    </Tab.Content>


                </Tab.Container>
            </Container>

            {/* EDIT MODAL */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Medicine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row mb-2 '>
                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Medicine Name* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingEmail" label="Medicine Name">
                                <Form.Control type="text" placeholder="Medicine Name" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Genric Name* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingName" label="Genric Name">
                                <Form.Control type="text" placeholder="Genric Name" />
                            </FloatingLabel>
                        </div>

                    </div>

                    <div className='row mb-2 '>
                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Select Dablet* </FormLabel>
                            <Form.Select aria-label="Default select example" className='mb-3' style={{ width: '300px' }}>
                                <option value="">Select</option>
                                <option value="Tablet">Tablet</option>
                                <option value="Capsule">Capsule</option>
                                <option value="Cream">Cream</option>
                                <option value="Drops">Drops</option>
                                <option value="Gel">Gel</option>
                                <option value="Inhaler">Inhaler</option>
                                <option value="Injection">Injection</option>
                                <option value="Lotion">Lotion</option>
                                <option value="MotherTincture">Mother Tincture</option>
                                <option value="Mouthwash">Mouthwash</option>
                                <option value="Oil">Oil</option>
                                <option value="Ointment">Ointment</option>
                                <option value="Pills">Pills</option>
                                <option value="Powder">Powder</option>
                                <option value="Shampoo">Shampoo</option>
                                <option value="Spray">Spray</option>
                                <option value="Suspension">Suspension</option>
                                <option value="Syringe">Syringe</option>
                                <option value="Syrup">Syrup</option>
                                <option value="Toothpaste">Toothpaste</option>
                            </Form.Select>
                        </div>

                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Dosage* </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingName" label="Dosage">
                                <Form.Control type="text" placeholder="Dosage" />
                            </FloatingLabel>
                        </div>

                    </div>

                    <div className='row mb-2 '>
                        <div className="col-lg-6">
                            <FormLabel className='fw-bold text-dark'>Duration * </FormLabel>
                            <FloatingLabel style={{ width: '300px' }} controlId="floatingEmail" label="Duration">
                                <Form.Control type="text" placeholder="Duration" />
                            </FloatingLabel>
                        </div>

                        <div className="col-lg-6 mt-3">
                            <FormLabel className='fw-bold text-dark'>Days* </FormLabel>
                            <Form.Select style={{ width: '300px' }} aria-label="Default select example">
                                <option>Select</option>
                                <option value="OO">Only Once</option>
                                <option value="OA">Only Afternoon</option>
                                <option value="QD">QD (Once a day)</option>
                                <option value="BID">BID (Twice a day)</option>
                                <option value="TID">TID (Three times a day)</option>
                                <option value="QID">QID (Four times a day)</option>
                                <option value="FID">FID (Five times a day)</option>
                                <option value="6x">Six times a day</option>
                                <option value="7x">Seven times a day</option>
                                <option value="8x">Eight times a day</option>
                                <option value="9x">Nine times a day</option>
                                <option value="10x">Ten times a day</option>
                                <option value="11x">Eleven times a day</option>
                                <option value="12x">Twelve times a day</option>
                                <option value="13x">Thirteen times a day</option>
                                <option value="14x">Fourteen times a day</option>
                                <option value="15x">Fifteen times a day</option>
                                <option value="Q4H">Q4H (Every 4 hours)</option>
                                <option value="Q6H">Q6H (Every 6 hours)</option>
                                <option value="Q2H">Q2H (Every 2 hours)</option>
                                <option value="QOD">QOD (Every other hour)</option>
                                <option value="QH">QH (Every hour)</option>
                                <option value="QAM">QAM (Every morning)</option>
                                <option value="QN">QN (Every night)</option>
                                <option value="QWK">QWK (Every week)</option>
                                <option value="QWK2">QWK2 (Every two weeks)</option>
                                <option value="BIS in 7d">BIS in 7d (Twice a week)</option>
                                <option value="TIW">TIW (Three times a week)</option>
                                <option value="OM">OM (Once in a month)</option>
                                <option value="SOS">SOS (If Necessary)</option>
                                <option value="Frequently">Frequently</option>
                                <option value="Dieb. Alt.">Dieb. Alt. (Alternate Days)</option>
                                <option value="STAT">STAT</option>
                            </Form.Select>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success">Submit</Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Modal */}

            <Modal
                show={show1}
                onHide={deleteBtnClose}
                backdrop="static"
                keyboard={false}

            >

                <Modal.Header closeButton >
                    <Modal.Title>

                        {/* <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div> */}

                    </Modal.Title >
                </Modal.Header>

                <Modal.Body>
                    <div className='text-center'>
                        <img
                            style={{ width: "80px", height: "80px", borderRadius: "5px", marginBottom: '10px' }}
                            src="./img/delete-btn.png"
                            alt=""
                        />
                        <h4 className='fw-bold text-dark mb-2'>Are You Sure</h4>
                        <p>This event data will be removed permanently</p>
                    </div>

                </Modal.Body>
                <Modal.Footer >

                    <Button variant="danger"><FontAwesomeIcon icon={faCancel} className=' me-2' />Delet</Button>
                    <Button variant="success" onClick={deleteBtnClose}>
                        Cancle
                    </Button>

                    {/* <Button variant="success"><FontAwesomeIcon icon={faCheck} className='fs-5 me-2' />Save</Button> */}
                </Modal.Footer>
            </Modal>


        </div>
    )
}
