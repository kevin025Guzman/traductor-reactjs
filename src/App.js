import React, { useEffect, useState } from "react";
import getLenguaje from "./getDataFetch/getDataLenguage";

import {Button,Container,Select,TextField,} from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import './index.css'


function App() {
  const [lenguaje, setLenguaje] = useState([]);
  const [fromLeng, setFromLeng] = useState("es");
  const [toLeng, setToLeng] = useState("en");
  const [textoFrom, setTextoFrom] = useState("");
  const [textoTraducido, setTextoTraducido] = useState("");
  const [ divOn, setDivOn] = useState(false);
  
  useEffect(() => {
  
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

    setDivOn(true);
  };

  const CloseButton = () => {
    setDivOn(false)
    setTextoFrom("")
    setTextoTraducido("")

  }


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
          className="divSelect"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "1em",
          }}
        >
          <Select
            native
            className="selectL"
            defaultValue=""
            id="grouped-native-select"
            justifyContent="center"
            alignItems="center"
            value={fromLeng}
            onChange={(e) => setFromLeng(e.target.value)}
          >
            <option value={"es"} className="option">Español</option>
            <option value={"en"} className="option">Ingles</option>
            {lenguaje.map((leng, index) => {
              return <option value={leng.code} key={index} className="option">{leng.name}</option>;
            })}
          </Select>
          <Select
            native
            className="selectL"
            defaultValue=""
            id="grouped-native-select"
            justifyContent="center"
            alignItems="center"
            value={toLeng}
            onChange={(e) => setToLeng(e.target.value)}
          >
            <option value={"en"} className="option">Ingles</option>
            <option value={"es"} className="option">Español</option>
            {lenguaje.map((leng, index) => {
              return <option value={leng.code} key={index} className="option">{leng.name}</option>;
            })}
          </Select>
        </div>
        <div  
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "1em",
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
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: ".5em",
          }}
        >
          { (divOn) ?  <div style={{width: "40px", height: "40px", backgroundColor: "#efefef",opacity: "0.3", display:"flex", justifyContent: "center", alignItems:"center", borderRadius: "50%", marginBottom: "1rem" }}> <CloseIcon style={{}} onClick={CloseButton}/></div> : <div></div> }
         
         
          <Button variant="contained" onClick={getTranslated}
          style={{}}
          >Traducir</Button>
        </div>
      
      </Container>
    </>
  );
}

export default App;
