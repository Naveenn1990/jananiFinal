import React from 'react'
import { useBarcode } from 'react-barcodes';
import { Button, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

export const LaBAccession = () => {

    const { inputRef } = useBarcode({
        value: 'react-barcodes',
        // options: {
        //   background: '#ccffff',
        // }
    });

    return (
        <div>
            <h4 className='p-4 mb-4 fw-bold ' style={{ backgroundColor: '#80808087' }} > Accession </h4>

            <Container>
                <div className="row justify-content-evenly py-4" style={{border:'1px solid grey '}}>
                    <div className="col-lg-4">
                        <div className="form-check d-flex align-items-center mb-3">
                            <input className="form-check-input mb-1" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label fw-bold text-dark me-1" for="flexCheckDefault">
                                Enable Location Based ID
                            </label>
                            <Form.Select aria-label="Default select example" style={{ width: '100px', height: '34px' }}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                        </div>

                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label fw-bold text-dark" for="flexCheckDefault">
                                Enable Container ID
                            </label>
                        </div>

                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label fw-bold text-dark" for="flexCheckDefault">
                                Add Current Year
                            </label>
                        </div>

                        <Button className='all-bg-green'>Update</Button>

                    </div>

                    <div className="col-lg-6">

                        <table className="table table-bordered table-striped">
                            <thead className="bg-md-default">
                                <tr>
                                    <th className="text-center fw-bold" style={{ color: '#208b8c' }}>Year</th>
                                    <th className="text-center fw-bold" style={{ color: '#208b8c' }}>Location ID</th>
                                    <th className="text-center fw-bold" style={{ color: '#208b8c' }}>Container ID</th>
                                    <th className="text-center fw-bold" style={{ color: '#208b8c' }}>Sample ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td className="text-center fw-bold fs-5">23</td>
                                    <td className="text-center fw-bold fs-5">01</td>
                                    <td className="text-center fw-bold fs-5">02</td>
                                    <td className="text-center fw-bold fs-5">00000024</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className='text-center'>
                            <p className='fw-bold text-dark' >Michael Joe(HMI-123)</p>
                            <canvas ref={inputRef} />
                            <p className='fw-bold text-dark' >23020100000024</p>

                        </div>
                    </div>
                </div>
            </Container>
        </div>

    )

}