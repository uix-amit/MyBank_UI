import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ template }: { template: ReactNode }) {
  return (
    <div className='drawer md:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col justify-center'>{template}</div>
      <div className='drawer-side z-20'>
        <label htmlFor='my-drawer-2' aria-label='close sidebar' className='drawer-overlay'></label>
        <ul className='bg-white px-0 flex flex-col gap-1 menu text-base-content min-h-full w-72 z-10'>
          <li className='text-primary text-3xl bg-white'>
            <span>
              <img
                className='w-9'
                src='https://img.icons8.com/?size=100&id=VbL8v3mm1qyp&format=png&color=000000'
                alt='Menu'
              />
              MyBank
            </span>
          </li>
          <hr className='shadow' />
          <li className='opacity-70 text-lg font-semibold text-primary pl-4'>Dashboard</li>
          <li className='px-4'>
            <Link to='/'>Overview</Link>
          </li>
          <hr />
          <li className='opacity-70 text-lg font-semibold text-primary pl-4'>Savings Account</li>
          <li className='px-4'>
            <Link to='savings-account'>View Accounts</Link>
          </li>
          <li className='px-4'>
            <Link to='savings-account/create'>Link new Account</Link>
          </li>
          <hr />
          <li className='opacity-70 text-lg font-semibold text-primary pl-4'>Cards</li>
          <li className='px-4'>
            <Link to='cards'>View Cards</Link>
          </li>
          <li className='px-4'>
            <Link to='cards/create'>Link New Card</Link>
          </li>
          <hr />
          <li className='opacity-70 text-lg font-semibold text-primary pl-4'>Transaction</li>
          <li className='px-4'>
            <Link to='transaction'>History</Link>
          </li>
          <li className='px-4'>
            <Link to='transaction/create'>Transfer</Link>
          </li>
          <hr />
          <li className='opacity-70 text-lg font-semibold text-primary pl-4'>Loan Account</li>
          <li className='px-4'>
            <Link to='loan-account'>View Accounts</Link>
          </li>
          <li className='px-4'>
            <Link to='loan-account/create'>Avail Loan</Link>
          </li>
          <hr />
          <li className='opacity-70 text-lg font-semibold text-primary pl-4'>Loan Transaction</li>
          <li className='px-4'>
            <Link to='loan-transaction'>History</Link>
          </li>
          <li className='px-4'>
            <Link to='loan-transaction/create'>Make Payment</Link>
          </li>
          <hr />
          <li className='opacity-70 text-lg font-semibold text-primary pl-4'>User Account</li>
          <li className='px-4'>
            <Link to='user-account'>Profile</Link>
          </li>
          <li className='px-4'>
            <Link to='user-account/preference'>Preferences</Link>
          </li>
          <li className='px-4'>
            <Link to='user-account/change-password'>Change Password</Link>
          </li>
          <hr />
          <li className='opacity-70 text-lg font-semibold text-primary pl-4'>Notifications</li>
          <li className='px-4'>
            <Link to='notifications'>View notifications</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
