import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-9xl font-bold'>404</h1>
          <h1 className='text-5xl font-bold'>Oops! Page not found.</h1>
          <p className='py-6'>
            The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <Link to='/' className='btn btn-primary'>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
