import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Divider,
  Grid,
  Typography,
  Box,
  Button,
  Container
} from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import CompareScenariosMap from "../CompareScenariosMap/CompareScenariosMap";
import "./CompareScenariosPage.css";

const CompareScenariosPage = () => {
  const location = useLocation();
  const { rowData } = location.state;
  //   const { id,
  //     owner,
  //     startPeriod,
  //     operationalCostNPV,
  //     cost,
  //     name,
  //     startYear,
  //     periods,
  //     costNPV,
  //     type,
  //     operationalCost,
  //     lastSaved,
  //     periodsPerYear } = rowData;

  return (
    <div className="scenarios-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/scenarios-page">
            <KeyboardDoubleArrowLeftIcon sx={{ marginRight: "20px" }} />
          </Link>
          <Typography variant="h5" sx={{ textDecoration: "underline", fontWeight: 'bold', width: '100%' }}>
            Scenario Comparison:
          </Typography>
          <Container sx={{ display: "flex", alignItems: "center", marginLeft: '20px' }}>
            <Typography
              variant="h6"
              style={{
                fontWeight: "bold",
                marginLeft: "15px",
                marginRight: "15px",
                backgroundColor: "#000000",
                color: "#ffffff",
                width: "190px",
                textAlign: "center",
                padding: '3px',
                fontStyle: 'oblique'
              }}
            >
              {rowData[0].name}
            </Typography>
            <Typography
              variant="h4"
              style={{ margin: "auto", fontWeight: 'bold' }}
            >
              &
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontWeight: "bold",
                marginLeft: "15px",
                backgroundColor: "#000000",
                color: "#ffffff",
                width: "190px",
                textAlign: "center",
                padding: '3px',
                fontStyle: 'oblique'
              }}
            >
              {rowData[1].name}
            </Typography>
          </Container>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: '36px'
            }}
          >
            <AccountBoxIcon sx={{height:'36px',width:'36px'}}/>
            <Typography style={{  textDecoration: "underline",fontWeight:'bold',textAlign:'center',fontStyle:'oblique',fontSize:'8px' }}>
              Account Name
            </Typography>
          </div>

          <Divider
            style={{
              height: "70px",
              backgroundColor: "#000000",
              width: "3px",
              marginLeft: "10px",
              marginTop: '6px',
              marginBottom:'6px'
            }}
          />
          <img
            src="https://res.cloudinary.com/dfsytkmik/image/upload/v1689403937/Browser_access_prototype-06_1_wookiw.jpg"
            alt="Logo"
            className="logo-image-scenarios"
          />
        </div>
      </div>
      <Divider
        style={{
          height: "3px",
          backgroundColor: "#f1592a",
          width: "100%",
          marginBottom: "20px",
        }}
      />
      <Grid container>
        <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: "70%" }}>
          <Container style={{ display: "flex" }}>
            <Typography
              variant="body1"
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                height: "20%",
                width: "50%",
                textAlign: "center",
                fontWeight: 'bold',
                padding: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {rowData[0].name}
            </Typography>
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "auto",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <Typography
                  variant="body2"
                  className="compare-scenario-name"
                >
                  Total Cost
                </Typography>
                <Typography
                  className="compare-scenario-value"
                >
                  ${rowData[0].investmentCost}
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <Typography
                  variant="body2"
                  className="compare-scenario-name"
                >
                  Total PV
                </Typography>
                <Typography
                  className="compare-scenario-value"
                >
                  ${rowData[0].investmentNPV}
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <Typography
                  variant="body2"
                  className="compare-scenario-name"
                >
                  Operational Cost
                </Typography>
                <Typography
                  className="compare-scenario-value"
                >
                  ${rowData[0].operationalCost}
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <Typography
                  variant="body2"
                  className="compare-scenario-name"
                >
                  Operational Cost NPV
                </Typography>
                <Typography
                  className="compare-scenario-value"
                >
                  ${rowData[0].operationalCostNPV}
                </Typography>
              </Box>
            </Container>
            <Divider
              style={{
                height: "150px",
                backgroundColor: "#000000",
                width: "3px",
              }}
            />
          </Container>
          <div style={{ width: '85%' ,marginTop:'4px'}}>
            <CompareScenariosMap />
            
          </div>

          {/* <img src="https://preview.redd.it/oej08q5xrdv81.png?width=1541&format=png&auto=webp&s=480851bb04af7e1c5c77fd8f68d303e6add83b86" style={{ height: '50%', width: '80%', marginTop: '30px' }} alt="map-img" /> */}


        </Grid>
        <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: "70%" }}>
          <Container style={{ display: "flex" }}>
            <Typography
              variant="body1"
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                height: "20%",
                width: "50%",
                fontWeight: 'bold',
                padding: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {rowData[1].name}
            </Typography>
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "auto",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <Typography
                  variant="body2"
                  className="compare-scenario-name"
                >
                  Total Cost
                </Typography>
                <Typography
                  className="compare-scenario-value"
                >
                  ${rowData[1].investmentCost}
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <Typography
                  variant="body2"
                  className="compare-scenario-name"
                >
                  Total PV
                </Typography>
                <Typography
                  className="compare-scenario-value"
                >
                  ${rowData[1].investmentNPV}
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <Typography
                  variant="body2"
                  className="compare-scenario-name"
                >
                  Operational Cost
                </Typography>
                <Typography
                  className="compare-scenario-value"
                >
                  ${rowData[1].operationalCost}
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <Typography
                  variant="body2"
                  className="compare-scenario-name"
                >
                  Operational Cost NPV
                </Typography>
                <Typography
                  className="compare-scenario-value"
                >
                  ${rowData[1].operationalCostNPV}
                </Typography>
              </Box>
            </Container>
          </Container>
          <div style={{  width: '85%',marginTop:'10px' }}>
            <CompareScenariosMap />
          </div>
          {/* <img src="https://redplant.net/assets/work/red-dot-app/praesentation-native-app-maps-design-locations-red-dot.jpg" style={{ height: '50%', width: '80%', marginTop: '20px' }} alt="map-img" /> */}

        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center', bottom: "0" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "fixed",
              bottom: 2,
              width: "100%",
              padding: "10px",
              backgroundColor: "none",
            }}
          >
            <Button variant="outlined" color="warning">View Scenario Graphs</Button>
          </Box>
        </Grid>

      </Grid>
      <img
        src="https://res.cloudinary.com/dfsytkmik/image/upload/v1689403959/Browser_access_prototype-06_2_w83ofk.jpg"
        alt="Bottom Logo"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          height: "50px",
          width: "60px",
        }}
      />
    </div>
  );
};

export default CompareScenariosPage;
