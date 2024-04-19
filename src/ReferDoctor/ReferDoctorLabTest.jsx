import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Label from 'react-bootstrap/FormLabel';
import React, { useEffect } from 'react'
import { Button, Container, FloatingLabel, Form, FormLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { CkEditorComponent } from '../CkEditor/CkEditorComponent';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Pin } from '@mui/icons-material';
import axios from 'axios';

export const ReferDoctorLabTest = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [AssignLabTo, setAssignLabTo] = useState();
    const [Pincode, setPincode] = useState();

    const [patientlist, setpatientlist] = useState([]);

    const getpatientlist = () => {
      axios
        .get("http://localhost:8521/api/Clinic/getRefPatientList")
        .then(function (response) {
          // handle success
          setpatientlist(response.data.UsersInfo);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };

    const [RefLablist, setRefLablist] = useState([]);

    const getRefLablist = () => {
      axios
        .get("http://localhost:8521/api/ClinicLab/getClinicLabList")
        .then(function (response) {
          // handle success
          setRefLablist(response.data.ClinicalLabsInfo);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    
    useEffect(() => {
      getRefLablist();
      getpatientlist()
    }, []);

    const [PatientId, setPatientId] = useState("");

    const [patientfirstname, setpatientfirstname] = useState("");
    const [patientlastname, setpatientlastname] = useState("");
    const [gender, setgender] = useState("");
    const [DOB, setDOB] = useState("");
    const [email, setemail] = useState("");
    const [mobileno, setmobileno] = useState();
    const [SelectedLab, setSelectedLab] = useState();
    const [Labtest, setLabtest] = useState();

    const [bloodgroup, setbloodgroup] = useState();
    const [Document, setDocument] = useState();
    const [Note, setNote] = useState();


    const formdata = new FormData();
    const AddRefPatient = async (e) => {
        e.preventDefault();
        formdata.append("PatientId", PatientId);

        formdata.append("Firstname", patientfirstname);
        formdata.append("Lastname", patientlastname);
        formdata.append("Gender",gender);
        formdata.append("DOB",DOB);
        formdata.append("PhoneNumber",mobileno); 
          formdata.append("Email",email);
          formdata.append("BloodGroup", bloodgroup);
          formdata.append("Test", Labtest);
          formdata.append("AssignTo", AssignLabTo);
          formdata.append("RefLabId", SelectedLab);

        formdata.append("note", Note);

        formdata.append("prescriptiondocument", Document);

        
          try {
            {
              const config = {
                url: "/Clinic/addRefLabtest",
                method: "post",
                baseURL: "http://localhost:8521/api",
                headers: { "content-type": "multipart/form-data" },
                data:formdata,
              };
              let res = await axios(config);
              if (res.status === 200) {
                console.log(res.data);
                console.log(res.data.success);
                alert("Lab Test Added");
              }
            }
          } catch (error) {
            console.log(error.response);
            if (error.response) {
              alert(error.response.data.error);
            }
          
        }
      };

    return (
        <div>
            <div>
                <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold'>Lab Test</h4>
                <Container>

                    <Form style={{ marginLeft: "100px" }}   >
                        <h4 className=' fw-bold mb-3 mt-3'>Select Patient</h4>
                        <div className="d-flex gap-4 mb-5">

                            <Form.Select style={{ width: '400px' }} aria-label="Default select example" onChange={(e)=>setPatientId(e.target.value)}>
                                <option>Patient Name</option>
                                {patientlist?.map((item)=>{
                                    return(
                                        <option value={item?._id}>{item?.Firstname}</option>

                                    )
                                })}
                               
                            </Form.Select>
                        </div>
                    </Form>
                </Container>
                <hr />

                <Container className=''>

                    <Form style={{ marginLeft: "100px", marginTop: '50px' }}   >


                        <div className="d-flex gap-4 mb-5">


                            <FloatingLabel style={{ width: '400px' }} controlId="floatingEmail" label="First Name">
                                <Form.Control type="text" placeholder="First Name" onChange={(e)=>setpatientfirstname(e.target.value)}/>
                            </FloatingLabel>


                            <FloatingLabel style={{ width: '400px' }} controlId="floatingName" label="Last Name">
                                <Form.Control type="text" placeholder="Last Name" onChange={(e)=>setpatientlastname(e.target.value)}/>
                            </FloatingLabel>

                        </div>

                        <div className="d-flex gap-4 mb-5">

                            {/* <Form.Select style={{ width: '400px' }} aria-label="Default select example">
                                <option>Select gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </Form.Select> */}


                            <FloatingLabel style={{ width: '400px' }} controlId="floatingNumber" label="Gender">
                                <Form.Control type="text" placeholder="Gender" onChange={(e)=>setgender(e.target.value)}/>
                            </FloatingLabel>

                            <FloatingLabel style={{ width: '400px' }} controlId="floatingNumber" label="Phone Number">
                                <Form.Control type="number" placeholder="Phone Number" onChange={(e)=>setmobileno(e.target.value)}/>
                            </FloatingLabel>
                        </div>



                        <div className="d-flex gap-4 mb-5">
                            <FloatingLabel style={{ width: '400px' }} controlId="floatingEmail" label="Email">
                                <Form.Control type="Email" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
                            </FloatingLabel>

                            <FloatingLabel style={{ width: '400px' }} controlId="floatingEmail" label="Birth Date">
                                <Form.Control type="date" placeholder="Birth Date" onChange={(e)=>setDOB(e.target.value)}/>
                            </FloatingLabel>

                        </div>


                        <div className="d-flex gap-4 mb-5">
                            <FloatingLabel style={{ width: '400px' }} controlId="floatingAge" label="Age">
                                <Form.Control type="number" placeholder="Age" />
                            </FloatingLabel>


                            <FloatingLabel style={{ width: '400px' }} controlId="floatingAge" label="Blood Group">
                                <Form.Control type="text" placeholder="Blood Group" onChange={(e)=>setbloodgroup(e.target.value)}/>
                            </FloatingLabel>


                        </div>


                        <div className="d-flex gap-4 mb-5">

                            <Form.Select style={{ width: '400px' }} aria-label="Default select example" onChange={(e)=>setAssignLabTo(e.target.value)}>
                                <option>Assign Test To</option>
                                <option value="Refered Lab" >Refered Lab</option>
                                <option value="Janani Lab">Janani Lab</option>
                             
                            </Form.Select>


                           
                        </div>

                        {AssignLabTo == "Refered Lab" ?  
                         <div className="d-flex gap-4 mb-5">
                         <Form.Select style={{ width: '400px' }} aria-label="Default select example" onChange={(e)=>setPincode(e.target.value)}>
                                <option>Select Pincode</option>
                                <option value="560056" >560056</option>
                                <option value="560057">560057</option>
                                <option value="560058">560058</option>

                             
                            </Form.Select>

{Pincode ?   <Form.Select style={{ width: '400px' }} aria-label="Default select example" onChange={(e)=>setSelectedLab(e.target.value)}>
<option>Select Lab</option>

    {RefLablist?.map((item)=>{
        return(
                                <option value={item?.ClinicLabId} >{item?.ClinicLabName}</option>
        )
    })}
                                
                              

                             
                            </Form.Select> : null }
                          



                         {/* <Form.Select style={{ width: '400px' }} aria-label="Default select example">
                             <option>Blood Group</option>
                             <option value="1">A+</option>
                             <option value="2">A-</option>
                             <option value="3">B+</option>
                             <option value="3">B-</option>
                             <option value="3">AB+</option>
                             <option value="3">AB-</option>
                             <option value="3">O+</option>
                             <option value="3">O-</option>
                         </Form.Select> */}

                         {/* <FloatingLabel style={{ width: '400px' }} controlId="floatingEmail" label="Blood Presure">
                             <Form.Control type="text" placeholder="Blood Presure" />
                         </FloatingLabel> */}

                     </div> : null}


   <div className="d-flex gap-4 mb-5">

                            <Form.Select style={{ width: '400px' }} aria-label="Default select example" onChange={(e)=>setLabtest(e.target.value)}>
                                <option>Select Test</option>
                                <option value="HbA1c" >HbA1c</option>
                                <option value="TSH">TSH</option>
                                <option value="JHSd">JHSd</option>
                                <option value="KFT">KFT</option>
                                <option value="Diagnostic antigen">Diagnostic antigen</option>
                                <option value="Urine R/M Measure">Urine R/M Measure</option>
                                <option value="TSH">KFT</option>
                             
                            </Form.Select>


                           
                        </div>
                        {/* <table class="table table-striped table-bordered mb-5" style={{ width: '500px' }}>
                            <thead >
                                <tr >
                                    <th className='text-dark fw-bold'>#</th>
                                    <th className='text-dark fw-bold'>Sub Test</th>
                                  
                                    <th className='text-dark fw-bold'>Select</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        1
                                    </td>
                                    <td>HbA1c</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>TSH</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        3
                                    </td>
                                    <td>JHSd</td>
                                    

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        4
                                    </td>
                                    <td>KFT</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        5
                                    </td>
                                    <td>Diagnostic antigen</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        6
                                    </td>
                                    <td>Urine R/M Measure</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        7
                                    </td>
                                    <td>Lipid profile</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        8
                                    </td>
                                    <td>CZD HZS</td>

                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table> */}

                        <FormLabel className='fw-bold text-dark'> Choose Prescription (if any)* </FormLabel> <br />
                        <input type="file" className=' p-2 mb-5' style={{ border: '1px solid grey', width: '820px', height: '50px' }} onChange={(e)=>setDocument(e.target.files[0])}/>

                        {/* <CkEditorComponent /> */}

                        <input type="text" className=' p-2 mb-5' style={{ border: '1px solid grey', width: '820px', height: '50px' }} placeholder='Note' onChange={(e)=>setNote(e.target.value)}/>

                        <div className='d-flex gap-3 mb-4 mt-4'>

                            <Button style={{ width: "15%", height: '40px', fontSize: '16px', backgroundColor: 'rgb(32 139 140)' }} onClick={(e) => { AddRefPatient(e) }}>Submit</Button>
                            <Button style={{ width: "10%", height: '40px', fontSize: '16px', backgroundColor: '#FE2E2E' }} onClick={() => { navigate('#') }}>Cancel</Button>

                        </div>

                    </Form>
                </Container>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Select Test Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <table class="table table-striped m" style={{ width: '500px' }}>
                        <thead >
                            <tr >
                                <th className='text-dark fw-bold'>#</th>
                                <th className='text-dark fw-bold'>Test Name</th>
                                {/* <th className='text-dark fw-bold'>Test Price</th> */}
                                <th className='text-dark fw-bold'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>HbA1c</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    2
                                </td>
                                <td>TSH</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    3
                                </td>
                                <td>JHSd</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    4
                                </td>
                                <td>KFT</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    5
                                </td>
                                <td>Diagnostic antigen</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    6
                                </td>
                                <td>Urine R/M Measure</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    7
                                </td>
                                <td>Lipid profile</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    8
                                </td>
                                <td>CZD HZS</td>

                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Done</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

