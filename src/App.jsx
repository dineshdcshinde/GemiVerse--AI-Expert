import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { Context } from "./context/Context";

function App() {
  const { them, setThem } = useContext(Context);
  return (
    <>
      <div
        className={`wrapper w-full flex `}
        style={{
          backgroundColor: them ? "#ffffff" : "#3c3c3c",
          color: them ? "#3c3c3c" : "#ffffff",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
