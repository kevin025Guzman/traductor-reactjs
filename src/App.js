import React from "react";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <Container
        maxWidth="md"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2em",
          }}
        >
          <Typography variant="h3">
            Traductor
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "2em",
          }}
        >
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            justifyContent="center"
            alignItems="center"
          >
            <option value={1}>Español</option>
            <option value={2}>Option 2</option>
          </Select>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            justifyContent="center"
            alignItems="center"
          >
            <option value={1}>Ingles</option>
            <option value={2}>Option 2</option>
          </Select>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "2em",
            flexWrap: "wrap",
          }}
        >
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={10}
            defaultValue="Ingresa el texto a traducir"
            style={{ width: "300px", marginBottom: "1em" }}
          />
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={10}
            defaultValue="Texto traducido"
            style={{ width: "300px", marginBottom: "1em" }}
            readOnly="true"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "2em",
          }}
        >
          <Button variant="contained">Traducir</Button>
        </div>
      </Container>
    </>
  );
}

export default App;
