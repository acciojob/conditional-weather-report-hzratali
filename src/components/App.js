import React from "react";
import "./../styles/App.css";

const WeatherApp = ({ weather }) => {
  const { temperature, conditions } = weather;
  const threshold = 20;

  const temperatureColor = temperature > threshold ? "red" : "blue";

  return (
    <div>
      <h2>Current Weather</h2>
      <p>
        Temperature:{" "}
        <span style={{ color: temperatureColor }}>{temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

const App = () => {
  const weatherInput = { temperature: 25, conditions: "Sunny" };

  return (
    <div>
      <WeatherApp weather={weatherInput} />
    </div>
  );
};
export default App;
