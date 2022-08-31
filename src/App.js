import React, { useEffect, useState } from "react";
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
  const [lenguaje, setLenguaje] = useState([]);
  const [fromLeng, setFromLeng] = useState("es");
  const [toLeng, setToLeng] = useState("en");

  const [textoFrom, setTextoFrom] = useState("");
  const [textoTraducido, setTextoTraducido] = useState("");

  useEffect(() => {
    const getLenguaje = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8ab45932edmsh9cbc37056b5ea04p1753bcjsndd3f1e27c1db",
          "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
        },
      };

      const lenguajeResponse = await fetch(
        "https://text-translator2.p.rapidapi.com/getLanguages",
        options
      );
      const dataLenguaje = await lenguajeResponse.json();

      return dataLenguaje.data.languages;
    };

    getLenguaje().then((res) => setLenguaje(res));
  }, []);

  const getTranslated = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", fromLeng );
    encodedParams.append("target_language", toLeng);
    encodedParams.append("text", textoFrom);

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "8ab45932edmsh9cbc37056b5ea04p1753bcjsndd3f1e27c1db",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: encodedParams,
    };

    fetch("https://text-translator2.p.rapidapi.com/translate", options)
      .then((response) => response.json())
      .then((response) => setTextoTraducido(response.data.translatedText))
      .catch((err) => console.error(err));
  };



  return (
    <>
      <Container maxWidth="md" height="100vh">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2em",
          }}
        >
          <Typography variant="h3">Traductor</Typography>
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
            value={fromLeng}
            onChange={(e) => setFromLeng(e.target.value)}
          >
            <option value={"es"}>Español</option>
            {lenguaje.map((leng) => {
              return <option value={leng.code}>{leng.name}</option>;
            })}
          </Select>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            justifyContent="center"
            alignItems="center"
            value={toLeng}
            onChange={(e) => setToLeng(e.target.value)}
          >
            <option value={"en"}>Ingles</option>
            {lenguaje.map((leng) => {
              return <option value={leng.code}>{leng.name}</option>;
            })}
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
            value={textoFrom}
            onChange={(e) => setTextoFrom(e.target.value)}
          />
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={10}
            defaultValue="Texto traducido"
            style={{ width: "300px", marginBottom: "1em" }}
            value={textoTraducido}
            
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "2em",
          }}
        >
          <Button variant="contained" onClick={getTranslated}>Traducir</Button>
        </div>
      </Container>
    </>
  );
}

export default App;
