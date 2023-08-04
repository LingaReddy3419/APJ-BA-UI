import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import CottageIcon from "@mui/icons-material/Cottage";
// import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import "./ScenariosPage.css";
import axios from "axios";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Divider,
  // Grid,
  // IconButton,
  Typography,
  Box,
  // TextField,
  Button,
} from "@mui/material";
const dummyData = [
  {
    id:uuidv4(),
    serNum: 1,
    owner: "Luc",
    periodsPerYear: 4,
    startPeriod: 1,
    operationalCostNPV: 242501056,
    cost: 629139264,
    name: "Example",
    startYear: 2023,
    periods: 40,
    costNPV: 290456192,
    type: "BROWNFIELD",
    operationalCost: 504973504,
    lastSaved: "2023-07-03",
    investmentNPV: 290456192,
    inputGreenFieldNodes: 2000,
    ospPowerNPV: 160760624,
    fiberMiles: 2300,
    ospPowerCost: 242501056,
    copperMiles: 2345,
    investmentCost: 629139264,
    inputBrownfieldNodes: 1945,
    plannedYears: 10,
    startPlanningPeriod: 2,
    finalActiveNodes: 11476,
    startPlanningYear: 2023,
    nodesWithProblems: 2,
  },
  {id:uuidv4(),
    serNum: 2,
    owner: "Luc",
    periodsPerYear: 4,
    startPeriod: 1,
    operationalCostNPV: 85061648,
    cost: 463159936,
    name: "Example optim",
    startYear: 2023,
    periods: 40,
    costNPV: 224091632,
    type: "BROWNFIELD",
    operationalCost: 160760624,
    lastSaved: "2023-07-03",
    investmentNPV: 2904563492,
    inputGreenFieldNodes: 3000,
    ospPowerNPV: 160760624646,
    fiberMiles: 1300,
    ospPowerCost: 24250105754,
    copperMiles: 26745,
    investmentCost: 622339264,
    inputBrownfieldNodes: 1924,
    plannedYears: 8,
    startPlanningPeriod: 3,
    finalActiveNodes: 56422,
    startPlanningYear: 2022,
    nodesWithProblems: 5,
  },
  {id:uuidv4(),
    serNum: 3,
    owner: "Luc",
    periodsPerYear: 4,
    startPeriod: 1,
    operationalCostNPV: 99301464,
    cost: 197415344,
    name: "Example coast",
    startYear: 2023,
    periods: 40,
    costNPV: 96776160,
    type: "BROWNFIELD",
    operationalCost: 202030944,
    lastSaved: "2023-07-03",
    investmentNPV: 29122492,
    inputGreenFieldNodes: 2300,
    ospPowerNPV: 1607665324646,
    fiberMiles: 3400,
    ospPowerCost: 24250105232,
    copperMiles: 2623,
    investmentCost: 622232232,
    inputBrownfieldNodes: 2311,
    plannedYears: 5,
    startPlanningPeriod: 7,
    finalActiveNodes: 3422,
    startPlanningYear: 2020,
    nodesWithProblems: 1,
  },
  {id:uuidv4(),
    serNum: 4,
    owner: "Luc",
    periodsPerYear: 4,
    startPeriod: 1,
    operationalCostNPV: 21873204,
    cost: 82180424,
    name: "Example mountains",
    startYear: 2023,
    periods: 40,
    costNPV: 40056300,
    type: "BROWNFIELD",
    operationalCost: 41692124,
    lastSaved: "2023-07-03",
    investmentNPV: 2942263492,
    inputGreenFieldNodes: 2300,
    ospPowerNPV: 543624646,
    fiberMiles: 2630,
    ospPowerCost: 2425232754,
    copperMiles: 32335,
    investmentCost: 62465639264,
    inputBrownfieldNodes: 2324,
    plannedYears: 9,
    startPlanningPeriod: 1212,
    finalActiveNodes: 543422,
    startPlanningYear: 2018,
    nodesWithProblems: 12,
  },
  {id:uuidv4(),
    serNum: 5,
    owner: "Luc",
    periodsPerYear: 4,
    startPeriod: 1,
    operationalCostNPV: 121326376,
    cost: 349543488,
    name: "Example center",
    startYear: 2023,
    periods: 40,
    costNPV: 153623712,
    type: "BROWNFIELD",
    operationalCost: 261250432,
    lastSaved: "2023-07-03",
    investmentNPV: 343463492,
    inputGreenFieldNodes: 5400,
    ospPowerNPV: 10624646,
    fiberMiles: 1780,
    ospPowerCost: 246705754,
    copperMiles: 287945,
    investmentCost: 62575264,
    inputBrownfieldNodes: 32535,
    plannedYears: 15,
    startPlanningPeriod: 7,
    finalActiveNodes: 63442,
    startPlanningYear: 2012,
    nodesWithProblems: 8,
  },
];



