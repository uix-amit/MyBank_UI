import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function ChangePassword() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('change password'));
  }, [dispatch]);
  return <h1 className='text-3xl font-bold'>{location.pathname} Works!</h1>;
}

export default ChangePassword;
