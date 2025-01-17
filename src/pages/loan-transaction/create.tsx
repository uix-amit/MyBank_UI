import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CreateTransaction from '@components/create-transaction';
import { CreateTransactionConfig } from '@shared/models';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function LoanTransactionCreate() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('Loan Repayment'));
  }, [dispatch]);

  const fromAccountIDs = [
    { value: 'cm5wsd9yr0003p4jqn8l8da5y', label: '1234512345123455' },
    { value: 'cm5wsluz50001ycfakwn8bwkz', label: '1234512345123451' },
    { value: 'cm5xsvp1p0009uu2p5fzpp2m4', label: '1234512345123459' },
  ];

  const toAccountIDs = [
    { value: 'cm5y3g2je0005y84n8duiuytt', label: '1234567890123456' },
    { value: 'cm5zfxi200003k09sb679fw9w', label: '1234512345123454' },
  ];

  const config: CreateTransactionConfig = {
    fromAccountIDs,
    toAccountIDs,
    transactionType: 'LoanRepayment',
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Pre-pay your loans</h2>
      <CreateTransaction config={config}></CreateTransaction>
    </>
  );
}

export default LoanTransactionCreate;
