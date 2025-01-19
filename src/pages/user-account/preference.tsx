import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import axiosInstance from '@utils/axiosInstance';

function Preference() {
  const [accountPreferenceID, setAccountPreferenceID] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      EnableTwoFactorAuth: false,
      SMSNotifications: false,
      EmailNotifications: false,
    },
    validationSchema: Yup.object({
      EnableTwoFactorAuth: Yup.boolean().notRequired(),
      SMSNotifications: Yup.boolean().notRequired(),
      EmailNotifications: Yup.boolean().notRequired(),
    }),
    onSubmit: (values) => {
      axiosInstance
        .patch(`account-preferences/${accountPreferenceID}`, values)
        .then(() => navigate('/'))
        .catch(console.error);
    },
    onReset: () => {
      formik.resetForm();
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCheckboxChange = (event: any) => {
    formik.setFieldValue(event.target.name, event.target.checked);
  };

  useEffect(() => {
    dispatch(setTitle('preferences'));
  }, [dispatch]);

  useEffect(() => {
    axiosInstance
      .get('/account-preferences')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((preferences: any) => {
        setAccountPreferenceID(preferences.AccountPreferenceID);
        formik.setValues(preferences);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Update My Preferences</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-full lg:w-1/2 flex flex-col gap-4 bg-white p-4 rounded-lg shadow-lg'
      >
        <h3 className='text-base font-bold'>Two Factor Authentication Setting</h3>
        <pre>{formik.values.EnableTwoFactorAuth}</pre>
        <div className='flex items-center justify-between'>
          <label htmlFor='EnableTwoFactorAuth' className='mr-2'>
            Enable Two-Factor Authentication {formik.values.EnableTwoFactorAuth}
          </label>
          <input
            id='EnableTwoFactorAuth'
            name='EnableTwoFactorAuth'
            type='checkbox'
            onChange={handleCheckboxChange}
            onBlur={formik.handleBlur}
            checked={formik.values.EnableTwoFactorAuth}
            className={`toggle toggle-primary ${formik.touched.EnableTwoFactorAuth && formik.errors.EnableTwoFactorAuth ? 'border-red-500' : ''}`}
          />
          {formik.touched.EnableTwoFactorAuth && formik.errors.EnableTwoFactorAuth ? (
            <div className='text-red-500 text-sm'>{formik.errors.EnableTwoFactorAuth}</div>
          ) : null}
        </div>
        <h3 className='text-base font-bold'>Notification Settings</h3>
        <div className='flex items-center justify-between'>
          <label htmlFor='SMSNotifications' className='mr-2'>
            Enable SMS Notifications
          </label>
          <input
            id='SMSNotifications'
            name='SMSNotifications'
            type='checkbox'
            onChange={handleCheckboxChange}
            onBlur={formik.handleBlur}
            checked={formik.values.SMSNotifications}
            className={`toggle toggle-primary ${formik.touched.SMSNotifications && formik.errors.SMSNotifications ? 'border-red-500' : ''}`}
          />
          {formik.touched.SMSNotifications && formik.errors.SMSNotifications ? (
            <div className='text-red-500 text-sm'>{formik.errors.SMSNotifications}</div>
          ) : null}
        </div>
        <div className='flex items-center justify-between'>
          <label htmlFor='EmailNotifications' className='mr-2'>
            Enable Email Notifications
          </label>
          <input
            id='EmailNotifications'
            name='EmailNotifications'
            type='checkbox'
            onChange={handleCheckboxChange}
            onBlur={formik.handleBlur}
            checked={formik.values.EmailNotifications}
            className={`toggle toggle-primary ${formik.touched.EmailNotifications && formik.errors.EmailNotifications ? 'border-red-500' : ''}`}
          />
          {formik.touched.EmailNotifications && formik.errors.EmailNotifications ? (
            <div className='text-red-500 text-sm'>{formik.errors.EmailNotifications}</div>
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
