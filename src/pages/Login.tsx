import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de autenticação aqui
    navigate('/home');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <form
        onSubmit={handleLogin}
        className="bg-white p-4 rounded shadow-sm w-100"
        style={{ maxWidth: '400px' }}
      >
        <h2 className="mb-4 text-primary">Login</h2>
        <div className="mb-3">
          <label className="form-label text-primary">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label text-primary">Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button
          type="submit"
          className="btn btn-primary bg-primary text-black w-100"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
