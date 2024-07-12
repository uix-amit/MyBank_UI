import { Outlet } from 'react-router-dom';

import Banner from '@components/banner';
import Footer from '@components/footer';
import Header from '@components/header';
import Sidebar from '@components/sidebar';

function App() {
  return (
    <>
      <Banner />
      <Sidebar
        template={
          <>
            <Header />
            <main className='px-10 py-5 bg-slate-100 h-full overflow-hidden'>
              <Outlet />
            </main>
            <Footer />
            <label htmlFor='my-drawer-2' className='btn btn-primary drawer-button md:hidden'>
              Open drawer
            </label>
          </>
        }
      />
    </>
  );
}

export default App;
