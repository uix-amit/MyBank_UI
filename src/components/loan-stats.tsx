function LoanStats() {
  return (
    <div className='stats shadow w-full'>
      <div className='stat'>
        <div className='stat-figure text-primary'>
          <img src='https://img.icons8.com/?size=100&id=7490&format=png&color=000000' alt='Debt' />
        </div>
        <div className='stat-title'>My Borrowing</div>
        <div className='stat-value text-primary'>25.6K</div>
        <div className='stat-desc text-secondary'>21% more than last month</div>
      </div>

      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <img src='https://img.icons8.com/?size=100&id=215&format=png&color=000000' alt='paid' />
        </div>
        <div className='stat-title'>Amount Paid</div>
        <div className='stat-value text-primary'>2.6M</div>
        <div className='stat-desc text-secondary'>21% more than last month</div>
      </div>

      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <img
            src='https://img.icons8.com/?size=100&id=44270&format=png&color=000000'
            alt='Interest'
          />
        </div>
        <div className='stat-title'>Interest Paid</div>
        <div className='stat-value text-primary'>1.5M</div>
        <div className='stat-desc text-secondary'>31 tasks remaining</div>
      </div>

      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <img
            src='https://img.icons8.com/?size=100&id=59049&format=png&color=000000'
            alt='Remaining'
          />
        </div>
        <div className='stat-title'>Total Remaining</div>
        <div className='stat-value text-primary'>2.6M</div>
        <div className='stat-desc text-secondary'>21% more than last month</div>
      </div>
    </div>
  );
}

export default LoanStats;
