import  { Suspense } from 'react';
import TaskDashboard from '@/components/TaskDashboard';
export default function Home() {
  return (
    <main className='min-h-screen p-4 md:p-8 '>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold mb-8'>Task Management</h1>
        <TaskDashboard />
      </div>
    </main>
  );
}
