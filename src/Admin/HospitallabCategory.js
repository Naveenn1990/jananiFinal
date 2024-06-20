import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HospitallabCategory() {
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

  const [testCategory, settestCategory] = useState("");
  const [testCategoryImg, settestCategoryImg] = useState("");

  const AddHospitalLabCategory = async () => {
    const obj = {
      testCategory,
      testCategoryImg,
    };
    try {
      const config = {
        url: "/admin/createHospitalLabTestCategory",
        method: "post",
        headers: { "content-type": "multipart/form-data" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      const res = await axios(config);

      if (res.status === 201 || res.status === 200) {
        alert(res.data.success);
        HospitallabCategories();
        handleClose();
        settestCategory("");
        settestCategoryImg("");
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

  const [HospitalLabCatList, setHospitalLabCatList] = useState([]);
  const HospitallabCategories = () => {
    axios
      .get("http://localhost:8521/api/admin/HospitalLabTestCategoryList")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.list;
          setHospitalLabCatList(data);
          setFilteredCatList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalLabCatList([]);
      });
  };

  const UpdateHospitalLabCategory = async () => {
    const obj = {
      testCategory,
      testCategoryImg,
    };
    try {
      const config = {
        url: "/admin/editHospitalLabCat/" + View?._id,
        method: "put",
        headers: { "content-type": "multipart/form-data" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      const res = await axios(config);

      if (res.status === 200) {
        alert(res.data.success);
        HospitallabCategories();
        handleClose4();
        settestCategory("");
        settestCategoryImg("");
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
  const deleteHospitallabCategory = () => {
    axios
      .delete("http://localhost:8521/api/admin/deleteHospitalLabTestCat", {
        headers: { "content-type": "application/json" },
        data: {
          catid: View?._id,
        },
      })
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          alert(response.data.success);
          handleClose1();
          HospitallabCategories();
          settestCategory("");
          settestCategoryImg("");
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return alert("Something is up with the server");
      });
  };
  console.log("Viewshabaash: ", View);

  // search
  const [search, setSearch] = useState("");
  const [FilteredCatList, setFilteredCatList] = useState([]);
  function handleFilter() {
    if (search != "") {
      // setSearch(search);
      const filterTable = HospitalLabCatList.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(search.toLowerCase())
        )
      );
      setFilteredCatList([...filterTable]);
    } else {
      // setSearch(search);
      // vialList();
      setFilteredCatList([...HospitalLabCatList]);
    }
  }

  useEffect(() => {
    handleFilter();
  }, [search]);

  useEffect(() => {
    HospitallabCategories();
  }, []);

  return (
    <div>
      <div style={{ padding: "1%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search Hospital Lab Category"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ImLab className="AddIcon1" onClick={() => setShow(true)} />
          </div>
        </div>

        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add lab test Category</Modal.Title>
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
                  Test Category
                </label>
                <input
                  placeholder="Test Category"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => settestCategory(e.target.value)}
                ></input>
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
                  Test Category Image
                </label>
                <input
                  placeholder="Test Category"
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
                  onChange={(e) => settestCategoryImg(e.target.files[0])}
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
                onClick={() => setShow(false)}
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
                  AddHospitalLabCategory();
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Delete Hospital Lab Test Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ color: "white" }}>
              Are You sure? You want to <b style={{ color: "red" }}>delete</b>{" "}
              the category
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
                onClick={deleteHospitallabCategory}
              >
                Delete
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show4} onHide={handleClose4}>
          <Modal.Header>
            <Modal.Title>Edit lab test</Modal.Title>
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
                  Test Category
                </label>
                <input
                  placeholder={View?.testCategory}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => settestCategory(e.target.value)}
                ></input>
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
                  Test Category Image:{" "}
                  <Link
                    to={`http://localhost:8521/HospitalLabTest/${View?.testCategoryImg}`}
                    target="blank_"
                    style={{ color: "white", textDecoration: "underline" }}
                  >
                    Category Image
                  </Link>
                </label>
                <input
                  placeholder="Test Category"
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
                  onChange={(e) => settestCategoryImg(e.target.files[0])}
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
                  fontWeight: "600",
                  marginRight: "20px",
                  border: "1px solid white",
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
                  border: "1px solid white",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={UpdateHospitalLabCategory}
              >
                Update
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.no.</th>
              <th>Test Category</th>
              <th>Image</th>

              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {FilteredCatList?.map((val, index) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>{index + 1}</td>
                  <td>{val?.testCategory}</td>
                  <td>
                    <img
                      src={`http://localhost:8521/HospitalLabTest/${val?.testCategoryImg}`}
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
