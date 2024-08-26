import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { baseUrl } from '@utils/constants';

function Signin() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
      axios
        .post(`${baseUrl}/auth/login`, values)
        .then(({ data }) => navigate(`/auth/2fa?id=${data.id}`))
        .catch((error) => console.log(error));
    },
    onReset: () => {
      formik.resetForm();
    },
  });

  return (
    <div className='flex flex-col w-full lg:w-sm px-4 max-w-md m-auto'>
      <h2 className='text-4xl mb-4 text-white text-center'>Login</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-full flex flex-col p-4 gap-4 bg-white rounded-lg shadow-lg'
      >
        <div>
          <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
            Username
          </label>
          <input
            id='username'
            name='username'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className={`mt-1 block w-full input input-bordered ${formik.touched.username && formik.errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className='text-red-500 text-sm'>{formik.errors.username}</div>
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

        <div className='flex flex-col-reverse lg:flex-row gap-4'>
          <button type='reset' onClick={formik.handleReset} className='btn btn-secondary grow'>
            Cancel
          </button>
          <button
            type='submit'
            className='btn btn-primary grow'
            disabled={!formik.isValid || !formik.dirty}
          >
            Sign in
          </button>
        </div>
        <p className='text-sm text-right m-0'>
          <span>New user's please </span>
          <Link className='text-primary' to={'/auth/signup'}>
            signup here
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

export default Signin;
