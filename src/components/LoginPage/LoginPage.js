import React, { useState } from "react";
import {
  Container,
  Typography,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick=()=>{
    navigate("/scenarios-page")
  }

  const buttonStyles = {
    textTransform: 'none',
  };

  return (
    <div>
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom style={{fontFamily:"Roboto",fontWeight:"bold"}}>
          Welcome To AP-Jibe
        </Typography>
        <Divider style={{ height: "3px",backgroundColor: "#f1592a", width: "100%" }} />
        <Container
          style={{
            backgroundImage: "linear-gradient(to right, #ffffff, #d9d9d9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop:"30px"
          }}
         
        >
          <img
            src="https://res.cloudinary.com/dfsytkmik/image/upload/v1689403937/Browser_access_prototype-06_1_wookiw.jpg"
            alt="Logo"
          />
          <div style={{ marginLeft: "16px" }}>
            <TextField label="Username" />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              style={{marginBottom:"10px"}}
            />
            <Button  color="secondary" variant="contained"  style={buttonStyles} onClick={handleLoginClick}>Login</Button>
          </div>
         
        </Container>
      </Container>
      <img
        src="https://res.cloudinary.com/dfsytkmik/image/upload/v1689403959/Browser_access_prototype-06_2_w83ofk.jpg"
        alt="Bottom Logo"
        style={{ position: "fixed", bottom: 0, left: 0 ,height:"50px",width:"60px"}}
      />
    </div>
  );
};

export default LoginPage;
