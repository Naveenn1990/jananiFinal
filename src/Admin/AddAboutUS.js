import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";

export default function AddAboutUS() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [AboutImg, setAboutImg] = useState("");
  const [AboutDescription, setAboutDescription] = useState("");
  // Post
  const AddAboutUS = async () => {
    try {
      const config = {
        url: "/admin/addAboutUs",
        baseURL: "http://localhost:8521/api",
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        data: {
          AboutImg: AboutImg,
          AboutDescription: AboutDescription,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose();
        GetAboutUs();
        setAboutDescription("");
        setAboutImg("");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  // get
  const [GetAboutData, setGetAboutData] = useState([]);
  const GetAboutUs = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/getAboutUs");
      if (res.status === 200) {
        setGetAboutData(res.data.success);
      } else {
        setGetAboutData([]);
      }
    } catch (error) {
      console.log(error);
      setGetAboutData([]);
    }
  };

  // delete
  const DeleteAboutUs = async (id) => {
    try {
      const config = {
        url: "/admin/deleteAboutUs/" + id,
        baseURL: "http://localhost:8521/api",
        method: "delete",
        headers: { "Content-Type": "application/json" },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        GetAboutUs();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  // Limit words
  const [remainingWords, setRemainingWords] = useState(141); // Initial word limit

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    // Counting words in the content
    const wordCount = data.trim().split(/\s+/).length;

    // Dynamically calculate remaining words
    const remaining = 141 - wordCount;

    if (remaining < 0) {
      setRemainingWords(0);
    } else {
      setAboutDescription(data);
      setRemainingWords(remaining);
    }
  };

  // useEffect to update the remaining words when aboutDescription changes
  useEffect(() => {
    const wordCount = AboutDescription.trim().split(/\s+/).length;
    const remaining = 141 - wordCount;
    // setRemainingWords(remaining >= 0 ? remaining : 0);
  }, [AboutDescription]);

  useEffect(() => {
    GetAboutUs();
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
          <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            AboutUs
          </h6>

          {GetAboutData?.length < 1 ? (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <AiOutlinePlusCircle
                className="AddIcon1"
                onClick={() => setShow(true)}
              />
            </div>
          ) : (
            <></>
          )}
        </div>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.No</th>
              <th>AboutUs Image</th>
              <th>AboutUs Description</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {GetAboutData?.map((item, i) => {
              return (
                <>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        src={`http://localhost:8521/AboutUs/${item?.AboutImg}`}
                        style={{ width: "200px", height: "200px" }}
                      />
                    </td>
                    <td>{parse(`<div>${item?.AboutDescription}</div>`)}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <AiFillDelete
                          onClick={() => DeleteAboutUs(item?._id)}
                          style={{ color: "red" }}
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
        <Modal.Header>
          <Modal.Title>Add AboutUs </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12 mb-4" htmlFor="upload">
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
                onChange={(e) => setAboutImg(e.target.files[0])}
              ></input>
            </div>
            <div className="col-lg-12">
              <CKEditor editor={ClassicEditor} onChange={handleEditorChange} />
            </div>
            <p>
              Remaining Words: {remainingWords - 1 < 0 ? 0 : remainingWords - 1}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            {remainingWords <= 0 ? (
              <></>
            ) : (
              <Button variant="warning" onClick={AddAboutUS}>
                Add AboutUs
              </Button>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
