function TransactionFilters() {
  return (
    <div className='flex flex-col lg:flex-row justify-between mb-4 gap-4'>
      <div className='flex items-center gap-4 flex-wrap'>
        <select className='border rounded-md py-2 px-4 pr-8 focus:outline-none focus:ring-2'>
          <option value=''>All Transactions</option>
          <option value='CREDIT'>Credit</option>
          <option value='DEBIT'>Debit</option>
        </select>
        <input
          type='text'
          className='border rounded-md py-2 px-4 focus:outline-none focus:ring-2'
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
