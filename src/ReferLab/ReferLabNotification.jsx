import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

function ReferLabNotification() {
    const ReferalLAB = JSON.parse(sessionStorage.getItem("RLabDetails"));
    const [Notificationbyid, setNotificationbyid] = useState([]);
    const getNotificationbyid = async () => {
      try {
        const res = await axios.get(
         ` http://localhost:8521/api/notification/getnotificationlabbyid/${ReferalLAB?._id}`
        );
        if (res.status === 200) {
          setNotificationbyid(res.data.getdata);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getNotificationbyid();
    }, []);
  

  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold">
        Notification
      </h4>
      <Container className="">
        <div
          style={{
            borderColor: "rgb(218, 225, 243)",
            border: "1px solid",
            borderRadius: "10px",
          }}
        >
            {Notificationbyid?.map((item)=>{
                return(
                    <div
                    style={{
                      backgroundColor: "rgb(218, 225, 243)",
                      margin: "10px",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <p>
                     {item?.message}
                    </p>
                  </div>
                )
            })}
        </div>
      </Container>
    </div>
  )
}

export default ReferLabNotification