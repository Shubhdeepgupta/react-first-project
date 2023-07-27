// import logo from './logo.svg';
import React, { useState } from "react";
// import { Route } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // weather dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = ()=> {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-white')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";                 // it gives the title in the browser tab as dark mode

      // To set the timer in the title to show the text in the browser

      // it updateds the title which shows in the browser
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Today';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Installed TextUtils now';
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";                   // it also gives the title on the browser tab as light mode
    }
  };

  return (
    <>
      <Router>
        {/* <Navbar></Navbar>        {/*It imports Navbar automatically*/}
        {/* <Navbar title = "TextUtils" aboutText="About TextUtils"></Navbar>       {/* initialise props */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* initialise props */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route
              path="/" element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                  mode={mode} /> } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
