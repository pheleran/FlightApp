"use client"
import FlightList from './components/FlightList'
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Home() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className='sticky-container bg-zinc-100 '>
        <header className='flex items-center sticky h-40 top-0 w-full grid bg-gradient-to-r  from-violet-300 from-30% via-sky-300 via-60% via-emerald-300 via-80% to-lime-200 to-100% p-10 z-10'  >
          <h1 className='font-bold text-white text-3xl  ' > UÇUŞUNU AMADEUS İLE ARA </h1>
        </header>
        <main className="flex min-h-full bg-zinc-100 max-h-full flex-col items-center justify-between z-0  ">

          <div className='min-h-screen  content-center top-2 mt-40'>
            <FlightList />
          </div>

        </main>
        <footer className=' sticky bottom-0 text-center text-zinc-600 p-5 bg-white'> This Project Created By Ilgın Kurt For Amadeus Case Study </footer>
      </div>
    </QueryClientProvider>
  )
}
