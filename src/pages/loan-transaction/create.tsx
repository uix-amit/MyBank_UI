import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateTransaction from '@components/create-transaction';
import { CreateTransactionConfig } from '@shared/models';
import { setTitle } from '@shared/store/header.slice';
import { getAllLoanAccounts } from '@shared/store/loanAccounts.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { getAllSavingsAccounts } from '@shared/store/savingsAccounts.slice';
import useSavingsAccount from '@shared/hooks/useSavingsAccount';
import useLoans from '@shared/hooks/useLoans';

function LoanTransactionCreate() {
  const dispatch = useDispatch<AppDispatch>();
  const fromAccount = useSelector(getAllSavingsAccounts);
  const toAccount = useSelector(getAllLoanAccounts);
  useSavingsAccount();
  useLoans();

  useEffect(() => {
    dispatch(setTitle('Loan Repayment'));
  }, [dispatch]);

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
