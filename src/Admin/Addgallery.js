import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";

export default function Addgallery() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Add data
  const [GalleryTitle, setGalleryTitle] = useState("");
  const [GalleryImg, setGalleryImg] = useState("");
  const formdata = new FormData();
  const AddGallery = async () => {
    formdata.append("GalleryTitle", GalleryTitle);
    formdata.append("GalleryImg", GalleryImg);
    try {
      const config = {
        url: "/addGallery",
        baseURL: "http://localhost:8521/api/admin",
        method: "post",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };
      axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          handleClose();
          GetGallery();
        }
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  // Get Data
  const [GalleryDetails, setGalleryDetails] = useState([]);
  const GetGallery = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/getGallery");
      if (res.status === 200) {
        setGalleryDetails(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Data
  const DeleteGallery = async (id) => {
    try {
      const config = {
        url: "admin/deleteGallery/" + id,
        baseURL: "http://localhost:8521/api",
        method: "DELETE",
        headers: { "content-type": "application-json" },
      };
      await axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          GetGallery();
        }
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    GetGallery();
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
            Gallery
          </h6>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
          </div>
        </div>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.No</th>
              <th>Gallery Title</th>
              <th>Gallery Image</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {GalleryDetails?.map((item, i) => {
              return (
                <>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{i + 1}</td>
                    <td>{item?.GalleryTitle}</td>
                    <td>
                      <img
                        src={`http://localhost:8521/Gallery/${item?.GalleryImg}`}
                        alt="Image"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </td>
                    <td>
                      <div>
                        <AiFillDelete
                          onClick={() => DeleteGallery(item?._id)}
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
          <Modal.Title>Add Gallery </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <input
                placeholder="Gallery Title"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setGalleryTitle(e.target.value)}
              ></input>
            </div>

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
                onChange={(e)=> setGalleryImg(e.target.files[0])}
              ></input>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button variant="warning" onClick={AddGallery}>
              Add Gallery
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
