import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Bank } from '@shared/models/banks-dto';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import axiosInstance from '@utils/axiosInstance';
import { LOAN_TYPES } from '@utils/constants';

function LoanAccountCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [banks, setBanks] = useState<Bank[]>([]);

  useEffect(() => {
    dispatch(setTitle('Avail Loan'));
  }, [dispatch]);

  useEffect(() => {
    axiosInstance
      .get('/savings-account/banks')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: any) => setBanks(data))
      .catch(console.error);
  }, []);

  const handleReset = () => {
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      BankID: '',
      AccountNumber: '',
      LoanType: '',
      LoanAmount: '',
      InterestRate: '',
      LoanTerm: '',
    },
    validationSchema: Yup.object({
      BankID: Yup.string().required('Bank is required'),
      AccountNumber: Yup.string()
        .matches(/^\d{16}$/, 'Account number must be exactly 16 digits')
        .required('Account number is required'),
      LoanType: Yup.string().required('Loan type is required'),
      LoanAmount: Yup.number()
        .typeError('Loan amount must be a number')
        .required('Loan amount is required')
        .positive('Loan amount must be a positive number'),
      InterestRate: Yup.number()
        .typeError('Interest rate must be a number')
        .required('Interest rate is required')
        .positive('Interest rate must be a positive number')
        .max(99.99, 'Interest rate cannot exceed 99.99%')
        .test(
          'max-decimal',
          'Interest rate must have at most 2 decimal places',
          (value) => value === undefined || value.toString().split('.')[1]?.length <= 2
        ),
      LoanTerm: Yup.number()
        .typeError('Loan term must be a number')
        .required('Loan term is required')
        .positive('Loan term must be a positive number')
        .max(30, 'Loan term cannot exceed 30 years'),
    }),
    onSubmit: (values) => {
      axiosInstance
        .post('/loans', {
          ...values,
          LoanTerm: parseInt(values.LoanTerm),
          LoanAmount: parseFloat(values.LoanAmount),
          InterestRate: parseFloat(values.InterestRate),
        })
        .then(() => navigate('/loan-account'))
        .catch(console.error);
    },
  });

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Transfer money to other accounts</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-full lg:w-1/2 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg'
      >
        <div>
          <label htmlFor='BankID' className='block text-sm font-medium text-gray-700'>
            Bank
          </label>
          <select
            id='BankID'
            name='BankID'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.BankID}
            className={`mt-1 block w-full select select-bordered ${formik.touched.BankID && formik.errors.BankID ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          >
            <option value=''>Select a bank</option>
            {banks.map((bank) => (
              <option key={bank.BankID} value={bank.BankID}>
                {bank.BankName}
              </option>
            ))}
          </select>
          {formik.touched.BankID && formik.errors.BankID ? (
            <div className='text-red-500 text-sm'>{formik.errors.BankID}</div>
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
            className={`mt-1 block w-full input input-bordered ${formik.touched.AccountNumber && formik.errors.AccountNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.AccountNumber && formik.errors.AccountNumber ? (
            <div className='text-red-500 text-sm'>{formik.errors.AccountNumber}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='LoanType' className='block text-sm font-medium text-gray-700'>
            Loan Type
          </label>
          <select
            id='LoanType'
            name='LoanType'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.LoanType}
            className={`mt-1 block w-full select select-bordered ${formik.touched.LoanType && formik.errors.LoanType ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          >
            <option value=''>Select a loan type</option>
            {LOAN_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {formik.touched.LoanType && formik.errors.LoanType ? (
            <div className='text-red-500 text-sm'>{formik.errors.LoanType}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='LoanAmount' className='block text-sm font-medium text-gray-700'>
            Loan Amount
          </label>
          <input
            id='LoanAmount'
            name='LoanAmount'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.LoanAmount}
            className={`mt-1 block w-full input input-bordered ${formik.touched.LoanAmount && formik.errors.LoanAmount ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.LoanAmount && formik.errors.LoanAmount ? (
            <div className='text-red-500 text-sm'>{formik.errors.LoanAmount}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='InterestRate' className='block text-sm font-medium text-gray-700'>
            Interest Rate
          </label>
          <input
            id='InterestRate'
            name='InterestRate'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.InterestRate}
            className={`mt-1 block w-full input input-bordered ${formik.touched.InterestRate && formik.errors.InterestRate ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.InterestRate && formik.errors.InterestRate ? (
            <div className='text-red-500 text-sm'>{formik.errors.InterestRate}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='LoanTerm' className='block text-sm font-medium text-gray-700'>
            Loan Term
          </label>
          <input
            id='LoanTerm'
            name='LoanTerm'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.LoanTerm}
            className={`mt-1 block w-full input input-bordered ${formik.touched.LoanTerm && formik.errors.LoanTerm ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.LoanTerm && formik.errors.LoanTerm ? (
            <div className='text-red-500 text-sm'>{formik.errors.LoanTerm}</div>
          ) : null}
        </div>

        <div className='flex flex-col-reverse lg:flex-row gap-4'>
          <button type='reset' onClick={handleReset} className='btn btn-secondary grow'>
            Cancel
          </button>
          <button
            type='submit'
            className='btn btn-primary grow'
            disabled={!formik.isValid || !formik.dirty}
          >
            Link Account
          </button>
        </div>
      </form>
    </>
  );
}

export default LoanAccountCreate;
