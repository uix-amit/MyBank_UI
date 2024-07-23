import { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function Preference() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('preferences'));
  }, [dispatch]);

  const [currency, setCurrency] = useState('INR');
  const [twoFAEnabled, setTwoFAEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCurrencyChange = (e: any) => {
    setCurrency(e.target.value);
  };

  const handleTwoFAEnabledToggle = () => {
    setTwoFAEnabled(!twoFAEnabled);
  };

  const handleSmsToggle = () => {
    setSmsEnabled(!smsEnabled);
  };

  const handleEmailToggle = () => {
    setEmailEnabled(!emailEnabled);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { currency, twoFAEnabled, smsEnabled, emailEnabled });
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Update My Preferences</h2>
      <form
        onSubmit={handleSubmit}
        className='w-full lg:w-1/2 flex flex-col bg-white p-4 rounded-lg shadow-lg'
      >
        <div className='form-control mb-4'>
          <label className='label'>
            <span className='label-text'>Select Currency</span>
          </label>
          <select
            value={currency}
            onChange={handleCurrencyChange}
            className='select select-bordered'
          >
            <option value='INR'>INR</option>
            <option value='GBP'>GBP</option>
            <option value='USD'>USD</option>
            <option value='AUD'>AUD</option>
            <option value='JPY'>JPY</option>
            <option value='EUR'>EUR</option>
          </select>
        </div>
        <h3 className='text-base font-bold mb-4'>Two Factor Authentication Setting</h3>
        <div className='form-control mb-4'>
          <label className='label cursor-pointer'>
            <span className='label-text'>Enable Two Factor Authentication</span>
            <input
              type='checkbox'
              checked={twoFAEnabled}
              onChange={handleTwoFAEnabledToggle}
              className='toggle toggle-primary'
            />
          </label>
        </div>
        <h3 className='text-base font-bold mb-4'>Notification Settings</h3>
        <div className='form-control mb-4'>
          <label className='label cursor-pointer'>
            <span className='label-text'>SMS</span>
            <input
              type='checkbox'
              checked={smsEnabled}
              onChange={handleSmsToggle}
              className='toggle toggle-primary'
            />
          </label>
        </div>

        <div className='form-control mb-4'>
          <label className='label cursor-pointer'>
            <span className='label-text'>Email</span>
            <input
              type='checkbox'
              checked={emailEnabled}
              onChange={handleEmailToggle}
              className='toggle toggle-primary'
            />
          </label>
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </>
  );
}

export default Preference;
