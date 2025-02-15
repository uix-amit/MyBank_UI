import { Outlet } from 'react-router-dom';

import Footer from '@components/footer';
import Header from '@components/header';
import Sidebar from '@components/sidebar';
import Toast from '@components/toast';
import { userApi } from '@shared/api/userApi';

function App() {
  userApi.useGetUserQuery();

  return (
    <>
      <Sidebar
        template={
          <>
            <Header />
            <main className='flex flex-col grow px-4 lg:px-10 py-5 bg-slate-100 h-full overflow-hidden'>
              <Outlet />
            </main>
            <Footer />
          </>
        }
      />
      <Toast />
    </>
  );
}

export default App;
