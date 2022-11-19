// Creating this app by running 'npm create-react-app MY-APP' will install all related reactApp tools
import "./App.css";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    // setting alert stateVariable as Object
    setAlert({
      msg: message,
      type: type,
    });
    // Will automatically run this function after 1sec
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#141313";
      showAlert("DarkMode has Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode has Enabled", "Success");
    }
  };
  const toggleMode2 = () => {
    if (mode === "light") {
      setMode("green");
      document.body.style.backgroundColor = "green";
      showAlert("GreenMode has Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode has Enabled", "Success");
    }
  };
  const toggleMode3 = () => {
    if (mode === "light") {
      setMode("purple");
      document.body.style.backgroundColor = "purple";
      showAlert("PurpleMode has Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode has Enabled", "Success");
    }
  };

  return (
    // This is JSX, JavaScript extension.
    // its basically html but with help of curly braces we can use JS variables
    // but we write 'className' instead of class in html as class is already defined in JS
    // <div className="temp"></div>

    // we are using this as we should only return one tag
    <>
    
    {/* <Router> */}

      {/* Passing props to function */}
      <Navbar
        tittle="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        toggleMode2={toggleMode2}
        toggleMode3={toggleMode3}
      ></Navbar>
      <Alert alert={alert}></Alert>

      <div className="container my-3">
        {/* Using react-Router to access pages without reloading */}
      {/* <Routes> */}
          {/* <Route exact path="/" element={<TextForm
                heading="Enter the text to Analyze"
                mode={mode}
                showAlert={showAlert}
              ></TextForm>}/>
          <Route exact path="/About" element={<AboutUs/>}/>
      </Routes> */}
      <TextForm
                heading="Enter the text to Analyze"
                mode={mode}
                showAlert={showAlert}
              ></TextForm>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
