import React from 'react'
import Hero from './Hero'
import CustomButton from './CustomButton'
import './App.css'
export default function App() {
  let styles = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  }
  let btn1={...styles};
  btn1.backgroundColor = "green";
  btn1.color = "white";

  return (
    <div>
      <h1>React Demo</h1>
      <Hero intro={"coming from App"} />
      <Hero/>
      <CustomButton text={"Click me"} onClick={() => alert("Button Clicked")} styles={styles} />
      <CustomButton text={"Sign Up"} onClick={() => alert("Sign Up Clicked")} styles={btn1} />
      <CustomButton styles={styles} />
    </div>
  )
}
