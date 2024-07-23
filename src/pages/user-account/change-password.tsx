import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function ChangePassword() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('change password'));
  }, [dispatch]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Password validation regex
    const passwordValidationRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate that passwords match and meet complexity requirements
    if (password && confirmPassword) {
      if (!passwordValidationRegex.test(password)) {
        setError(
          'Password must be at least 8 characters long, contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character.'
        );
        setIsValid(false);
      } else if (password !== confirmPassword) {
        setError('Passwords do not match.');
        setIsValid(false);
      } else {
        setError('');
        setIsValid(true);
      }
    } else {
      setError('Both fields are required.');
      setIsValid(false);
    }
  }, [password, confirmPassword]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle password change logic here
    console.log('Password changed:', password);
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Change My Password</h2>
      <form
        onSubmit={handleSubmit}
        className='w-full lg:w-1/2 flex flex-col bg-white p-4 rounded-lg shadow-lg'
      >
        <div className='form-control mb-4'>
          <label className='label'>
            <span className='label-text'>New Password</span>
          </label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='input input-bordered'
          />
        </div>

        <div className={`form-control ${error ? 'mb-1' : 'mb-4'}`}>
          <label className='label'>
            <span className='label-text'>Confirm Password</span>
          </label>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className='input input-bordered'
          />
        </div>

        {error && <span className='text-red-500 text-sm mb-4'>{error}</span>}

        <button
          type='submit'
          disabled={!isValid}
          className={`btn ${isValid ? 'btn-primary' : 'btn-disabled'}`}
        >
          Change Password
        </button>
      </form>
    </>
  );
}

export default ChangePassword;
