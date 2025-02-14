import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getToastMessages, removeToastMessage } from '@shared/store/toast.slice';

const Toast = () => {
  const toastMessages = useSelector(getToastMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeouts = toastMessages.map((toast) =>
      setTimeout(() => {
        console.log(toast);

        dispatch(removeToastMessage(toast.id));
      }, toast.timeout * 1000)
    );

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [toastMessages, dispatch]);

  const onToastCloseHandler = (id: string) => dispatch(removeToastMessage(id));

  return (
    <>
      <div className='toast toast-end z-50'>
        {toastMessages.map(({ id, type, message }) => (
          <div key={id} className={`alert alert-${type}`}>
            <span>{message}</span>
            <button className='btn btn-sm btn-ghost' onClick={() => onToastCloseHandler(id)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 shrink-0 stroke-current'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Toast;
