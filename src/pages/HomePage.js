import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [year, setYear] = useState("2002");
  const navigate = useNavigate();

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/games?year=${year}`);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1>Select a Year</h1>
      <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
        <select
          value={year}
          onChange={handleYearChange}
          style={{
            padding: "10px",
            fontSize: "16px",
            margin: "10px 5px",
            cursor: "pointer",
          }}
        >
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
        </select>
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Show Games
        </button>
      </form>
    </div>
  );
};

export default HomePage;
