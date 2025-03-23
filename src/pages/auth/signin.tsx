import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import bgSignupImg1 from '../../../public/bgloginImg3.jpg';
import { BASE_URL } from '@utils/constants';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import myBankLogo from '../../../public/my-bank-logo.jpg';

function Signin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const [loading, setLoading] = useState(false);
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
      axios
        .post(`${BASE_URL}/auth/login`, values)
        .then(({ data }) => {
          if (data.id) {
            navigate(`/auth/2fa?id=${data.id}`);
          } else {
            sessionStorage.setItem('jwt', data.access_token);
            navigate('/');
          }
        })
        .catch(console.error);
    },
    onReset: () => {
      formik.resetForm();
    },
  });

  sessionStorage.removeItem('jwt');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgSignupImg1})` }}
    >
      <div className="flex flex-col w-full lg:w-sm px-4 max-w-md mr-5 ml-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col p-4 gap-4 bg-white rounded-lg shadow-2xl mt-8"
        >
          <img src={myBankLogo} alt="mybanklogo" className="w-25 m-auto" />
          <h2 className="text-4xl text-primary mb-4 text-center bg-gradient-to-r from-pink-500 via-pink-600 to-purple-500 bg-clip-text text-transparent">
            Login
          </h2>
          <div>
            <label
              htmlFor="username"
              className="block text-lg text-gray-500 font-semibold"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className={`mt-1 block w-full input input-bordered ${formik.touched.username && formik.errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-sm">
                {formik.errors.username}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="password"
              className="b lock text-lg text-gray-500 font-semibold"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`mt-1 block w-full input input-bordered ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </button>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <button
              type="reset"
              onClick={formik.handleReset}
              className="grow px-6 py-2 text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 rounded-lg shadow-lg hover:from-pink-400 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              // btn btn-secondary grow
            >
              Cancel
            </button>
            <button
              type="submit"
              className="grow px-6 py-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg shadow-lg hover:from-blue-400 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              // btn btn-primary
              disabled={!formik.isValid || !formik.dirty}
              // disabled={loading}
            >
              Sign in
            </button>
          </div>
          <p className="text-sm text-right m-0">
            <span>New user's please </span>
            <Link className="text-primary" to={'/auth/signup'}>
              signup here
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
