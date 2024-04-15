import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Games = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const year = parseInt(queryParams.get("year"), 10);

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://fs1.co.il/bus/xbox1.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const filteredGames = data.filter((game) => game.Year === year);
        setGames(filteredGames);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (year) {
      fetchGames();
    }
  }, [year]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <button
        onClick={handleBack}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          margin: "20px 0",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Back to Homepage
      </button>
      <h1 style={{ textAlign: "center" }}>Games from {year}</h1>
      {isLoading ? (
        <p style={{ textAlign: "center" }}>Loading games...</p>
      ) : games.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {games.map((game, index) => (
            <li
              key={index}
              style={{
                background: "#f0f0f0",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <a
                href={game.GameLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "underline",
                  color: "blue",
                  fontWeight: "normal",
                }}
              >
                {game.Game}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>
          No games found for the year {year}.
        </p>
      )}
    </div>
  );
};

export default Games;
