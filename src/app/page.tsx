'use client';

import { useRouter } from 'next/navigation';

const Homepage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Homepage</h1>

      <button onClick={() => router.push('/admin')}>
       Go To Admin
      </button>
    </div>
  );
};

export default Homepage;
