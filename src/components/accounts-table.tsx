import { UpdateAccountDto } from '@shared/models';
import { format } from 'date-fns';

function AccountsTable({ accounts }: { accounts: UpdateAccountDto[] }) {
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
            <tr key={account.accountID} className='hover:bg-gray-200 bg-white'>
              <td className={index === accounts.length - 1 ? 'rounded-b-lg' : 'border-b'}>
                {account.bankID}
              </td>
              <td className={index === accounts.length - 1 ? '' : 'border-b'}>
                {account.accountNumber}
              </td>
              <td className={index === accounts.length - 1 ? '' : 'border-b'}>
                {account.balance.toFixed(2)}
              </td>
              <td className={index === accounts.length - 1 ? '' : 'border-b'}>
                {account.currency}
              </td>
              <td className={index === accounts.length - 1 ? '' : 'border-b'}>
                {format(account.createdAt, 'dd/MM/yyyy HH:mm:ss')}
              </td>
              <td className={index === accounts.length - 1 ? 'rounded-br-lg' : 'border-b'}>
                <span
                  className={`badge ${
                    account.status === 'INACTIVE'
                      ? 'badge-warning'
                      : account.status === 'ACTIVE'
                        ? 'badge-success'
                        : 'badge-error'
                  }`}
                >
                  {account.status}
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
