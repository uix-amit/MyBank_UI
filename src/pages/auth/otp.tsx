import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { baseUrl } from '@utils/constants';

function Otp() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Validate OTP: must be exactly 6 digits
    if (/^\d{6}$/.test(otp)) {
      setError('');
      setIsValid(true);
    } else {
      setIsValid(false);
      setError(otp ? 'OTP must be exactly 6 digits.' : 'OTP is required.');
    }
  }, [otp]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    axios
      .post(`${baseUrl}/auth/otp`, { otp: +otp, id: params.get('id') })
      .then(({ data }) => {
        sessionStorage.setItem('jwt', data.access_token);
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='flex flex-col w-full lg:w-sm px-4 max-w-md m-auto'>
      <h2 className='text-4xl mb-4 text-white text-center'>Enter OTP</h2>
      <form
        onSubmit={handleSubmit}
        className='w-full flex flex-col p-4 bg-white rounded-lg shadow-lg'
      >
        <div className='form-control mb-4'>
          <label className='label'>
            <span className='label-text'>OTP</span>
          </label>
          <input
            type='text'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className='input input-bordered'
            maxLength={6} // Limit input to 6 characters
          />
          {error && <span className='text-red-500'>{error}</span>}
        </div>

        <button
          type='submit'
          disabled={!isValid}
          className={`btn ${isValid ? 'btn-primary' : 'btn-disabled'}`}
        >
          Submit
        </button>
        <p className='text-sm text-right m-0 mt-4'>
          <span>To resend OTP please </span>
          <Link className='text-primary' to={'../'}>
            click here
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

export default Otp;
