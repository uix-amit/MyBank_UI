import { useState, useEffect, FormEvent } from 'react';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

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
    // Handle login logic here
    console.log('Logging in with:', { username, password });
    setError(''); // Clear error if login is attempted
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Login</h2>
      <form
        onSubmit={handleSubmit}
        className='w-full lg:w-1/2 flex flex-col p-4 bg-white rounded-lg shadow-lg'
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
      </form>
    </>
  );
}

export default Signin;
