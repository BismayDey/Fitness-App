import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faRunning,
  faSwimmer,
  faBiking,
} from "@fortawesome/free-solid-svg-icons";

const workoutPlans = [
  { name: "Push Ups", sets: 3, reps: 15, icon: faDumbbell },
  { name: "Running", sets: 1, reps: "30 min", icon: faRunning },
  { name: "Swimming", sets: 1, reps: "20 min", icon: faSwimmer },
  { name: "Cycling", sets: 1, reps: "45 min", icon: faBiking },
];

const WorkoutPlan = ({ addToLog }) => {
  const handleAdd = (workout) => {
    const date = new Date().toLocaleDateString();
    addToLog({ ...workout, date });
  };

  return (
    <div>
      <h2>Workout Plans</h2>
      {workoutPlans.map((workout, index) => (
        <div key={index} className="workout">
          <FontAwesomeIcon
            icon={workout.icon}
            size="2x"
            style={{ color: "#007bff" }}
          />
          <h3>{workout.name}</h3>
          <p>Sets: {workout.sets}</p>
          <p>Reps: {workout.reps}</p>
          <button onClick={() => handleAdd(workout)}>Add to Log</button>
        </div>
      ))}
    </div>
  );
};

export default WorkoutPlan;
