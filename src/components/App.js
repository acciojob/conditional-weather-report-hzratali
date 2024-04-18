import "./../styles/App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [weatherInput, setWeatherInput] = useState({
    temperature: 25,
    conditions: "Sunny",
  });
  const [textColor, setTextColor] = useState("blue");

  useEffect(() => {
    // Set text color based on temperature threshold
    if (weatherInput.temperature > 20) {
      setTextColor("red");
    } else {
      setTextColor("blue");
    }
  }, [weatherInput.temperature]);

  return (
    <div>
      {/* Do not remove the main div */}
      <div style={{ color: textColor }}>
        <p>
          Temperature: {weatherInput.temperature}&nbsp;{" "}
          {/* Ensure there's a space */}
          Conditions: {weatherInput.conditions}
        </p>
      </div>
    </div>
  );
};

export default App;
