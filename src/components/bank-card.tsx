import { UpdateAccountDto } from '@shared/models';
import { formatAccountNumber } from '@utils/utils';

function BankCard({ account }: { account: UpdateAccountDto }) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <div className='flex justify-between items-center mb-4'>
        <div>
          <div className='text-gray-500 text-sm mb-1'>Balance</div>
          <div className='text-primary text-xl'>${account.balance}</div>
        </div>
        <img
          className='w-12'
          src='https://img.icons8.com/?size=100&id=30435&format=png&color=000000'
          alt='Bank Logo'
        />
      </div>
      <div className='mb-4'>
        <div className='text-gray-500 text-sm mb-1'>Account Number</div>
        <div className='text-gray-800 text-xl'>{formatAccountNumber(account.accountNumber)}</div>
      </div>
      <div className='flex justify-between items-center'>
        <div>
          <div className='text-gray-500 text-sm mb-1'>Account Holder</div>
          <div className='text-gray-800 font-bold'>Alexander Day</div>
        </div>
        <div>
          <div className='text-gray-500 text-sm mb-1'>Expires</div>
          <div className='text-gray-800 font-bold'>12/24</div>
        </div>
      </div>
    </div>
  );
}

export default BankCard;
