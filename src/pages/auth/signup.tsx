import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { differenceInYears } from 'date-fns';
import { useState, useEffect, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

function Signup() {
  const dispatch = useDispatch<AppDispatch>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formData, setFormData]: any = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [errors, setErrors]: any = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    dispatch(setTitle('Sign Up'));
    // Password validation regex
    const passwordValidationRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newErrors: any = {};
    const dob = new Date(formData.dateOfBirth);

    // Validate required fields
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required.`;
      }
    }

    // Validate email
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid.';
    }

    // Validate phone number
    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be exactly 10 digits.';
    }

    // Validate date of birth
    if (formData.dateOfBirth && differenceInYears(new Date(), dob) < 18) {
      newErrors.dateOfBirth = 'You must be at least 18 years old.';
    }

    // Validate password
    if (formData.password && !passwordValidationRegex.test(formData.password)) {
      newErrors.password =
        'Password must be at least 8 characters long, contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character.';
    }

    // Validate confirm password
    if (formData.confirmPassword && formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [dispatch, formData]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isValid) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Register Here</h2>
      <form
        onSubmit={handleSubmit}
        className='w-full lg:w-1/2 flex flex-col p-4 bg-white rounded-lg shadow-lg'
      >
        {Object.keys(formData).map((key) => (
          <div className='form-control mb-4' key={key}>
            <label className='label capitalize'>
              <span className='label-text'>{key.replace(/([A-Z])/g, ' $1')}</span>
            </label>
            <input
              type={
                key === 'password' || key === 'confirmPassword'
                  ? 'password'
                  : key === 'email'
                    ? 'email'
                    : key === 'dateOfBirth'
                      ? 'date'
                      : 'text'
              }
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
              className='input input-bordered'
            />
            {errors[key] && <span className='text-red-500 text-sm'>{errors[key]}</span>}
          </div>
        ))}

        <button
          type='submit'
          disabled={!isValid}
          className={`btn ${isValid ? 'btn-primary' : 'btn-disabled'}`}
        >
          Sign Up
        </button>
      </form>
    </>
  );
}

export default Signup;
