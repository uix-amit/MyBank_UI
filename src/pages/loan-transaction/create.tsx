import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CreateTransaction from '@components/create-transaction';
import loansApi from '@shared/api/loansApi';
import savingsAccountApi from '@shared/api/savingsAccountApi';
import { CreateTransactionConfig, UpdateAccountDto, UpdateLoanDto } from '@shared/models';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function LoanTransactionCreate() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: fromAccount, isLoading } = savingsAccountApi.useGetSavingsAccountsQuery();
  const { data: toAccount } = loansApi.useGetLoansQuery();

  useEffect(() => {
    dispatch(setTitle('Loan Repayment'));
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }

  const config: CreateTransactionConfig = {
    fromAccount: fromAccount as UpdateAccountDto[],
    toAccount: toAccount as UpdateLoanDto[],
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
