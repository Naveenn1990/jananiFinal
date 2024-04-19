import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useBarcode } from 'react-barcodes';
import { Button, Container, Form, InputGroup } from 'react-bootstrap'

export const LabGenerateBarcode = () => {

    const { inputRef } = useBarcode({
        value: 'react-barcodes',
        // options: {
        //   background: '#ccffff',
        // }
    });

    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Generate Barcode</h4>

            <Container>

                <div className="row align-items-end " >
                    {/* <div className="col-lg-3">
                        <label className='fw-bold text-dark'>Location : </label>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Singapoor Layout Bangalore</option>
                        </Form.Select>
                    </div> */}
                    <div className="col-lg-3">
                        <label className='fw-bold text-dark'>Sample Type : </label>
                        <Form.Select aria-label="Default select example">
                            <option></option><option value="BLOOD">BLOOD</option><option value="SERUM">SERUM</option><option value="FLUID">FLUID</option><option value="SPUTUM">SPUTUM</option><option value="URINE">URINE</option><option value="BLOOD (EDTA)">BLOOD (EDTA)</option><option value="SEMEN">SEMEN</option><option value="STOOL">STOOL</option><option value="PUS">PUS</option><option value="PERICARDIAL FLUID">PERICARDIAL FLUID</option><option value="GASTRIC LAVAGE">GASTRIC LAVAGE</option><option value="SCRAP">SCRAP</option><option value="ASITIC FLUID PANEL">ASITIC FLUID PANEL</option><option value="GAL">GAL</option><option value="CSF PANEL">CSF PANEL</option><option value="KNEE JOINT FLUID PANEL">KNEE JOINT FLUID PANEL</option>
                        </Form.Select>
                    </div>
                    <div className="col-lg-2">
                        <label className='fw-bold text-dark'>No Of Samples : </label>
                        <InputGroup >
                            <Form.Control
                                type='number'
                                placeholder=""
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className="col-lg-2">
                        <label className='fw-bold text-dark'>Sample ID : </label>
                        <InputGroup >
                            <Form.Control
                                type='text'
                                placeholder="Sample ID"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className="col-lg-2">
                        <label className='fw-bold text-dark'>BarCode Length : </label>
                        <InputGroup >
                            <Form.Control
                                type='number'
                                placeholder=""
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className="col-lg-2">
                        <Button className='all-bg-green'>Generate</Button>
                    </div>

                </div>
                <hr />

                <div className='d-flex align-items-center justify-content-between mb-3'>
                    <div>
                        <Form.Select aria-label="Default select example">
                            <option value="1">10</option>
                            <option value="2">25</option>
                            <option value="3">50</option>
                            <option value="4">100</option>
                        </Form.Select>
                    </div>
                    <div className='d-flex gap-3'>

                        <InputGroup >
                            <InputGroup.Text >Search</InputGroup.Text>
                            <Form.Control
                                type='search'
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                </div>

                <table className='table ' responsive style={{ width: '700px' }}>
                    <thead>
                        <tr className="admin-table-head" >
                            <th className="fw-bold" style={{ color: '#208b8c' }}>S.No</th>
                            <th className="fw-bold" style={{ color: '#208b8c', width: '200px' }}>Barcode</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Sample ID</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Print</th>

                        </tr>
                    </thead>

                    <tbody >
                    

                        <tr className="admin-table-row" >
                            <td>1.</td>

                            <td >
                                <canvas ref={inputRef} style={{ width: '200px' }} />
                            </td>

                            <td>4501014</td>

                            <td>
                                <FontAwesomeIcon icon={faPrint} style={{ color: "#a9d40c", }} />
                            </td>

                        </tr>

                    </tbody>
                </table>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <span className="pagination" style={{ float: "right" }}>
                                <button className="btn2">Previous</button>
                                <button className="btn1">1</button>
                                <button className="btn3">Next</button>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
