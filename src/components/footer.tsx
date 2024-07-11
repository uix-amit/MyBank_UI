import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='mt-auto'>
      <div className='footer bg-neutral text-neutral-content p-10'>
        <nav>
          <h6 className='footer-title'>User Account</h6>
          <Link to='user-account'>Profile</Link>
          <Link to='user-account/preference'>Preference</Link>
          <Link to='user-account/change-password'>Change Password</Link>
        </nav>
        <nav>
          <h6 className='footer-title'>Savings</h6>
          <Link to='savings-account'>Savings Account</Link>
          <Link to='cards'>Cards</Link>
          <Link to='transaction'>Transaction</Link>
        </nav>
        <nav>
          <h6 className='footer-title'>Loan</h6>
          <Link to='loan-account'>Loan Account</Link>
          <Link to='loan-transaction'>Transaction</Link>
        </nav>
        <nav>
          <h6 className='footer-title'>Social</h6>
          <div className='grid grid-flow-col gap-4'>
            <a target='_blank' href='https://uiexplorer.netlify.app/'>
              <img
                className='w-6'
                src='https://img.icons8.com/?size=100&id=1349&format=png&color=ffffff'
                alt='UiExplorer'
              />
            </a>
            <a target='_blank' href='https://www.linkedin.com/in/amit-kumbharkar'>
              <img
                className='w-6'
                src='https://img.icons8.com/?size=100&id=447&format=png&color=ffffff'
                alt='LinkedIn'
              />
            </a>
            <a target='_blank' href='https://github.com/uix-amit'>
              <img
                className='w-6'
                src='https://img.icons8.com/?size=100&id=12598&format=png&color=ffffff'
                alt='GitHub'
              />
            </a>
            <a target='_blank' href='https://wa.link/ig0lzu'>
              <img
                className='w-6'
                src='https://img.icons8.com/?size=100&id=16712&format=png&color=ffffff'
                alt='WhatsApp'
              />
            </a>
            <a
              target='_blank'
              href='mailto:amit.uiexplorer@gmail.com?subject=Discussion%3A%20%5Btopic%5D&body=Hello%20Amit%2C%0A%0AMy%20name%20is%20%5Byour%20name%5D%2C%20and%20I%20am%20mailing%20because%20I%20would%20like%20to%20arrange%20a%20meeting%20with%20you%20to%20discuss%20%5Btopic%5D.%20Would%20you%20be%20available%20for%20a%20meeting%20on%20%5Bdate%5D%20at%20%5Btime%5D%3F%20If%20not%2C%20let%20me%20know%20what%20dates%2Ftimes%20would%20work%20better%20for%20you.%0A%0ARegards%2C%0A%5Byour%20name%5D'
            >
              <img
                className='w-6'
                src='https://img.icons8.com/?size=100&id=12580&format=png&color=ffffff'
                alt='Email'
              />
            </a>
          </div>
        </nav>
      </div>
      <div className='footer footer-center bg-neutral border-base-300 border-t text-neutral-content p-4'>
        <aside>
          <p>
            Designed and Developed by{' '}
            <a
              className='text-primary font-bold underline'
              href='https://uiexplorer.netlify.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Amit Kumbharkar
            </a>
            {'. '}
            Icons by{' '}
            <a href='https://icons8.com' target='_blank' rel='noopener noreferrer'>
              Icons8
            </a>
          </p>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
