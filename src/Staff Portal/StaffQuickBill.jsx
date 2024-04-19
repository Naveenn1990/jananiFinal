import { faFileInvoiceDollar, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Padding } from '@mui/icons-material';
import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';

export const StaffQuickBill = () => {

const navigate = useNavigate()


    return (
        <div>
            <h4 className='p-4 mb-4 fw-bold text-center' style={{ backgroundColor: '#dae1f3' }} > Quick Bill </h4>

            <Container>
                <div className="row" style={{border:'1px solid grey', height:'300px', paddingTop:'20px'}}>
                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Patient Id* :</label>
                        <InputGroup className="">
                            <Form.Control
                                type='text'
                                placeholder="ID Number"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <div style={{ fontSize: '12px' }}>
                            <span >Type <span >3</span> Characters in Id, Name or Mobile in case of old Patient</span>
                            <Button style={{ backgroundColor: '#d91e1e', padding: '5px' }} className='d-flex align-items-center gap-1 '><FontAwesomeIcon icon={faXmark} />Clear</Button>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Name* :</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                placeholder="Name"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <div >
                            <label className='fw-bold text-dark' >Age* :</label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type='text'
                                    placeholder="age"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>

                        <div>
                            <Button onClick={() => navigate('/staffbill') } className='d-flex align-items-center gap-2 ' style={{backgroundColor:'#137413'}}><FontAwesomeIcon icon={faFileInvoiceDollar} />Quick Bill</Button>
                        </div>

                    </div>
                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Mobile* :</label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='number'
                                placeholder="number"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                    <div className='col-lg-3'>
                        <label className='fw-bold text-dark' >Gender* :</label>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </Form.Select>
                    </div>
                </div>



            </Container>
        </div>
    )
}
