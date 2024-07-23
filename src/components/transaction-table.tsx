import { UpdateLoanTransactionDto, UpdateTransactionDto } from '@shared/models';
import { format } from 'date-fns';

function TransactionTable({
  transactions,
}: {
  transactions: UpdateTransactionDto[] | UpdateLoanTransactionDto[];
}) {
  const hasTransactionType: boolean = 'transactionType' in transactions[0];
  return (
    <div className='overflow-x-auto shadow rounded-lg'>
      <table className='table w-full'>
        <thead>
          <tr className='bg-white'>
            <th className='border-b font-bold rounded-t-lg'>From Account</th>
            <th className='border-b font-bold'>To Account</th>
            <th className='border-b font-bold'>Amount</th>
            {hasTransactionType && <th className='border-b font-bold'>Type</th>}
            <th className='border-b font-bold'>Date</th>
            <th className='border-b font-bold rounded-tr-lg'>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.transactionID} className='hover:bg-gray-200 bg-white'>
              <td className={index === transactions.length - 1 ? 'rounded-b-lg' : 'border-b'}>
                {transaction.fromAccountID}
              </td>
              <td className={index === transactions.length - 1 ? '' : 'border-b'}>
                {transaction.toAccountID}
              </td>
              <td className={index === transactions.length - 1 ? '' : 'border-b'}>
                {transaction.amount.toFixed(2)}
              </td>
              {'transactionType' in transaction && (
                <td className={index === transactions.length - 1 ? '' : 'border-b'}>
                  {transaction.transactionType}
                </td>
              )}
              <td className={index === transactions.length - 1 ? '' : 'border-b'}>
                {format(transaction.transactionDate, 'dd/MM/yyyy HH:mm:ss')}
              </td>
              <td className={index === transactions.length - 1 ? 'rounded-br-lg' : 'border-b'}>
                <span
                  className={`badge ${
                    transaction.transactionStatus === 'INPROGRESS'
                      ? 'badge-warning'
                      : transaction.transactionStatus === 'COMPLETE'
                        ? 'badge-success'
                        : 'badge-error'
                  }`}
                >
                  {transaction.transactionStatus}
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
