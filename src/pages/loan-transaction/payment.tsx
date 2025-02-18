import { useLocation } from 'react-router-dom';

import Braintree from '@components/braintree';

const Payment = () => {
  const location = useLocation();
  const transactionData = location.state;

  return <Braintree transactionType='LoanRepayment' transactionData={transactionData} />;
};

export default Payment;
