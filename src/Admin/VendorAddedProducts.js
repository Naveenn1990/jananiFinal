import {
    faAngleLeft,
    faAngleRight,
    faCancel,
    faCheck,
    faDownload,
    faEllipsis,
    faEye,
    faFilter,
    faHouseUser,
    faPenToSquare,
    faPlus,
    faTrash,
    faUpload,
    faSearchPlus
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  
  import {
    Button,
    Container,
    Dropdown,
    FloatingLabel,
    Form,
    FormLabel,
    Modal,
    Table,
    ProgressBar,
  } from "react-bootstrap";
  import { TfiRuler } from "react-icons/tfi";
  import { useNavigate,Link } from "react-router-dom";

  import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info'; //information icon in description 
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const VendorAddedProducts = () => {


  // the function handling increment decrement
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
      setValue(value + 1);
    };
  
    const handleDecrement = () => {
      if (value > 0) {
        setValue(value - 1);
      }
    }
// the function handling increment an decrement
    
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const ReadMoreClose = () => setShow(true);
    const handleClose = () => setShow(false);
    // const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
  
    const viewClose = () => setShow(false);
    const viewShow = () => setShow(true);
  
    // const handleClose = () => setShow1(false);
    // const handleShow = () => setShow1(true);
  
    const deleteBtnClose = () => setShow2(false);
    const deleteBtnShow = () => setShow2(true);
  
    const [ProductList, setProductList] = useState([]);
  
    const getProductList = () => {
      axios
        .get("http://localhost:8521/api/vendor/productList")
        .then(function (response) {
          // handle success
          setProductList(response.data.allProducts);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
  
    useEffect(() => {
      getProductList();
    }, []);

    const StyledBadge = withStyles((theme) => ({
        badge: {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }))(Badge);

// date filter 
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    // Adding 1 to month because getMonth() returns zero-based month (0 = January)
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
// date filter
  return (
    <div className="Vatsal">
         <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mb-4">
        Add Products
      </h4>

      <Container>
        <div className="row mb-3">
         
{/* Yello dropdown below */}
            {/* <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                <FontAwesomeIcon icon={faUpload} /> Export
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Export CSV</Dropdown.Item>
                <Dropdown.Item href="#">Export JSON</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
{/* Yellow dropdown above */}

{/* red drop down below */}
            {/* <p>
              <Button variant="danger" size="md" active>
                <FontAwesomeIcon icon={faDownload} /> Import
              </Button>
            </p> */}
{/* red dropdown above */}

         

          <div className="col-lg-8  d-flex gap-2">
            <Form className="">
              <Form.Control
                style={{ width: "400px" }}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-primary">Search</Button> */}
            </Form>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FontAwesomeIcon icon={faFilter} /> Filtered By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Tablet</Dropdown.Item>
                <Dropdown.Item href="#">Syrup</Dropdown.Item>
                <Dropdown.Item href="#">Other Drugs</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button
              className="all-bg-green"
             
            >
              Search Product
            </Button>

            <div className="cart-badge holder col-lg-8 d-flex gap-2  justify-content-end px-2">
 {/* card badge  */}
<Link to="../admin/VendorAddedProductCart">
<IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">  {/* number of items added in the card is shown here  */}
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
</Link>
    {/* cart badge */}
        </div>
          </div>
    

        </div>
       
        <Table className="table " responsive style={{ width: "1500px" }} bordered>
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold" style={{width:"15%"}}>productName</th>

              {/* <th className="fw-bold">currencyFormat</th> */}
              {/* <th className="fw-bold">productType</th> */}
              <th className="fw-bold" style={{width:"5%"}}>manufacturingDate</th>
              <th className="fw-bold" style={{width:"5%"}}>expiryDate</th>
              <th className="fw-bold" style={{width:"5%"}}>productPrice</th>
              <th className="fw-bold" style={{width:"8%"}}>Quantity </th>
              <th className="fw-bold" style={{width:"8%"}}>Discount </th>
              <th className="fw-bold" style={{width:"8%"}}>Admin Price </th>
              <th className="fw-bold" style={{width:"8%"}}>Quantity </th>
              <th className="fw-bold" style={{width:"8%"}}>Admin Final Price </th>
             
              <th className="fw-bold" style={{width:"20%"}}>Add To Cart </th>
              {/* <th className="fw-bold">productSize </th> */}
              {/* <th className="fw-bold">packSize </th>
              <th className="fw-bold">colour </th>
              <th className="fw-bold">flavour </th>
              <th className="fw-bold">fragrance </th>
              <th className="fw-bold">variant </th> */}
              <th className="fw-bold">description </th>
              {/* <th className="fw-bold">brand </th>
              <th className="fw-bold">countryOfOrigin </th>
              <th className="fw-bold">manufacturercompanyname </th>
              <th className="fw-bold">manufactureraddress </th>
              <th className="fw-bold">stock </th> */}
            </tr>
          </thead>

          <tbody>
            {ProductList?.map((item) => {
              return (
                <tr className="admin-table-row">
                  <td>{item?.productName}</td>
              
                  <td>{formatDate(item?.manufacturingDate)}</td>
                 <td>{formatDate(item?.expiryDate)}</td>

{/* vendro price  */}
<td>{item?.productPrice}</td>
{/* vendor price ends        */}


{/* vendro quantity  */}

<td>Price</td>
<td><div className="p-2"  >4%</div></td>
{/* vendor quantity ends        */}

{/* admin price  */}
<td>
   <td className="d-flex  p-2 m-2">
      {/* <RemoveIcon onClick={handleDecrement} /> */}
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <input type="num" placeholder="Enter Your Price"  style={{width:"",textAlign:"center" }} />
      </Form.Group>
      {/* <AddIcon onClick={handleIncrement} /> */}
    </td>
</td>
{/* admin price ends      */}

{/* admin quantity  */}
<td>
   <td className="d-flex rounded-pill border border-dark p-2 m-2">
      <RemoveIcon onClick={handleDecrement} />
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <input type="text" placeholder="Price" value={value} style={{width:"30px",textAlign:"center" }} onChange={(e)=>setValue(e.target.value)} />
      </Form.Group>
      <AddIcon onClick={handleIncrement} />
    </td>
</td>
{/* admin quantity ends        */}


        <td>3000</td>
       <td><div className="p-2" > <Button variant="success">Add to Cart</Button></div></td>
       <td><div className="p-2" onClick={ReadMoreClose} ><InfoIcon/></div></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>

{/* INfo icon modal */}
<Modal size="lg" show={show} onHide={ReadMoreClose}>
        <Modal.Header className="all-bg-green text-light">
          <Modal.Title>Patient Profile</Modal.Title>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body className="all-bg-green ">
          <div className="row" style={{ color: "white" }}>
            <div className="col-lg-4">
              <img src="./img/department-img-1.jpg" style={{ width: "100%" }} />
              <div style={{ border: "1px solid lightgrey" }}>
                <h6
                  style={{
                    textAlign: "center",
                    padding: "4% 0%",
                    backgroundColor: "lightblue",
                  }}
                >
                  ABOUT PATIENT
                </h6>

                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>NAME</b> : John
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>EmailID</b> : John@gmail.com
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Mobile</b> : 9563256325
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Occupation</b> : Engineer
                </h6>
              </div>
            </div>
            <div className="col-lg-8">
              <div style={{ border: "1px solid lightgrey", padding: "2%" }}>
                <span style={{ fontSize: "14px", textAlign: "justify" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </span>
                <hr></hr>
                <h6>General Report</h6>
                <hr></hr>
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Heart Beat
                </span>
                <ProgressBar
                  variant="success"
                  style={{ height: "6px" }}
                  now={40}
                />

                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Blood Pressure
                </span>
                <ProgressBar
                  variant="info"
                  style={{ height: "6px" }}
                  now={60}
                />

                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Sugar
                </span>
                <ProgressBar
                  variant="warning"
                  style={{ height: "6px" }}
                  now={60}
                />

                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  Haemoglobin
                </span>
                <ProgressBar
                  variant="danger"
                  style={{ height: "6px" }}
                  now={60}
                />
              </div>
            </div>
          </div>

        
        </Modal.Body>
        {/* <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
              }}
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
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
                alert("Doctor Added");
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer> */}

        
      </Modal>
{/* info icon modal */}

      {/* VIEW MODAL */}


      {/* Delete Modal */}

     
    </div>
    </div>
  )
}

export default VendorAddedProducts


