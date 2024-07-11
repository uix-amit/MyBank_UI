import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '@shared/store/rootStore';

function Header() {
  const title: string = useSelector((state: RootState) => state.header.title);

  return (
    <header className='shadow sticky top-0'>
      <div className='navbar bg-base-100 px-10'>
        <div className='flex-1'>
          <h1 className='text-3xl font-bold text-primary capitalize'>{title}</h1>
        </div>
        <div className='flex-none gap-2'>
          <Link to='notifications' className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <img
                className='w-6'
                src='https://img.icons8.com/?size=100&id=11642&format=png&color=000000'
                alt='Notifications'
              />
              <span className='badge badge-xs badge-primary indicator-item animate-pulse'></span>
            </div>
          </Link>
          <div className='dropdown dropdown-end'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
              <div className='w-8 rounded-full'>
                <img
                  alt='User'
                  src='https://img.icons8.com/?size=100&id=43942&format=png&color=000000'
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
            >
              <li>
                <Link to='user-account'>Profile</Link>
              </li>
              <li>
                <Link to='user-account/preference'>Settings</Link>
              </li>
              <li>
                <Link to='user-account/change-password'>Change password</Link>
              </li>
              <li>
                <Link to='auth/signin'>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
