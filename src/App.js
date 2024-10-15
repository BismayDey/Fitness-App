import React, { useState, useEffect } from "react";
import WorkoutPlan from "./components/WorkoutPlan";
import ExerciseLog from "./components/ExerciseLog";
import ProgressChart from "./components/ProgressChart";
import Header from "./components/Header";
import CustomWorkout from "./components/CustomWorkout";
import "./App.css";

function App() {
  const [log, setLog] = useState(() => {
    // Initialize from localStorage
    const savedLog = localStorage.getItem("workoutLog");
    return savedLog ? JSON.parse(savedLog) : [];
  });

  useEffect(() => {
    // Store workout log in localStorage whenever it changes
    localStorage.setItem("workoutLog", JSON.stringify(log));
  }, [log]);

  const addToLog = (workout) => {
    const date = new Date().toLocaleDateString();
    setLog([...log, { ...workout, date }]);
  };

  return (
    <div className="App">
      <Header />
      <WorkoutPlan addToLog={addToLog} />
      <CustomWorkout addToLog={addToLog} />
      <ExerciseLog log={log} />
      <ProgressChart log={log} />
    </div>
  );
}

export default App;
