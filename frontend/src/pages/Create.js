import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const Paper = styled("div")({
  marginTop: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledAvatar = styled(Avatar)({
  margin: "8px",
  backgroundColor: "blue",
});

const Form = styled("form")({
  width: "100%",
  marginTop: "24px",
});

const SubmitButton = styled(Button)({
  margin: "24px 0 16px",
  color: "white",
});

const Create = () => {
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    name: "",
    age: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:8000/api/", postData);
    alert("Entry created!");
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper>
        <StyledAvatar></StyledAvatar>
        <Typography component="h1" variant="h5">
          Create New Entry
        </Typography>
        <Form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Create 
          </SubmitButton>
        </Form>
      </Paper>
    </Container>
  );
};

export default Create;
