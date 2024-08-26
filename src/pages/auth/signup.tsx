import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      userName: '',
      password: '',
      confirmPassword: '',
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
      userName: Yup.string()
        .required('Username is required')
        .min(4, 'Username must be at least 4 characters long'),
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
      console.log('Form data', values);
    },
    onReset: () => {
      formik.resetForm();
    },
  });

  return (
    <div className='flex flex-col w-full lg:w-sm px-4 max-w-md m-auto my-6'>
      <h2 className='text-4xl mb-4 text-white text-center'>Register Here</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-full flex flex-col p-4 gap-4 bg-white rounded-lg shadow-lg'
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

        <div>
          <label htmlFor='userName' className='block text-sm font-medium text-gray-700'>
            Username
          </label>
          <input
            id='userName'
            name='userName'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
            className={`mt-1 block w-full input input-bordered ${formik.touched.userName && formik.errors.userName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className='text-red-500 text-sm'>{formik.errors.userName}</div>
          ) : null}
        </div>

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
          <button type='reset' onClick={formik.handleReset} className='btn btn-secondary grow'>
            Cancel
          </button>
          <button
            type='submit'
            className='btn btn-primary grow'
            disabled={!formik.isValid || !formik.dirty}
          >
            Sign up
          </button>
        </div>
        <p className='text-sm text-right m-0'>
          <span>Existing user's please </span>
          <Link className='text-primary' to={'../'}>
            login here
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

export default Signup;
