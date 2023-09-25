import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import "./App.css"

const ContainerWrapper = styled(Container)({
  maxWidth: "md",
  component: "main",
});

const TableContainerWrapper = styled(TableContainer)({
  marginBottom: "16px",
});

const TableCellLink = styled(TableCell)({
  "& .MuiLink-root": {
    textDecoration: "none",
    color: "inherit",
  },
});

const ActionCell = styled(TableCell)({
  display: "flex",
  justifyContent: "left",
  alignItems: "baseline",
  fontSize: "12px",
  textAlign: "left",
});

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <ContainerWrapper maxWidth="md" component="main">
        <Paper sx={{
            backgroundColor: '#eeeeee'
          }}>
          <TableContainerWrapper>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow className="tableHeader">
                  <TableCell>Id</TableCell>
                  <TableCell align="left">Age</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell component="th" scope="row">
                      {student.id}
                    </TableCell>
                    <TableCell align="left">{student.age}</TableCell>
                    <TableCellLink align="left">{student.name}</TableCellLink>
                    <ActionCell align="left">
                      <Link color="textPrimary" href={`/edit/${student.id}`}>
                        <EditIcon />
                      </Link>
                      <Link color="textPrimary" href={`/delete/${student.id}`}>
                        <DeleteForeverIcon />
                      </Link>
                    </ActionCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={4} align="right">
                    <Button href="/create" variant="contained" color="primary">
                      New Entry
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainerWrapper>
        </Paper>
      </ContainerWrapper>
    </div>
  );
};

export default App;
