import { useState } from 'react';

const GoalCard = ({ goal, onLog }) => {
  const [value, setValue] = useState('');
  const latestLog = goal.logs?.[goal.logs.length - 1];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    onLog(goal._id, Number(value));
    setValue('');
  };

  return (
    <div className="bg-white rounded shadow-sm p-4 text-sm">
      <h3 className="font-semibold mb-1 capitalize">{goal.type}</h3>
      <p className="text-slate-700 mb-1">
        Target: {goal.target} {goal.unit}
      </p>
      {latestLog && (
        <p className="text-xs text-slate-500 mb-2">
          Last logged: {latestLog.value} {goal.unit} on{' '}
          {new Date(latestLog.date).toLocaleDateString()}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-24 border rounded px-2 py-1 text-xs"
          placeholder="Today"
        />
        <button
          type="submit"
          className="text-xs px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Log
        </button>
      </form>
    </div>
  );
};

export default GoalCard;

