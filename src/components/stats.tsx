import savingsAccountApi from '@shared/api/savingsAccountApi';
import { formatNumber } from '@utils/utils';

function Stats() {
  const { data: accountStats, isLoading } = savingsAccountApi.useGetAccountStatsQuery();

  if (isLoading) {
    return <></>;
  }
  return (
    <div className='stats shadow w-full'>
      <div className='stat'>
        <div className='stat-figure text-primary'>
          <img
            src='https://img.icons8.com/?size=100&id=2806&format=png&color=000000'
            alt='Balance'
          />
        </div>
        <div className='stat-title'>My Balance</div>
        {accountStats?.Balance && (
          <div className='stat-value text-primary'>{formatNumber(accountStats.Balance)}</div>
        )}
        <div className='stat-desc text-secondary'>21% more than last month</div>
      </div>

      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <img
            src='https://img.icons8.com/?size=100&id=7607&format=png&color=000000'
            alt='Income'
          />
        </div>
        <div className='stat-title'>Income</div>
        {accountStats?.Income.amountOfTransactions && (
          <div className='stat-value text-primary'>
            {formatNumber(accountStats.Income.amountOfTransactions)}
          </div>
        )}
        <div className='stat-desc text-secondary'>21% more than last month</div>
      </div>

      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <img
            src='https://img.icons8.com/?size=100&id=KJeTmcO89jwq&format=png&color=000000'
            alt='Expense'
          />
        </div>
        <div className='stat-title'>Expense</div>
        {accountStats?.Expenses.amountOfTransactions && (
          <div className='stat-value text-primary'>
            {formatNumber(accountStats.Expenses.amountOfTransactions)}
          </div>
        )}
        <div className='stat-desc text-secondary'>31 tasks remaining</div>
      </div>

      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <img
            src='https://img.icons8.com/?size=100&id=2975&format=png&color=000000'
            alt='Savings'
          />
        </div>
        <div className='stat-title'>Total Saving</div>
        <div className='stat-value text-primary'>
          {formatNumber(accountStats?.Savings as number)}
        </div>
        <div className='stat-desc text-secondary'>21% more than last month</div>
      </div>
    </div>
  );
}

export default Stats;
