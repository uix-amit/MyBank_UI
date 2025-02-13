import { FilterTransaction } from '@shared/models/filter-transaction-dto';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function TransactionFilters({
  isLoanFilter,
  onFilter,
}: {
  isLoanFilter: boolean;
  onFilter: (data: FilterTransaction) => void;
}) {
  const initialValues = {
    TransactionType: '',
    StartDate: null,
    EndDate: null,
    MinAmount: '',
    MaxAmount: '',
  };

  const validationSchema = Yup.object({
    TransactionType: Yup.string(),
    StartDate: Yup.date()
      .nullable()
      .max(new Date(), 'Start date cannot be in the future')
      .typeError('Invalid date'),
    EndDate: Yup.date()
      .nullable()
      .max(new Date(), 'End date cannot be in the future')
      .typeError('Invalid date')
      .when('StartDate', (StartDate, schema) => {
        return StartDate[0] ? schema.min(StartDate, 'End date must be after start date') : schema;
      }),
    MinAmount: Yup.number().positive('Min amount must be a positive number').nullable(),
    MaxAmount: Yup.number()
      .positive('Max amount must be a positive number')
      .nullable()
      .when('MinAmount', (MinAmount, schema) => {
        return MinAmount[0]
          ? schema.moreThan(Yup.ref('MinAmount'), 'Max amount must be greater than min amount')
          : schema;
      }),
  }).test('at-least-one-field', 'At least one field must be filled out', function (values) {
    const { TransactionType, StartDate, EndDate, MinAmount, MaxAmount } = values;
    return !!TransactionType || !!StartDate || !!EndDate || !!MinAmount || !!MaxAmount;
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (values: any) => {
    onFilter(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const isFormValid =
    !!formik.values.TransactionType ||
    !!formik.values.StartDate ||
    !!formik.values.EndDate ||
    !!formik.values.MinAmount ||
    !!formik.values.MaxAmount;

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='flex flex-col lg:flex-row justify-between mb-4 gap-4'>
        <div className='flex items-center gap-4 flex-wrap'>
          {isLoanFilter ? (
            <select
              className='select select-bordered'
              name='TransactionType'
              value={formik.values.TransactionType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value=''>All Loans</option>
              <option value='HOME'>HOME</option>
              <option value='VEHICLE'>VEHICLE</option>
              <option value='GOLD'>GOLD</option>
              <option value='MORTGAGE'>MORTGAGE</option>
              <option value='PERSONAL'>PERSONAL</option>
              <option value='EDUCATIONAL'>EDUCATIONAL</option>
            </select>
          ) : (
            <select
              className='select select-bordered'
              name='TransactionType'
              value={formik.values.TransactionType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value=''>All Transactions</option>
              <option value='CREDIT'>Credit</option>
              <option value='DEBIT'>Debit</option>
            </select>
          )}
          <input
            type='date'
            className='input input-bordered'
            name='StartDate'
            value={formik.values.StartDate || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            max={new Date().toISOString().split('T')[0]}
          />
          {formik.touched.StartDate && formik.errors.StartDate ? (
            <div className='text-red-500'>{formik.errors.StartDate}</div>
          ) : null}
          <input
            type='date'
            className='input input-bordered'
            name='EndDate'
            value={formik.values.EndDate || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            max={new Date().toISOString().split('T')[0]}
          />
          {formik.touched.EndDate && formik.errors.EndDate ? (
            <div className='text-red-500'>{formik.errors.EndDate}</div>
          ) : null}
          <input
            type='number'
            className='input input-bordered'
            placeholder='Min Amount'
            name='MinAmount'
            value={formik.values.MinAmount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            step='0.01'
          />
          {formik.touched.MinAmount && formik.errors.MinAmount ? (
            <div className='text-red-500'>{formik.errors.MinAmount}</div>
          ) : null}
          <input
            type='number'
            className='input input-bordered'
            placeholder='Max Amount'
            name='MaxAmount'
            value={formik.values.MaxAmount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            step='0.01'
          />
          {formik.touched.MaxAmount && formik.errors.MaxAmount ? (
            <div className='text-red-500'>{formik.errors.MaxAmount}</div>
          ) : null}
          <button
            type='submit'
            className='btn btn-primary'
            disabled={!isFormValid || !formik.isValid}
          >
            Filter
          </button>
        </div>
      </div>
    </form>
  );
}

export default TransactionFilters;