const ScenariosPage = () => {
  // const [apiData,setApiData]=useState([]);

  useEffect(() => {
    getBackendData();
  }, []);

  const getBackendData = async () => {
    try {
      const res = await axios.get(
        "http://192.168.1.18:8080/scenarios"
      );
      console.log(res.data)
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);
  const columns = [
    { field: "serNum", headerName: "S.No", width: 90 },
    {
      field: "name",
      headerName: "Name",
      editable: false,
      flex: 1,
      renderHeader: (params) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "8px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Name
          </Typography>
          <input
            type="search"
            placeholder="Search"
            onChange={(event) => handleSearch(event, params.field)}
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "40px",
              paddingLeft: "10px",
              marginBottom: "7px",
            }}
          />
        </Box>
      ),
    },
    {
      field: "owner",
      headerName: "Owner",
      editable: false,
      flex: 1,
      renderHeader: (params) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "8px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Owner
          </Typography>
          <input
            type="search"
            placeholder="Search"
            onChange={(event) => handleSearch(event, params.field)}
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "40px",
              paddingLeft: "10px",
              marginBottom: "7px",
            }}
          />
        </Box>
      ),
    },
    {
      field: "type",
      headerName: "Type",
      editable: false,
      flex: 1,
      renderHeader: (params) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "8px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Type
          </Typography>
          <input
            type="search"
            placeholder="Search"
            onChange={(event) => handleSearch(event, params.field)}
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "40px",
              paddingLeft: "10px",
              marginBottom: "7px",
            }}
          />
        </Box>
      ),
    },
  ];


  const [filteredRows, setFilteredRows] = useState(dummyData);

  const handleSearch = (event, field) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredData = dummyData.filter((row) => {
      return (
        // typeof row[field] === "string" &&
        row[field].toLowerCase().includes(searchValue)
      );
    });
    setFilteredRows(filteredData);
  };

  const buttonStyles = {
    textTransform: "none",
  };

  // const getRowId = () => {
  //   return uuidv4();
  // };

  // const rowClickHandler = (params) => {
  //   console.log(params);
  // };

  const rowDoubleClickHandler = (params) => {
    navigate("/scenario-details-page", { state: { rowData: params.row } });
  };

  const handleCompareScenarios = () => {
    if (selectedRows.length !== 2) {
      alert("Please select exactly two rows to compare.");
      return;
    }

    const selectedRowData = filteredRows.filter((row) =>
      selectedRows.includes(row.id)
    );
    navigate("/compare-scenarios-page", {
      state: { rowData: selectedRowData },
    });
  };

  const onRowSelectionModelChange = (newRowSelectionModel) => {
    setSelectedRows(newRowSelectionModel);
  };
  const getRowClassName = (params) => {
    return params.indexRelativeToCurrentPage % 2 === 0 ? 'alternate-row' : '';
  };
  return (
    <div className="scenarios-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <CottageIcon style={{ marginRight: "20px",color:'danger' }} />
          </Link>
          <Typography variant="h4" sx={{ textDecoration: "underline",fontWeight:'bold',fontSize:'26px' }}>
            Scenarios
          </Typography>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width:'36px'
            }}
          >
            <AccountBoxIcon sx={{height:'36px',width:'36px'}} />
            <Typography style={{  textDecoration: "underline",fontWeight:'bold',textAlign:'center',fontStyle:'oblique',fontSize:'8px' }}>
              Account Name
            </Typography>
          </div>

          <Divider
            style={{
              height: "54px",
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
      <Divider
        style={{ height: "3px", backgroundColor: "#f1592a", width: "100%",marginBottom:'10px'}}
      />
      {/* <Grid container>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "underline",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>Name</Typography>
              <IconButton>
                <ArrowDownwardIcon />
              </IconButton>
            </Box>
            <TextField
              label="Search"
              sx={{ height: "30px", borderRadius: "8px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "underline",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>Owner</Typography>
              <IconButton>
                <ArrowDownwardIcon />
              </IconButton>
            </Box>
            <TextField
              label="Search"
              sx={{ height: "30px", borderRadius: "8px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "underline",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>Type</Typography>
              <IconButton>
                <ArrowDownwardIcon />
              </IconButton>
            </Box>
            <TextField
              label="Search"
              sx={{ height: "30px", borderRadius: "8px" }}
            />
          </Box>
        </Grid>
      </Grid> */}

      <Box sx={{ height: 430, width: "100%", position: "relative" }}>
        {/* <input
          type="search"
          // variant="outlined"
          placeholder="Search"
          onChange={handleSearch}
          style={{
            height: "28px",
            width: "25%",
            marginBottom: "10px",
            marginTop: "10px",
            borderRadius: "40px",
            paddingLeft: "12px",
          }}
        /> */}
        <DataGrid
          rows={filteredRows}
          columns={columns}
          rowHeight={40}
          checkboxSelection
          columnHeaders
          // sx={{
          //   "& .MuiDataGrid-row:hover": {
          //     backgroundColor: "#f1592a",
          //     color: "#000",
          //   },
          // }}
          getRowClassName={getRowClassName}
          // getRowId={getRowId}
          // onRowClick={rowClickHandler}
          onRowDoubleClick={rowDoubleClickHandler}
          // getRowClassName={(params) =>
          //   selectedRows.includes(params.row.id) ? "selected-row" : ""
          // }
          onRowSelectionModelChange={onRowSelectionModelChange}
        // rowSelectionModel={rowSelectionModel}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}
        // pageSizeOptions={[5]}
        // disableRowSelectionOnClick
        // hideFooterPagination
        />
      </Box>
      {/* <div className="content-space" /> */}
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          bottom: 0,
          width: "100%",
          padding: "10px",
          backgroundColor: "none", 
        }}
      >
        <Button
          variant="contained"
          color="warning"
          size="small"
          // style={buttonStyles}
          onClick={handleCompareScenarios}
        >
          Compare Scenarios
        </Button>
      </Box>
    </div>
  );
};

export default ScenariosPage;
