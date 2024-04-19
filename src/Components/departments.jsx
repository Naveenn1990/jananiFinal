import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Aos from 'aos';
import { Breadcrumbs, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import parse from "html-react-parser"
import { Link } from 'react-router-dom';

export const Departments = () => {

    useEffect(() => {
        Aos.init({ duration: 2500 })
        GetDepartment()
    }, [])

    // Get Hospital Department
    const [GetDepartmentData, setGetDepartmentData] = useState([]);
    const GetDepartment = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8521/api/admin/getDepartment"
            );
            if (res.status === 200) {
                setGetDepartmentData(res.data.success);
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>

            <div className='head-back-img' style={{ backgroundImage: "url(./img/all-department-img.jpg)", width: "100%", height: "150px", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>

                <Container>
                    <h1 data-aos='fade-right' data-aos-duration='3000' className='text-dark pt-5 fw-light back-img-head'>Departments</h1>
                </Container>
            </div>


            <Container className='mt-5'>


                <div className="mb-4">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            className="d-flex gap-1 breadcrumb-hover"
                            color="inherit"
                            to="/"
                        >
                            <FontAwesomeIcon icon={faHouse}
                                style={{ fontSize: '14px', marginTop: '3px' }} />
                            Home
                        </Link>

                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            Departments
                        </Typography>
                    </Breadcrumbs>
                </div>

                <h4 className='text-center fw-bold mb-5' style={{ color: "rgb(32 139 140)" }}>HOSPITAL DEPARTMENT</h4>
                <div className='row '>
                    {GetDepartmentData?.map((item) => (
                        <>
                            <Card data-aos="fade-up" dat-aos-duration='1500' className='col-lg-3 m-auto mb-3 p-0' style={{ width: '15rem' }}>
                                <Card.Img variant="top" />
                                <Link state={{item : item}} to="/Department_Details"><img className='card_img_0' src={`http://localhost:8521/HospitalDepartment/${item?.DepartmentImg}`} alt="Doctor-img" /></Link>
                                <Card.Body>
                                    <Card.Title> <Link state={{item : item}} className='fw-semibold' style={{ textDecoration: "none", color: "rgb(32 139 140)" }} to="/Department_Details" >{item?.DepartmentName}</Link></Card.Title>
                                    <Card.Text>
                                        <div>
                                            {parse(`<div>${item?.Description?.slice(0, 75)}...</div>`)}
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </>
                    ))}
                </div>
            </Container>
        </div>
    )
}
