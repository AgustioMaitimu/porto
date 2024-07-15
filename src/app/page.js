import Background from '@/components/Background';
import Profile from '@/components/Profile';
import Tabs from '@/components/Tabs';
import Image from 'next/legacy/image';

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center font-sans">
      <Profile />
      <Tabs />
      <Background />
    </main>
  );
}
