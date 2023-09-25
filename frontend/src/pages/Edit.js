import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
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
const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [prevData, setPrevData] = useState({
    name: "",
    age: 0,
  });

  useEffect(() => {
    const getIndividualData = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/student/${id}`
      );
      setPrevData(response.data);
    };

    getIndividualData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrevData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/api/student/${id}`, prevData);
    alert("Entry edited!!");
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Paper>
      <StyledAvatar></StyledAvatar>
      <Typography component="h1" variant="h5">
        Edit Entry
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
              value={prevData.name}
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
              value={prevData.age}
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
          Edit
        </SubmitButton>
      </Form>
    </Paper>
  </Container>
  );
};

export default Edit;
