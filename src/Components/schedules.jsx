import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneVolume,
    faEnvelope,
    faAnglesRight,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


export const Schedules = () => {
    return (
        <div>
            <div className='head-back-img' style={{ backgroundImage: "url(./img/all-department-img.jpg)", width: "100%", height: "150px", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>

                <Container>
                    <h1 className='text-dark pt-5 fw-light back-img-head'>Schedule</h1>
                </Container>
            </div>


            <Container className='mt-5'>

                <div className="mb-4">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            className="d-flex gap-1 breadcrumb-hover"
                            color="inherit"
                            href="/home"
                        >
                         <FontAwesomeIcon icon={faHouse}
                          style={{fontSize:'14px', marginTop:'3px'}} />
                            Home
                        </Link>
                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            Schedule result
                        </Typography>
                    </Breadcrumbs>
                </div>

                <div className='mb-3'>
                    <h2 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)", fontFamily: "lato" }} >Dr Name 1</h2>
                    <a className='text-decoration-none fw-light text-dark' href="/drNamee">
                        <p><FontAwesomeIcon icon={faUser} fade className='me-2' />View Profile</p>
                    </a>
                </div>
                <div className='table-responsive'>
                    <table className='table-bordered border-light '>
                        <thead className='text-center'>
                            <tr style={{ backgroundColor: "#000", color: "#fff" }}>
                                <th className='schedule-row'>Doctor name</th>

                                <th style={{ minWidth: '120px' }}>
                                    Monday
                                </th>
                                <th style={{ minWidth: '120px' }}>
                                    Tuesday
                                </th>
                                <th style={{ minWidth: '120px' }}>
                                    Wednesday
                                </th>
                                <th style={{ minWidth: '120px' }}>
                                    Thursday
                                </th>
                                <th style={{ minWidth: '120px' }}>
                                    Friday
                                </th>
                                <th style={{ minWidth: '120px' }}>
                                    Saturday
                                </th>
                                <th style={{ minWidth: '120px' }}>
                                    Sunday
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr >
                                <td>
                                    <p className='text-dark' style={{ backgroundColor: "#eee", padding: '20px' }} >
                                        Dr. Name 1</p>
                                </td>

                                <td className="available">
                                    <div className="tb">07.00 - 10.00</div>
                                </td>

                                <td >
                                    <div className="text-center">--</div>
                                </td>

                                <td className="available">
                                    <div class="tb">08.00 - 10.00</div>
                                </td>

                                <td className="available">
                                    <div className="tb">19.00 - 21.00</div>
                                </td>

                                <td >
                                    <div className="text-center">--</div>
                                </td>

                                <td className="available">
                                    <div className="tb">19.00 - 21.00</div>
                                </td>

                                <td >
                                    <div className="text-center">--</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>

        </div>
    )
}
