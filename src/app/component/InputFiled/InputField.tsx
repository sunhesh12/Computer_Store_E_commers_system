"use client";
import { useState } from "react";
import styles from "./inputFeild.module.css"; // Ensure you have the necessary CSS styles

interface WavegroupProps {
  text: string; // Text for the placeholder
  type: "email" | "mobile" | "text"; // Input type for validation
}

const Wavegroup: React.FC<WavegroupProps> = ({ text, type }) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true); // Tracks the validity of the input

  // Regular expressions for validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const mobileRegex = /^[0-9]{10}$/; // Adjust as per your mobile format

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // If the value is empty, consider it valid by default
    if (!value.trim()) {
      setIsValid(true); // Reset validity when input is empty
      return;
    }

    // Validate the input based on the type
    let valid = true;
    if (type === "email") {
      valid = emailRegex.test(value);
    } else if (type === "mobile") {
      valid = mobileRegex.test(value);
    } else if (type === "text") {
      valid = value.trim() !== ""; // Ensure non-empty text input
    }

    setIsValid(valid); // Update the validity state
  };

  // Split the input value into individual characters
  const inputChars = inputValue.split("");

  return (
    <div className={styles.wavegroup}>
      <input
        required
        type="text"
        className={`${styles.input} ${!isValid ? styles.invalid : ""}`} // Add styling for invalid input
        value={inputValue}
        onChange={handleInputChange}
        id="inputField"
        
      />
      <span className={styles.bar}></span>
      <label htmlFor="inputField" className={styles.label}>
        {/* Loop through each character in the text to render */}
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={styles.labelchar}
            style={{ "--index": index } as React.CSSProperties} // Dynamic style for each character
          >
            {char === " " ? "\u00A0" : char} {/* Handle spaces properly */}
          </span>
        ))}
      </label>
      {!isValid && <div className={styles.error}>Invalid {type}</div>} {/* Show error if invalid */}
    </div>
  );
};

export default Wavegroup;
