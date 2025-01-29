import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import CreateTransaction from '@components/create-transaction';
import { CreateTransactionConfig, UpdateAccountDto, UpdateLoanDto } from '@shared/models';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import axiosInstance from '@utils/axiosInstance';

function LoanTransactionCreate() {
  const dispatch = useDispatch<AppDispatch>();
  const [fromAccount, setFromAccount] = useState<UpdateAccountDto[]>([]);
  const [toAccount, setToAccount] = useState<UpdateLoanDto[]>([]);

  useEffect(() => {
    dispatch(setTitle('Loan Repayment'));
  }, [dispatch]);

  useEffect(() => {
    Promise.all([axiosInstance.get('/savings-account'), axiosInstance.get('/loans')])
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then(([fromAccountData, toAccountData]: any) => {
        setFromAccount(fromAccountData);
        setToAccount(toAccountData);
      })
      .catch(console.error);
  }, []);

  const config: CreateTransactionConfig = {
    fromAccount,
    toAccount,
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
