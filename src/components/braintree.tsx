import dropin, { Dropin } from 'braintree-web-drop-in';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axiosInstance from '@utils/axiosInstance';

function Braintree({
  transactionType,
  transactionData,
}: {
  transactionType: 'Transfer' | 'LoanRepayment';
  transactionData: {
    FromAccountID: string;
    ToAccountID: string;
    Amount: number;
  };
}) {
  const [braintreeInstance, setBraintreeInstance] = useState<Dropin | null>(null);
  const [clientToken, setClientToken] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dropinContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const fetchClientToken = async () =>
    await axiosInstance
      .get('/braintree/client-token')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((clientToken: any) => {
        setClientToken(clientToken);
        setIsLoading(false);
      })
      .catch(console.error);

  // Fetch client token from the backend
  useEffect(() => {
    fetchClientToken();
  }, []);

  // Initialize Braintree Drop-in UI
  useEffect(() => {
    let instance!: Dropin;

    if (clientToken && dropinContainerRef.current && !instance) {
      dropinContainerRef.current.innerHTML = '';
      const initializeBraintree = async () => {
        try {
          instance = await dropin.create({
            authorization: clientToken,
            container: dropinContainerRef.current!,
          });

          setBraintreeInstance(instance);
        } catch (err) {
          setError('Failed to initialize Braintree Drop-in UI');
          console.error(err);
        }
      };

      initializeBraintree();

      // Cleanup function to teardown the Drop-in UI
      return () => {
        if (instance) {
          instance.teardown().catch((err) => {
            console.error('Error tearing down Braintree Drop-in UI:', err);
          });
        }
      };
    }
  }, [clientToken]);

  // Handle payment submission
  const handlePayment = async () => {
    if (braintreeInstance) {
      try {
        const payload = await braintreeInstance.requestPaymentMethod();
        const nonce = payload.nonce;

        axiosInstance
          .post('/braintree/checkout', {
            nonce,
            transaction: transactionData,
            transactionType,
          })
          .then(() =>
            navigate(transactionType === 'Transfer' ? '/transaction' : '/loan-transaction')
          )
          .catch(console.error);
      } catch (err) {
        setError('Payment processing failed');
        console.error(err);
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Make Payment</h2>
      <div className='w-full lg:w-1/2 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg'>
        <div id='dropin-container' ref={dropinContainerRef}></div>
        <button
          type='button'
          onClick={handlePayment}
          disabled={!braintreeInstance}
          className='btn btn-primary grow'
        >
          Transfer Money
        </button>
      </div>
    </>
  );
}

export default Braintree;
