import loansApi from '@shared/api/loansApi';
import { formatNumber } from '@utils/utils';

function LoanStats() {
  const { data: stats, isLoading } = loansApi.useGetLoanAccountStatsQuery();

  if (isLoading) {
    return <></>;
  }
  return (
    <div className='stats shadow w-full'>
      <div className='stat'>
        <div className='stat-figure text-primary'>
          <img src='https://img.icons8.com/?size=100&id=7490&format=png&color=000000' alt='Debt' />
        </div>
        <div className='stat-title'>My Borrowing</div>
        {stats?.LoanAmount && (
          <div className='stat-value text-primary'>{formatNumber(stats?.LoanAmount)}</div>
        )}
        <div className='stat-desc text-secondary'>Total borrowed from banks</div>
      </div>

      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <img src='https://img.icons8.com/?size=100&id=215&format=png&color=000000' alt='paid' />
        </div>
        <div className='stat-title'>Equated Monthly Installment</div>
        {stats?.EMI && <div className='stat-value text-primary'>{formatNumber(stats?.EMI)}</div>}
        <div className='stat-desc text-secondary'>Amount paid to bank each month</div>
      </div>

      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <img
            src='https://img.icons8.com/?size=100&id=44270&format=png&color=000000'
            alt='Interest'
          />
        </div>
        <div className='stat-title'>Overall Interest to be Paid</div>
        {stats?.InterestPaid && (
          <div className='stat-value text-primary'>{formatNumber(stats?.InterestPaid)}</div>
        )}
        <div className='stat-desc text-secondary'>Interest earned by banks</div>
      </div>
    </div>
  );
}

export default LoanStats;
