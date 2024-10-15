import React from "react";

const ExerciseLog = ({ log }) => {
  return (
    <div>
      <h2>Exercise Log</h2>
      {log.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        log.map((workout, index) => (
          <div key={index} className="log-entry">
            <h3>{workout.name}</h3>
            <p>Date: {workout.date}</p>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ExerciseLog;
