import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { baseUrl } from '@utils/constants';

function Signin() {
  const [username, setUsername] = useState('uiexplorer1');
  const [password, setPassword] = useState('Password@123');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if both fields are filled
    if (username && password) {
      setError('');
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [username, password]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }
    setError('');
    axios
      .post(`${baseUrl}/auth/login`, { username, password })
      .then(({ data }) => navigate(`/auth/2fa?id=${data.id}`))
      .catch((error) => console.log(error));
  };

  return (
    <div className='flex flex-col w-full lg:w-sm px-4 max-w-md m-auto'>
      <h2 className='text-4xl mb-4 text-white text-center'>Login</h2>
      <form
        onSubmit={handleSubmit}
        className='w-full flex flex-col p-4 bg-white rounded-lg shadow-lg'
      >
        <div className='form-control mb-4'>
          <label className='label'>
            <span className='label-text'>Username</span>
          </label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className='input input-bordered'
          />
        </div>

        <div className='form-control mb-4'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='input input-bordered'
          />
        </div>

        {error && <span className='text-red-500 mb-4'>{error}</span>}

        <button
          type='submit'
          disabled={!isValid}
          className={`btn ${isValid ? 'btn-primary' : 'btn-disabled'}`}
        >
          Login
        </button>
        <p className='text-sm text-right m-0 mt-4'>
          <span>New user's please </span>
          <Link className='text-primary' to={'/auth/signup'}>
            signup here
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

export default Signin;
