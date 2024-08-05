import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
const TextFiels = ({ handleSubmit }) => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(true);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSubmit(text);
        setText("");
      }
    };

    if (isFocused) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFocused, text]);
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      sx={{
        boxShadow: isFocused ? "0px 0px 8px 1px yellow" : "none",
      }}
      size="small"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      autoFocus
    />
  );
};

export default TextFiels;
