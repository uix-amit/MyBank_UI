import Braintree from '@components/braintree';

const Payment = () => {
  return <Braintree transactionType='LoanRepayment' />;
};

export default Payment;
