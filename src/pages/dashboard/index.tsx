import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import BankCard from '@components/bank-card';
import BarChart from '@components/bar-chart';
import PieChart from '@components/pie-chart';
import TransactionSummary from '@components/transaction-summary';
import dashboardApi from '@shared/api/dashboardApi';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function Dashboard() {
  const { data: dashboardData, isLoading } = dashboardApi.useGetDashboardDataQuery();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('dashboard'));
  }, [dispatch]);

  if (isLoading || !dashboardData) {
    return <></>;
  }

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex flex-col w-full lg:w-2/3 gap-4'>
          <h2 className='text-xl font-bold'>Weekly Activity</h2>
          <div className='flex flex-col card w-full rounded-lg bg-white px-6 pt-6 pb-4 shadow-lg'>
            {dashboardData && <BarChart data={dashboardData.weeklyTransactions} />}
          </div>
          <h2 className='text-xl font-bold'>Current Balance</h2>
          <div className='flex flex-col card w-full rounded-lg bg-white px-6 pt-6 pb-4 shadow-lg'>
            {dashboardData && <PieChart series={dashboardData.accountBalanceByBank} />}
          </div>
        </div>
        <div className='w-full flex flex-col lg:w-1/3 gap-4'>
          <div className='flex justify-between'>
            <h2 className='text-xl font-bold'>My Accounts</h2>
            <h2 className='text-xl font-bold'>
              <Link to={'savings-account'} className='text-primary font-bold'>
                See All
              </Link>
            </h2>
          </div>
          <div className='flex flex-col gap-4 w-full'>
            {dashboardData &&
              dashboardData.accounts.map((account) => (
                <div key={account.AccountID} className='w-full min-w-80'>
                  <BankCard account={account} />
                </div>
              ))}
          </div>
          <h2 className='text-xl font-bold'>Recent Transactions</h2>
          <div className='z-0 flex flex-col card rounded-lg bg-white px-6 pt-6 pb-4 shadow-lg'>
            {dashboardData &&
              dashboardData.transactions.map((transaction) => (
                <TransactionSummary key={transaction.TransactionID} transaction={transaction} />
              ))}
          </div>
          <h2 className='text-xl font-bold'>Loan Transactions</h2>
          <div className='z-0 flex flex-col card w-full rounded-lg bg-white px-6 pt-6 pb-4 shadow-lg'>
            {dashboardData &&
              dashboardData.loanTransactions.map((transaction) => (
                <TransactionSummary key={transaction.TransactionID} transaction={transaction} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
