import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold mb-2">Stay ahead with preventive care</h1>
        <p className="text-sm text-slate-700 max-w-2xl">
          This simple wellness portal helps patients track daily goals like steps, water, and sleep,
          and keeps preventive checkups on your radar. Providers can quickly see which patients
          might need a nudge.
        </p>
      </section>
      <section className="flex gap-4">
        <Link
          to="/register"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
        >
          Get started
        </Link>
        <Link
          to="/login"
          className="border border-blue-600 text-blue-700 hover:bg-blue-50 text-sm font-medium px-4 py-2 rounded"
        >
          I already have an account
        </Link>
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-3 text-sm">
        <div className="bg-white rounded shadow-sm p-4">
          <h2 className="font-semibold mb-1">Daily habits</h2>
          <p className="text-slate-700">
            Log simple habits like steps, water, and sleep to build a picture of your wellness
            over time.
          </p>
        </div>
        <div className="bg-white rounded shadow-sm p-4">
          <h2 className="font-semibold mb-1">Preventive reminders</h2>
          <p className="text-slate-700">
            Keep track of annual wellness visits and other preventive care, so nothing slips
            through the cracks.
          </p>
        </div>
        <div className="bg-white rounded shadow-sm p-4">
          <h2 className="font-semibold mb-1">Provider view</h2>
          <p className="text-slate-700">
            Providers see a simple compliance snapshot across their assigned patients to focus
            outreach.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landing;

