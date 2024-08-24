import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function LoanAccountCreate() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('Avail Loan'));
  }, [dispatch]);

  const handleReset = () => {
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      bankID: '',
      accountNumber: '',
      loanType: '',
      loanAmount: '',
      interestRate: '',
      loanTerm: '',
    },
    validationSchema: Yup.object({
      bankID: Yup.string().required('Bank is required'),
      accountNumber: Yup.string()
        .matches(/^\d{16}$/, 'Account number must be exactly 16 digits')
        .required('Account number is required'),
      loanType: Yup.string().required('Loan type is required'),
      loanAmount: Yup.number()
        .typeError('Loan amount must be a number')
        .required('Loan amount is required')
        .positive('Loan amount must be a positive number'),
      interestRate: Yup.number()
        .typeError('Interest rate must be a number')
        .required('Interest rate is required')
        .positive('Interest rate must be a positive number')
        .max(99.99, 'Interest rate cannot exceed 99.99%')
        .test(
          'max-decimal',
          'Interest rate must have at most 2 decimal places',
          (value) => value === undefined || value.toString().split('.')[1]?.length <= 2
        ),
      loanTerm: Yup.number()
        .typeError('Loan term must be a number')
        .required('Loan term is required')
        .positive('Loan term must be a positive number')
        .max(30, 'Loan term cannot exceed 30 years'),
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

  const loanTypes = [
    { value: 'HOME', label: 'HOME' },
    { value: 'VEHICLE', label: 'VEHICLE' },
    { value: 'GOLD', label: 'GOLD' },
    { value: 'MORTGAGE', label: 'MORTGAGE' },
    { value: 'PERSONAL', label: 'PERSONAL' },
    { value: 'EDUCATIONAL', label: 'EDUCATIONAL' },
  ];
  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Transfer money to other accounts</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-full lg:w-1/2 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg'
      >
        <div>
          <label htmlFor='bankID' className='block text-sm font-medium text-gray-700'>
            Bank
          </label>
          <select
            id='bankID'
            name='bankID'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bankID}
            className={`mt-1 block w-full select select-bordered ${formik.touched.bankID && formik.errors.bankID ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          >
            <option value=''>Select a bank</option>
            {banks.map((bank) => (
              <option key={bank.value} value={bank.value}>
                {bank.label}
              </option>
            ))}
          </select>
          {formik.touched.bankID && formik.errors.bankID ? (
            <div className='text-red-500 text-sm'>{formik.errors.bankID}</div>
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
            className={`mt-1 block w-full input input-bordered ${formik.touched.accountNumber && formik.errors.accountNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.accountNumber && formik.errors.accountNumber ? (
            <div className='text-red-500 text-sm'>{formik.errors.accountNumber}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='loanType' className='block text-sm font-medium text-gray-700'>
            Loan Type
          </label>
          <select
            id='loanType'
            name='loanType'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.loanType}
            className={`mt-1 block w-full select select-bordered ${formik.touched.loanType && formik.errors.loanType ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          >
            <option value=''>Select a loan type</option>
            {loanTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {formik.touched.loanType && formik.errors.loanType ? (
            <div className='text-red-500 text-sm'>{formik.errors.loanType}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='loanAmount' className='block text-sm font-medium text-gray-700'>
            Loan Amount
          </label>
          <input
            id='loanAmount'
            name='loanAmount'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.loanAmount}
            className={`mt-1 block w-full input input-bordered ${formik.touched.loanAmount && formik.errors.loanAmount ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.loanAmount && formik.errors.loanAmount ? (
            <div className='text-red-500 text-sm'>{formik.errors.loanAmount}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='interestRate' className='block text-sm font-medium text-gray-700'>
            Interest Rate
          </label>
          <input
            id='interestRate'
            name='interestRate'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.interestRate}
            className={`mt-1 block w-full input input-bordered ${formik.touched.interestRate && formik.errors.interestRate ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.interestRate && formik.errors.interestRate ? (
            <div className='text-red-500 text-sm'>{formik.errors.interestRate}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='loanTerm' className='block text-sm font-medium text-gray-700'>
            Loan Term
          </label>
          <input
            id='loanTerm'
            name='loanTerm'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.loanTerm}
            className={`mt-1 block w-full input input-bordered ${formik.touched.loanTerm && formik.errors.loanTerm ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.loanTerm && formik.errors.loanTerm ? (
            <div className='text-red-500 text-sm'>{formik.errors.loanTerm}</div>
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
