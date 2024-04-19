import React from 'react'
import { Container } from 'react-bootstrap'

export const MedicineDetail = () => {
    return (
        <div>
            <h3 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Medicine Details</h3>
            <Container className='ps-3'>
                <h5 className='mb-3 fw-bold'>Medicine Information</h5>

                <div className="row">
                    <div className="col-lg-2">
                        <p className='mb-0  ms-3'>Name</p>
                        <p className='mb-0 ms-3 fw-bold'>Zimax</p>
                        {/* <p className='mb-0 ms-3'>Popularity</p> */}
                        <img src="./img/rating-img.png" alt="" style={{ height: '15px', width: '100px' }} />
                    </div>

                    <div className="col-lg-2">
                        <p className='mb-0  '>Generic Name</p>
                        <p className='mb-0  fw-bold'>Azithromycin</p>
                    </div>

                    <div className="col-lg-2">
                        <p className='mb-0  '>Weight</p>
                        <p className='mb-0  fw-bold'>500mg</p>
                    </div>

                    <div className="col-lg-2">
                        <p className='mb-0  '>Category</p>
                        <p className='mb-0  fw-bold'>Tablet</p>
                    </div>

                    <div className="col-lg-2">
                        <p className='mb-0  '>Manufacturer</p>
                        <p className='mb-0  fw-bold'>Healthcare</p>
                    </div>

                    <div className="col-lg-2">
                        <p className='mb-0  '>Expire Date</p>
                        <p className='mb-0  fw-bold'>19/12/2020</p>
                    </div>
                </div>

                <hr />


                <h5 className=' mb-3 fw-bold'>Stock</h5>
                <div className='row'>
                    <div className="col-lg-3">

                        <p className='mb-1' >Starting Stock </p>
                        <p className='fw-bold mb-1'>230box</p>
                        <p className='mb-0' >Remaining</p>

                        <p className='fw-bold text-center  pb-4' style={{ backgroundImage: "url(./img/medicine-detail-img.jpg)", height: "10px", width: '200px', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                            <span style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: "4px 84px", color: "#fff" }}> 75%</span>
                        </p>
                    </div>

                    <div className="col-lg-3">
                        <p className='mb-1' >Current Stock </p>
                        <p className='fw-bold'>180box</p>

                    </div>

                    <div className="col-lg-3">
                        <p className='mb-1'>Stock Status </p>
                        <p className='fw-bold text-success' >Available</p>

                    </div>

                </div>

                <hr />
                <h5 className=' mb-3 fw-bold'>Estimate</h5>

                <div className="row mb-5">
                    <div className="col-lg-3">
                        <span>Manufacture price</span> <br />
                        <span className='fw-bold'>50.00$</span>
                    </div>

                    {/* <div className="col-lg-3">
                        <span>Wholesale Price</span> <br />
                        <span className='fw-bold'>55.00$</span>
                    </div> */}

                    <div className="col-lg-3">
                        <span>Seeling price</span> <br />
                        <span className='fw-bold'>60.00$</span>
                    </div>
                </div>


            </Container>

        </div>
    )
}
