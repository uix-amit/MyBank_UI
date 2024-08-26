import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function Preference() {
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      currency: '',
      twoFAEnabled: false,
      smsEnabled: false,
      emailEnabled: false,
    },
    validationSchema: Yup.object({
      currency: Yup.string().required('Currency is required'),
      twoFAEnabled: Yup.boolean().required('Two-factor authentication is required'),
      smsEnabled: Yup.boolean().required('SMS notifications are required'),
      emailEnabled: Yup.boolean().required('Email notifications are required'),
    }),
    onSubmit: (values) => {
      console.log('Profile updated:', values);
    },
    onReset: () => {
      formik.resetForm();
    },
  });

  useEffect(() => {
    dispatch(setTitle('preferences'));
  }, [dispatch]);

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Update My Preferences</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-full lg:w-1/2 flex flex-col gap-4 bg-white p-4 rounded-lg shadow-lg'
      >
        <div>
          <label htmlFor='currency' className='block text-sm font-medium text-gray-700'>
            Currency
          </label>
          <select
            id='currency'
            name='currency'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.currency}
            className={`mt-1 block w-full select select-bordered ${formik.touched.currency && formik.errors.currency ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          >
            <option value=''>Select a currency</option>
            <option value='inr'>INR</option>
            <option value='gbp'>GBP</option>
            <option value='usd'>USD</option>
            <option value='aud'>AUD</option>
            <option value='jpy'>JPY</option>
            <option value='eur'>EUR</option>
          </select>
          {formik.touched.currency && formik.errors.currency ? (
            <div className='text-red-500 text-sm'>{formik.errors.currency}</div>
          ) : null}
        </div>
        <h3 className='text-base font-bold'>Two Factor Authentication Setting</h3>
        <div className='flex items-center justify-between'>
          <label htmlFor='twoFAEnabled' className='mr-2'>
            Enable Two-Factor Authentication
          </label>
          <input
            id='twoFAEnabled'
            name='twoFAEnabled'
            type='checkbox'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.twoFAEnabled}
            className={`toggle toggle-primary ${formik.touched.twoFAEnabled && formik.errors.twoFAEnabled ? 'border-red-500' : ''}`}
          />
          {formik.touched.twoFAEnabled && formik.errors.twoFAEnabled ? (
            <div className='text-red-500 text-sm'>{formik.errors.twoFAEnabled}</div>
          ) : null}
        </div>
        <h3 className='text-base font-bold'>Notification Settings</h3>
        <div className='flex items-center justify-between'>
          <label htmlFor='smsEnabled' className='mr-2'>
            Enable SMS Notifications
          </label>
          <input
            id='smsEnabled'
            name='smsEnabled'
            type='checkbox'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.smsEnabled}
            className={`toggle toggle-primary ${formik.touched.smsEnabled && formik.errors.smsEnabled ? 'border-red-500' : ''}`}
          />
          {formik.touched.smsEnabled && formik.errors.smsEnabled ? (
            <div className='text-red-500 text-sm'>{formik.errors.smsEnabled}</div>
          ) : null}
        </div>
        <div className='flex items-center justify-between'>
          <label htmlFor='emailEnabled' className='mr-2'>
            Enable Email Notifications
          </label>
          <input
            id='emailEnabled'
            name='emailEnabled'
            type='checkbox'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.emailEnabled}
            className={`toggle toggle-primary ${formik.touched.emailEnabled && formik.errors.emailEnabled ? 'border-red-500' : ''}`}
          />
          {formik.touched.emailEnabled && formik.errors.emailEnabled ? (
            <div className='text-red-500 text-sm'>{formik.errors.emailEnabled}</div>
          ) : null}
        </div>
        <div className='flex flex-col-reverse lg:flex-row gap-4'>
          <button type='reset' className='btn-secondary btn grow'>
            Cancel
          </button>
          <button
            type='submit'
            disabled={!formik.isValid || !formik.dirty}
            className={`btn grow ${formik.isValid ? 'btn-primary' : 'btn-disabled'}`}
          >
            Update Preferences
          </button>
        </div>
      </form>
    </>
  );
}

export default Preference;
