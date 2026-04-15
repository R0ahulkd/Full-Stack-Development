import React from 'react'
import styles from './CustomButton.module.css' // Import the CSS file for styling

export default function CustomButton() {
  return (
    <div>
      <button className={styles.custombutton}>Click Me</button>
    </div>
  )
}
