import { format } from 'date-fns';

import { UpdateLoanDto } from '@shared/models';

function LoansTable({
  loanAccounts,
}: {
  loanAccounts: Array<UpdateLoanDto & { Bank: { BankName: string } }>;
}) {
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
            <tr key={account.LoanID} className='hover:bg-gray-200 bg-white'>
              <td className={index === loanAccounts.length - 1 ? 'rounded-b-lg' : 'border-b'}>
                {account.Bank.BankName}
              </td>
              <td className={index === loanAccounts.length - 1 ? '' : 'border-b'}>
                {account.AccountNumber}
              </td>
              <td className={index === loanAccounts.length - 1 ? '' : 'border-b'}>
                {account.LoanAmount.toFixed(2)}
              </td>
              <td className={index === loanAccounts.length - 1 ? '' : 'border-b'}>
                {account.LoanType}
              </td>
              <td className={index === loanAccounts.length - 1 ? '' : 'border-b'}>
                {account.InterestRate}
              </td>
              <td className={index === loanAccounts.length - 1 ? '' : 'border-b'}>
                {account.RemainingTenure}
              </td>
              <td className={index === loanAccounts.length - 1 ? '' : 'border-b'}>
                {format(account.CreatedAt, 'dd/MM/yyyy HH:mm:ss')}
              </td>
              <td className={index === loanAccounts.length - 1 ? 'rounded-br-lg' : 'border-b'}>
                <span
                  className={`badge ${
                    account.LoanStatus === 'OUTSTANDING' ? 'badge-warning' : 'badge-success'
                  }`}
                >
                  {account.LoanStatus}
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
