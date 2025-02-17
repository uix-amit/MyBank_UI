import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateTransaction from '@components/create-transaction';
import savingsAccountApi from '@shared/api/savingsAccountApi';
import useLoans from '@shared/hooks/useLoans';
import { CreateTransactionConfig, UpdateAccountDto } from '@shared/models';
import { setTitle } from '@shared/store/header.slice';
import { getAllLoanAccounts } from '@shared/store/loanAccounts.slice';
import { AppDispatch } from '@shared/store/rootStore';

function LoanTransactionCreate() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: fromAccount, isLoading } = savingsAccountApi.useGetSavingsAccountsQuery();
  const toAccount = useSelector(getAllLoanAccounts);
  useLoans();

  useEffect(() => {
    dispatch(setTitle('Loan Repayment'));
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }

  const config: CreateTransactionConfig = {
    fromAccount: fromAccount as UpdateAccountDto[],
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
