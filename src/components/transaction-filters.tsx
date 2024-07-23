function TransactionFilters({ isLoanFilter }: { isLoanFilter: boolean } = { isLoanFilter: false }) {
  return (
    <div className='flex flex-col lg:flex-row justify-between mb-4 gap-4'>
      <div className='flex items-center gap-4 flex-wrap'>
        {isLoanFilter ? (
          <select className='border rounded-lg py-2 px-4 pr-8 focus:outline-none focus:ring-2'>
            <option value=''>All Loans</option>
            <option value='HOME'>HOME</option>
            <option value='VEHICLE'>VEHICLE</option>
            <option value='GOLD'>GOLD</option>
            <option value='MORTGAGE'>MORTGAGE</option>
            <option value='PERSONAL'>PERSONAL</option>
            <option value='EDUCATIONAL'>EDUCATIONAL</option>
          </select>
        ) : (
          <select className='border rounded-lg py-2 px-4 pr-8 focus:outline-none focus:ring-2'>
            <option value=''>All Transactions</option>
            <option value='CREDIT'>Credit</option>
            <option value='DEBIT'>Debit</option>
          </select>
        )}
        <input
          type='text'
          className='border rounded-lg py-2 px-4 focus:outline-none focus:ring-2'
          placeholder='Search transactions'
        />
        <input type='date' className='input input-bordered' />
        <input type='date' className='input input-bordered' />
        <input type='number' className='input input-bordered' placeholder='Min Amount' />
        <input type='number' className='input input-bordered' placeholder='Max Amount' />
        <button className='btn btn-primary'>Apply</button>
      </div>
    </div>
  );
}

export default TransactionFilters;
