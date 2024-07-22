import { format } from 'date-fns';

import { UpdateLoanDto } from '@shared/models';

function LoansTable({ loanAccounts }: { loanAccounts: UpdateLoanDto[] }) {
  return (
    <div className='overflow-x-auto shadow rounded-lg'>
      <table className='table w-full'>
        <thead>
          <tr className='bg-white'>
            <th className='border-b font-bold rounded-t-lg'>Bank Name</th>
            <th className='border-b font-bold'>Account Number</th>
            <th className='border-b font-bold'>Loan Amount</th>
            <th className='border-b font-bold'>Loan Type</th>
            <th className='border-b font-bold'>Interest Rate</th>
            <th className='border-b font-bold'>Remaining Tenure</th>
            <th className='border-b font-bold'>Created On</th>
            <th className='border-b font-bold rounded-tr-lg'>Status</th>
          </tr>
        </thead>
        <tbody>
          {loanAccounts.map((account, index) => (
            <tr key={account.loanID} className='hover:bg-gray-200 bg-white'>
              <td className={index === loanAccounts.length - 1 ? 'rounded-b-lg' : 'border-b'}>
                {account.bankID}
              </td>
              <td className={index === loanAccounts.length - 1 ? '' : 'border-b'}>
                {account.accountNumber}
              </td>
              <td className={index === loanAccounts.length - 1 ? '' : 'border-b'}>
                {account.loanAmount.toFixed(2)}
              </td>
              <td className={index === loanAccounts.length - 1 ? '' : 'border-b'}>
                {account.loanType}
              </td>
              <td className={index === loanAccounts.length - 1 ? '' : 'border-b'}>
                {account.interestRate}
              </td>
              <td className={index === loanAccounts.length - 1 ? '' : 'border-b'}>
                {account.remainingTenure}
              </td>
              <td className={index === loanAccounts.length - 1 ? '' : 'border-b'}>
                {format(account.createdAt, 'dd/MM/yyyy HH:mm:ss')}
              </td>
              <td className={index === loanAccounts.length - 1 ? 'rounded-br-lg' : 'border-b'}>
                <span
                  className={`badge ${
                    account.loanStatus === 'OUTSTANDING' ? 'badge-warning' : 'badge-success'
                  }`}
                >
                  {account.loanStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoansTable;
