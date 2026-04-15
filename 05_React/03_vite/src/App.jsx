import React from 'react'
import CustomButton from './component/CustomButton'
import './App.css' // Import the CSS file for styling

export default function App() {
  return (
    <div>
      <h1>Welcome to Vite and React!</h1>
      <p>This is a simple React application.</p>
      <button className='custombutton'>Main button</button>
      <CustomButton />
    </div>
  )
}
