import { UpdateLoanTransactionDto, UpdateTransactionDto } from '@shared/models';
import { format } from 'date-fns';
function TransactionSummary({
  transaction,
}: {
  transaction: UpdateTransactionDto | UpdateLoanTransactionDto;
}) {
  return (
    <div className='flex items-center justify-between gap-4 pb-4 w-full'>
      <div className='flex items-center gap-4 '>
        <img
          className='w-8 h-8'
          src='https://img.icons8.com/?size=100&id=15116&format=png&color=000000'
          alt='transaction'
        />
        <div className='flex flex-col'>
          <p>Generico Kamothe</p>
          <p>{format(transaction.transactionDate, 'do MMMM yyyy')}</p>
        </div>
      </div>
      <div className='text-primary font-bold'>${transaction.amount}</div>
    </div>
  );
}

export default TransactionSummary;
