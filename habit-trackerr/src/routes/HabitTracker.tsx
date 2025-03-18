// src/routes/HabitTracker.tsx
import React, { useState } from 'react';

interface Habit {
  id: number;
  name: string;
}

const HabitTracker: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [habitInput, setHabitInput] = useState('');

  const addHabit = () => {
    if (!habitInput.trim()) return;
    const newHabit: Habit = { id: Date.now(), name: habitInput };
    setHabits([...habits, newHabit]);
    setHabitInput('');
  };

  const deleteHabit = (id: number) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Habit Tracker</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={habitInput}
          onChange={(e) => setHabitInput(e.target.value)}
          placeholder="Enter a new habit"
          className="flex-1 p-2 rounded-l-md outline-none"
        />
        <button
          onClick={addHabit}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-r-md"
        >
          Add Habit
        </button>
      </div>
      <ul>
        {habits.map((habit) => (
          <li
            key={habit.id}
            className="flex justify-between items-center bg-gray-700 p-2 mb-2 rounded"
          >
            <span>{habit.name}</span>
            <button
              onClick={() => deleteHabit(habit.id)}
              className="bg-purple-400 hover:bg-purple-500 text-gray-900 px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
