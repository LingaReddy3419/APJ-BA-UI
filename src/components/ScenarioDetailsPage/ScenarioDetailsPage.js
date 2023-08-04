import React, { useState } from "react";
import {
  Typography,
  Divider,
  Button,
  IconButton,
  Grid,
  Container,
} from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import BarChartGraph from "../BarChartGraph/BarChartGraph";
import NodeLocationsMap from "../NodeLocationMap/NodeLocationMap";
import "./ScenarioDetailsPage.css";

const ScenarioDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("Summary");
  const [expanded, setExpanded] = useState(false);

  const rowData = location.state?.rowData;
  const { id,
    owner,
    startPeriod,
    operationalCostNPV,
    cost,
    name,
    startYear,
    periods,
    costNPV,
    type,
    operationalCost,
    lastSaved,
    periodsPerYear,
    investmentNPV,
    inputGreenFieldNodes,
    ospPowerNPV,
    fiberMiles,
    ospPowerCost,
    copperMiles,
    investmentCost,
    inputBrownfieldNodes,
    plannedYears,
    startPlanningPeriod,
    finalActiveNodes,
    startPlanningYear,
    nodesWithProblems,
  } = rowData;


  const CustomButton = ({ label, active, onClick }) => (
    <Button
      style={{
        border: active ? "2px solid #f1952a" : "none",
        borderLeft: active ? "none" : "inherit",
        borderRight: active ? "none" : "inherit",
        backgroundColor: active ? "#f7cb9e" : "inherit",
        borderRadius: active ? 0 : "inherit",
        margin: "auto",
        fontWeight: 'bold',
        fontSize: '15px'
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );

  const leftArrowClick = () => {
    navigate("/scenarios-page");
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const maxLines = expanded ? undefined : 2;
  return (
    <div className="scenario-details-container">
      <div style={{ display: "flex", marginTop: "10px", marginBottom: '10px' }}>
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            border: "4px solid black",
            borderLeft: "none",
            borderRight: "none",
          }}
        >
          <IconButton
            variant="contained"
            onClick={leftArrowClick}
            style={{ margin: "auto", color: '#000000' }}
          >
            <KeyboardDoubleArrowLeftIcon />
          </IconButton>
          <Typography variant="h5">||</Typography>
          <CustomButton
            label="Summary"
            active={activeButton === "Summary"}
            onClick={() => handleButtonClick("Summary")}
          />
          <Typography variant="h5">||</Typography>
          <CustomButton
            label="Activity"
            active={activeButton === "Activity"}
            onClick={() => handleButtonClick("Activity")}
          />
          <Typography variant="h5">||</Typography>
          <CustomButton
            label="Finances"
            active={activeButton === "Finances"}
            onClick={() => handleButtonClick("Finances")}
          />
          <Typography variant="h5">||</Typography>
          <CustomButton
            label="Operations"
            active={activeButton === "Operations"}
            onClick={() => handleButtonClick("Operations")}
          />
          <Typography variant="h5">||</Typography>
          <CustomButton
            label="Details"
            active={activeButton === "Details"}
            onClick={() => handleButtonClick("Details")}
          />
          <Typography variant="h5">||</Typography>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: 'center',
              alignItems: "center",
              width: "36px",
              marginLeft: '20px',
            }}
          >
            <AccountBoxIcon  sx={{height:'36px',width:'36px'}}/>
            <Typography style={{  textDecoration: "underline",fontWeight:'bold',textAlign:'center',fontStyle:'oblique',fontSize:'8px' }}>
              Account Name
            </Typography>
          </div>

          <Divider
            style={{
              height: "80px",
              backgroundColor: "#000000",
              width: "3px",
              marginLeft: "10px",
              marginRight: "0px",
            }}
          />
          <img
            src="https://res.cloudinary.com/dfsytkmik/image/upload/v1689403937/Browser_access_prototype-06_1_wookiw.jpg"
            alt="Logo"
            className="logo-image-scenarios"
          />
        </div>
      </div>
      <Grid container>
        <Grid item xs={5} style={{ display: "flex", flexDirection: "column" }}>
          <Container
            style={{ display: "flex", flexDirection: "row", overflowX: "auto" }}
          >
            <Container style={{ backgroundColor: '#d9d9d9', padding: '6px' }}>
              <Typography variant="h6" style={{ textAlign: "center", fontWeight: 'bold' }}>
                Scenario Details
              </Typography>
              <Container
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "450px",
                }}
              >
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {plannedYears}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">Planned Years</Typography>
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {startPlanningYear}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">Start Planning Years</Typography>
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {inputBrownfieldNodes}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">
                    Input Brownfield Nodes
                  </Typography>
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {finalActiveNodes}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">Final Active Nodes</Typography>
                </Container>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "50vh",
                  }}
                >
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {periodsPerYear}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">Periods Per Year</Typography>
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {startPlanningPeriod}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">Start Planning Period</Typography>
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {inputGreenFieldNodes}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">
                    Input Greenfield Nodes
                  </Typography>
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {nodesWithProblems}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">Nodes with Problems</Typography>
                </Container>
              </Container>
            </Container>
            <Divider
              style={{
                height: "89%",
                backgroundColor: "#d9d9d9",
                width: "3px",
                marginLeft: "5px",
                marginRight: "0px",
                marginTop: '20px'
              }}
            />
            <Container style={{ padding: "0px" }}>
              <Typography variant="h6" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                Long-term spend & construction
              </Typography>
              <Container
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "450px",
                  justifyContent: 'flex-start',
                  padding: '0px'
                }}
              >
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "50vh",
                  }}
                >
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    ${investmentCost}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">Investment Cost</Typography>
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {operationalCost}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">Operational Cost</Typography>
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {ospPowerCost}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">OSP Power Cost</Typography>
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {copperMiles}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">Copper Miles</Typography>
                </Container>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "50vh",
                  }}
                >
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    ${investmentNPV}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">Investment NPV</Typography>
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {operationalCostNPV}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">Operational Cost NPV</Typography>
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {ospPowerNPV}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">OSP Power NPV</Typography>
                  <Typography
                    variant="body2"
                    className="scenario-table-value"
                  >
                    {fiberMiles}
                  </Typography>
                  <Typography variant="body2" className="scenario-table-name">Fiber Miles</Typography>
                </Container>
              </Container>
            </Container>
          </Container>

          <Typography variant="h6" style={{ textDecoration: "underline",fontWeight:'bold' }}>
            Total Nodes By Technology
          </Typography>
          <BarChartGraph />
          {/* <img
            alt="Node Img"
            src="https://www.smartdraw.com/chart/img/basic-bar-graph.png"
            style={{ width: "100%", height: "230px" }}
          /> */}
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h6" style={{  textDecoration: 'underline',fontWeight:'600'}}>
            Description:
          </Typography>


          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: "-webkit-box",
                WebkitLineClamp: maxLines,
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                width:"91%"
              }}
            >
              <Typography variant="body2" component="div">
                If you're looking for random paragraphs, you've come to the right place.
                When a random word or a random sentence isn't quite enough, the next logical
                step is to find a random paragraph. We created the Random Paragraph
                Generator with you in mind. The process is quite simple. Choose the number
                of random paragraphs you'd like to see and click the button. Your chosen
                number of paragraphs will instantly appear. While it may not be obvious to
                everyone, there are a number of reasons creating random paragraphs can be
                useful. A few examples of how some people use this generator are listed in
                the following paragraphs.
              </Typography>
            </div>
            <Button
              onClick={toggleExpanded}
              variant="text"
              color={expanded ? "primary" : "primary"}
              style={{ alignSelf: 'flex-end' ,marginTop:'-23px',fontSize:'10px'}}
            >
              {expanded ? "Read Less" : "Read More"}
            </Button>
          </div>

          <Typography variant="h6" style={{ textDecoration: "underline",fontWeight:'600' }}>
            Node Locations Map
          </Typography>
          <NodeLocationsMap />
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6" style={{ textDecoration: "underline",fontWeight:'600' }}>
                Filter Locations
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#d9d9d9",
                  padding: "6px",
                  border: "2px solid #000000",
                }}
              >
                <Typography variant="h5">Market</Typography>
                <input
                  type="search"
                  style={{
                    height: "30px",
                    width: "100%",
                    borderRadius: "40px",
                    paddingLeft: "8px",
                    marginTop: "4px",
                  }}
                />
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#d9d9d9",
                  padding: "6px",
                  border: "2px solid #000000",
                  borderLeft: "none",
                }}
              >
                <Typography variant="h5">Facility</Typography>
                <input
                  type="search"
                  style={{
                    height: "30px",
                    width: "100%",
                    borderRadius: "40px",
                    paddingLeft: "8px",
                    marginTop: "4px",
                  }}
                />
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#d9d9d9",
                  padding: "6px",
                  border: "2px solid #000000",
                  borderLeft: "none",
                }}
              >
                <Typography variant="h5">Node</Typography>
                <input
                  type="search"
                  style={{
                    height: "30px",
                    width: "100%",
                    borderRadius: "40px",
                    paddingLeft: "8px",
                    marginTop: "4px",
                  }}
                />
              </Container>
            </Grid>
            <Grid item xs={3}>
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#d9d9d9",
                  padding: "6px",
                  border: "2px solid #000000",
                  borderLeft: "none",
                }}
              >
                <Typography variant="h5">Year</Typography>
                <input
                  type="date"
                  style={{
                    height: "30px",
                    width: "100%",
                    borderRadius: "40px",
                    paddingLeft: "8px",
                  }}
                />
              </Container>
            </Grid>
          </Grid>
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

export default ScenarioDetailsPage;
