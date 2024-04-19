import React, { useState } from 'react'
import { Button, Container, InputGroup, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CkEditorComponent } from '../CkEditor/CkEditorComponent';
import Modal from 'react-bootstrap/Modal';

export const LabAddTest = () => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false)

    const NormalValuesClose = () => setShow(false);
    const NormalValuesShow = () => setShow(true);

    const MandatoryValueClose = () => setShow1(false)
    const MandatoryValueShow = () => setShow1(true)

    return (
        <div>
            <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'> Test</h4>
            <Container>
                <div className="row">
                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Category*</label>
                        <Form.Select aria-label="Default select example">
                            <option value="Laboratory" selected="">Laboratory</option>

                            <option value="Radiology">Radiology</option>

                            <option value="Cardiology">Cardiology</option>

                            <option value="Pathology">Pathology</option>
                        </Form.Select>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Name*</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Name"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Short Name*</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Short Name"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Department*</label>
                        <Form.Select aria-label="Default select example">
                            <option>Please Select Department</option>
                            <option value="HAEMATOLOGY">HAEMATOLOGY</option>
                            <option value="BIOCHEMISTRY">BIOCHEMISTRY</option>
                            <option value="ENDOCRINOLOGY">ENDOCRINOLOGY</option>
                            <option value="HORMONES">HORMONES</option>
                            <option value="IMMUNOLOGY">IMMUNOLOGY</option>
                            <option value="SEROLOGY">SEROLOGY</option>
                            <option value="FLUIDS">FLUIDS</option>
                            <option value="MICROBIOLOGY">MICROBIOLOGY</option>
                            <option value="CLINICAL PATHOLOGY">CLINICAL PATHOLOGY</option>
                            <option value="MOLECULAR BIOLOGY">MOLECULAR BIOLOGY</option>
                            <option value="CYTOLOGY">CYTOLOGY</option>
                        </Form.Select>
                    </div>
                </div>

                <div className="row">
                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Sample*</label>
                        <Form.Select aria-label="Default select example">
                            <option>Please Select Sample</option>
                            <option value="BLOOD">BLOOD</option>
                            <option value="SERUM">SERUM</option>
                            <option value="FLUID">FLUID</option>
                            <option value="SPUTUM">SPUTUM</option>
                            <option value="URINE">URINE</option>
                            <option value="BLOOD (EDTA)">BLOOD (EDTA)</option>
                            <option value="SEMEN">SEMEN</option>
                            <option value="STOOL">STOOL</option>
                        </Form.Select>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Method*</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Method"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Instrument Type*</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Instrument"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Sample Quantity*</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Quantity"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Description*</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Desc"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >SAC*</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='SAC'
                                placeholder="Method"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Order*</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Test Order"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >External Test ID*</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Ext Test Id"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                </div>

                {/* <hr />

                <div className='row mb-4'>

                    <div className="col-lg-3">
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Separate Print :
                            </label>
                            <input type="checkbox" />
                        </div>
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Show Test Docs :
                            </label>
                            <input type="checkbox" />
                        </div>
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Enable Auto Email Approval :
                            </label>
                            <input type="checkbox" />
                        </div>
                    </div>


                    <div className="col-lg-3">
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                QRcode :
                            </label>
                            <input type="checkbox" />
                        </div>
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Enable Auto SMS Approval :
                            </label>
                            <input type="checkbox" />
                        </div>
                    </div>


                    <div className="col-lg-3">
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Lab RegNo :
                            </label>
                            <input type="checkbox" />
                        </div>
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Enable Whatsapp Approval :
                            </label>
                            <input type="checkbox" />
                        </div>
                    </div>


                    <div className="col-lg-3">
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between '>
                            <label className='fw-bold text-dark'>
                                No Header Report :
                            </label>
                            <input type="checkbox" />
                        </div>
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Enable Intermediate Result :
                            </label>
                            <input type="checkbox" />
                        </div>
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Enable Stages :
                            </label>
                            <input type="checkbox" />
                        </div>
                    </div>
                </div> */}

                <h5 className='fw-bold text-dark' > Result :</h5>
                <hr />

                <Table responsive class="table table-striped table-bordered mb-5" >
                    <thead class="bg-md-default">
                        <tr className="admin-table-head" >
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Reult Name</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>ExtResultId</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Order</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Unit</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Formula</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Value Type</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Default</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>RoundOff</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Normal Values</th>
                            <th className="fw-bold" style={{ color: '#208b8c' }}>Mandatory Condition</th>
                        </tr>
                    </thead>
                    <tbody >



                    </tbody>
                </Table>

                <div className='mb-4'>
                    <h5 className='fw-bold text-dark' >Add Result :</h5>

                    <hr />

                    <Table className='table table-bordered' responsive style={{ width: '1600px' }}>
                        <thead>
                            <tr className="admin-table-head" >
                                <th className="fw-bold" style={{ color: '#208b8c' }}>Reult Name</th>
                                <th className="fw-bold" style={{ color: '#208b8c' }}>ExtResultId</th>
                                <th className="fw-bold" style={{ color: '#208b8c' }}>Order</th>
                                <th className="fw-bold" style={{ color: '#208b8c' }}>Unit</th>
                                <th className="fw-bold" style={{ color: '#208b8c' }}>Formula</th>
                                <th className="fw-bold" style={{ color: '#208b8c' }}>Value Type</th>
                                <th className="fw-bold" style={{ color: '#208b8c' }}>Default</th>
                                <th className="fw-bold" style={{ color: '#208b8c' }}>RoundOff</th>
                                <th className="fw-bold" style={{ color: '#208b8c' }}>Normal Values</th>
                                <th className="fw-bold" style={{ color: '#208b8c' }}>Mandatory Condition</th>
                                <th className="fw-bold" style={{ color: '#208b8c' }}>Actions </th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr className="admin-table-row" >

                                <td >
                                    <InputGroup>
                                        <Form.Control
                                            placeholder="Result Name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>

                                <td>
                                    <InputGroup>
                                        <Form.Control
                                            placeholder=""
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <InputGroup>
                                        <Form.Control
                                            type='number'
                                            placeholder=""
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                </td>
                                <td>
                                    <InputGroup>
                                        <Form.Control
                                            placeholder="Unit"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>

                                <td>
                                    <InputGroup>
                                        <Form.Control
                                            placeholder="Formula"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>

                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option value="text">Text</option>
                                        <option value="richtext"> Rich Text</option>
                                        <option value="numeric">Numeric</option>
                                        <option value="heading">Heading</option>
                                        <option value="gn">GN</option>
                                        <option value="gn2">GN2</option>
                                        <option value="asr">Antibiotic Susceptibility Report</option>
                                        <option value="smear">Smear</option>
                                        <option value="optgrowth">Option Growth/No-Growth</option>
                                        <option value="org_growth">Organism - Growth</option>
                                        <option value="org_nogrowth">Organism - No Growth</option>
                                        <option value="nogrowth">No Growth</option>
                                        <option value="heading_nogrowth">Heading - No Growth</option>
                                        <option value="multioptova">MultiSelect Option Ova</option>
                                        <option value="multioptcysts">MultiSelect Option Cysts</option>
                                        <option value="multiopttrophozoites">MultiSelect Option Trophozoites</option>
                                        <option value="multioptcasts">MultiSelect Option Casts</option>
                                        <option value="multioptcrystals">MultiSelect Option Crystals</option>
                                        <option value="multioptbacteria">MultiSelect Option Bacteria</option>
                                        <option value="multirbcmorphology">MultiSelect Option RBC Morphology</option>
                                        <option value="stoolparasites">Stool Parasites</option>
                                        <option value="wbcabnormalities">WBC Abnormalities</option>
                                        <option value="abnormality"> Option Abnormality</option>
                                        <option value="semencolor">Option Semen Color</option>
                                        <option value="urinecolor">Option Urine Color</option>
                                        <option value="motioncolor">Option Motion Color</option>
                                        <option value="specimen">Option Specimen</option>
                                        <option value="method">Option Method</option>
                                        <option value="motionconsistency">Option Motion Consistency</option>
                                        <option value="optyesno">Option Yes/No</option>
                                        <option value="optpresent">Option Present/Absent</option>
                                        <option value="optpositive">Option Positive/Negative</option>
                                        <option value="optdetected">Option Detected/Not-Detected</option>
                                        <option value="optpositivedetected">Option Positive/Negative/Detected/Not-Detected</option>
                                    </Form.Select>

                                </td>

                                <td>
                                    <InputGroup>
                                        <Form.Control
                                            placeholder=""
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <InputGroup>
                                        <Form.Control
                                            placeholder="Round Off"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <Button onClick={NormalValuesShow} style={{ backgroundColor: '#208b8c', width: '179px', height: '36px' }}>Add Normal Values</Button>
                                </td>

                                <td>
                                    <Button onClick={MandatoryValueShow} style={{ backgroundColor: '#208b8c', width: '202px', height: '36px' }}>Add Mandatory Values</Button>
                                </td>

                                <td>
                                    <Button className='all-bg-green'>Add</Button>
                                </td>

                            </tr>
                        </tbody>
                    </Table>
                </div>

                {/* <div>
                    <h5 className='fw-bold text-dark'>Output Template</h5>
                    <hr />
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label text-dark" for="flexCheckDefault">
                            Check if Images need to shown on the side of test data instead of below
                        </label>
                    </div>

                    <div className="d-flex gap-4 mb-4 align-items-center">
                        <label className="form-check-label text-dark fw-bold" for="flexCheckDefault">
                            Choose Template :
                        </label>
                        <Form.Select aria-label="Default select example" style={{ width: '400px' }}>
                            <option>Choose</option>
                            <option value="1">X Rays Right Thigh</option>
                            <option value="2">CT ABDOMEN AND PELVIS</option>
                            <option value="3">Urine Rot</option>
                        </Form.Select>
                    </div>
                </div> */}

                <div className='mb-4'>
                    <h5 className='fw-bold text-dark'>Add Accreditation</h5>
                    <hr />
                    <Table responsive className="table table-bordered" style={{ width: '1000px' }}>
                        <thead className='admin-table-head'>
                            <tr>
                                <th width="50%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Name</th>
                                <th width="30%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Date</th>
                                <th width="10%"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Form.Select aria-label="Default select example" style={{ width: '400px' }}>
                                        <option></option>&gt;
                                        <option value="cap">CAP</option>
                                        <option value="nabl">NABL</option>
                                        <option value="anab">ANAB</option>
                                    </Form.Select>
                                </td>
                                <td>
                                    <InputGroup>
                                        <Form.Control
                                            type='date'
                                            placeholder="Date"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <Button className='all-bg-green'>Add</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className="mb-4">
                    <h5 className='fw-bold text-dark'>Add Consumables</h5>
                    <Table responsive className="table table-bordered" style={{ width: '1000px' }}>
                        <thead className='admin-table-head'>
                            <tr>
                                <th width="50%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Product Name</th>
                                <th width="30%" style={{ color: '#208b8c', fontWeight: 'bold' }}>Qty</th>
                                <th width="10%"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <InputGroup>
                                        <Form.Control
                                            type='text'
                                            placeholder="Product Name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <InputGroup>
                                        <Form.Control
                                            type='text'
                                            placeholder="Qty"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <Button className='all-bg-green' >Add</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>


                <h5 className='fw-bold text-dark'>General Information</h5>
                <hr />
                <div className="row mb-4">
                    <div className="col-lg-2">
                        <label className="form-check-label text-dark fw-bold" for="flexCheckDefault">
                            Barcode Length*
                        </label>
                        <InputGroup>
                            <Form.Control
                                type='text'
                                placeholder=""
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    <div className='col-lg-3'>
                        <label className="form-check-label text-dark fw-bold" for="flexCheckDefault"> TAT*</label>
                        <div className=" d-flex align-items-center ">
                            <InputGroup >
                                <Form.Control
                                    placeholder=""
                                    aria-describedby="basic-addon1"
                                />
                                <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#bfbbbb', border: '1px solid #00000040', color: '#000' }}>Unit</InputGroup.Text>
                            </InputGroup>
                            <Form.Select aria-label="Default select example" style={{ width: '100px', height: '35px' }}>
                                <option value="cap">Min</option>
                                <option value="nabl">Hr</option>
                                <option value="anab">Day</option>
                            </Form.Select>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <label className="form-check-label text-dark fw-bold" for="flexCheckDefault"> STAT*</label>
                        <div className=" d-flex align-items-center ">
                            <InputGroup >
                                <Form.Control
                                    placeholder=""
                                    aria-describedby="basic-addon1"
                                />
                                <InputGroup.Text id="basic-addon1" style={{ backgroundColor: '#bfbbbb', border: '1px solid #00000040', color: '#000' }}>Unit</InputGroup.Text>
                            </InputGroup>
                            <Form.Select aria-label="Default select example" style={{ width: '100px', height: '35px' }}>
                                <option value="cap">Min</option>
                                <option value="nabl">Hr</option>
                                <option value="anab">Day</option>
                            </Form.Select>
                        </div>
                    </div>

                    <div className="col-lg-1">
                        <label className="form-check-label text-dark fw-bold" for="flexCheckDefault"> Status*</label>
                        <Form.Select aria-label="Default select example" style={{ width: '90px', height: '35px' }}>
                            <option value="cap">Active</option>
                            <option value="nabl">Inactive</option>
                        </Form.Select>
                    </div>

                    <div className="col-lg-3 d-flex justify-content-center "  >
                        <div>
                            <label className="form-check-label text-dark fw-bold" for="flexCheckDefault"> Instruction*</label>
                            <InputGroup className='' style={{ width: '200px', height: '35px' }}>
                                <Form.Control
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>
                    </div>

                </div>


                <div className='d-flex gap-4  justify-content-center'>
                    <label className=" text-dark fw-bold" > Interpretation  :</label>
                    <CkEditorComponent style={{ width: '700px' }} />
                </div>

                <div className='d-flex gap-5  justify-content-center'>
                    <label className=" text-dark fw-bold" > Remarks  :</label>
                    <CkEditorComponent style={{ width: '700px' }} />
                </div>


                <h5 className='fw-bold text-dark'>Price Details</h5>
                <hr />

                <div className='d-flex gap-4 mb-4 '>

                    <label className="form-check-label text-dark fw-bold" for="flexCheckDefault"> Price* :</label>
                    <InputGroup className='' style={{ width: '200px', height: '35px' }}>
                        <Form.Control
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <Button style={{ backgroundColor: '#208b8c', width: '200px', fontSize: '16px', height: '38px' }}>Sumbit</Button>

                </div>

            </Container >

            <Modal
                show={show}
                onHide={NormalValuesClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Normal values </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="row mb-3">
                        <div className="col-lg-3">
                            <label className=" text-dark fw-bold" > Type* :</label>
                            <Form.Select aria-label="Default select example" style={{ height: '35px' }}>
                                <option value=""></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Infant">Infant</option>
                                <option value="Child">Child</option>
                                <option value="Adult">Adult</option>
                            </Form.Select>
                        </div>
                        <div className="col-lg-3">
                            <label className=" text-dark fw-bold" >  </label>
                            <InputGroup className=''>
                                <Form.Control
                                    placeholder='Other'
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>

                        <div className="col-lg-3">
                            <label className=" text-dark fw-bold" >  Range :</label>
                            <InputGroup className='' >
                                <Form.Control
                                    placeholder='Min'
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>
                        <div className="col-lg-3">
                            <label className=" text-dark fw-bold" >  </label>
                            <InputGroup className='' >
                                <Form.Control
                                    placeholder='Max'
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-lg-4">
                            <label className=" text-dark fw-bold" > Age* :</label>
                            <InputGroup className=''>
                                <Form.Control
                                    type='number'
                                    placeholder='age'
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>
                        <div className="col-lg-4">
                            <label className=" text-dark fw-bold" > Range :</label>
                            <InputGroup className=''>
                                <Form.Control
                                    placeholder='Min'
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>

                        <div className="col-lg-4">
                            <label className=" text-dark fw-bold" >  </label>
                            <InputGroup className='' >
                                <Form.Control
                                    placeholder='Max'
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-lg-4">
                            <label className=" text-dark fw-bold" > Critical Range :</label>
                            <InputGroup className=''>
                                <Form.Control
                                    placeholder='<Low'
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>

                        <div className="col-lg-4">
                            <label className=" text-dark fw-bold" >   </label>
                            <InputGroup className='' >
                                <Form.Control
                                    placeholder='High>'
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>
                    </div>

                    <div className="d-flex gap-3">
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Check the box, If the range is abnormal :
                            </label>
                            <input type="checkbox" />
                        </div>
                        <div className='d-flex gap-2 align-items-center mb-2 justify-content-between'>
                            <label className='fw-bold text-dark'>
                                Check the box, To avoid the range in report :
                            </label>
                            <input type="checkbox" />
                        </div>
                    </div>

                    <Button className='all-bg-green mb-3' >Add</Button>

                    <h6 className='fw-bold'>Edited Normal value list</h6>

                    <Table responsive className="table table-bordered">
                        <thead >
                            <tr>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Type</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Others</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Age(Min)</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Age(Max)</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Range (Min)</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Range (Max)</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Valid Range (Min)</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Valid Range (Max)</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Critical Range (Low)</th>
                                <th style={{ color: '#208b8c', fontWeight: 'bold' }}>Critical Range (High)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tbody>
                    </Table>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={NormalValuesClose}>
                        Close
                    </Button>
                    <Button className='all-bg-green'>Submit</Button>
                </Modal.Footer>
            </Modal>


            {/* Mandrotory Values */}

            <Modal
                show={show1}
                onHide={MandatoryValueClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                    Mandatory Condition
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row mb-3">
                        <div className="col-lg-6">
                            <label className=" text-dark fw-bold" > Result Name :</label>
                            <InputGroup className=''>
                                <Form.Control
                                    placeholder='Result Name'
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>

                        <div className="col-lg-6">
                            <label className=" text-dark fw-bold" >  Result Value : </label>
                            <InputGroup className='' >
                                <Form.Control
                                    placeholder='Result Value'
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={MandatoryValueClose}>
                        Close
                    </Button>
                    <Button className='all-bg-green'>Add</Button>
                </Modal.Footer>
            </Modal>

        </div >
    )
}
