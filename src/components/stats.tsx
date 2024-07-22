function Stats() {
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
        <div className='stat-value text-primary'>25.6K</div>
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
        <div className='stat-value text-primary'>2.6M</div>
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
        <div className='stat-value text-primary'>86%</div>
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
        <div className='stat-value text-primary'>2.6M</div>
        <div className='stat-desc text-secondary'>21% more than last month</div>
      </div>
    </div>
  );
}

export default Stats;
