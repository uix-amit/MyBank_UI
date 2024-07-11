import { Outlet } from 'react-router-dom';

import Header from '@components/header';
import Footer from '@components/footer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div role='alert' className='alert bg-slate-100 rounded-none text-center flex justify-center'>
        <img
          className='w-5 animate-bounce'
          src='https://img.icons8.com/?size=100&id=77&format=png&color=491eff'
          alt='Info'
        />
        <span>
          This is a dummy banking application please do not enter actual banking details here.
        </span>
      </div>
      <div className='drawer md:drawer-open'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col justify-center'>
          <Header />
          <main className='p-10 bg-slate-100 h-full'>
            <Outlet />
          </main>
          <Footer />
          <label htmlFor='my-drawer-2' className='btn btn-primary drawer-button md:hidden'>
            Open drawer
          </label>
        </div>
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer-2'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='bg-white px-0 flex flex-col gap-1 menu text-base-content min-h-full w-80'>
            <li className='text-primary text-3xl sticky top-0 bg-white z-10'>
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
            <li>
              <Link to='/'>overview</Link>
            </li>
            <hr />
            <li className='opacity-70 text-lg font-semibold text-primary pl-4'>Savings Account</li>
            <li>
              <Link to='savings-account'>View Accounts</Link>
            </li>
            <li>
              <Link to='savings-account/create'>Link new Account</Link>
            </li>
            <hr />
            <li className='opacity-70 text-lg font-semibold text-primary pl-4'>Cards</li>
            <li>
              <Link to='cards'>View Cards</Link>
            </li>
            <li>
              <Link to='cards/create'>Link New Card</Link>
            </li>
            <hr />
            <li className='opacity-70 text-lg font-semibold text-primary pl-4'>Transaction</li>
            <li>
              <Link to='transaction'>History</Link>
            </li>
            <li>
              <Link to='transaction/create'>Transfer</Link>
            </li>
            <hr />
            <li className='opacity-70 text-lg font-semibold text-primary pl-4'>Loan Account</li>
            <li>
              <Link to='loan-account'>View Accounts</Link>
            </li>
            <li>
              <Link to='loan-account/create'>Avail Loan</Link>
            </li>
            <hr />
            <li className='opacity-70 text-lg font-semibold text-primary pl-4'>Loan Transaction</li>
            <li>
              <Link to='loan-transaction'>History</Link>
            </li>
            <li>
              <Link to='loan-transaction/create'>Make Payment</Link>
            </li>
            <hr />
            <li className='opacity-70 text-lg font-semibold text-primary pl-4'>User Account</li>
            <li>
              <Link to='user-account'>Profile</Link>
            </li>
            <li>
              <Link to='user-account/preference'>Preferences</Link>
            </li>
            <li>
              <Link to='user-account/change-password'>Change Password</Link>
            </li>
            <hr />
            <li className='opacity-70 text-lg font-semibold text-primary pl-4'>Notifications</li>
            <li>
              <Link to='notifications'>View notifications</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
