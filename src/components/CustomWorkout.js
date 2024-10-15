import React, { useState } from "react";

const CustomWorkout = ({ addToLog }) => {
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const handleAddWorkout = () => {
    if (name && sets && reps) {
      const workout = { name, sets: parseInt(sets), reps };
      addToLog(workout);
      setName("");
      setSets("");
      setReps("");
    }
  };

  return (
    <div className="custom-workout">
      <h2>Add Custom Workout</h2>
      <div>
        <input
          type="text"
          placeholder="Workout Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />
        <input
          type="text"
          placeholder="Reps (or Time)"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <button onClick={handleAddWorkout}>Add Workout</button>
      </div>
    </div>
  );
};

export default CustomWorkout;
