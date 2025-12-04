import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';
import AuthForm from '../components/AuthForm.jsx';

const Login = () => {
  const { login, user } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async ({ email, password }) => {
    setSubmitting(true);
    setError('');
    try {
      await login(email, password);
      const from = location.state?.from?.pathname;
      if (from) {
        navigate(from, { replace: true });
      } else if (user?.role === 'provider') {
        navigate('/dashboard/provider');
      } else {
        navigate('/dashboard/patient');
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      {error && (
        <div className="mb-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">
          {error}
        </div>
      )}
      <AuthForm mode="login" onSubmit={handleSubmit} loading={submitting} />
    </div>
  );
};

export default Login;

