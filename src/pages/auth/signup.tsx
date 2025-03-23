import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import bgSignupImg1 from '../../../public/bgloginImg3.jpg';
import userApi from '@shared/api/userApi';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [createUser] = userApi.useCreateUserMutation();
  const formik = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      PhoneNumber: '',
      DateOfBirth: '',
      UserName: '',
      Password: '',
      ConfirmPassword: '',
    },
    validationSchema: Yup.object({
      FirstName: Yup.string()
        .required('First name is required')
        .max(20, 'First name must be at most 20 characters'),
      LastName: Yup.string()
        .required('Last name is required')
        .max(20, 'Last name must be at most 20 characters'),
      Email: Yup.string()
        .required('Email is required')
        .email('Invalid Email address'),
      PhoneNumber: Yup.string()
        .required('Phone number is required')
        .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
      DateOfBirth: Yup.date()
        .required('Date of birth is required')
        .max(
          new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
          'You must be at least 18 years old'
        ),
      UserName: Yup.string()
        .required('UserName is required')
        .min(4, 'UserName must be at least 4 characters long'),
      Password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .max(32, 'Password must be at most 32 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(
          /[\W_]/,
          'Password must contain at least one special character'
        ),
      ConfirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('Password'), ''], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { ConfirmPassword, ...payload } = values;

      createUser({
        ...payload,
        DateOfBirth: new Date(values.DateOfBirth).toISOString(),
      });
      navigate('/auth/signin');
    },
    onReset: () => {
      formik.resetForm();
    },
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgSignupImg1})` }}
    >
      <div className="flex flex-col justify-end w-full px-4 max-w-md mr-5 ml-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col p-4 gap-4 bg-white rounded-lg shadow-2xl mt-8"
        >
          <h2 className="text-4xl text-primary mb-4 text-center bg-gradient-to-r from-pink-500 via-pink-600 to-purple-500 bg-clip-text text-transparent">
            Register Here
          </h2>
          <div className="flex gap-4">
            <div className="w-full">
              <label
                htmlFor="FirstName"
                className="block text-lg text-gray-500 font-semibold"
              >
                First Name
              </label>
              <input
                id="FirstName"
                name="FirstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.FirstName}
                className={`mt-1 block w-full input input-bordered ${formik.touched.FirstName && formik.errors.FirstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
              />
              {formik.touched.FirstName && formik.errors.FirstName ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.FirstName}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              <label
                htmlFor="LastName"
                className="block text-lg text-gray-500 font-semibold"
              >
                Last Name
              </label>
              <input
                id="LastName"
                name="LastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.LastName}
                className={`mt-1 block w-full input input-bordered ${formik.touched.LastName && formik.errors.LastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
              />
              {formik.touched.LastName && formik.errors.LastName ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.LastName}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <label
              htmlFor="Email"
              className="block text-lg text-gray-500 font-semibold"
            >
              Email
            </label>
            <input
              id="Email"
              name="Email"
              type="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Email}
              className={`mt-1 block w-full input input-bordered ${formik.touched.Email && formik.errors.Email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
            />
            {formik.touched.Email && formik.errors.Email ? (
              <div className="text-red-500 text-sm">{formik.errors.Email}</div>
            ) : null}
          </div>

          <div className="flex gap-4">
            <div>
              <label
                htmlFor="PhoneNumber"
                className="block text-lg text-gray-500 font-semibold"
              >
                Phone Number
              </label>
              <input
                id="PhoneNumber"
                name="PhoneNumber"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.PhoneNumber}
                className={`mt-1 block w-full input input-bordered ${formik.touched.PhoneNumber && formik.errors.PhoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
              />
              {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.PhoneNumber}
                </div>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="DateOfBirth"
                className="block text-lg text-gray-500 font-semibold"
              >
                Date of Birth
              </label>
              <input
                id="DateOfBirth"
                name="DateOfBirth"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.DateOfBirth}
                className={`mt-1 block w-full input input-bordered ${formik.touched.DateOfBirth && formik.errors.DateOfBirth ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
              />
              {formik.touched.DateOfBirth && formik.errors.DateOfBirth ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.DateOfBirth}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <label
              htmlFor="UserName"
              className="block text-lg text-gray-500 font-semibold"
            >
              UserName
            </label>
            <input
              id="UserName"
              name="UserName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.UserName}
              className={`mt-1 block w-full input input-bordered ${formik.touched.UserName && formik.errors.UserName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
            />
            {formik.touched.UserName && formik.errors.UserName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.UserName}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="Password"
              className="block text-lg text-gray-500 font-semibold"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="Password"
                name="Password"
                type={showPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Password}
                className={`mt-1 block w-full input input-bordered ${formik.touched.Password && formik.errors.Password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
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
            {formik.touched.Password && formik.errors.Password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.Password}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="ConfirmPassword"
              className="block text-lg text-gray-500 font-semibold"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="ConfirmPassword"
                name="ConfirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ConfirmPassword}
                className={`mt-1 block w-full input input-bordered ${formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </button>
            </div>
            {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? (
              <div className="text-red-500 text-sm">
                {formik.errors.ConfirmPassword}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <button
              type="reset"
              onClick={formik.handleReset}
              className="grow px-6 py-2 text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 rounded-lg shadow-lg hover:from-pink-400 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              // btn btn-secondary
            >
              Cancel
            </button>
            <button
              type="submit"
              className="grow px-6 py-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg shadow-lg hover:from-blue-400 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              disabled={!formik.isValid || !formik.dirty}
            >
              Sign up
            </button>
          </div>
          <p className="text-sm text-right m-0">
            <span>Existing user's please </span>
            <Link className="text-primary" to={'../'}>
              login here
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
