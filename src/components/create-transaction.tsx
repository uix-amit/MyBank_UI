import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { CreateTransactionConfig } from '@shared/models';
import axiosInstance from '@utils/axiosInstance';

function CreateTransaction({ config }: { config: CreateTransactionConfig }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      FromAccountID: '',
      ToAccountID: '',
      Amount: '',
    },
    validationSchema: Yup.object({
      FromAccountID: Yup.string().required('From Account ID is required'),
      ToAccountID: Yup.string().required('To Account ID is required'),
      Amount: Yup.string()
        .matches(/^\d*\.?\d{0,2}$/, 'Amount must be a valid number with up to 2 decimal places')
        .required('Amount is required')
        .test('positive', 'Amount must be a positive number', (value) => {
          const numValue = parseFloat(value);
          return numValue > 0;
        }),
    }),
    onSubmit: (values) => {
      axiosInstance
        .post('/transactions', { ...values, Amount: parseFloat(values.Amount) })
        .then(() => navigate('/transaction'))
        .catch();
    },
  });

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='w-full lg:w-1/2 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg'
    >
      <div>
        <label htmlFor='FromAccountID' className='block text-sm font-medium text-gray-700'>
          From Account
        </label>
        <select
          id='FromAccountID'
          name='FromAccountID'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.FromAccountID}
          className={`mt-1 block w-full select select-bordered ${formik.touched.FromAccountID && formik.errors.FromAccountID ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
        >
          <option value=''>Select a from account</option>
          {config.fromAccountIDs.map((account) => (
            <option key={account.value} value={account.value}>
              {account.label}
            </option>
          ))}
        </select>
        {formik.touched.FromAccountID && formik.errors.FromAccountID ? (
          <div className='text-red-500 text-sm'>{formik.errors.FromAccountID}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor='ToAccountID' className='block text-sm font-medium text-gray-700'>
          To Account
        </label>
        <select
          id='ToAccountID'
          name='ToAccountID'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.ToAccountID}
          className={`mt-1 block w-full select select-bordered ${formik.touched.ToAccountID && formik.errors.ToAccountID ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
        >
          <option value=''>Select a to account</option>
          {config.toAccountIDs.map((account) => (
            <option key={account.value} value={account.value}>
              {account.label}
            </option>
          ))}
        </select>
        {formik.touched.ToAccountID && formik.errors.ToAccountID ? (
          <div className='text-red-500 text-sm'>{formik.errors.ToAccountID}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor='Amount' className='block text-sm font-medium text-gray-700'>
          Amount
        </label>
        <input
          id='Amount'
          name='Amount'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Amount}
          className={`mt-1 block w-full input input-bordered ${formik.touched.Amount && formik.errors.Amount ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
        />
        {formik.touched.Amount && formik.errors.Amount ? (
          <div className='text-red-500 text-sm'>{formik.errors.Amount}</div>
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
          Transfer Money
        </button>
      </div>
    </form>
  );
}

export default CreateTransaction;
