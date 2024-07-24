import { useState, useEffect, FormEvent } from 'react';

function Otp() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

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
    // Handle OTP submission logic here
    console.log('OTP submitted:', otp);
    setError(''); // Clear error if OTP is submitted
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Enter OTP</h2>
      <form
        onSubmit={handleSubmit}
        className='w-full lg:w-1/2 flex flex-col p-4 bg-white rounded-lg shadow-lg'
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
      </form>
    </>
  );
}

export default Otp;
