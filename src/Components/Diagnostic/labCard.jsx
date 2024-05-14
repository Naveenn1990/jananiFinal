import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineHeart } from "react-icons/ai";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function LabCard() {
  const navigate = useNavigate();
  const [HospitalLabHealthPkgList, setHospitalLabHealthPkgList] =
    React.useState([]);
  const HospitallabHealthPkgs = () => {
    axios
      .get("http://localhost:8521/api/admin/getHospitalHealthPkg")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.HospitalHealthPkgs;
          setHospitalLabHealthPkgList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalLabHealthPkgList([]);
      });
  };
  React.useEffect(() => {
    HospitallabHealthPkgs();
  }, []);

  console.log("HospitalLabHealthPkgList: ", HospitalLabHealthPkgList);
  return (
    <div>
      <Container>
        <h1 className="text-dark pt-5 fw-light back-img-head">
          Health Packages
        </h1>
      </Container>

      <Box
        sx={{
          width: "100%",
          display: "grid",
          className: "m-auto",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        {HospitalLabHealthPkgList?.map((val) => {
          return (
            <Card size="lg" variant="outlined" className="mt-5">
              <div
                onClick={() =>
                  navigate("/healthpack", { state: { healthpkgdata: val } })
                }
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography level="h2" fontSize="xl3">
                  {val?.healthpkgName}
                </Typography>

                <List
                  size="sm"
                  sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}
                >
                  {val?.testList?.map((testdata) => {
                    return (
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        {testdata?.testid?.testName}
                      </ListItem>
                    );
                  })}
                </List>
                <Divider inset="none" />
                <CardActions>
                  <Typography level="h5" sx={{ mr: "auto" }}>
                    ₹{val?.healthpkgPrice}{" "}
                    {/* <Typography fontSize="sm" textColor="text.tertiary">
              / month
            </Typography> */}
                  </Typography>
                  <Button
                    variant="soft"
                    color="success"
                    endDecorator={<KeyboardArrowRight />}
                  >
                    Start now
                  </Button>
                </CardActions>
              </div>
            </Card>
          );
        })}
      </Box>
    </div>
  );
}
