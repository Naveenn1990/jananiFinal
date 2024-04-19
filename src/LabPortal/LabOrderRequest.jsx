// import { faCheck, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react'
// import { Button, Container, Dropdown, Form, InputGroup } from 'react-bootstrap'

// export const LabOrderRequest = () => {
//     return (
//         <div>
//             <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'> Orders Request</h4>
//             <Container>
//                 <div className="row">
//                     <div className="col-lg-3">
//                         <Form.Select aria-label="Default select example">
//                             <option value="1">Singapoor Layout Bangalore</option>
//                         </Form.Select>
//                     </div>
//                     <div className="col-lg-2">
//                         <Form.Select aria-label="Default select example">
//                             <option value="1">B2B</option>
//                             <option value="1">Runner Wise</option>

//                         </Form.Select>
//                     </div>
//                     <div className="col-lg-2">
//                         <InputGroup >
//                             <Form.Control
//                                 type='date'
//                                 placeholder=""
//                                 aria-label="Username"
//                                 aria-describedby="basic-addon1"
//                             />
//                         </InputGroup>
//                     </div>
//                     <div className="col-lg-2">
//                         <InputGroup >
//                             <Form.Control
//                                 type='date'
//                                 placeholder=""
//                                 aria-label="Username"
//                                 aria-describedby="basic-addon1"
//                             />
//                         </InputGroup>
//                     </div>

//                     <div className="col-lg-2">
//                         <Button style={{ backgroundColor: '#208b8c' }}>Go</Button>
//                     </div>

//                 </div>

//                 <hr />

//                 <div className='d-flex align-items-center justify-content-between mb-3'>
//                     <div>
//                         <Form.Select aria-label="Default select example">
//                             <option value="1">10</option>
//                             <option value="2">25</option>
//                             <option value="3">50</option>
//                             <option value="4">100</option>
//                         </Form.Select>
//                     </div>
//                     <div className='d-flex gap-3'>

//                         <Dropdown>
//                             <Dropdown.Toggle variant="warning" id="dropdown-basic">
//                                 <FontAwesomeIcon icon={faUpload} />  Export
//                             </Dropdown.Toggle>

//                             <Dropdown.Menu>
//                                 <Dropdown.Item href="#">Export CSV</Dropdown.Item>
//                                 <Dropdown.Item href="#">Export JSON</Dropdown.Item>
//                             </Dropdown.Menu>
//                         </Dropdown>

//                         <InputGroup >
//                             <InputGroup.Text >Search</InputGroup.Text>
//                             <Form.Control
//                                 type='search'
//                                 placeholder=""
//                                 aria-label="Username"
//                                 aria-describedby="basic-addon1"
//                             />
//                         </InputGroup>
//                     </div>
//                 </div>


//                 <table className='table ' responsive>
//                     <thead>
//                         <tr className="admin-table-head" >
//                             <th className="fw-bold" style={{ color: '#208b8c' }}>B2B</th>
//                             <th className="fw-bold" style={{ color: '#208b8c' }}>Orders</th>
//                             <th className="fw-bold" style={{ color: '#208b8c' }}>Not Genrated</th>
//                             <th className="fw-bold" style={{ color: '#208b8c' }}>Genrated</th>
//                             <th className="fw-bold" style={{ color: '#208b8c' }}>Recived</th>
//                             <th className="fw-bold" style={{ color: '#208b8c' }}>Submitted</th>
//                             <th className="fw-bold" style={{ color: '#208b8c' }}>Actions </th>
//                         </tr>
//                     </thead>

//                     <tbody >
//                         <tr className="admin-table-row" >

//                             <td >
//                                 B2B
//                             </td>

//                             <td>100</td>
//                             <td>-- </td>
//                             <td>--</td>

//                             <td>
//                                 Recived
//                             </td>


//                             <td>
//                                 <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Submitted</div>
//                             </td>

//                             <td>
//                                 <div className='d-flex gap-3'>
//                                     <FontAwesomeIcon icon={faCheck} style={{ backgroundColor: '#17af17', padding: '5px', color: 'white', cursor: "pointer" }} />
//                                     <FontAwesomeIcon icon={faTrash} style={{ color: "#e63333", fontSize: '22px', cursor: "pointer" }} />
//                                 </div>
//                             </td>

//                         </tr>
//                         <tr className="admin-table-row" >

//                             <td >
//                                 B2B
//                             </td>

//                             <td>100</td>
//                             <td>-- </td>
//                             <td>--</td>

//                             <td>
//                                 Recived
//                             </td>


//                             <td>
//                                 <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Submitted</div>
//                             </td>
//                             <td>
//                                 <div className='d-flex gap-3'>
//                                     <FontAwesomeIcon icon={faCheck} style={{ backgroundColor: '#17af17', padding: '5px', color: 'white', cursor: "pointer" }} />
//                                     <FontAwesomeIcon icon={faTrash} style={{ color: "#e63333", fontSize: '22px', cursor: "pointer" }} />
//                                 </div>
//                             </td>

//                         </tr>
//                         <tr className="admin-table-row" >

//                             <td >
//                                 B2B
//                             </td>

//                             <td>100</td>
//                             <td>-- </td>
//                             <td>--</td>

//                             <td>
//                                 Recived
//                             </td>


//                             <td>
//                                 <div className="Diseases-btn" style={{ color: 'orange', border: '1px solid orange' }}>Submitted</div>
//                             </td>

//                             <td>
//                                 <div className='d-flex gap-3'>
//                                     <FontAwesomeIcon icon={faCheck} style={{ backgroundColor: '#17af17', padding: '5px', color: 'white', cursor: "pointer" }} />
//                                     <FontAwesomeIcon icon={faTrash} style={{ color: "#e63333", fontSize: '22px', cursor: "pointer" }} />
//                                 </div>
//                             </td>

//                         </tr>
//                     </tbody>
//                 </table>

//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12 ">
//                             <span className="pagination" style={{ float: "right" }}>
//                                 <button className="btn2">Previous</button>
//                                 <button className="btn1">1</button>
//                                 <button className="btn3">Next</button>
//                             </span>
//                         </div>
//                     </div>
//                 </div>

//             </Container>
//         </div>
//     )
// }
