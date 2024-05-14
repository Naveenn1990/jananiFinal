import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillEyeFill, BsFillPlusCircleFill, BsImages } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { IoMdImages } from "react-icons/io";
import axios from "axios";

export default function AddBanner() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [bannerImg, setbannerImg] = useState("");
  const [bannerLink, setbannerLink] = useState("");
  const [PharmacyBan, setPharmacyBan] = useState("");
  const [PharmacySubTitle, setPharmacySubTitle] = useState("");
  const [PharmacyTitle, setPharmacyTitle] = useState("");
  const [PharmacyBanLink, setPharmacyBanLink] = useState("");

  // Post
  const AddBanner = async () => {
    try {
      const config = {
        url: "/admin/addBanner",
        baseURL: "http://localhost:8521/api",
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        data: {
          bannerImg: bannerImg,
          bannerLink: bannerLink,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose();
        getBanner();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  // get
  const [GetBannerData, setGetBannerData] = useState([]);
  const getBanner = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/getBanner");
      if (res.status === 200) {
        setGetBannerData(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete
  const DeleteBanner = async (id) => {
    try {
      const config = {
        url: "/admin/deletBanner/" + id,
        baseURL: "http://localhost:8521/api",
        method: "delete",
        header: { "Content-Type": "application/json" },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getBanner();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  ////// Pharmacy Banner

  // Post
  const AddPharmacyBan = async () => {
    try {
      const config = {
        url: "/admin/addpharmacyBan",
        baseURL: "http://localhost:8521/api",
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        data: {
          PharmacyBan: PharmacyBan,
          PharmacySubTitle: PharmacySubTitle,
          PharmacyTitle: PharmacyTitle,
          PharmacyBanLink: PharmacyBanLink,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose();
        getPharmacyBan();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  // get
  const [GetPharmBanData, setGetPharmBanData] = useState([]);
  const getPharmacyBan = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getPharmacyBan"
      );
      if (res.status === 200) {
        setGetPharmBanData(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete
  const DeletePharmacyBan = async (id) => {
    try {
      const config = {
        url: "/admin/deletPharmacyBan/" + id,
        baseURL: "http://localhost:8521/api",
        method: "delete",
        header: { "Content-Type": "application/json" },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getPharmacyBan();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getBanner();
    getPharmacyBan();
  }, []);

  const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div style={{ padding: "1%" }} className="mb-4">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            Home Banner
          </h6>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
          </div>
        </div>

        {/* Home Bannner */}
        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.No</th>
              <th>Banner Image</th>
              <th>Banner Link</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {GetBannerData?.map((item, i) => {
              return (
                <>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        src={`http://localhost:8521/banner/${item?.bannerImg}`}
                        style={{ width: "160px", height: "140" }}
                      />
                    </td>
                    <td>{item?.bannerLink}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <AiFillDelete
                          onClick={() => DeleteBanner(item?._id)}
                          className="text-danger"
                        />
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/* Pharmacy Bannner */}
      <div>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Pharmacy Banner
        </h6>
        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.No</th>
              <th>Pharmacy Banner </th>
              <th>Pharmacy SubTitle</th>
              <th>Pharmacy Title</th>
              <th>Banner Link</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {GetPharmBanData?.map((item, i) => {
              return (
                <>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        src={`http://localhost:8521/PharmacyBanner/${item?.PharmacyBan}`}
                        style={{ width: "160px", height: "140" }}
                      />
                    </td>
                    <td>{item?.PharmacySubTitle}</td>
                    <td>{item?.PharmacyTitle}</td>
                    <td>{item?.PharmacyBanLink}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <AiFillDelete
                          onClick={() => DeletePharmacyBan(item?._id)}
                          className="text-danger"
                        />
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>

      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header className="d-flex justify-content-between">
          <div className="fs-6 d-flex gap-2 ">
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            Home Banner
          </div>

          <div className="fs-6 d-flex gap-2 radio_01">
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            Pharmacy Banner
          </div>
        </Modal.Header>

        {selectedOption === "option1" ? (
          <>
            <Modal.Body>
              <div className="row">
                <div className="col-lg-12" htmlFor="upload">
                  <input
                    id="upload"
                    type="file"
                    accept="image/*"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setbannerImg(e.target.files[0])}
                  ></input>
                </div>

                <div className="col-lg-12">
                  <input
                    type="text"
                    placeholder="Add Link"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setbannerLink(e.target.value)}
                  ></input>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="d-flex gap-2">
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="warning" onClick={AddBanner}>
                  Add Home Banner
                </Button>
              </div>
            </Modal.Footer>
          </>
        ) : (
          <>
            <Modal.Body>
              <div className="row">
                <div className="col-lg-12" htmlFor="upload">
                  <input
                    id="upload"
                    type="file"
                    accept="image/*"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setPharmacyBan(e.target.files[0])}
                  ></input>
                </div>

                <div className="col-lg-12">
                  <input
                    type="text"
                    placeholder="Sub Title"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setPharmacySubTitle(e.target.value)}
                  ></input>
                </div>

                <div className="col-lg-12">
                  <input
                    type="text"
                    placeholder="Title"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setPharmacyTitle(e.target.value)}
                  ></input>
                </div>

                <div className="col-lg-12">
                  <input
                    type="text"
                    placeholder="Add Link"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setPharmacyBanLink(e.target.value)}
                  ></input>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="d-flex gap-2">
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="warning" onClick={AddPharmacyBan}>
                  Add Pharmacy Banner
                </Button>
              </div>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}
