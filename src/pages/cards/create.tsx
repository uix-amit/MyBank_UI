import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function CardCreate() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('Link new card'));
  }, [dispatch]);
  const formik = useFormik({
    initialValues: {
      accountID: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    },
    validationSchema: Yup.object({
      accountID: Yup.string().required('Account number is required'),
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, 'Card number must be exactly 16 digits')
        .required('Card number is required'),
      expirationDate: Yup.date()
        .min(new Date(), 'Expiration date must be in the future')
        .required('Expiration date is required'),
      cvv: Yup.string()
        .matches(/^\d{3}$/, 'CVV must be exactly 3 digits')
        .required('CVV is required'),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
    },
    onReset: () => {
      formik.resetForm();
    },
  });

  const accountIDs = [
    { value: '1234567890abcdef', label: '1234567890abcdef' },
    { value: '0987654321fedcba', label: '0987654321fedcba' },
    { value: 'abcdef1234567890', label: 'abcdef1234567890' },
    { value: 'fedcba0987654321', label: 'fedcba0987654321' },
  ];

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Link my new card</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-full lg:w-1/2 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg'
      >
        <div>
          <label htmlFor='accountID' className='block text-sm font-medium text-gray-700'>
            Account Number
          </label>
          <select
            id='accountID'
            name='accountID'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.accountID}
            className={`mt-1 block w-full select select-bordered ${formik.touched.accountID && formik.errors.accountID ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          >
            <option value=''>Select an account number</option>
            {accountIDs.map((account) => (
              <option key={account.value} value={account.value}>
                {account.label}
              </option>
            ))}
          </select>
          {formik.touched.accountID && formik.errors.accountID ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.accountID}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='cardNumber' className='block text-sm font-medium text-gray-700'>
            Card Number
          </label>
          <input
            id='cardNumber'
            name='cardNumber'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardNumber}
            className={`mt-1 block w-full input input-bordered ${formik.touched.cardNumber && formik.errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.cardNumber}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='expirationDate' className='block text-sm font-medium text-gray-700'>
            Expiration Date
          </label>
          <input
            id='expirationDate'
            name='expirationDate'
            type='date'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.expirationDate}
            className={`mt-1 block w-full input input-bordered ${formik.touched.expirationDate && formik.errors.expirationDate ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
            min={new Date().toISOString().split('T')[0]}
          />
          {formik.touched.expirationDate && formik.errors.expirationDate ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.expirationDate}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='cvv' className='block text-sm font-medium text-gray-700'>
            CVV
          </label>
          <input
            id='cvv'
            name='cvv'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cvv}
            className={`mt-1 block w-full input input-bordered ${formik.touched.cvv && formik.errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.cvv && formik.errors.cvv ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.cvv}</div>
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
            Create Card
          </button>
        </div>
      </form>
    </>
  );
}

export default CardCreate;
