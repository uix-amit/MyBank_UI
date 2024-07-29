import { createBrowserRouter } from 'react-router-dom';

import Otp from '@auth/otp';
import Signin from '@auth/signin';
import Signup from '@auth/signup';
import BankAccountCreate from '@bankAccounts/create';
import BankAccount from '@bankAccounts/index';
import CardCreate from '@cards/create';
import Card from '@cards/index';
import ProtectedRoute from '@components/ProtectedRoute';
import Dashboard from '@dashboard/index';
import NotFound from '@error/404';
import LoanAccountCreate from '@loanAccounts/create';
import LoanAccount from '@loanAccounts/index';
import LoanTransactionCreate from '@loanTransaction/create';
import LoanTransaction from '@loanTransaction/index';
import Notifications from '@notifications/index';
import TransactionCreate from '@transaction/create';
import Transaction from '@transaction/index';
import ChangePassword from '@userAccount/change-password';
import Preference from '@userAccount/preference';
import Profile from '@userAccount/profile';
import App from '../App';

const router = createBrowserRouter([
  {
    path: 'auth',
    children: [
      {
        index: true,
        element: <Signin />,
      },
      {
        path: 'signin',
        element: <Signin />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: '2fa',
        element: <Otp />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'savings-account',
        children: [
          {
            index: true,
            element: <BankAccount />,
          },
          {
            path: 'create',
            element: <BankAccountCreate />,
          },
        ],
      },
      {
        path: 'cards',
        children: [
          {
            index: true,
            element: <Card />,
          },
          {
            path: 'create',
            element: <CardCreate />,
          },
        ],
      },
      {
        path: 'loan-account',
        children: [
          {
            index: true,
            element: <LoanAccount />,
          },
          {
            path: 'create',
            element: <LoanAccountCreate />,
          },
        ],
      },
      {
        path: 'loan-transaction',
        children: [
          {
            index: true,
            element: <LoanTransaction />,
          },
          {
            path: 'create',
            element: <LoanTransactionCreate />,
          },
        ],
      },
      {
        path: 'notifications',
        element: <Notifications />,
      },
      {
        path: 'transaction',
        children: [
          {
            index: true,
            element: <Transaction />,
          },
          {
            path: 'create',
            element: <TransactionCreate />,
          },
        ],
      },
      {
        path: 'user-account',
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: 'preference',
            element: <Preference />,
          },
          {
            path: 'change-password',
            element: <ChangePassword />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
