import {
  faCancel,
  //   faEllipsis,
  //   faPenToSquare,
  faPlus,
  //   faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  Button,
  Container,
  FloatingLabel,
  FormLabel,
  Form,
  Table,
  //   Dropdown,
} from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
// import { CkEditorComponent } from "../CkEditor/CkEditorComponent";
import axios from "axios";
import moment from "moment";
import Select from "react-select";

export const DoctorsCaseStudy = () => {
  const CaseStudy = sessionStorage.getItem("CaseStudy");
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  console.log(CaseStudy, "shghsg");
  // const top100Films = [
  //   { label: "The Shawshank Redemption", year: 1994 },
  //   { label: "The Godfather", year: 1972 },
  //   { label: "The Godfather: Part II", year: 1974 },
  //   { label: "The Dark Knight", year: 2008 },
  //   { label: "12 Angry Men", year: 1957 },
  //   { label: "Schindler's List", year: 1993 },
  //   { label: "Pulp Fiction", year: 1994 },
  //   {
  //     label: "The Lord of the Rings: The Return of the King",
  //     year: 2003,
  //   },
  //   { label: "The Good, the Bad and the Ugly", year: 1966 },
  //   { label: "Fight Club", year: 1999 },
  //   {
  //     label: "The Lord of the Rings: The Fellowship of the Ring",
  //     year: 2001,
  //   },
  //   {
  //     label: "Star Wars: Episode V - The Empire Strikes Back",
  //     year: 1980,
  //   },
  //   { label: "Forrest Gump", year: 1994 },
  //   { label: "Inception", year: 2010 },
  //   {
  //     label: "The Lord of the Rings: The Two Towers",
  //     year: 2002,
  //   },
  //   { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  //   { label: "Goodfellas", year: 1990 },
  //   { label: "The Matrix", year: 1999 },
  //   { label: "Seven Samurai", year: 1954 },
  //   {
  //     label: "Star Wars: Episode IV - A New Hope",
  //     year: 1977,
  //   },
  //   { label: "City of God", year: 2002 },
  //   { label: "Se7en", year: 1995 },
  //   { label: "The Silence of the Lambs", year: 1991 },
  //   { label: "It's a Wonderful Life", year: 1946 },
  //   { label: "Life Is Beautiful", year: 1997 },
  //   { label: "The Usual Suspects", year: 1995 },
  //   { label: "Léon: The Professional", year: 1994 },
  //   { label: "Spirited Away", year: 2001 },
  //   { label: "Saving Private Ryan", year: 1998 },
  //   { label: "Once Upon a Time in the West", year: 1968 },
  //   { label: "American History X", year: 1998 },
  //   { label: "Interstellar", year: 2014 },
  //   { label: "Casablanca", year: 1942 },
  //   { label: "City Lights", year: 1931 },
  //   { label: "Psycho", year: 1960 },
  //   { label: "The Green Mile", year: 1999 },
  //   { label: "The Intouchables", year: 2011 },
  //   { label: "Modern Times", year: 1936 },
  //   { label: "Raiders of the Lost Ark", year: 1981 },
  //   { label: "Rear Window", year: 1954 },
  //   { label: "The Pianist", year: 2002 },
  //   { label: "The Departed", year: 2006 },
  //   { label: "Terminator 2: Judgment Day", year: 1991 },
  //   { label: "Back to the Future", year: 1985 },
  //   { label: "Whiplash", year: 2014 },
  //   { label: "Gladiator", year: 2000 },
  //   { label: "Memento", year: 2000 },
  //   { label: "The Prestige", year: 2006 },
  //   { label: "The Lion King", year: 1994 },
  //   { label: "Apocalypse Now", year: 1979 },
  //   { label: "Alien", year: 1979 },
  //   { label: "Sunset Boulevard", year: 1950 },
  //   {
  //     label:
  //       "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
  //     year: 1964,
  //   },
  //   { label: "The Great Dictator", year: 1940 },
  //   { label: "Cinema Paradiso", year: 1988 },
  //   { label: "The Lives of Others", year: 2006 },
  //   { label: "Grave of the Fireflies", year: 1988 },
  //   { label: "Paths of Glory", year: 1957 },
  //   { label: "Django Unchained", year: 2012 },
  //   { label: "The Shining", year: 1980 },
  //   { label: "WALL·E", year: 2008 },
  //   { label: "American Beauty", year: 1999 },
  //   { label: "The Dark Knight Rises", year: 2012 },
  //   { label: "Princess Mononoke", year: 1997 },
  //   { label: "Aliens", year: 1986 },
  //   { label: "Oldboy", year: 2003 },
  //   { label: "Once Upon a Time in America", year: 1984 },
  //   { label: "Witness for the Prosecution", year: 1957 },
  //   { label: "Das Boot", year: 1981 },
  //   { label: "Citizen Kane", year: 1941 },
  //   { label: "North by Northwest", year: 1959 },
  //   { label: "Vertigo", year: 1958 },
  //   {
  //     label: "Star Wars: Episode VI - Return of the Jedi",
  //     year: 1983,
  //   },
  //   { label: "Reservoir Dogs", year: 1992 },
  //   { label: "Braveheart", year: 1995 },
  //   { label: "M", year: 1931 },
  //   { label: "Requiem for a Dream", year: 2000 },
  //   { label: "Amélie", year: 2001 },
  //   { label: "A Clockwork Orange", year: 1971 },
  //   { label: "Like Stars on Earth", year: 2007 },
  //   { label: "Taxi Driver", year: 1976 },
  //   { label: "Lawrence of Arabia", year: 1962 },
  //   { label: "Double Indemnity", year: 1944 },
  //   {
  //     label: "Eternal Sunshine of the Spotless Mind",
  //     year: 2004,
  //   },
  //   { label: "Amadeus", year: 1984 },
  //   { label: "To Kill a Mockingbird", year: 1962 },
  //   { label: "Toy Story 3", year: 2010 },
  //   { label: "Logan", year: 2017 },
  //   { label: "Full Metal Jacket", year: 1987 },
  //   { label: "Dangal", year: 2016 },
  //   { label: "The Sting", year: 1973 },
  //   { label: "2001: A Space Odyssey", year: 1968 },
  //   { label: "Singin' in the Rain", year: 1952 },
  //   { label: "Toy Story", year: 1995 },
  //   { label: "Bicycle Thieves", year: 1948 },
  //   { label: "The Kid", year: 1921 },
  //   { label: "Inglourious Basterds", year: 2009 },
  //   { label: "Snatch", year: 2000 },
  //   { label: "3 Idiots", year: 2009 },
  //   { label: "Monty Python and the Holy Grail", year: 1975 },
  // ];
  const [AppointmentList, setAppointmentList] = useState({});

  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        // handle success
        const data = response.data.Info.filter(
          (item) => item?._id == CaseStudy
        );
        setAppointmentList(data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const [ProductList, setProductList] = useState([]);
  const [updatedProductList, setupdatedProductList] = useState([]);
  const getAllProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/inventoryList"
      );
      if (res.status === 200) {
        setProductList(res.data.inventoryList);
        const newArr = [
          ...res.data.inventoryList
            ?.filter((item) => item?.stock > 1)
            ?.map((val) => {
              return { ...val, label: val.productName };
            }),
        ];
        setupdatedProductList(newArr);
      }
    } catch (error) {
      console.log(error);
      setProductList(error.response.data.inventoryList);
    }
  };

  console.log("ProductList88888", updatedProductList);

  useEffect(() => {
    getAllProducts();
    getAppointmentList();
  }, []);

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteBtnClose = () => setShow1(false);
  const deleteBtnShow = () => setShow1(true);

  const [medicineName, setmedicineName] = useState("");
  const [genericName, setgenericName] = useState("");
  const [medicineType, setmedicineType] = useState("");
  const [dosage, setdosage] = useState("");
  const [morningDose, setmorningDose] = useState("");
  const [noonDose, setnoonDose] = useState();
  const [eveDose, seteveDose] = useState();
  const [nightDose, setnightDose] = useState();
  const [medicineTakefrquency, setmedicineTakefrquency] = useState();
  const [medicineTakingTime, setmedicineTakingTime] = useState();
  const [duration, setduration] = useState();
  const [days, setdays] = useState();
  const [result, setresult] = useState();
  const [Quantity, setQuantity] = useState(1);
  const [advise, setadvise] = useState();

  console.log(
    medicineName,
    "medicineName",
    genericName,
    "genericName",
    medicineType,
    "medicineType",
    dosage,
    "dosage",
    morningDose,
    "morningDose",
    noonDose,
    "noonDose,",
    eveDose,
    "eveDose",
    nightDose,
    "nightDose",
    medicineTakefrquency,
    "medicineTakefrquency",
    medicineTakingTime,
    "medicineTakingTime",
    duration,
    "duration",
    days,
    "days",
    result,
    "result"
  );

  const [DocselectedMedicine, setDocSelectedMedicine] = useState(null);

  const handleDocMedicineChange = (event, value) => {
    setDocSelectedMedicine(value);
    // Do something with the selected medicine value
  };

  console.log("hihahihahiha: ", DocselectedMedicine);
  const Addmedicine = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/user/addMedicineInfo/" + AppointmentList?._id,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: {
          medicineName: medicineName,
          genericName: genericName,
          medicineType: medicineType,
          dosage: dosage,
          morningDose: morningDose,
          noonDose: noonDose,
          eveDose: eveDose,
          nightDose: nightDose,
          medicineTakefrquency: medicineTakefrquency,
          medicineTakingTime: medicineTakingTime,
          duration: duration,
          days: days,
          result: result,
          Quantity: Quantity,
          totalAmtToPay: Number(
            (
              DocselectedMedicine?.productPrice -
              DocselectedMedicine?.productPrice *
                (DocselectedMedicine?.discount / 100)
            ).toFixed(2)
          ),
          advise: advise,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data.success);
        getAppointmentList();
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [investigationName, setinvestigationName] = useState();
  const [investigationDescription, setinvestigationDescription] = useState();
  const [investigationIncludeInReport, setinvestigationIncludeInReport] =
    useState("");

  const [notes, setnotes] = useState();

  const AddInvestigation = async (e) => {
    e.preventDefault();
    const obj = {
      investigationName: investigationName,
      investigationDescription: investigationDescription,
      investigationIncludeInReport: investigationIncludeInReport,
      notes: notes,
    };
    try {
      const config = {
        url: "/user/addInvestigationInfo/" + AppointmentList?._id,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: obj,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getAppointmentList();
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [height, setheight] = useState();
  const [Weight, setWeight] = useState();
  const [bmi, setbmi] = useState();
  const [temperature, settemperature] = useState();
  const [Pulserate, setPulserate] = useState();
  const [Bpressure, setBpressure] = useState();
  const [spo2, setspo2] = useState();
  const [sugar, setsugar] = useState();
  const [HeadCircumference, setHeadCircumference] = useState();

  const [Respiratorysystem, setRespiratorysystem] = useState();
  const [Cardiovascularsystem, setCardiovascularsystem] = useState();
  const [Centralnervoussystem, setCentralnervoussystem] = useState();
  const [Gastrointestinalsystem, setGastrointestinalsystem] = useState();

  const [generalexamination, setgeneralexamination] = useState();
  const [localexamination, setlocalexamination] = useState();

  const AddExamination = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/user/addExaminationInfo/" + AppointmentList?._id,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: {
          height: height,
          weight: Weight,
          bmi: bmi,
          temperature: temperature,
          pulserate: Pulserate,
          bp: Bpressure,
          spo2: spo2,
          suger: sugar,
          headcircumference: HeadCircumference,
          rs: Respiratorysystem,
          cvs: Cardiovascularsystem,
          cns: Centralnervoussystem,
          pa: Gastrointestinalsystem,
          generalexamination: generalexamination,
          localexamination: localexamination,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getAppointmentList();
        alert("Casestudy Updated");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <div>
      <Container className="p-4">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav
            variant="pills"
            className="d-flex justify-content-evenly"
            style={{ backgroundColor: "#9ecbc2" }}
          >
            <Nav.Item>
              <Nav.Link
                eventKey="first"
                className="fw-bold"
                style={{
                  border: "1px solid #208b8c",
                  color: "#208b8c",
                  padding: "15px",
                }}
              >
                Details
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="second"
                className="fw-bold"
                style={{
                  border: "1px solid #208b8c",
                  color: "#208b8c",
                  padding: "15px",
                }}
              >
                Prescription
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                eventKey="third"
                className="fw-bold"
                style={{
                  border: "1px solid #208b8c",
                  color: "#208b8c",
                  padding: "15px",
                }}
              >
                Investigation
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                eventKey="four"
                className="fw-bold"
                style={{
                  border: "1px solid #208b8c",
                  color: "#208b8c",
                  padding: "15px",
                }}
              >
                Examination
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <hr />

          <Tab.Content>
            <Tab.Pane eventKey="first" className="p-2">
              <h4 className="fw-bold text-dark p-2">Patient Details</h4>

              <div
                className="row justify-content-evenly mb-4"
                style={{ border: "1px solid black", padding: "5px" }}
              >
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Name</span> :{" "}
                  {AppointmentList?.Firstname}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">ID</span> :{" "}
                  {AppointmentList?.PatientId?.slice(0, 10)}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Age</span> :
                  {moment().diff(AppointmentList?.DOB, "years", false)}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Gender</span> :{" "}
                  {AppointmentList?.Gender}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Mobile</span> :{" "}
                  {AppointmentList?.PhoneNumber}
                </p>
              </div>

              <div className="row justify-content-evenly">
                {/* TABLE PATIENT INFORMATION */}

                <table
                  className="table table-bordered col-lg-6 "
                  style={{ width: "500px" }}
                >
                  <thead className="table-secondary">
                    <tr>
                      <th style={{ color: "#208b8c", fontWeight: "bold" }}>
                        Patient Information
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold text-dark">Patient Status : </td>
                      <td className="text-success fw-bold">Active</td>
                    </tr>

                    {/* <tr>

                <td className='fw-bold text-dark'>ABHA</td>
                <td>Verify ABHA</td>

            </tr> */}

                    <tr>
                      <td className="fw-bold text-dark">Family ID :</td>
                      <td>1</td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Reg Date :</td>
                      <td>03/08/2023 12:33 PM</td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Mebmber Ship :</td>
                      <td className="text-danger fw-bold">No Member Ship</td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Group Tag :</td>
                      <td>#ahg424</td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Address :</td>
                      <td>
                        Singapoor Layout <br />
                        Banglore
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* TABLE MEDICAL HISTOR */}
                <table
                  className="table table-bordered col-lg-6"
                  style={{ width: "400px" }}
                >
                  <thead className="table-secondary">
                    <tr>
                      <th style={{ color: "#208b8c", fontWeight: "bold" }}>
                        Medical History
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold text-dark">Medical : </td>
                      <td>Tb</td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Family :</td>
                      <td>Fever</td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Drug :</td>
                      <td>Dolo 650</td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Social :</td>
                      <td>Tobbacco Chewing</td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Allergies :</td>
                      <td>--</td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Surgical :</td>
                      <td>--</td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Address :</td>
                      <td>
                        Singapoor Layout <br />
                        Banglore
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tab.Pane>

            {/* SECOND TAB */}

            <Tab.Pane eventKey="second" className="p-2">
              <div
                className="row justify-content-evenly mb-4"
                style={{ border: "1px solid black", padding: "5px" }}
              >
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Name</span> :{" "}
                  {AppointmentList?.Firstname}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">ID</span> :{" "}
                  {AppointmentList?.PatientId?.slice(0, 10)}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Age</span> :
                  {moment().diff(AppointmentList?.DOB, "years", false)}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Gender</span> :{" "}
                  {AppointmentList?.Gender}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Mobile</span> :{" "}
                  {AppointmentList?.PhoneNumber}
                </p>
              </div>

              {/* <table className="table table-bordered" style={{ width: '' }}>
                <thead className='table-secondary'>
                    <tr>
                        <th className='fw-bold' style={{ width: '130px', color: '#208b8c' }} >Prescription Date</th>
                        <th className='fw-bold ' style={{ width: '420px', color: '#208b8c' }}>Prescription</th>
                        <th className='fw-bold' style={{ width: '100px', color: '#208b8c' }}>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>

                        <td>03/08/2023 12:34 PM</td>

                        <td>
                            <div class="input-group mb-3">
                                <span class="input-group-text">1.</span>
                                <input type="text" class="form-control" placeholder='DOLO 650' aria-label="Amount (to the nearest dollar)" />
                              
                                <span class="input-group-text">1 x 0 x 1 / 2 Days</span>
                            </div>
                        </td>
                        <td><Button className='all-bg-green'>Add</Button></td>

                    </tr>

                    <tr>

                        <td>06/08/2023 01:24 PM</td>

                        <td>
                            <div class="input-group mb-3">
                                <span class="input-group-text">1.</span>
                                <input type="text" class="form-control" placeholder='KHASI KI DAWAI ' aria-label="Amount (to the nearest dollar)" />
                                <span class="input-group-text">1 x 1 x 1 / 3 Days</span>
                            </div>
                        </td>

                        <td><Button className='all-bg-green'>Add</Button></td>

                    </tr>
                </tbody>
            </table> */}

              <h4 className="fw-bold text-dark">Medicine Information</h4>
              <hr />
              <div className="row">
                <div className="col-lg-4 ">
                  <InputGroup className="mb-3">
                    {/* <Select
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={ProductList[0]}
                      isDisabled={isDisabled}
                      isLoading={isLoading}
                      isClearable={isClearable}
                      isRtl={isRtl}
                      isSearchable={isSearchable}
                      name="color"
                      options={ProductList}
                      // onChange={(e) => setmedicineName(e.target.value)}
                    /> */}
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={updatedProductList}
                      sx={{ width: 300 }}
                      value={DocselectedMedicine}
                      onChange={handleDocMedicineChange}
                      renderInput={(params) => (
                        <TextField {...params} label="Medicines" />
                      )}
                    />
                    {/* <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => setmedicineName(e.target.value)}
                    >
                      <option>Open this select menu</option>
                      {ProductList?.filter((val) => val?.stock > 1)?.map(
                        (item) => {
                          return (
                            <option value={item?.productName}>
                              {item?.productName}
                            </option>
                          );
                        }
                      )}
                    </Form.Select> */}
                    {/* <Form.Control
                      placeholder="Medicine Name"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setmedicineName(e.target.value)}
                    /> */}
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Genric Name"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setgenericName(e.target.value)}
                    />
                  </InputGroup>

                  <Form.Select
                    aria-label="Default select example"
                    className="mb-3"
                    onChange={(e) => setmedicineType(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Capsule">Capsule</option>
                    <option value="Cream">Cream</option>
                    <option value="Drops">Drops</option>
                    <option value="Gel">Gel</option>
                    <option value="Inhaler">Inhaler</option>
                    <option value="Injection">Injection</option>
                    <option value="Lotion">Lotion</option>
                    <option value="MotherTincture">Mother Tincture</option>
                    <option value="Mouthwash">Mouthwash</option>
                    <option value="Oil">Oil</option>
                    <option value="Ointment">Ointment</option>
                    <option value="Pills">Pills</option>
                    <option value="Powder">Powder</option>
                    <option value="Shampoo">Shampoo</option>
                    <option value="Spray">Spray</option>
                    <option value="Suspension">Suspension</option>
                    <option value="Syringe">Syringe</option>
                    <option value="Syrup">Syrup</option>
                    <option value="Toothpaste">Toothpaste</option>
                  </Form.Select>

                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Dosage"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setdosage(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-4">
                  <td width="24%">
                    <table className="table table-striped table-bordered table-condensed">
                      <tbody>
                        <tr>
                          <td>Morn</td>
                          <td>Noon</td>
                          <td>Eve</td>
                          <td>Night</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              id="morning"
                              name="morning"
                              className="input-md form-control "
                              onChange={(e) => setmorningDose(e.target.value)}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              id="afternoon"
                              name="afternoon"
                              className="input-md form-control "
                              onChange={(e) => setnoonDose(e.target.value)}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              id="evening"
                              name="evening"
                              className="input-md form-control "
                              onChange={(e) => seteveDose(e.target.value)}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              id="night"
                              name="night"
                              className="input-md form-control "
                              onChange={(e) => setnightDose(e.target.value)}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td colspan="4" align="center">
                            <strong>(or)</strong>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="4">
                            <select
                              className="input-md form-control"
                              onChange={(e) =>
                                setmedicineTakefrquency(e.target.value)
                              }
                            >
                              <option>Select</option>
                              <option value="OO">Only Once</option>
                              <option value="OA">Only Afternoon</option>
                              <option value="1x">QD (Once a day)</option>
                              <option value="2x">BID (Twice a day)</option>
                              <option value="3x">
                                TID (Three times a day)
                              </option>
                              <option value="4x">QID (Four times a day)</option>
                              <option value="5x">FID (Five times a day)</option>
                              <option value="6x">Six times a day</option>
                              <option value="7x">Seven times a day</option>
                              <option value="8x">Eight times a day</option>
                              <option value="9x">Nine times a day</option>
                              <option value="10x">Ten times a day</option>
                              <option value="11x">Eleven times a day</option>
                              <option value="12x">Twelve times a day</option>
                              <option value="13x">Thirteen times a day</option>
                              <option value="14x">Fourteen times a day</option>
                              <option value="15x">Fifteen times a day</option>
                              <option value="Q4H">Q4H (Every 4 hours)</option>
                              <option value="Q6H">Q6H (Every 6 hours)</option>
                              <option value="Q2H">Q2H (Every 2 hours)</option>
                              <option value="QOD">
                                QOD (Every other hour)
                              </option>
                              <option value="QH">QH (Every hour)</option>
                              <option value="QAM">QAM (Every morning)</option>
                              <option value="QN">QN (Every night)</option>
                              <option value="QWK">QWK (Every week)</option>
                              <option value="QWK2">
                                QWK2 (Every two weeks)
                              </option>
                              <option value="BIS in 7d">
                                BIS in 7d (Twice a week)
                              </option>
                              <option value="TIW">
                                TIW (Three times a week)
                              </option>
                              <option value="OM">OM (Once in a month)</option>
                              <option value="SOS">SOS (If Necessary)</option>
                              <option value="Frequently">Frequently</option>
                              <option value="Dieb. Alt.">
                                Dieb. Alt. (Alternate Days)
                              </option>
                              <option value="STAT">STAT</option>
                            </select>
                          </td>
                        </tr>

                        <tr className="text-dark">
                          <td colspan="4">
                            <input
                              type="radio"
                              id="beforefood"
                              name="beforeorafterfood"
                              value="Before Food"
                              onChange={(e) =>
                                setmedicineTakingTime(e.target.value)
                              }
                            />
                            Before Food
                            <input
                              type="radio"
                              id="afterfood"
                              name="beforeorafterfood"
                              value="After Food"
                              onChange={(e) =>
                                setmedicineTakingTime(e.target.value)
                              }
                            />
                            After Food
                            <br />
                            <input
                              type="radio"
                              id="withoutfood"
                              name="beforeorafterfood"
                              value="With Food"
                              onChange={(e) =>
                                setmedicineTakingTime(e.target.value)
                              }
                            />
                            With Food
                            <input
                              type="radio"
                              id="nafood"
                              name="beforeorafterfood"
                              value="N/A"
                              onChange={(e) =>
                                setmedicineTakingTime(e.target.value)
                              }
                            />
                            N/A
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </div>
                <div className="col-lg-4">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Duration"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setduration(e.target.value)}
                    />
                  </InputGroup>

                  <Form.Select
                    aria-label="Default select example"
                    className="mb-3"
                    onChange={(e) => setdays(e.target.value)}
                  >
                    <option id="days" value="days">
                      Days
                    </option>
                    <option id="hrs" value="hours">
                      Hours
                    </option>
                    <option id="weeks" value="weeks">
                      Weeks
                    </option>
                    <option id="months" value="months">
                      Months
                    </option>
                  </Form.Select>

                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Result"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setresult(e.target.value)}
                    />
                  </InputGroup>

                  <InputGroup className="">
                    <FormLabel className="fw-bold text-dark">
                      Quantity{" "}
                    </FormLabel>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="number"
                      value={Quantity}
                      placeholder="Quantity"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </InputGroup>

                  <div className="mb-2">
                    <Button
                      className="d-flex align-items-center gap-2 all-bg-green"
                      onClick={(e) => Addmedicine(e)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                      ADD MEDICINE
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-5">
                <h5 className="fw-bold text-dark">Medicine List</h5>
                <hr />
                <table className="table table-striped">
                  <thead className="all-bg-green">
                    <tr>
                      <th className="text-light fw-bold" width="5%">
                        S. No
                      </th>
                      <th className="text-light fw-bold" width="10%">
                        Type
                      </th>
                      <th className="text-light fw-bold" width="15%">
                        Name
                      </th>
                      <th className="text-light fw-bold" width="15%">
                        Generic Name
                      </th>
                      <th className="text-light fw-bold" width="10%">
                        Dosage
                      </th>
                      <th className="text-light fw-bold" width="15%">
                        Frequency
                      </th>
                      <th className="text-light fw-bold" width="10%">
                        Duration
                      </th>
                      <th className="text-light fw-bold" width="15%">
                        Instruction
                      </th>
                      {/* <th className='text-light fw-bold' width="10%">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {AppointmentList?.medicineInfo?.map((item, index) => {
                      return (
                        <tr className="admin-table-row">
                          <td>{index + 1}</td>

                          <td className=" me-2">{item?.medicineType}</td>
                          <td>{item?.medicineName}</td>

                          <td>{item?.genericName}</td>
                          <td>{item?.dosage} </td>

                          <td>
                            {item?.morningDose}-{item?.noonDose}-{item?.eveDose}
                            -{item?.nightDose}
                          </td>

                          <td>
                            {item?.duration} {item?.days}
                          </td>

                          <td>{item?.medicineTakingTime}</td>

                          {/* <td>

            <Dropdown>
                <Dropdown.Toggle className='medicine-list' id="dropdown-basic">
                    <FontAwesomeIcon icon={faEllipsis} className='fs-3 ' />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item className='medicine-list-dropdown' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Edit Selected</Dropdown.Item>
                    <Dropdown.Item className='medicine-list-dropdown' onClick={deleteBtnShow}><FontAwesomeIcon icon={faTrash} className='me-2' />Remove Selected</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* <p className='fw-bold'>Advice :</p>
                            <div style={{ width: '800px' }}>
                                <CkEditorComponent />
                            </div>

                            <div className='row gap-3 ms-2'>
                                <Button className='col-lg-2' style={{ backgroundColor: '#008900' }}>Save</Button>
                                <Button className='col-lg-2' style={{ backgroundColor: '#208b8c' }}>Save & Bill</Button>
                                <Button className='col-lg-2' style={{ backgroundColor: '#cd0b0be3' }}>Print</Button>
                                <Button className='col-lg-2' style={{ backgroundColor: '#990399' }}>Email</Button>
                            </div> */}
            </Tab.Pane>

            {/* THIRD TAB */}
            <Tab.Pane eventKey="third">
              <h5 className="fw-bold">Choose Investigation</h5>
              <div className="row align-items-center mb-4">
                <div className="col-lg-4">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setinvestigationName(e.target.value)}
                  >
                    <option selected>Add Investigstion</option>
                    <option value="X-RAY FOREARM">X-RAY FOREARM</option>
                    <option value="X-RAY CHEST">X-RAY CHEST</option>
                    <option value="X-RAY DORSAL">X-RAY DORSAL</option>
                    <option value="X-RAY FOOT AP">X-RAY FOOT AP</option>
                    <option value="X-RAY WRIST">X-RAY WRIST</option>
                    <option value="X-RAY KUB">X-RAY KUB</option>
                    <option value="X-RAY THIGH">X-RAY THIGH</option>
                    <option value="X-RAY SKULL">X-RAY SKULL</option>
                    <option value="X-RAY ANKLE">X-RAY ANKLE</option>
                  </select>
                </div>
                <div className="col-lg-4">
                  <InputGroup size="lg">
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="Description"
                      onChange={(e) =>
                        setinvestigationDescription(e.target.value)
                      }
                    />
                  </InputGroup>
                </div>

                {/* <div className="col-lg-2">
                                    <Button className='all-bg-green'><FontAwesomeIcon icon={faPlus} /> ADD </Button>
                                </div> */}
              </div>

              <h5 className="fw-bold">
                Select Investigation (Tick the checkbox include in the report)
              </h5>

              <Form
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  width: "fit-content",
                }}
              >
                {/* {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="d-flex gap-4">
                    <label className="fw-bold"> Investigation : </label>
                    <Form.Check // prettier-ignore
                      type={type}
                      id={`default-${type}`}
                      onChange={(e) =>
                        setinvestigationIncludeInReport(
                          !investigationIncludeInReport
                        )
                      }
                    />
                  </div>
                ))} */}
                <input
                  type="file"
                  onChange={(e) => {
                    setinvestigationIncludeInReport(e.target.files[0]);
                  }}
                />
              </Form>

              <p className="fw-bold">Notes :</p>
              <div>
                {/* <CkEditorComponent /> */}
                <textarea
                  placeholder="note"
                  style={{
                    width: "600px",
                    padding: "2%",
                    borderRadius: "20px",
                  }}
                  cols={10}
                  onChange={(e) => setnotes(e.target.value)}
                />
              </div>

              <div className="row gap-3 ms-2">
                <Button
                  className="col-lg-2"
                  style={{ backgroundColor: "#008900" }}
                  onClick={(e) => AddInvestigation(e)}
                >
                  Add
                </Button>
                {/* <Button className='col-lg-2' style={{ backgroundColor: '#cd0b0be3' }}>Print</Button>
                                <Button className='col-lg-2' style={{ backgroundColor: '#990399' }}>Email</Button> */}
              </div>
              <div className="mt-5">
                <Table responsive bordered>
                  <thead>
                    <th>Investigation</th>
                    <th>Description</th>
                    <th>Report</th>
                    <th>Notes</th>
                  </thead>
                  <tbody>
                    {AppointmentList.investigationList?.map((val) => {
                      return (
                        <tr>
                          <td>{val.investigationName}</td>
                          <td>{val.investigationDescription}</td>
                          <td>
                            <a
                              href={`http://localhost:8521/Patient/${val.investigationIncludeInReport}`}
                              target="blank_"
                            >
                              View Documents
                            </a>
                          </td>
                          <td>{val.notes}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="four" className="p-2">
              <h5 className="fw-bold">Vitals</h5>

              <hr />

              <div className="row justify-content-evenly mb-3">
                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">Height(cm) :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Height"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setheight(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">Weight(kg) :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Weight"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">BMI :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="BMI"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setbmi(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </div>

              <div className="row justify-content-evenly mb-3 ">
                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">
                    Temperature :
                  </label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Temperature"
                      aria-describedby="basic-addon1"
                      onChange={(e) => settemperature(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">Pulse Rate :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Pulse Rate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setPulserate(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">
                    Blood Pressure :
                  </label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Blood Pressure"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setBpressure(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </div>

              <div className="row justify-content-evenly mb-3">
                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">
                    Spo2(% at RA) :
                  </label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Spo2(% at RA)"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setspo2(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">
                    Sugar(mg/dl) :
                  </label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Sugar"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setsugar(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">
                    Head Circumference(cm) :
                  </label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Head Circumference"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setHeadCircumference(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </div>

              <h5 className="fw-bold">Systemic Examination</h5>

              <hr />

              <div className="row justify-content-evenly mb-3">
                <div className="col-lg-4 ">
                  <label className="fw-bold text-dark mb-1">RS :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Respiratory system"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setRespiratorysystem(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-4 ">
                  <label className="fw-bold text-dark mb-1">CVS :</label>

                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Cardiovascular system"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setCardiovascularsystem(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </div>

              <div className="row justify-content-evenly mb-3">
                <div className="col-lg-4 ">
                  <label className="fw-bold text-dark mb-1">CNS :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Centralnervoussystem"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setCentralnervoussystem(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-4 ">
                  <label className="fw-bold text-dark mb-1">PA :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Gastrointestinalsystem"
                      aria-describedby="basic-addon1"
                      onChange={(e) =>
                        setGastrointestinalsystem(e.target.value)
                      }
                    />
                  </InputGroup>
                </div>
              </div>

              <h5 className="fw-bold"> Examination</h5>
              <hr />

              <label className="fw-bold mb-2">General Examination :</label>
              <div style={{ width: "800px" }}>
                <textarea
                  style={{ width: "800px" }}
                  onChange={(e) => setgeneralexamination(e.target.value)}
                />
              </div>

              <label className="fw-bold mb-2">Local Examination :</label>
              <div style={{ width: "800px" }}>
                <textarea
                  style={{ width: "800px" }}
                  onChange={(e) => setlocalexamination(e.target.value)}
                />
              </div>

              <div className="row gap-3 ms-2">
                <Button
                  className="col-lg-2"
                  style={{ backgroundColor: "#208b8c" }}
                  onClick={(e) => AddExamination(e)}
                >
                  Save & Bill
                </Button>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>

      {/* EDIT MODAL */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Medicine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-2 ">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">
                Medicine Name*{" "}
              </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingEmail"
                label="Medicine Name"
              >
                <Form.Control type="text" placeholder="Medicine Name" />
              </FloatingLabel>
            </div>

            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Genric Name* </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingName"
                label="Genric Name"
              >
                <Form.Control type="text" placeholder="Genric Name" />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-2 ">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">
                Select Dablet*{" "}
              </FormLabel>
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                style={{ width: "300px" }}
              >
                <option value="">Select</option>
                <option value="Tablet">Tablet</option>
                <option value="Capsule">Capsule</option>
                <option value="Cream">Cream</option>
                <option value="Drops">Drops</option>
                <option value="Gel">Gel</option>
                <option value="Inhaler">Inhaler</option>
                <option value="Injection">Injection</option>
                <option value="Lotion">Lotion</option>
                <option value="MotherTincture">Mother Tincture</option>
                <option value="Mouthwash">Mouthwash</option>
                <option value="Oil">Oil</option>
                <option value="Ointment">Ointment</option>
                <option value="Pills">Pills</option>
                <option value="Powder">Powder</option>
                <option value="Shampoo">Shampoo</option>
                <option value="Spray">Spray</option>
                <option value="Suspension">Suspension</option>
                <option value="Syringe">Syringe</option>
                <option value="Syrup">Syrup</option>
                <option value="Toothpaste">Toothpaste</option>
              </Form.Select>
            </div>

            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Dosage* </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingName"
                label="Dosage"
              >
                <Form.Control type="text" placeholder="Dosage" />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-2 ">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Duration * </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingEmail"
                label="Duration"
              >
                <Form.Control type="text" placeholder="Duration" />
              </FloatingLabel>
            </div>

            <div className="col-lg-6 mt-3">
              <FormLabel className="fw-bold text-dark">Days* </FormLabel>
              <Form.Select
                style={{ width: "300px" }}
                aria-label="Default select example"
              >
                <option>Select</option>
                <option value="OO">Only Once</option>
                <option value="OA">Only Afternoon</option>
                <option value="QD">QD (Once a day)</option>
                <option value="BID">BID (Twice a day)</option>
                <option value="TID">TID (Three times a day)</option>
                <option value="QID">QID (Four times a day)</option>
                <option value="FID">FID (Five times a day)</option>
                <option value="6x">Six times a day</option>
                <option value="7x">Seven times a day</option>
                <option value="8x">Eight times a day</option>
                <option value="9x">Nine times a day</option>
                <option value="10x">Ten times a day</option>
                <option value="11x">Eleven times a day</option>
                <option value="12x">Twelve times a day</option>
                <option value="13x">Thirteen times a day</option>
                <option value="14x">Fourteen times a day</option>
                <option value="15x">Fifteen times a day</option>
                <option value="Q4H">Q4H (Every 4 hours)</option>
                <option value="Q6H">Q6H (Every 6 hours)</option>
                <option value="Q2H">Q2H (Every 2 hours)</option>
                <option value="QOD">QOD (Every other hour)</option>
                <option value="QH">QH (Every hour)</option>
                <option value="QAM">QAM (Every morning)</option>
                <option value="QN">QN (Every night)</option>
                <option value="QWK">QWK (Every week)</option>
                <option value="QWK2">QWK2 (Every two weeks)</option>
                <option value="BIS in 7d">BIS in 7d (Twice a week)</option>
                <option value="TIW">TIW (Three times a week)</option>
                <option value="OM">OM (Once in a month)</option>
                <option value="SOS">SOS (If Necessary)</option>
                <option value="Frequently">Frequently</option>
                <option value="Dieb. Alt.">Dieb. Alt. (Alternate Days)</option>
                <option value="STAT">STAT</option>
              </Form.Select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Submit</Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}

      <Modal
        show={show1}
        onHide={deleteBtnClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {/* <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div> */}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center">
            <img
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              src="./img/delete-btn.png"
              alt=""
            />
            <h4 className="fw-bold text-dark mb-2">Are You Sure</h4>
            <p>This event data will be removed permanently</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">
            <FontAwesomeIcon icon={faCancel} className=" me-2" />
            Delet
          </Button>
          <Button variant="success" onClick={deleteBtnClose}>
            Cancle
          </Button>

          {/* <Button variant="success"><FontAwesomeIcon icon={faCheck} className='fs-5 me-2' />Save</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};
