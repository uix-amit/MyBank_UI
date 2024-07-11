// import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

// import { decrement, increment } from './counter.slice';
// import { RootState, AppDispatch } from '@shared/store';
import Header from '@components/header';
import Footer from '@components/footer';

function App() {
  // const count = useSelector((state: RootState) => state.counter);
  // const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
    // <div className='flex justify-center flex-col h-screen w-full items-center gap-4'>
    //   <h1 className='text-3xl font-bold'>Count: {count}</h1>
    //   <button className='btn btn-primary' onClick={() => dispatch(increment())}>
    //     increment
    //   </button>
    //   <button className='btn btn-secondary' onClick={() => dispatch(decrement())}>
    //     decrement
    //   </button>
    // </div>
  );
}

export default App;
