import React, { useEffect } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneVolume,
    faEnvelope,
    faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Aos from 'aos';


export const Gastroenterology = () => {

    useEffect(() => {
        Aos.init({ duration: 2500 })
    }, [])



    return (
        <div>

            <div className='head-back-img' style={{ backgroundImage: "url(./img/all-department-img.jpg)", width: "100%", height: "150px", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>

                <Container>
                    <h1 className='text-dark pt-5 fw-light back-img-head'>Diagnostic</h1>
                </Container>
            </div>



            <Container className='mt-5'>

                <div>
                    <Breadcrumb >
                        <Breadcrumb.Item href="/diagnostic">
                            Diagnostic
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/gastroenterology" >
                            Gastroenterology
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <div data-aos="fade-right" className='row mb-2 ' >
                    <div className='col-lg-4  mb-3'>
                        <img className='img-fluid  mt-2' style={{ width: "100%", height: "280px", borderRadius: '10px' }} src="./img/department-img-1.jpg" alt="department-img" />
                    </div>
                    <div className='col-lg-4  m-auto mb-3'>
                        <h3 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }} >Gastroenterology</h3>
                        <p style={{ textAlign: 'justify' }}>"Here's the story of a lovely lady, who was bringing up three very lovely girls. All of them had hair of gold, like their mother, the youngest one in curls. Here's the store, of a man named Brady, who was busy with three boys of his own. They were four men, living all together, yet they were all alone. 'Til the one day when the lady met this fellow. And they knew it was much more than a hunch, that this group would somehow form a family".</p>
                    </div>
                    <div className='col-lg-4  ms-auto mb-2'>
                        <h5 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }}>Other Deaprtments</h5>
                        <ul>
                            <a style={{ listStyle: "none", color: "black" }} href="/gastroenterology"> <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Gastroenterology</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/gastroenterology">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Orthopedic</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/gastroenterology">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Surgery</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/gastroenterology"> <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Urology</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/gastroenterology">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />MRI Testing</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/gastroenterology">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Neurosurgery</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/gastroenterology"> <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Blood Test</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/gastroenterology"> <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Cardiology</li></a>
                        </ul>
                    </div>
                </div>

                <div className='mb-4'>
                    <h5 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }}>Contact Details</h5>
                    <a className='text-dark' href="/contact"> <FontAwesomeIcon icon={faEnvelope} beatFade /> Gastroenterology@hospital.com</a> <br />
                    <a className='text-dark' href="/contact"> <FontAwesomeIcon icon={faPhoneVolume} beatFade /> +1 600 200 999</a> <br />
                    <a className='text-dark' href="/contact"> <FontAwesomeIcon icon={faPhoneVolume} beatFade /> +1 600 200 999</a>
                </div>



            </Container>

        </div>
    )
}
