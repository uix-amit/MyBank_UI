import { useFormik } from 'formik';
import * as Yup from 'yup';

import { CreateTransactionConfig } from '@shared/models';

function CreateTransaction({ config }: { config: CreateTransactionConfig }) {
  const formik = useFormik({
    initialValues: {
      fromAccountID: '',
      toAccountID: '',
      amount: '',
    },
    validationSchema: Yup.object({
      fromAccountID: Yup.string().required('From Account ID is required'),
      toAccountID: Yup.string().required('To Account ID is required'),
      amount: Yup.string()
        .matches(/^\d*\.?\d{0,2}$/, 'Amount must be a valid number with up to 2 decimal places')
        .required('Amount is required')
        .test('positive', 'Amount must be a positive number', (value) => {
          const numValue = parseFloat(value);
          return numValue > 0;
        }),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
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
        <label htmlFor='fromAccountID' className='block text-sm font-medium text-gray-700'>
          From Account
        </label>
        <select
          id='fromAccountID'
          name='fromAccountID'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fromAccountID}
          className={`mt-1 block w-full select select-bordered ${formik.touched.fromAccountID && formik.errors.fromAccountID ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
        >
          <option value=''>Select a from account</option>
          {config.fromAccountIDs.map((account) => (
            <option key={account.value} value={account.value}>
              {account.label}
            </option>
          ))}
        </select>
        {formik.touched.fromAccountID && formik.errors.fromAccountID ? (
          <div className='text-red-500 text-sm'>{formik.errors.fromAccountID}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor='toAccountID' className='block text-sm font-medium text-gray-700'>
          To Account
        </label>
        <select
          id='toAccountID'
          name='toAccountID'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.toAccountID}
          className={`mt-1 block w-full select select-bordered ${formik.touched.toAccountID && formik.errors.toAccountID ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
        >
          <option value=''>Select a to account</option>
          {config.toAccountIDs.map((account) => (
            <option key={account.value} value={account.value}>
              {account.label}
            </option>
          ))}
        </select>
        {formik.touched.toAccountID && formik.errors.toAccountID ? (
          <div className='text-red-500 text-sm'>{formik.errors.toAccountID}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor='amount' className='block text-sm font-medium text-gray-700'>
          Amount
        </label>
        <input
          id='amount'
          name='amount'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.amount}
          className={`mt-1 block w-full input input-bordered ${formik.touched.amount && formik.errors.amount ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
        />
        {formik.touched.amount && formik.errors.amount ? (
          <div className='text-red-500 text-sm'>{formik.errors.amount}</div>
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
