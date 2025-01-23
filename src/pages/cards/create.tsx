import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import axiosInstance from '@utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

function CardCreate() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [bankAccounts, setBankAccounts] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    dispatch(setTitle('Link new card'));
  }, [dispatch]);

  useEffect(() => {
    axiosInstance
      .get('savings-account')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: any) => {
        const formattedAccountOptions = response.map(
          ({ AccountID, AccountNumber }: { AccountID: string; AccountNumber: string }) => ({
            value: AccountID,
            label: AccountNumber,
          })
        );
        setBankAccounts(formattedAccountOptions);
      })
      .catch();
  }, []);

  const formik = useFormik({
    initialValues: {
      AccountID: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: '',
    },
    validationSchema: Yup.object({
      AccountID: Yup.string().required('Account number is required'),
      CardNumber: Yup.string()
        .matches(/^\d{16}$/, 'Card number must be exactly 16 digits')
        .required('Card number is required'),
      ExpirationDate: Yup.date()
        .min(new Date(), 'Expiration date must be in the future')
        .required('Expiration date is required'),
      CVV: Yup.string()
        .matches(/^\d{3}$/, 'CVV must be exactly 3 digits')
        .required('CVV is required'),
    }),
    onSubmit: (values) => {
      axiosInstance
        .post('/cards', {
          ...values,
          ExpirationDate: new Date(values.ExpirationDate).toISOString(),
          CVV: parseInt(values.CVV),
        })
        .then(() => navigate('/cards'))
        .catch(console.error);
    },
    onReset: () => {
      formik.resetForm();
    },
  });

  // const AccountIDs = [{ value: 'cm5wsd9yr0003p4jqn8l8da5y', label: '1234512345123455' }];

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Link my new card</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-full lg:w-1/2 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg'
      >
        <div>
          <label htmlFor='AccountID' className='block text-sm font-medium text-gray-700'>
            Account Number
          </label>
          <select
            id='AccountID'
            name='AccountID'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.AccountID}
            className={`mt-1 block w-full select select-bordered ${formik.touched.AccountID && formik.errors.AccountID ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          >
            <option value=''>Select an account number</option>
            {bankAccounts.map((account) => (
              <option key={account.value} value={account.value}>
                {account.label}
              </option>
            ))}
          </select>
          {formik.touched.AccountID && formik.errors.AccountID ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.AccountID}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='CardNumber' className='block text-sm font-medium text-gray-700'>
            Card Number
          </label>
          <input
            id='CardNumber'
            name='CardNumber'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.CardNumber}
            className={`mt-1 block w-full input input-bordered ${formik.touched.CardNumber && formik.errors.CardNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.CardNumber && formik.errors.CardNumber ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.CardNumber}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='ExpirationDate' className='block text-sm font-medium text-gray-700'>
            Expiration Date
          </label>
          <input
            id='ExpirationDate'
            name='ExpirationDate'
            type='date'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ExpirationDate}
            className={`mt-1 block w-full input input-bordered ${formik.touched.ExpirationDate && formik.errors.ExpirationDate ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
            min={new Date().toISOString().split('T')[0]}
          />
          {formik.touched.ExpirationDate && formik.errors.ExpirationDate ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.ExpirationDate}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='CVV' className='block text-sm font-medium text-gray-700'>
            CVV
          </label>
          <input
            id='CVV'
            name='CVV'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.CVV}
            className={`mt-1 block w-full input input-bordered ${formik.touched.CVV && formik.errors.CVV ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
          />
          {formik.touched.CVV && formik.errors.CVV ? (
            <div className='text-red-500 text-sm mt-1'>{formik.errors.CVV}</div>
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
