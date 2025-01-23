import { format } from 'date-fns';

import { UpdateAccountDto } from '@shared/models';
import { formatAccountNumber } from '@utils/utils';

function AccountsTable({
  accounts,
}: {
  accounts: Array<UpdateAccountDto & { Bank: { BankName: string } }>;
}) {
  console.table(accounts);

  return (
    <div className='overflow-x-auto shadow rounded-lg'>
      <table className='table w-full'>
        <thead>
          <tr className='bg-white'>
            <th className='border-b font-bold rounded-t-lg'>Bank Name</th>
            <th className='border-b font-bold'>Account Number</th>
            <th className='border-b font-bold'>Balance</th>
            <th className='border-b font-bold'>Currency</th>
            <th className='border-b font-bold'>Created On</th>
            <th className='border-b font-bold rounded-tr-lg'>Status</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={account.AccountID} className='hover:bg-gray-200 bg-white'>
              <td className={index === accounts.length - 1 ? 'rounded-b-lg' : 'border-b'}>
                {account.Bank.BankName}
              </td>
              <td className={index === accounts.length - 1 ? '' : 'border-b'}>
                {formatAccountNumber(account.AccountNumber)}
              </td>
              <td className={index === accounts.length - 1 ? '' : 'border-b'}>
                {account.Balance.toFixed(2)}
              </td>
              <td className={index === accounts.length - 1 ? '' : 'border-b'}>
                {account.Currency}
              </td>
              <td className={index === accounts.length - 1 ? '' : 'border-b'}>
                {format(account.CreatedAt, 'dd/MM/yyyy HH:mm:ss')}
              </td>
              <td className={index === accounts.length - 1 ? 'rounded-br-lg' : 'border-b'}>
                <span
                  className={`badge ${
                    account.Status === 'INACTIVE'
                      ? 'badge-warning'
                      : account.Status === 'ACTIVE'
                        ? 'badge-success'
                        : 'badge-error'
                  }`}
                >
                  {account.Status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AccountsTable;
