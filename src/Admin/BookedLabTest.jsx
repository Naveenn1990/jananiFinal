import React, { useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap';
import { AiFillDelete, AiOutlineUserAdd } from 'react-icons/ai';
import { MdDelete, MdEdit } from 'react-icons/md';

function BookedLabTest() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  
  
    const [show4, setShow4] = useState(false);
  
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
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
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <AiOutlineUserAdd className="AddIcon1" onClick={() => setShow(true)} />
         
        </div>
      </div>
<div style={{overflow:"hidden",overflowX:"scroll"}}>
<Table className='mt-2' bordered>
        <thead>
          <tr style={{ fontSize: "15px", textAlign: "center" }}>
          <th>Test Status</th>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Email</th>
            <th style={{width:"15%"}}>Test Date</th>            
            <th>Test List</th>
            <th>Total Amount</th>
            <th>Payment Status</th>
            <th>Add Report</th>
            <th>Invoice</th>
           
          </tr>
        </thead>
        <tbody>
          <tr style={{ fontSize: "15px", textAlign: "center" }}>
            <td>Process</td>
            <td>#4411</td>
            <td>
              Sarah Smith
            </td>
            <td>7541086135</td>
            <td>dev@gmail.com</td>
            <td>20-05-2024</td>
            <td>
                <Button>View</Button>
            </td>
            <td>2000/-</td>
            <td>pending</td>
            
          <td>
            <Button>Add Report</Button>
          </td>
          <td>
            <Button>Invoice</Button>
          </td>
          
          </tr>

          {/* <tr style={{ fontSize: "15px", textAlign: "center" }}>
            <td>#4411</td>
            <td>
              Sarah Smith
            </td>
            <td>#2205485</td>
            <td className='fw-bold'>
              <ul>
                <li>TOXOPLASMA - IgG</li>
                <li>TOXOPLASMA - IgM</li>
                <li>RUBELLA - IgG</li>
                <li>RUBELLA - IgM</li>
                <li>CMV - IgG</li>
                <li>CMV - IgM</li>
                <li>HSV II - IgG</li>
              </ul>
            </td>
            <td>
              999(min)
            </td>

            <td>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <MdEdit
                  style={{ color: "#20958c", marginRight: "1%" }}
                  onClick={() => setShow4(true)}
                />
                <AiFillDelete style={{ color: "red" }} />
                <button
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
                </button>
              </div>
            </td>
          </tr> */}
        </tbody>
      </Table>
</div>
      



      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <input
                placeholder="Patient ID"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="SAC"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              ></input>
            </div>

            <div className="col-lg-2" style={{ marginTop: "4%" }}>
              <label
                style={{
                  marginTop: "14%",
                  marginLeft: "25%",
                  color: "white",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                Choose
              </label>
            </div>
            <div className="col-lg-8" style={{ marginTop: "4%" }}>
              <input
                placeholder="Test "
                type="text"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>

            <div className="col-lg-2" style={{ marginTop: "4%" }}>
              <Button variant="danger">ADD</Button>
            </div>


            <Table className='table table-bordered border-light' responsive style={{ width: '100%', marginTop: '4%' }} >
              <thead>
                <tr className="admin-table-head" >
                  <th className="fw-bold" style={{ color: '#fff' }}>#</th>
                  <th className="fw-bold" style={{ color: '#fff', width: '280px' }}>Test</th>
                  <th className="fw-bold" style={{ color: '#fff' }}>Action</th>
                </tr>
              </thead>

              <tbody >
                <tr className="admin-table-row" >

                  <td >
                    1.
                  </td>

                  <td>
                    AFB - SPUTUM(3Days)
                  </td>
                  <td>
                    <MdDelete style={{ color: "#e01f1f", cursor: 'pointer' }} />
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="col-lg-12">
              <input
                placeholder="TAT(Unit)"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
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
                border: "1px solid white",
                fontWeight: "600",
                marginRight: "20px",
                padding: "4px 10px",
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
                setShow(false);
                alert("Hospital lab test created");
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      
      <Modal size="md" show={show4} onHide={handleClose4}>
        <Modal.Header>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <input
                placeholder="Patient ID"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="SAC"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              ></input>
            </div>

            <div className="col-lg-2" style={{ marginTop: "4%" }}>
              <label
                style={{
                  marginTop: "14%",
                  marginLeft: "25%",
                  color: "white",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                Choose
              </label>
            </div>
            <div className="col-lg-8" style={{ marginTop: "4%" }}>
              <input
                placeholder="Test "
                type="text"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>

            <div className="col-lg-2" style={{ marginTop: "4%" }}>
              <Button variant="danger">ADD</Button>
            </div>


            <Table className='table table-bordered border-light' responsive style={{ width: '100%', marginTop: '4%' }} >
              <thead>
                <tr className="admin-table-head" >
                  <th className="fw-bold" style={{ color: '#fff' }}>#</th>
                  <th className="fw-bold" style={{ color: '#fff', width: '280px' }}>Test</th>
                  <th className="fw-bold" style={{ color: '#fff' }}>Action</th>
                </tr>
              </thead>

              <tbody >
                <tr className="admin-table-row" >

                  <td >
                    1.
                  </td>

                  <td>
                    AFB - SPUTUM(3Days)
                  </td>
                  <td>
                    <MdDelete style={{ color: "#e01f1f", cursor: 'pointer' }} />
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="col-lg-12">
              <input
                placeholder="TAT(Unit)"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
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
                // border: "none",
                borderRadius: "4px",
                border: "1px solid white",
                fontWeight: "600",
                marginRight: "20px",
                padding: "4px 10px",
              }}
              onClick={() => setShow4(false)}
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
                setShow(false);
                alert("Hospital lab test created");
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

    </div>
  </div>
  )
}

export default BookedLabTest