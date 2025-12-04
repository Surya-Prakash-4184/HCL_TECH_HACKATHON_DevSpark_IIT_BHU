import { useEffect, useState } from 'react';
import { api } from '../api.js';
import GoalCard from '../components/GoalCard.jsx';
import ReminderList from '../components/ReminderList.jsx';

const PatientDashboard = () => {
  const [goals, setGoals] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadDashboard = async () => {
    try {
      setLoading(true);
      const res = await api.get('/patient/dashboard');
      setGoals(res.data.goals || []);
      setReminders(res.data.reminders || []);
    } catch (err) {
      console.error(err);
      setError('Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const handleLog = async (goalId, value) => {
    try {
      await api.post(`/patient/goals/${goalId}/log`, { value });
      await loadDashboard();
    } catch (err) {
      console.error(err);
      setError('Failed to log goal');
    }
  };

  const handleCompleteReminder = async (reminderId) => {
    try {
      await api.post(`/patient/reminders/${reminderId}/complete`);
      await loadDashboard();
    } catch (err) {
      console.error(err);
      setError('Failed to update reminder');
    }
  };

  if (loading) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My wellness today</h1>
      {error && (
        <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">
          {error}
        </div>
      )}
      <section>
        <h2 className="text-lg font-semibold mb-2">Daily goals</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {goals.map((g) => (
            <GoalCard key={g._id} goal={g} onLog={handleLog} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold mb-2">Preventive reminders</h2>
        <ReminderList reminders={reminders} onComplete={handleCompleteReminder} />
      </section>
    </div>
  );
};

export default PatientDashboard;

