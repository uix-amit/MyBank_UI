import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function Profile() {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    firstName: 'Alexander',
    lastName: 'Day',
    email: 'amit@uiexplorer.com',
    phoneNumber: '9967069257',
    dateOfBirth: '1992-06-16',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
  });

  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const validateDateOfBirth = (dob: string) => {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    return age > 18 || (age === 18 && monthDifference >= 0);
  };

  useEffect(() => {
    dispatch(setTitle('profile'));
    const { firstName, lastName, email, phoneNumber, dateOfBirth } = formData;
    const newErrors = {
      firstName: firstName ? '' : 'First Name is required',
      lastName: lastName ? '' : 'Last Name is required',
      email: validateEmail(email) ? '' : 'Invalid email address',
      phoneNumber: validatePhoneNumber(phoneNumber) ? '' : 'Phone Number must be 10 digits',
      dateOfBirth: validateDateOfBirth(dateOfBirth) ? '' : 'You must be at least 18 years old',
    };
    setErrors(newErrors);
    const isFormValid =
      firstName &&
      lastName &&
      validateEmail(email) &&
      validatePhoneNumber(phoneNumber) &&
      validateDateOfBirth(dateOfBirth);
    setIsValid(isFormValid as boolean);
  }, [formData, dispatch]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Update My Profile</h2>
      <form
        onSubmit={handleSubmit}
        className='w-full lg:w-1/2 flex flex-col p-4 bg-white rounded-lg shadow-lg'
      >
        <div className='form-control mb-4'>
          <label className='label'>
            <span className='label-text'>First Name</span>
          </label>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            required
            className='input input-bordered'
          />
          {errors.firstName && (
            <span className='text-red-500 text-sm mt-1'>{errors.firstName}</span>
          )}
        </div>
        <div className='form-control mb-4'>
          <label className='label'>
            <span className='label-text'>Last Name</span>
          </label>
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            required
            className='input input-bordered'
          />
          {errors.lastName && <span className='text-red-500 text-sm mt-1'>{errors.lastName}</span>}
        </div>
        <div className='form-control mb-4'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='input input-bordered'
          />
          {errors.email && <span className='text-red-500 text-sm mt-1'>{errors.email}</span>}
        </div>
        <div className='form-control mb-4'>
          <label className='label'>
            <span className='label-text'>Phone Number</span>
          </label>
          <input
            type='text'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className='input input-bordered'
            maxLength={10}
          />
          {errors.phoneNumber && (
            <span className='text-red-500 text-sm mt-1'>{errors.phoneNumber}</span>
          )}
        </div>
        <div className='form-control mb-4'>
          <label className='label'>
            <span className='label-text'>Date of Birth</span>
          </label>
          <input
            type='date'
            name='dateOfBirth'
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className='input input-bordered'
          />
          {errors.dateOfBirth && (
            <span className='text-red-500 text-sm mt-1'>{errors.dateOfBirth}</span>
          )}
        </div>
        <div className='flex flex-col-reverse lg:flex-row gap-4'>
          <button type='reset' className='btn-secondary btn grow'>
            Cancel
          </button>
          <button
            type='submit'
            disabled={!isValid}
            className={`btn grow ${isValid ? 'btn-primary' : 'btn-disabled'}`}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Profile;
