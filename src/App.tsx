import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex justify-center flex-col h-screen w-full items-center'>
      <h1 className='text-3xl font-bold'>Hello Vite + React + TypeScript!</h1>
      <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
