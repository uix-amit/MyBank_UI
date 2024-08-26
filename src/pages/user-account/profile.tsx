import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

function Profile() {
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('First name is required')
        .max(20, 'First name must be at most 20 characters'),
      lastName: Yup.string()
        .required('Last name is required')
        .max(20, 'Last name must be at most 20 characters'),
      email: Yup.string().required('Email is required').email('Invalid email address'),
      phoneNumber: Yup.string()
        .required('Phone number is required')
        .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
      dateOfBirth: Yup.date()
        .required('Date of birth is required')
        .max(
          new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
          'You must be at least 18 years old'
        ),
    }),
    onSubmit: (values) => {
      console.log('Profile updated:', values);
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
          <label htmlFor='firstName' className='block text-sm font-medium text-gray-700'>
            First Name
          </label>
          <input
            id='firstName'
            name='firstName'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className={`mt-1 block w-full input input-bordered ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className='text-red-500 text-sm'>{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='lastName' className='block text-sm font-medium text-gray-700'>
            Last Name
          </label>
          <input
            id='lastName'
            name='lastName'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className={`mt-1 block w-full input input-bordered ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className='text-red-500 text-sm'>{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`mt-1 block w-full input input-bordered ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='text-red-500 text-sm'>{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='phoneNumber' className='block text-sm font-medium text-gray-700'>
            Phone Number
          </label>
          <input
            id='phoneNumber'
            name='phoneNumber'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className={`mt-1 block w-full input input-bordered ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className='text-red-500 text-sm'>{formik.errors.phoneNumber}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='dateOfBirth' className='block text-sm font-medium text-gray-700'>
            Date of Birth
          </label>
          <input
            id='dateOfBirth'
            name='dateOfBirth'
            type='date'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth}
            className={`mt-1 block w-full input input-bordered ${formik.touched.dateOfBirth && formik.errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
            <div className='text-red-500 text-sm'>{formik.errors.dateOfBirth}</div>
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
