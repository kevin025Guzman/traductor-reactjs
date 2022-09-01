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

  export default getLenguaje;