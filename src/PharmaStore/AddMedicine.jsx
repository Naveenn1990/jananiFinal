import React from 'react'
import { Button, Container, Form, FormLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const AddMedicine = () => {

const navigate = useNavigate()

  return (
    <div>
      <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Add Medicine</h4>
      <Container className='ps-5 mb-5'>

        <div className='mb-4' >
          <FormLabel className='fw-bold text-dark'>Select Category* </FormLabel>
          <Form.Select style={{ width: '600px' }} aria-label="Default select example">
            <option>Select</option>
            <option value="1" >Tablet</option>
            <option value="2">Syrup</option>
            <option value="3">Vitamin</option>
            <option value="4">Inhealer</option>
          </Form.Select>
        </div>

        <div className='mb-4' >
          <FormLabel className='fw-bold text-dark'>Select Medicine Group* </FormLabel>
          <Form.Select style={{ width: '600px' }} aria-label="Default select example">
            <option>Select</option>
            <option value="1" >Parcetomal</option>
            <option value="2">Painkiller</option>
            <option value="3">Khasi ki dawai</option>
            <option value="4">Dolo 650</option>
          </Form.Select>
        </div>

        <div class="mb-4">
          <FormLabel className='fw-bold text-dark'>Medicine Name* </FormLabel>
          <input style={{ width: '800px' }} type="text" class="form-control" placeholder="Name" aria-describedby="basic-addon1" />
        </div>

        <div class="mb-4">
          <FormLabel className='fw-bold text-dark'>Purchase Price($) Per piece* </FormLabel>
          <input style={{ width: '800px' }} type="text" class="form-control" placeholder="Purchase Price" aria-describedby="basic-addon1" />
        </div>

        <div class="mb-4">
          <FormLabel className='fw-bold text-dark'>Selling Price($) Per piece* </FormLabel>
          <input style={{ width: '800px' }} type="text" class="form-control" placeholder="Selling Price" aria-describedby="basic-addon1" />
        </div>

        <div class="mb-4">
          <FormLabel className='fw-bold text-dark'>Number of Boxes In Stock* </FormLabel>
          <input style={{ width: '800px' }} type="text" class="form-control" placeholder="Store Box" aria-describedby="basic-addon1" />
        </div>

        <div class="mb-4">
          <FormLabel className='fw-bold text-dark'>Items Each Box* </FormLabel>
          <input style={{ width: '800px' }} type="text" class="form-control" placeholder="Items Each Box" aria-describedby="basic-addon1" />
        </div>

        <div className='mb-4' >
          <FormLabel className='fw-bold text-dark'>Genric Name* </FormLabel>
          <Form.Select style={{ width: '600px' }} aria-label="Default select example">
            <option>10mg</option>
            <option value="1" >5mg</option>
            <option value="2">10mg</option>
            <option value="3">20mg</option>
            <option value="4">30mg</option>
            <option value="5">40mg</option>
            <option value="6">50mg</option>
            <option value="7">60mg</option>
            <option value="8">70mg</option>
            <option value="9">80mg</option>
            <option value="10">90mg</option>
            <option value="11">100mg</option>
          </Form.Select>
        </div>

        <div className='mb-4' >
          <FormLabel className='fw-bold text-dark'>Supplier/Company Name* * </FormLabel>
          <Form.Select style={{ width: '600px' }} aria-label="Default select example">
            <option>Beximco Pharmacetuicals Ltd</option>
            <option value="1" >Healthcare</option>
            <option value="2">Square</option>
            <option value="3">Lupin</option>
            <option value="4">Sun</option>
            {/* <option value="5">40mg</option>
            <option value="6">50mg</option>
            <option value="7">60mg</option>
            <option value="8">70mg</option>
            <option value="9">80mg</option>
            <option value="10">90mg</option>
            <option value="11">100mg</option> */}
          </Form.Select>
        </div>

        <div className='mb-4'>
        <FormLabel className='fw-bold text-dark'>Medicine Description (Optional)* </FormLabel>
          
          <textarea  class="form-control" placeholder="Description" id="floatingTextarea2" style={{ height: "100px" , width: '800px' }}></textarea>
          
        </div>


        <div class="mb-4">
          <FormLabel className='fw-bold text-dark'>Medicine Expire Date* </FormLabel>
          <input style={{ width: '800px' }} type="date" class="form-control" placeholder="" aria-describedby="basic-addon1" />
        </div>

        <div className='mb-4' >
          <FormLabel className='fw-bold text-dark'>Select Publish Status* </FormLabel>
          <Form.Select style={{ width: '600px' }} aria-label="Default select example">
            <option>Publish</option>
            <option value="1" >Active</option>
            <option value="2">In Active</option>

          </Form.Select>
        </div>

        <div class="mb-4">
          <FormLabel className='fw-bold text-dark'>Choose File* </FormLabel>
          <input style={{ width: '800px' }} type="file" class="form-control" placeholder="" aria-describedby="basic-addon1" />
        </div>

        <Button onClick={() => navigate('/medicinelist')} style={{ width: "15%", height: '40px', fontSize: '16px' ,backgroundColor:'rgb(32, 139, 140)' }}>Submit</Button>

      </Container>

    </div>
  )
}
