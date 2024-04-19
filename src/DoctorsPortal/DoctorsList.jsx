import { faLocationDot, faMessage, faMoneyCheckDollar, faTimesRectangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const DoctorsList = () => {

    const [Doctors, setDoctors] = useState([]);

    const getDoctors = () => {
      axios
        .get("http://localhost:8521/api/Doctor/getDoctorsList")
        .then(function (response) {
          // handle success
          setDoctors(response.data.DoctorsInfo);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
  
    useEffect(() => {
      getDoctors();
    }, []);
  

    
    return (
        <div>
           <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>Doctors</h4>
           {Doctors?.map((item)=>{
            return(
                <div className="row mb-5">
                <div className="col-lg-2">
                    <img style={{ width: '100%', height: '150px', borderRadius: '10px', marginLeft: '10px' }} src={`http://localhost:8521/Doctor/${item?.ProfileImg}`} alt="" />
                </div>

                <div className="col-lg-5">
                    <h5 className='fw-bold' style={{ color: 'rgb(32, 139, 140)' }}>{item?.Firstname}&nbsp;{item?.Lastname}</h5>
                    <p>{item?.Education} -{item?.Department}</p>
                    <p style={{ textAlign: 'justify' }}>{item?.Description}</p>
                </div>

                <div className='col-lg-5'>
                    <ul style={{ listStyle: 'none' }}>
                        <li className='mb-3'><FontAwesomeIcon icon={faLocationDot} className='me-3 fs-5' />{item?.Address1}</li>
                        <li className='mb-3'><FontAwesomeIcon icon={faMessage} className='me-3 fs-5' />0 Feedback</li>
                        <li className='mb-3'><FontAwesomeIcon icon={faMoneyCheckDollar} className='me-3 fs-5' /> INR {item?.appointmentcharge}</li>
                        <li className='mb-3'><FontAwesomeIcon icon={faTimesRectangle} className='me-3 fs-5' /> MON - SAT 10:00 AM - 8:00PM</li>
                    </ul>

                </div>
            </div>
            )
           })}
           


            



        </div>
    )
}
