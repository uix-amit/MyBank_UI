import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function BankAccountCreate() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('link savings account'));
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      bankID: '',
      accountNumber: '',
      balance: '',
      currency: '',
      status: '',
    },
    validationSchema: Yup.object({
      bankID: Yup.string().required('Bank is required'),
      accountNumber: Yup.string()
        .matches(/^\d{16}$/, 'Account number must be exactly 16 digits')
        .required('Account number is required'),
      balance: Yup.string()
        .matches(
          /^(?!0\d)\d*\.?\d{0,2}$/,
          'Balance must be a valid number with up to 2 decimal places'
        )
        .required('Balance is required')
        .test('positive', 'Balance must be a positive number', (value) => {
          const numValue = parseFloat(value);
          return numValue > 0;
        }),
      currency: Yup.string().required('Currency is required'),
      status: Yup.string().required('Status is required'),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
    },
  });

  const banks = [
    { value: 'icici', label: 'ICICI' },
    { value: 'hdfc', label: 'HDFC' },
    { value: 'sbi', label: 'SBI' },
  ];

  const currencies = [
    { value: 'INR', label: 'INR' },
    { value: 'GBP', label: 'GBP' },
    { value: 'USD', label: 'USD' },
    { value: 'AUD', label: 'AUD' },
    { value: 'JPY', label: 'JPY' },
    { value: 'EUR', label: 'EUR' },
  ];

  const statuses = [
    { value: 'ACTIVE', label: 'ACTIVE' },
    { value: 'INACTIVE', label: 'INACTIVE' },
    { value: 'DORMANT', label: 'DORMANT' },
    { value: 'CLOSED', label: 'CLOSED' },
  ];

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Link my bank account</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-full lg:w-1/2 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg'
      >
        <div>
          <label htmlFor='bankID' className='label text-sm font-medium text-gray-700'>
            Bank
          </label>
          <select
            id='bankID'
            name='bankID'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bankID}
            className={`select select-bordered mt-1 block w-full border ${formik.touched.bankID && formik.errors.bankID ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          >
            <option value=''>Select a bank</option>
            {banks.map((bank) => (
              <option key={bank.value} value={bank.value}>
                {bank.label}
              </option>
            ))}
          </select>
          {formik.touched.bankID && formik.errors.bankID ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.bankID}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='accountNumber' className='block text-sm font-medium text-gray-700'>
            Account Number
          </label>
          <input
            id='accountNumber'
            name='accountNumber'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.accountNumber}
            className={`input input-bordered mt-1 block w-full border ${formik.touched.accountNumber && formik.errors.accountNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.accountNumber && formik.errors.accountNumber ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.accountNumber}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='balance' className='block text-sm font-medium text-gray-700'>
            Balance
          </label>
          <input
            id='balance'
            name='balance'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.balance}
            className={`input input-bordered mt-1 block w-full border ${formik.touched.balance && formik.errors.balance ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.balance && formik.errors.balance ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.balance}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='currency' className='block text-sm font-medium text-gray-700'>
            Currency
          </label>
          <select
            id='currency'
            name='currency'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.currency}
            className={`select select-bordered mt-1 block w-full border ${formik.touched.currency && formik.errors.currency ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          >
            <option value=''>Select a currency</option>
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
          {formik.touched.currency && formik.errors.currency ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.currency}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='status' className='block text-sm font-medium text-gray-700'>
            Status
          </label>
          <select
            id='status'
            name='status'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.status}
            className={`select select-bordered mt-1 block w-full border ${formik.touched.status && formik.errors.status ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          >
            <option value=''>Select a status</option>
            {statuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
          {formik.touched.status && formik.errors.status ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.status}</div>
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
