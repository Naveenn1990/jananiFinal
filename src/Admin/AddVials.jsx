import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import axios from "axios";
export default function AddVials() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [vial, setvial] = useState("");
  const [vialDescription, setvialDescription] = useState("");
  const [vialImg, setvialImg] = useState({});
  const AddVialsFn = async () => {
    const obj = {
      vial,
      vialDescription,
      vialImg,
    };
    if (!vial || !vialDescription || !vialImg) {
      return alert("please fill all the fields!");
    }
    try {
      const config = {
        url: "/admin/createVials",
        method: "post",
        headers: { "content-type": "multipart/form-data" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      const res = await axios(config);

      if (res.status === 201 || res.status === 200) {
        alert(res.data.success);
        getHospitalVials();
        setvial("");
        setvialDescription("");
        setvialImg({});
        handleClose();
      }
    } catch (err) {
      console.log(err);
      return alert(
        err.response.data.error
          ? err.response.data.error
          : "Something went wrong! Please try again!"
      );
    }
  };

  const [vialList, setvialList] = useState([]);
  const [vialListImmutable, setvialListImmutable] = useState([]);
  const getHospitalVials = () => {
    axios
      .get("http://localhost:8521/api/admin/vialList")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.viallist;
          setvialList(data);
          setvialListImmutable(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setvialList([]);
      });
  };

  const EditVialsFn = async () => {
    const obj = {
      vial,
      vialDescription,
      vialImg,
      vialid: View?._id,
    };

    try {
      const config = {
        url: "/admin/editVials",
        method: "put",
        headers: { "content-type": "multipart/form-data" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      const res = await axios(config);

      if (res.status === 201 || res.status === 200) {
        alert(res.data.success);
        handleClose4();
        getHospitalVials();
        setvial("");
        setvialDescription("");
        setvialImg({});
      }
    } catch (err) {
      console.log(err);
      return alert(
        err.response.data.error
          ? err.response.data.error
          : "Something went wrong! Please try again!"
      );
    }
  };

  const [View, setView] = useState({});
  const deleteHospitalVials = () => {
    axios
      .delete("http://localhost:8521/api/admin/deleteVials", {
        headers: { "content-type": "application/json" },
        data: {
          vialid: View?._id,
        },
      })
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          alert(response.data.success);
          getHospitalVials();
          handleClose1();
          setvial("");
          setvialDescription("");
          setvialImg({});
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return alert("Something is up with the server");
      });
  };

  // search
  const [search, setSearch] = useState("");
  function handleFilter() {
    if (search != "") {
      // setSearch(search);
      const filterTable = vialList.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(search.toLowerCase())
        )
      );
      setvialList([...filterTable]);
    } else {
      // setSearch(search);
      // vialList();
      setvialList([...vialListImmutable]);
    }
  }

  useEffect(() => {
    handleFilter();
  }, [search]);

  useEffect(() => {
    getHospitalVials();
  }, []);

  return (
    <div>
      <div style={{ padding: "1%" }}>
        {/* <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
              Hospital Lab
            </h6> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search Vials"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ImLab className="AddIcon1" onClick={() => setShow(true)} />

            {/* <button
                style={{
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  backgroundColor: "#20958c",
                  margin: "0px 10px",
                  borderRadius: "4px",
                  color: "white",
                }}
                onClick={() => setShow1(true)}
              >
                {" "}
                + ADD LAB PRICE
              </button> */}

            {/* <button
                style={{
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  backgroundColor: "#20958c",
                  borderRadius: "4px",
                  color: "white",
                }}
                onClick={() => setShow2(true)}
              >
                {" "}
                + LAB TOTAL REVENUE
              </button> */}
          </div>
        </div>

        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Vials</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Vial
                </label>
                <input
                  placeholder="Vial Type"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={vial}
                  onChange={(e) => setvial(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-12">
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Vial Description
                </label>
                <textarea
                  placeholder="Vial Description"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setvialDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="col-lg-12" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                  htmlFor="cat-img"
                >
                  Vial Image
                </label>
                <input
                  type="file"
                  id="cat-img"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  accept="image/*"
                  onChange={(e) => setvialImg(e.target.files[0])}
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  border: "1px solid white",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={handleClose}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  AddVialsFn();
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* ====================================delete Vial==================================== */}
        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Delete Vial</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ color: "white" }}>
              Are You sure? You want to <b style={{ color: "red" }}>delete</b>{" "}
              the Vial Information.
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  border: "1px solid grey",
                  padding: "4px 10px",
                }}
                onClick={handleClose1}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid red",
                  padding: "4px 10px",
                }}
                onClick={deleteHospitalVials}
              >
                Delete
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* ====================================edit Vial==================================== */}
        <Modal size="md" show={show4} onHide={handleClose4}>
          <Modal.Header>
            <Modal.Title>Edit Vial details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Vial
                </label>
                <input
                  placeholder={View?.vial}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setvial(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-12">
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Vial Description
                </label>
                <textarea
                  //   placeholder="Vial Description"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setvialDescription(e.target.value)}
                >
                  {View?.vialDescription}
                </textarea>
              </div>

              <div className="col-lg-12" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                  htmlFor="cat-img"
                >
                  Vial Image: {vialImg ? vialImg?.name : View?.vialImg}
                </label>
                <input
                  type="file"
                  id="cat-img"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  accept="image/*"
                  onChange={(e) => setvialImg(e.target.files[0])}
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  border: "1px solid white",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={handleClose4}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  EditVialsFn();
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.no.</th>
              <th>Vial</th>
              <th>Vial Description</th>
              <th>Image</th>

              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {vialList?.map((val, index) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>{index + 1}</td>
                  <td>{val?.vial}</td>
                  <td style={{ width: "50px" }}>
                    <p
                      style={{
                        height: "141px",
                        overflow: "hidden",
                        overflowY: "scroll",
                      }}
                    >
                      {val?.vialDescription}
                    </p>
                  </td>
                  <td>
                    <img
                      src={`http://localhost:8521/Vials/${val?.vialImg}`}
                      style={{ width: "100px" }}
                      alt="no-img"
                    />
                  </td>

                  <td>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MdEdit
                        style={{ color: "#20958c", marginRight: "15px" }}
                        onClick={() => {
                          setView(val);
                          handleShow4();
                        }}
                      />
                      <AiFillDelete
                        style={{ color: "red" }}
                        onClick={() => {
                          setView(val);
                          handleShow1();
                        }}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
