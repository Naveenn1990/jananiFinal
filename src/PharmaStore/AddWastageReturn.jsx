import React from 'react'
import { Container, FormLabel, Form, Button } from 'react-bootstrap'
import { CkEditorComponent } from '../CkEditor/CkEditorComponent'
import { useNavigate } from 'react-router-dom'

export const AddWastageReturn = () => {

const navigate = useNavigate()

    return (
        <div>

            <h3 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Add Wastage Return</h3>

            <Container >
                <div className="row ms-3">
                    <div class="mb-4 col-lg-4 ">
                        <FormLabel className='fw-bold text-dark'>Customer* </FormLabel>
                        <input style={{ width: '300px' }} type="text" class="form-control" placeholder="Customer Name" aria-describedby="basic-addon1" />
                    </div>

                    <div class="mb-4 col-lg-4 ">
                        <FormLabel className='fw-bold text-dark'>Seller* </FormLabel>
                        <input style={{ width: '300px' }} type="text" class="form-control" placeholder="Seller Name" aria-describedby="basic-addon1" />
                    </div>

                    <div class="mb-4 col-lg-4 ">
                        <FormLabel className='fw-bold text-dark'>Email* </FormLabel>
                        <input style={{ width: '300px' }} type="email" class="form-control" placeholder="Email" aria-describedby="basic-addon1" />
                    </div>
                </div>

                <div className="row ms-3">
                    <div class="mb-4 col-lg-4 ">
                        <FormLabel className='fw-bold text-dark'>Product Name* </FormLabel>
                        <input style={{ width: '300px' }} type="text" class="form-control" placeholder="Product Name" aria-describedby="basic-addon1" />
                    </div>

                    <div class="mb-4 col-lg-4 ">
                        <FormLabel className='fw-bold text-dark'>Generic Name* </FormLabel>
                        <input style={{ width: '300px' }} type="text" class="form-control" placeholder="Generic Name" aria-describedby="basic-addon1" />
                    </div>

                    <div className='mb-4 col-lg-4' >
                        <FormLabel className='fw-bold text-dark'>Category* </FormLabel>
                        <Form.Select style={{ width: '300px' }} aria-label="Default select example">
                            <option>Select</option>
                            <option value="1" >Tablet</option>
                            <option value="2">Syrup</option>
                            <option value="3">Vitamin</option>
                            <option value="4">Inhealer</option>
                        </Form.Select>
                    </div>

                </div>

                <div className="row ms-3">
                    <div class="mb-4 col-lg-4 ">
                        <FormLabel className='fw-bold text-dark'>Amount* </FormLabel>
                        <input style={{ width: '300px' }} type="number" class="form-control" placeholder="Amount" aria-describedby="basic-addon1" />
                    </div>

                    <div class="mb-4 col-lg-4 ">
                        <FormLabel className='fw-bold text-dark'>Invoice No* </FormLabel>
                        <input style={{ width: '300px' }} type="text" class="form-control" placeholder="Invoice No" aria-describedby="basic-addon1" />
                    </div>

                    <div className='mb-4 col-lg-4' >
                        <FormLabel className='fw-bold text-dark'>Reason* </FormLabel>
                        <Form.Select style={{ width: '300px' }} aria-label="Default select example">
                            <option>Select</option>
                            <option value="1" >Wrong medication</option>
                            <option value="2">Wrong dispensing</option>
                            <option value="3">Subsidence symptoms</option>

                        </Form.Select>
                    </div>

                </div>

                <div className="row ms-3  mb-2">
                    <div class="mb-4 col-lg-4 ">
                        <FormLabel className='fw-bold text-dark'>Quantity* </FormLabel>
                        <input style={{ width: '300px' }} type="number" class="form-control" placeholder="Quantity" aria-describedby="basic-addon1" />
                    </div>

                    <div class="mb-4 col-lg-4 ">
                        <FormLabel className='fw-bold text-dark'>Date* </FormLabel>
                        <input style={{ width: '300px' }} type="date" class="form-control" placeholder="Date" aria-describedby="basic-addon1" />
                    </div>

                    <div className='mb-4 col-lg-4' >
                        <FormLabel className='fw-bold text-dark'>Status* </FormLabel>
                        <Form.Select style={{ width: '300px' }} aria-label="Default select example">
                            <option>Select</option>
                            <option value="1" >Active</option>
                            <option value="2">Inactive</option>

                        </Form.Select>
                    </div>

                </div>

                <div>
                <FormLabel className='fw-bold text-dark'>Description* </FormLabel>
                    <CkEditorComponent />
                    <div className="d-flex gap-4">
                    <Button className='mb-4 all-bg-green'  onClick={() => navigate('/wastagereturn')}> Add Return</Button>
                    <Button className='mb-4 bg-danger' > Cancel</Button>

                    </div>
                </div>


            </Container>


        </div>
    )
}
