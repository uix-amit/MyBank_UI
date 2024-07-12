import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { accounts, loanTransactions, transactions } from '@assets/stubs/fake-data';
import AreaChart from '@components/area-chart';
import BankCard from '@components/bank-card';
import BarChart from '@components/bar-chart';
import PieChart from '@components/pie-chart';
import TransactionSummary from '@components/transaction-summary';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();

  /* CHARTS */
  const balanceHistory = [
    {
      name: 'ICICI',
      data: [30, 40, 45, 50, 49, 60],
    },
    {
      name: 'SBI',
      data: [10, 20, 47, 54, 67, 98],
    },
    {
      name: 'HDFC',
      data: [1, 3, 6, 2, 80, 120],
    },
  ];
  const categories = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weeklyExpences = [
    {
      name: 'Credit',
      data: [30, 40, 45, 50, 49, 60, 45],
    },
    {
      name: 'Debit',
      data: [1, 3, 6, 2, 80, 120, 20],
    },
  ];
  const currentBalance = [100, 23, 45];

  useEffect(() => {
    dispatch(setTitle('dashboard'));
  }, [dispatch]);

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex flex-col w-full lg:w-2/3 gap-4'>
          <div className='flex justify-between'>
            <h2 className='text-xl font-bold'>My Accounts</h2>
            <h2 className='text-xl font-bold'>
              <Link to={'savings-account'} className='text-primary font-bold'>
                See All
              </Link>
            </h2>
          </div>
          <div className='flex flex-col lg:flex-row gap-4 w-full'>
            {accounts.map((account) => (
              <div className='w-full lg:w-1/2 min-w-80'>
                <BankCard key={account.accountID} account={account} />
              </div>
            ))}
          </div>
          <h2 className='text-xl font-bold'>Balance History</h2>
          <div className='flex flex-col card w-full border border-primary rounded bg-white px-6 pt-6 pb-4 shadow-xl'>
            <AreaChart data={balanceHistory} categories={categories} />
          </div>
          <h2 className='text-xl font-bold'>Weekly Activity</h2>
          <div className='flex flex-col card w-full border border-primary rounded bg-white px-6 pt-6 pb-4 shadow-xl'>
            <BarChart data={weeklyExpences} categories={days} />
          </div>
        </div>
        <div className='w-full flex flex-col lg:w-1/3 gap-4'>
          <h2 className='text-xl font-bold'>Recent Transactions</h2>
          <div className='z-0 flex flex-col card border border-primary rounded bg-white px-6 pt-6 pb-4 shadow-xl'>
            {transactions.map((transaction) => (
              <TransactionSummary key={transaction.transactionID} transaction={transaction} />
            ))}
          </div>
          <h2 className='text-xl font-bold'>Current Balance</h2>
          <div className='flex flex-col card w-full border border-primary rounded bg-white px-6 pt-6 pb-4 shadow-xl'>
            <PieChart series={currentBalance} />
          </div>
          <h2 className='text-xl font-bold'>Loan Transactions</h2>
          <div className='z-0 flex flex-col card w-full border border-primary rounded bg-white px-6 pt-6 pb-4 shadow-xl'>
            {loanTransactions.map((transaction) => (
              <TransactionSummary key={transaction.transactionID} transaction={transaction} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
