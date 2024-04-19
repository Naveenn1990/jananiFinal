import { faArrowRight, faBed, faFileInvoice, faHospital, faMoneyBillTransfer, faUserXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container, FloatingLabel, Form, FormLabel } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export const StaffBedManagement = () => {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose = () => setShow1(false);
  const handleShow = () => setShow1(true);

  const transferClose = () => setShow2(false)
  const transferShow = () => setShow2(true)

  const dischargeClose = () => setShow3(false)
  const dischargeShow = () => setShow3(true)

  return (
    <div>
      <Container>

        <div className='p-4 mb-4 row align-items-center justify-content-between' style={{ backgroundColor: '#dae1f3' }} >

          <h4 className='fw-bold col-lg-4'>Bed Management</h4>

          <div className='col-lg-6 d-flex gap-3 '>
            {/* <Form.Select style={{ width: '200px', marginLeft: 'auto' }} aria-label="Default select example">
            <option value="1">Last 30 Days</option>
            <option value="2">Last 6 Months</option>
            <option value="3">Last 1 Year</option>
          </Form.Select> */}
            <Button onClick={handleShow} className='d-flex gap-2 ms-auto' style={{ backgroundColor: 'green' }}><FontAwesomeIcon icon={faHospital} />Admit</Button>
            <Button onClick={transferShow} className='d-flex gap-2' style={{ backgroundColor: 'orange' }}><FontAwesomeIcon icon={faMoneyBillTransfer} className='fs-6' /> Transfer</Button>
            <Button onClick={dischargeShow} className='d-flex gap-2' style={{ backgroundColor: 'red' }}><FontAwesomeIcon icon={faUserXmark} className='fs-6' /> Discharge</Button>
          </div>
        </div>
        <h3 className='fw-bold text-dark text-center mb-3'>Admission Master</h3>
        <div>

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">


            <Nav variant="pills" className=" d-flex mb-4">
              <Nav.Item>
                <Nav.Link eventKey="first"><Button style={{ backgroundColor: 'rgb(143 66 143)', marginRight: '20px' }}>Genral Ward</Button></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second"><Button style={{ backgroundColor: 'rgb(237 76 40' }}>Labour Ward</Button></Nav.Link>
              </Nav.Item>
            </Nav>

            <hr />
            <Tab.Content>

              {/* Genral Ward content */}


              <Tab.Pane eventKey="first">

                <Tab.Container id="left-tabs-example" defaultActiveKey="second">


                  <Nav variant="pills" className=" d-flex justify-content-evenly">

                    <Nav.Item>
                      <Nav.Link eventKey="first" style={{ border: '2px solid #dde3ed' }} >
                        <span className='fw-bold fs-5 text-dark text-center ms-4' >Total Beds(10) </span><br />
                        <div className=' m-3 '>
                          <span className='text-success p-1 fw-bold me-1'>(8) Availble</span>
                          <span style={{ backgroundColor: '#4ba74b', color: '#fff', padding: '5px', borderRadius: '5px' }}>(2) Occupied</span>
                        </div>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="second" style={{ border: '2px solid #dde3ed' }}>
                        <span className='fw-bold fs-5 text-dark text-center ms-4'>Genral Ward Room 1(9) </span><br />
                        <div className=' m-3 '>
                          <span className='text-success p-1 fw-bold me-1'>(10) Availble</span>
                          <span style={{ backgroundColor: '#4ba74b', color: '#fff', padding: '5px', borderRadius: '5px' }}>(3) Occupied</span>
                        </div>
                      </Nav.Link>
                    </Nav.Item>

                  </Nav>


                  <Tab.Content>
                    <Tab.Pane eventKey="first" >
                      <div className='d-flex align-items-center justify-content-end gap-3'>
                        <span>
                          <FontAwesomeIcon icon={faBed} style={{ color: '#4ba74b' }} /> Available
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faBed} style={{ color: '#d91010' }} /> Occupied
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faBed} style={{ color: '#2323e5' }} /> Maintance
                        </span>
                      </div>

                      <hr />

                      <div className='d-flex align-items-center gap-5 justify-content-center mb-3'>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>301 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>302 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>303 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>304 (a)</span> <br />
                        </span>
                        <span className='bed-red-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-red' /> <br />
                          <span className='fw-bold'>305 (a)</span> <br />
                          <span className='fw-bold' style={{ fontSize: '12px' }}>#RAN02145045</span>
                        </span>

                      </div>


                      <div className='d-flex align-items-center gap-5 justify-content-center mb-3'>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>306 (a)</span> <br />
                        </span>
                        <span className='bed-red-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-red' /> <br />
                          <span className='fw-bold'>307 (a)</span> <br />
                          <span className='fw-bold' style={{ fontSize: '12px' }}>#RAN02145045</span>
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>308 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>309 (a)</span> <br />
                        </span>
                        <span className='bed-blue-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-blue' /> <br />
                          <span className='fw-bold'>310 (a)</span> <br />
                        </span>
                      </div>

                    </Tab.Pane>


                    <Tab.Pane eventKey="second">

                      <div className='d-flex align-items-center justify-content-end gap-3'>
                        <span>
                          <FontAwesomeIcon icon={faBed} style={{ color: '#4ba74b' }} /> Available
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faBed} style={{ color: '#d91010' }} /> Occupied
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faBed} style={{ color: '#2323e5' }} /> Maintance
                        </span>
                      </div>

                      <hr />

                      <div className='d-flex align-items-center gap-5 justify-content-center mb-3'>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>301 (a)</span> <br />
                        </span>
                        <span className='bed-red-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-red' /> <br />
                          <span className='fw-bold'>302 (a)</span> <br />
                          <span className='fw-bold' style={{ fontSize: '12px' }}>#RAN02145045</span>
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>303 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>304 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>305 (a)</span> <br />
                        </span>

                      </div>


                      <div className='d-flex align-items-center gap-5 justify-content-center mb-3'>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>306 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>307 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>308 (a)</span> <br />
                        </span>
                        <span className='bed-red-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-red' /> <br />
                          <span className='fw-bold'>309 (a)</span> <br />
                          <span className='fw-bold' style={{ fontSize: '12px' }}>#RAN02145045</span>

                        </span>
                        <span className='bed-blue-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-blue' /> <br />
                          <span className='fw-bold'>310 (a)</span> <br />
                        </span>
                      </div>

                    </Tab.Pane>
                  </Tab.Content>


                </Tab.Container>


              </Tab.Pane>


              {/* Labour Ward content */}


              <Tab.Pane eventKey="second">


                <Tab.Container id="left-tabs-example" defaultActiveKey="second">


                  <Nav variant="pills" className=" d-flex justify-content-evenly">

                    <Nav.Item>
                      <Nav.Link eventKey="first" > <span className='fw-bold fs-5 text-dark text-center ms-4'>Total Beds(10) </span><br />
                        <div className=' m-3 '>
                          <span className='text-success p-1 fw-bold me-1'>(8) Availble</span>
                          <span style={{ backgroundColor: '#4ba74b', color: '#fff', padding: '5px', borderRadius: '5px' }}>(2) Occupied</span>
                        </div>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="second" >
                        <span className='fw-bold fs-5 text-dark text-center ms-4'>Labour Ward Room 1(10) </span><br />
                        <div className=' m-3 '>
                          <span className='text-success p-1 fw-bold me-1'>(10) Availble</span>
                          <span style={{ backgroundColor: '#4ba74b', color: '#fff', padding: '5px', borderRadius: '5px' }}>(3) Occupied</span>
                        </div>
                      </Nav.Link>
                    </Nav.Item>

                  </Nav>


                  <Tab.Content>
                    <Tab.Pane eventKey="first" >
                      <div className='d-flex align-items-center justify-content-end gap-3'>
                        <span>
                          <FontAwesomeIcon icon={faBed} style={{ color: '#4ba74b' }} /> Available
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faBed} style={{ color: '#d91010' }} /> Occupied
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faBed} style={{ color: '#2323e5' }} /> Maintance
                        </span>
                      </div>

                      <hr />

                      <div className='d-flex align-items-center gap-5 justify-content-center mb-3'>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>301 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>302 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>303 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>304 (a)</span> <br />
                        </span>
                        <span className='bed-red-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-red' /> <br />
                          <span className='fw-bold'>305 (a)</span> <br />
                          <span className='fw-bold' style={{ fontSize: '12px' }}>#RAN02145045</span>
                        </span>

                      </div>


                      <div className='d-flex align-items-center gap-5 justify-content-center mb-3'>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>306 (a)</span> <br />
                        </span>
                        <span className='bed-red-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-red' /> <br />
                          <span className='fw-bold'>307 (a)</span> <br />
                          <span className='fw-bold' style={{ fontSize: '12px' }}>#RAN02145045</span>
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>308 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>309 (a)</span> <br />
                        </span>
                        <span className='bed-blue-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-blue' /> <br />
                          <span className='fw-bold'>310 (a)</span> <br />
                        </span>
                      </div>

                    </Tab.Pane>


                    <Tab.Pane eventKey="second">

                      <div className='d-flex align-items-center justify-content-end gap-3'>
                        <span>
                          <FontAwesomeIcon icon={faBed} style={{ color: '#4ba74b' }} /> Available
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faBed} style={{ color: '#d91010' }} /> Occupied
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faBed} style={{ color: '#2323e5' }} /> Maintance
                        </span>
                      </div>

                      <hr />

                      <div className='d-flex align-items-center gap-5 justify-content-center mb-3'>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>301 (a)</span> <br />
                        </span>
                        <span className='bed-red-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-red' /> <br />
                          <span className='fw-bold'>302 (a)</span> <br />
                          <span className='fw-bold' style={{ fontSize: '12px' }}>#RAN02145045</span>
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>303 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>304 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>305 (a)</span> <br />
                        </span>

                      </div>


                      <div className='d-flex align-items-center gap-5 justify-content-center mb-3'>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>306 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>307 (a)</span> <br />
                        </span>
                        <span className='bed-green-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-green' /> <br />
                          <span className='fw-bold'>308 (a)</span> <br />
                        </span>
                        <span className='bed-red-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-red' /> <br />
                          <span className='fw-bold'>309 (a)</span> <br />
                          <span className='fw-bold' style={{ fontSize: '12px' }}>#RAN02145045</span>

                        </span>
                        <span className='bed-blue-details' >
                          <FontAwesomeIcon icon={faBed} className='bed-blue' /> <br />
                          <span className='fw-bold'>310 (a)</span> <br />
                        </span>
                      </div>

                    </Tab.Pane>
                  </Tab.Content>


                </Tab.Container>

              </Tab.Pane>
            </Tab.Content>


          </Tab.Container>
        </div>

      </Container>

      {/* Admit Modal */}

      <Modal
        show={show1}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Admit Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='mb-2'>
            <FormLabel className='fw-bold text-dark'>Patient ID* </FormLabel>
            <FloatingLabel style={{ width: '300px' }} controlId="floatingName" label="ID">
              <Form.Control type="text" placeholder="ID" />
            </FloatingLabel>
          </div>

          <div className='mb-2'>
            <FormLabel className='fw-bold text-dark'>Patient Name* </FormLabel>
            <FloatingLabel style={{ width: '300px' }} controlId="floatingEmail" label="First Name">
              <Form.Control type="text" placeholder="First Name" />
            </FloatingLabel>
          </div>

          <div className='mb-2'>
            <FormLabel className='fw-bold text-dark'>Bed Number* </FormLabel>
            <FloatingLabel style={{ width: '300px' }} controlId="floatingEmail" label="Bed Number">
              <Form.Control type="text" placeholder="Bed Number" />
            </FloatingLabel>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Admit</Button>
        </Modal.Footer>
      </Modal>


      {/* Transfer Modal */}

      <Modal
        show={show2}
        onHide={transferClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title >Patient Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='mb-3 fw-bold text-dark'> Patine Name : Rohan Joshi </p>

          <div className="d-flex align-items-center justify-content-evenly mb-3">
            <div>
              <h6 className='fw-bold'>Movement From</h6>
              <p className='text-success'>Genral ward <br /> Genral ward Room 1 <br /> 304 (a)</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className='fs-3  text-dark' />
            <div>
              <h6 className='fw-bold'>Movement To</h6>
              <p className='text-success'>Genral ward <br /> Genral ward Room 1 <br /> 304 (a)</p>
            </div>
          </div>


          <div>
            <label className='fw-bold'> Add Note </label> <br />
            <input type="text" style={{ width: '450px', height: '100px' }} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={transferClose}>
            Close
          </Button>
          <Button variant="warning">Transfer</Button>
        </Modal.Footer>
      </Modal>

      {/* Discharge Modal */}

      <Modal
        show={show3}
        onHide={dischargeClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title >Discharge Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='mb-2 fw-bold text-dark'> Patine Name : Rohan Joshi </p>

          {/* <div className="d-flex align-items-center justify-content-evenly mb-3">
            <div>
              <h6 className='fw-bold'>Movement From</h6>
              <p className='text-success'>Genral ward <br /> Genral ward Room 1 <br /> 304 (a)</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className='fs-3  text-dark' />
            <div>
              <h6 className='fw-bold'>Movement To</h6>
              <p className='text-success'>Genral ward <br /> Genral ward Room 1 <br /> 304 (a)</p>
            </div>
          </div> */}

          <p className='mb-3'> <span className='fw-bold'>Discharge From : </span> Genral Ward, Genral Ward Room 1.#304(a)</p>


          <div>
            <label className='fw-bold'> Add Note </label> <br />
            <input type="text" style={{ width: '450px', height: '100px' }} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={dischargeClose}>
            Close
          </Button>
          <Button variant="danger">Discharge</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
