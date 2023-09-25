import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const CenteredBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    margin: '8px', 
    padding: '8px',  
  });

const Delete = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.delete(`http://127.0.0.1:8000/api/student/${id}`);
    alert("Entry Deleted")
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="sm">
      <CenteredBox>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          sx={{
            backgroundColor: 'white',
            color: 'black', 
            '&:hover': {
                backgroundColor: 'white',
                color: 'black',
            },
          }}
        >
          Press here to confirm delete
        </Button>
      </CenteredBox>
    </Container>
  );
};

export default Delete;