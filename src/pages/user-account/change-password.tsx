import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function ChangePassword() {
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .max(32, 'Password must be at most 32 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[\W_]/, 'Password must contain at least one special character'),
      confirmPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password'), ''], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      console.log('Password updated:', values);
    },
    onReset: () => {
      formik.resetForm();
    },
  });

  useEffect(() => {
    dispatch(setTitle('change password'));
  }, [dispatch]);

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Change My Password</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-full lg:w-1/2 flex gap-4 flex-col bg-white p-4 rounded-lg shadow-lg'
      >
        <div>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
            Password
          </label>
          <input
            id='password'
            name='password'
            type='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`mt-1 block w-full input input-bordered ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className='text-red-500 text-sm'>{formik.errors.password}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>
            Confirm Password
          </label>
          <input
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className={`mt-1 block w-full input input-bordered ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className='text-red-500 text-sm'>{formik.errors.confirmPassword}</div>
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
            Update Password
          </button>
        </div>
      </form>
    </>
  );
}

export default ChangePassword;
