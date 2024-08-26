import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import * as Yup from 'yup';

import { baseUrl } from '@utils/constants';

function Otp() {
  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema: Yup.object({
      otp: Yup.string()
        .required('OTP is required')
        .matches(/^\d{6}$/, 'OTP must be exactly 6 digits'),
    }),
    onSubmit: (values) => {
      console.log('OTP submitted:', values);
      axios
        .post(`${baseUrl}/auth/otp`, { otp: +values.otp, id: params.get('id') })
        .then(({ data }) => {
          sessionStorage.setItem('jwt', data.access_token);
          navigate('/');
        })
        .catch((error) => console.log(error));
    },
    onReset: () => {
      formik.resetForm();
    },
  });
  const [params] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div className='flex flex-col w-full lg:w-sm px-4 max-w-md m-auto'>
      <h2 className='text-4xl mb-4 text-white text-center'>Enter OTP</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-full flex gap-4 flex-col p-4 bg-white rounded-lg shadow-lg'
      >
        <div>
          <label htmlFor='otp' className='block text-sm font-medium text-gray-700'>
            OTP
          </label>
          <input
            id='otp'
            name='otp'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.otp}
            className={`mt-1 block w-full input input-bordered ${formik.touched.otp && formik.errors.otp ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.otp && formik.errors.otp ? (
            <div className='text-red-500 text-sm'>{formik.errors.otp}</div>
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
            Verify
          </button>
        </div>
        <p className='text-sm text-right m-0'>
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
