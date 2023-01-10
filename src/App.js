import React from "react";
import Profile from "./profile/profile";
import Image from "./profile/img.jpeg";
function App() {
  const styleObject = {
    position: "absolute",
    top: "50%", 
    left: "50%",
    transform: `translate(-50%, -50%)`,
    textAlign: "center",
    backgroundColor: "black",
    width: "100%",
    padding: "15px", 
    color: "White"
  }

  const myImageStyle = {width: "200px", height: "200px", borderRadius: "50px"}
  return (
    <div className="App" style={styleObject}>
      <Profile fullName="Rahime" bio="Young Student based in SN" profession="Web Developer">
        <img src={Image} style={myImageStyle} className="img" alt="" />
      </Profile>
      <handleName></handleName>
    </div>
  );
}

export default App;
