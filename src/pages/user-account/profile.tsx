import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import useUsers from '@shared/hooks/useUsers';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { getUser, getUserId } from '@shared/store/users.slice';
import axiosInstance from '@utils/axiosInstance';

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const userID = useSelector(getUserId);
  const user = useSelector(getUser);
  useUsers();

  useEffect(() => {
    formik.setValues({
      FirstName: user.FirstName || '',
      LastName: user.LastName || '',
      Email: user.Email || '',
      PhoneNumber: user.PhoneNumber || '',
      DateOfBirth: user.DateOfBirth?.split('T')[0] || '',
    });
  }, [user]);

  const formik = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      PhoneNumber: '',
      DateOfBirth: '',
    },
    validationSchema: Yup.object({
      FirstName: Yup.string()
        .required('First name is required')
        .max(20, 'First name must be at most 20 characters'),
      LastName: Yup.string()
        .required('Last name is required')
        .max(20, 'Last name must be at most 20 characters'),
      Email: Yup.string().required('Email is required').email('Invalid Email address'),
      PhoneNumber: Yup.string()
        .required('Phone number is required')
        .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
      DateOfBirth: Yup.date()
        .required('Date of birth is required')
        .max(
          new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
          'You must be at least 18 years old'
        ),
    }),
    onSubmit: (values) => {
      axiosInstance
        .patch(`/users/${userID}`, {
          ...values,
          DateOfBirth: new Date(values.DateOfBirth as string).toISOString(),
        })
        .then(() => navigate('/'))
        .catch(console.error);
    },
    onReset: () => {
      formik.resetForm();
    },
  });

  useEffect(() => {
    dispatch(setTitle('profile'));
  }, [dispatch]);

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Update My Profile</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-full lg:w-1/2 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg'
      >
        <div>
          <label htmlFor='FirstName' className='block text-sm font-medium text-gray-700'>
            First Name
          </label>
          <input
            id='FirstName'
            name='FirstName'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.FirstName}
            className={`mt-1 block w-full input input-bordered ${formik.touched.FirstName && formik.errors.FirstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.FirstName && formik.errors.FirstName ? (
            <div className='text-red-500 text-sm'>{formik.errors.FirstName}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='LastName' className='block text-sm font-medium text-gray-700'>
            Last Name
          </label>
          <input
            id='LastName'
            name='LastName'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.LastName}
            className={`mt-1 block w-full input input-bordered ${formik.touched.LastName && formik.errors.LastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.LastName && formik.errors.LastName ? (
            <div className='text-red-500 text-sm'>{formik.errors.LastName}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='Email' className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            id='Email'
            name='Email'
            type='Email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Email}
            className={`mt-1 block w-full input input-bordered ${formik.touched.Email && formik.errors.Email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.Email && formik.errors.Email ? (
            <div className='text-red-500 text-sm'>{formik.errors.Email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='PhoneNumber' className='block text-sm font-medium text-gray-700'>
            Phone Number
          </label>
          <input
            id='PhoneNumber'
            name='PhoneNumber'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.PhoneNumber}
            className={`mt-1 block w-full input input-bordered ${formik.touched.PhoneNumber && formik.errors.PhoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? (
            <div className='text-red-500 text-sm'>{formik.errors.PhoneNumber}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='DateOfBirth' className='block text-sm font-medium text-gray-700'>
            Date of Birth
          </label>
          <input
            id='DateOfBirth'
            name='DateOfBirth'
            type='date'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.DateOfBirth}
            className={`mt-1 block w-full input input-bordered ${formik.touched.DateOfBirth && formik.errors.DateOfBirth ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.DateOfBirth && formik.errors.DateOfBirth ? (
            <div className='text-red-500 text-sm'>{formik.errors.DateOfBirth}</div>
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
            Update Profile
          </button>
        </div>
      </form>
    </>
  );
}

export default Profile;
