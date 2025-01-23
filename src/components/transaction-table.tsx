import { format } from 'date-fns';

import { UpdateLoanTransactionDto, UpdateTransactionDto } from '@shared/models';
import { formatAccountNumber } from '@utils/utils';

function TransactionTable({
  transactions,
}: {
  transactions: UpdateTransactionDto[] | UpdateLoanTransactionDto[];
}) {
  const hasTransactionType: boolean = transactions.some(
    (transaction) => 'TransactionType' in transaction
  );
  return (
    <div className='overflow-x-auto shadow rounded-lg'>
      <table className='table w-full'>
        <thead>
          <tr className='bg-white'>
            <th className='border-b font-bold rounded-tl-lg'>From Account</th>
            <th className='border-b font-bold'>To Account</th>
            <th className='border-b font-bold'>Amount</th>
            {hasTransactionType && <th className='border-b font-bold'>Type</th>}
            <th className='border-b font-bold'>Date</th>
            <th className='border-b font-bold rounded-tr-lg'>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.TransactionID} className='hover:bg-gray-200 bg-white'>
              <td className={index === transactions.length - 1 ? 'rounded-b-lg' : 'border-b'}>
                {formatAccountNumber(transaction.FromAccount.AccountNumber)}
              </td>
              <td className={index === transactions.length - 1 ? '' : 'border-b'}>
                {formatAccountNumber(transaction.ToAccount.AccountNumber)}
              </td>
              <td className={index === transactions.length - 1 ? '' : 'border-b'}>
                {transaction.Amount.toFixed(2)}
              </td>
              {'TransactionType' in transaction && (
                <td className={index === transactions.length - 1 ? '' : 'border-b'}>
                  {transaction.TransactionType}
                </td>
              )}
              <td className={index === transactions.length - 1 ? '' : 'border-b'}>
                {format(transaction.TransactionDate, 'dd/MM/yyyy HH:mm:ss')}
              </td>
              <td className={index === transactions.length - 1 ? 'rounded-br-lg' : 'border-b'}>
                <span
                  className={`badge ${
                    transaction.TransactionStatus === 'INPROGRESS'
                      ? 'badge-warning'
                      : transaction.TransactionStatus === 'COMPLETE'
                        ? 'badge-success'
                        : 'badge-error'
                  }`}
                >
                  {transaction.TransactionStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
