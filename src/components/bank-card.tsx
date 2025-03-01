import { UpdateAccountDto } from '@shared/models';
import { formatAccountNumber } from '@utils/utils';
import { format } from 'date-fns/format';

function BankCard({
  account,
}: {
  account: UpdateAccountDto & {
    Bank: { BankName: string };
    User: {
      FirstName: string;
      LastName: string;
    };
  };
}) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <div className='flex justify-between items-center mb-4'>
        <div>
          <div className='text-gray-500 text-sm mb-1'>Balance</div>
          <div className='text-primary text-xl'>
            {account.Currency} {account.Balance}
          </div>
        </div>
        <img
          className='w-12'
          src='https://img.icons8.com/?size=100&id=30435&format=png&color=000000'
          alt='Bank Logo'
        />
      </div>
      <div className='mb-4'>
        <div className='text-gray-500 text-sm mb-1'>Account Number</div>
        <div className='text-gray-800 text-xl'>{formatAccountNumber(account.AccountNumber)}</div>
      </div>
      <div className='flex justify-between items-center'>
        <div>
          <div className='text-gray-500 text-sm mb-1'>Account Holder</div>
          <div className='text-gray-800 font-bold'>
            {account.User.FirstName} {account.User.LastName}
          </div>
        </div>
        <div>
          <div className='text-gray-500 text-sm mb-1'>Last Used</div>
          <div className='text-gray-800 font-bold text-right'>{format(account.UpdatedAt, 'MM/yy')}</div>
        </div>
      </div>
    </div>
  );
}

export default BankCard;
