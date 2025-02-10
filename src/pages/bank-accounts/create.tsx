import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import useBanks from '@shared/hooks/useBanks';
import { getBanks } from '@shared/store/banks.slice';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import axiosInstance from '@utils/axiosInstance';
import { CURRENCIES, STATUSES } from '@utils/constants';

function BankAccountCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const banks = useSelector(getBanks);
  useBanks();

  useEffect(() => {
    dispatch(setTitle('link savings account'));
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      BankID: '',
      AccountNumber: '',
      Balance: '',
      Currency: '',
      Status: '',
    },
    validationSchema: Yup.object({
      BankID: Yup.string().required('Bank is required'),
      AccountNumber: Yup.string()
        .matches(/^\d{16}$/, 'Account number must be exactly 16 digits')
        .required('Account number is required'),
      Balance: Yup.string()
        .matches(
          /^(?!0\d)\d*\.?\d{0,2}$/,
          'Balance must be a valid number with up to 2 decimal places'
        )
        .required('Balance is required')
        .test('positive', 'Balance must be a positive number', (value) => {
          const numValue = parseFloat(value);
          return numValue > 0;
        }),
      Currency: Yup.string().required('Currency is required'),
      Status: Yup.string().required('Status is required'),
    }),
    onSubmit: (values) => {
      axiosInstance
        .post('/savings-account', { ...values, Balance: parseFloat(values.Balance) })
        .then((data) => {
          console.log(data);

          navigate('/savings-account');
        })
        .catch(console.error);
    },
  });

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Link my bank account</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-full lg:w-1/2 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg'
      >
        <div>
          <label htmlFor='BankID' className='label text-sm font-medium text-gray-700'>
            Bank
          </label>
          <select
            id='BankID'
            name='BankID'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.BankID}
            className={`select select-bordered mt-1 block w-full border ${formik.touched.BankID && formik.errors.BankID ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          >
            <option value=''>Select a bank</option>
            {banks.map((bank) => (
              <option key={bank.BankID} value={bank.BankID}>
                {bank.BankName}
              </option>
            ))}
          </select>
          {formik.touched.BankID && formik.errors.BankID ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.BankID}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='AccountNumber' className='block text-sm font-medium text-gray-700'>
            Account Number
          </label>
          <input
            id='AccountNumber'
            name='AccountNumber'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.AccountNumber}
            className={`input input-bordered mt-1 block w-full border ${formik.touched.AccountNumber && formik.errors.AccountNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.AccountNumber && formik.errors.AccountNumber ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.AccountNumber}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='Balance' className='block text-sm font-medium text-gray-700'>
            Balance
          </label>
          <input
            id='Balance'
            name='Balance'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Balance}
            className={`input input-bordered mt-1 block w-full border ${formik.touched.Balance && formik.errors.Balance ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.Balance && formik.errors.Balance ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.Balance}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='Currency' className='block text-sm font-medium text-gray-700'>
            Currency
          </label>
          <select
            id='Currency'
            name='Currency'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Currency}
            className={`select select-bordered mt-1 block w-full border ${formik.touched.Currency && formik.errors.Currency ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          >
            <option value=''>Select a Currency</option>
            {CURRENCIES.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
          {formik.touched.Currency && formik.errors.Currency ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.Currency}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='Status' className='block text-sm font-medium text-gray-700'>
            Status
          </label>
          <select
            id='Status'
            name='Status'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Status}
            className={`select select-bordered mt-1 block w-full border ${formik.touched.Status && formik.errors.Status ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          >
            <option value=''>Select a Status</option>
            {STATUSES.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
          {formik.touched.Status && formik.errors.Status ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.Status}</div>
          ) : null}
        </div>

        <div className='flex flex-col-reverse lg:flex-row gap-4'>
          <button type='reset' className='btn-secondary btn grow'>
            Cancel
          </button>
          <button
            type='submit'
            className='btn btn-primary grow'
            disabled={!formik.isValid || !formik.dirty}
          >
            Create Savings Account
          </button>
        </div>
      </form>
    </>
  );
}

export default BankAccountCreate;
