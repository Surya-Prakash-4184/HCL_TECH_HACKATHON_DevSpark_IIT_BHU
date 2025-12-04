import { useState, useEffect } from 'react';

const ProfileForm = ({ initial, onSubmit, submitting }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    allergies: '',
    medications: '',
  });

  useEffect(() => {
    if (initial) {
      setForm((prev) => ({ ...prev, ...initial }));
    }
  }, [initial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded shadow-md p-6 space-y-4 max-w-lg">
      <div>
        <label className="block text-sm font-medium mb-1">Full name</label>
        <input
          name="name"
          type="text"
          className="w-full border rounded px-3 py-2 text-sm"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          name="email"
          type="email"
          disabled
          className="w-full border rounded px-3 py-2 text-sm bg-slate-100"
          value={form.email}
        />
        <p className="text-xs text-slate-500 mt-1">Email is managed by your provider.</p>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Allergies</label>
        <textarea
          name="allergies"
          rows={2}
          className="w-full border rounded px-3 py-2 text-sm"
          value={form.allergies}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Current medications</label>
        <textarea
          name="medications"
          rows={2}
          className="w-full border rounded px-3 py-2 text-sm"
          value={form.medications}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded disabled:opacity-60"
      >
        {submitting ? 'Saving...' : 'Save changes'}
      </button>
    </form>
  );
};

export default ProfileForm;

