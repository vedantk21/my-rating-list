import React from "react";
import "./styles.css";
import { useState } from "react";

const categories = {
  Tennis: [
    { name: "Federer", rating: "10/10" },
    { name: "Nadal", rating: "10/10" },
    { name: "Djokovic", rating: "10/10" }
  ],

  Movies: [
    {
      name: "Interstellar",
      rating: "10/10"
    },
    {
      name: "Inception",
      rating: "9/10"
    },
    {
      name: "TENET",
      rating: "8/10"
    }
  ],
  Series: [
    {
      name: "Chernobyl",
      rating: "10/10"
    },
    {
      name: "Money Heist",
      rating: "9/10"
    },
    {
      name: "UPLOAD",
      rating: "8/10"
    }
  ]
};

export default function App() {
  const [activeCategory, setActive] = useState("Movies");
  function categoryClickHandler(category) {
    setActive(category);
  }
  return (
    <div className="App">
      <h1>My Rating List</h1>
      <div style={{ paddingInline: 0 }}>
        {Object.keys(categories).map((category) => (
          <button
            onClick={() => categoryClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "blue",
              borderRadius: "1rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "center", paddingInline: 0 }}>
        <ul>
          {categories[activeCategory].map((item) => (
            <li
              key={item.name}
              style={{
                alignItems: "center",
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "90%",
                margin: "1rem",
                borderRadius: "5rem"
              }}
            >
              <div style={{ fontSize: "large" }}> {item.name} </div>
              <div>
                <strong> {item.rating}</strong>{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
