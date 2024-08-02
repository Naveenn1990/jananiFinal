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

  const [PharmacyBanImg, setPharmacyBanImg] = useState("");
  const [pharmacyImage, setpharmacyImage] = useState("");
  const [PharmacySubTitle, setPharmacySubTitle] = useState("");
  const [PharmacyTitle, setPharmacyTitle] = useState("");
  const [PharmacyBanLink, setPharmacyBanLink] = useState("");

  // const [PharmacyCatbannerbgImg, setPharmacyCatbannerbgImg] = useState("");
  const [pharmacyCatbannerImage, setpharmacyCatbannerImage] = useState("");
  const [PharmacyCatName, setPharmacyCatName] = useState("");
  const [PharmacyCatDiscount, setPharmacyCatDiscount] = useState();

  const [LabBan, setLabBan] = useState("");
  const [LabSubTitle, setLabSubTitle] = useState("");
  const [LabTitle, setLabTitle] = useState("");

  // Post
  const AddBanner = async () => {
    if (!bannerImg || !bannerLink) {
      alert("Please fill all the fields");
    } else {
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
    if (
      !PharmacyBanImg ||
      !pharmacyImage ||
      !PharmacySubTitle ||
      !PharmacyTitle ||
      !PharmacyBanLink
    ) {
      alert("Please fill all the fields");
    } else {
      try {
        const config = {
          url: "/admin/addpharmacyBan",
          baseURL: "http://localhost:8521/api",
          method: "post",
          headers: { "Content-Type": "multipart/form-data" },
          data: {
            PharmacyBanImg: PharmacyBanImg,
            pharmacyImage: pharmacyImage,
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

  console.log("GetPharmBanData", GetPharmBanData);

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

  ////// Pharmacy Cat Banner

  const [categoryList, setcategoryList] = useState([]);
  const getAllCategory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getcategoryList"
      );
      if (res.status === 200) {
        setcategoryList(res.data.allcategory);
      }
    } catch (error) {
      console.log(error);
      setcategoryList(error.response.data.allcategory);
    }
  };

  // Post
  const AddPharmacyCatBan = async () => {
    if (!pharmacyCatbannerImage || !PharmacyCatName || !PharmacyCatDiscount) {
      alert("Please fill all the fields");
    } else {
      try {
        const config = {
          url: "/admin/AddPharmacyCategoryBan",
          baseURL: "http://localhost:8521/api",
          method: "post",
          headers: { "Content-Type": "multipart/form-data" },
          data: {
            // PharmacyCatbannerbgImg: PharmacyCatbannerbgImg,
            pharmacyCatbannerImage: pharmacyCatbannerImage,
            PharmacyCatName: PharmacyCatName,
            PharmacyCatDiscount: PharmacyCatDiscount,
          },
        };
        const res = await axios(config);
        if (res.status === 200) {
          alert(res.data.success);
          handleClose();
          getPharmacyCatBan();
        }
      } catch (error) {
        alert(error.response.data.error);
      }
    }
  };

  // get
  const [GetPharmCatBan, setGetPharmCatBan] = useState([]);
  const getPharmacyCatBan = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/GetPharmacyCategoryBan"
      );
      if (res.status === 200) {
        setGetPharmCatBan(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete
  const DeletePharmacyCatBan = async (id) => {
    try {
      const config = {
        url: "/admin/DeletePharmacyCategoryBan/" + id,
        baseURL: "http://localhost:8521/api",
        method: "delete",
        header: { "Content-Type": "application/json" },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getPharmacyCatBan();
        handleClose();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  ////LAb

  // Post
  const AddLabBan = async () => {
    if (!LabBan || !LabSubTitle || !LabTitle) {
      alert("Please fill all the fields");
    } else {
      try {
        const config = {
          url: "/lab/addLabbanner",
          baseURL: "http://localhost:8521/api",
          method: "post",
          headers: { "Content-Type": "multipart/form-data" },
          data: {
            LabBan: LabBan,
            LabSubTitle: LabSubTitle,
            LabTitle: LabTitle,
          },
        };
        const res = await axios(config);
        if (res.status === 200) {
          alert(res.data.success);
          handleClose();
          getLabBan();
        }
      } catch (error) {
        alert(error.response.data.error);
      }
    }
  };

  // get
  const [GetLabData, setGetLabData] = useState([]);
  const getLabBan = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/lab/getLabbanner");
      if (res.status === 200) {
        setGetLabData(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete
  const DeleteLabBan = async (id) => {
    try {
      const config = {
        url: "/lab/deletLabbanner/" + id,
        baseURL: "http://localhost:8521/api",
        method: "delete",
        header: { "Content-Type": "application/json" },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getLabBan();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getBanner();
    getPharmacyBan();
    getPharmacyCatBan();
    getLabBan();
    getAllCategory();
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
              <th>Pharmacy Background Image </th>
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
                        src={`http://localhost:8521/PharmacyBanner/${item?.PharmacyBanImg}`}
                        style={{ width: "160px", height: "140" }}
                      />
                    </td>
                    <td>
                      <img
                        src={`http://localhost:8521/PharmacyBanner/${item?.pharmacyImage}`}
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

      {/* Pharmacy Cat Bannner */}
      <div>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Pharmacy Top Discount category Banner
        </h6>
        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.No</th>
              {/* <th>Background Image </th> */}
              <th>Banner </th>
              <th>Category</th>
              <th>Discount</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {GetPharmCatBan?.map((item, i) => {
              return (
                <>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{i + 1}</td>
                    {/* <td>
                      <img
                        src={`http://localhost:8521/PharmacyCategoryBanner/${item?.PharmacyCatbannerbgImg}`}
                        style={{ width: "160px", height: "140" }}
                      />
                    </td> */}
                    <td>
                      <img
                        src={`http://localhost:8521/PharmacyCategoryBanner/${item?.pharmacyCatbannerImage}`}
                        style={{ width: "160px", height: "140" }}
                      />
                    </td>
                    <td>{item?.PharmacyCatName}</td>
                    <td>{item?.PharmacyCatDiscount}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <AiFillDelete
                          onClick={() => DeletePharmacyCatBan(item?._id)}
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

      {/* Lab Bannner */}
      <div>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Lab Banner
        </h6>
        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.No</th>
              <th>Lab Banner </th>
              <th>Lab SubTitle</th>
              <th>Lab Title</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {GetLabData?.map((item, i) => {
              return (
                <>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        src={`http://localhost:8521/Labbanner/${item?.LabBan}`}
                        style={{ width: "160px", height: "140" }}
                      />
                    </td>
                    <td>{item?.LabTitle}</td>
                    <td>{item?.LabSubTitle}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <AiFillDelete
                          onClick={() => DeleteLabBan(item?._id)}
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
            Home
          </div>

          <div className="fs-6 d-flex gap-2 radio_01">
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            Pharmacy
          </div>
          {GetPharmCatBan?.length < 4 ? (
            <div className="fs-6 d-flex gap-2 radio_01">
              <input
                type="radio"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              Pharmacy category
            </div>
          ) : (
            ""
          )}
          <div className="fs-6 d-flex gap-2 radio_01">
            <input
              type="radio"
              value="option4"
              checked={selectedOption === "option4"}
              onChange={handleOptionChange}
            />
            Lab
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
        ) : selectedOption === "option2" ? (
          <>
            <Modal.Body>
              <div className="row">
                <div className="col-lg-12" htmlFor="upload">
                  <p style={{ marginBottom: "0px", color: "white" }}>
                    Background Image
                  </p>
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
                    }}
                    onChange={(e) => setPharmacyBanImg(e.target.files[0])}
                  ></input>
                </div>
                <div className="col-lg-12" htmlFor="upload">
                  <p
                    style={{
                      marginBottom: "0px",
                      color: "white",
                      marginTop: "4%",
                    }}
                  >
                    Image
                  </p>
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
                    }}
                    onChange={(e) => setpharmacyImage(e.target.files[0])}
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
        ) : selectedOption === "option3" ? (
          <>
            <Modal.Body>
              <div className="row">
                {/* <div className="col-lg-12" htmlFor="upload">
                  <p style={{ marginBottom: "0px", color: "white" }}>
                    Background Image
                  </p>
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
                    }}
                    onChange={(e) =>
                      setPharmacyCatbannerbgImg(e.target.files[0])
                    }
                  ></input>
                </div> */}
                <div className="col-lg-12" htmlFor="upload">
                  <p
                    style={{
                      marginBottom: "0px",
                      color: "white",
                      marginTop: "4%",
                    }}
                  >
                    Image
                  </p>
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
                    }}
                    onChange={(e) =>
                      setpharmacyCatbannerImage(e.target.files[0])
                    }
                  ></input>
                </div>

                <div className="col-lg-12">
                  <select
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setPharmacyCatName(e.target.value)}
                  >
                    <option>Select</option>
                    {categoryList?.map((cat) => (
                      <option value={cat?.categoryName}>
                        {cat?.categoryName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-lg-12">
                  <input
                    type="number"
                    placeholder="Discount %"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setPharmacyCatDiscount(e.target.value)}
                  ></input>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="d-flex gap-2">
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="warning" onClick={AddPharmacyCatBan}>
                  Add Pharmacy Category Banner
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
                    onChange={(e) => setLabBan(e.target.files[0])}
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
                    onChange={(e) => setLabSubTitle(e.target.value)}
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
                    onChange={(e) => setLabTitle(e.target.value)}
                  ></input>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="d-flex gap-2">
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="warning" onClick={AddLabBan}>
                  Add Lab Banner
                </Button>
              </div>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}
