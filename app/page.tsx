import Logo from '../assets/shared/logo.svg';
import Header from '../assets/home/bg-pattern-header.svg';
import Chart from '@/components/Chart';
import Plans from '@/components/Plans';

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="flex justify-center md:justify-start w-full md:max-w-5xl xl:max-w-7xl">
          <Logo className="mb-20" aria-label="logo" />
        </div>
        <div className="flex flex-col space-y-6 items-center mb-20 md:flex-row-reverse md:space-y-0 w-full justify-between md:max-w-5xl xl:max-w-7xl">
          <Chart />
          <div className="flex flex-col items-center space-y-6 text-center md:text-start md:items-start md:max-w-lg">
            <h1 className="text-dark-slate font-bold text-4xl md:text-5xl xl:text-6xl">
              A simple solution to complex tasks is coming soon
            </h1>
            <p className="text-grey-slate md:text-xl xl: text-2xl">
              Say goodbye to inefficient juggling of multiple apps, teams, and
              projects. Officelite is the new collaboration platform built with
              an intuitive interface to improve productivity.
            </p>
            <button className="rounded-full bg-ocean-blue text-white p-6 py-4 w-fit shadow-2xl hover:bg-blue-100 hover:text-ocean-blue transition-colors duration-300 font-bold">
              Get started
            </button>
          </div>
        </div>
        <Plans />
        <div className="flex flex-col space-y-8 tracking-widest items-center">
          <h1 className="font-bold">
            COMING <span className="text-ocean-blue">4 NOV 2023</span>
          </h1>
          <div className="flex space-x-4">
            <div className="bg-grey-slate text-white rounded-lg text-center p-4">
              <h1 className="font-bold text-3xl">47</h1>
              <h2 className="text-sm">days</h2>
            </div>
            <div className="bg-grey-slate text-white rounded-lg text-center p-4">
              <h1 className="font-bold text-3xl">07</h1>
              <h2 className="text-sm">hours</h2>
            </div>
            <div className="bg-grey-slate text-white rounded-lg text-center p-4">
              <h1 className="font-bold text-3xl">56</h1>
              <h2 className="text-sm">min</h2>
            </div>
            <div className="bg-grey-slate text-white rounded-lg text-center p-4">
              <h1 className="font-bold text-3xl">14</h1>
              <h2 className="text-sm">sec</h2>
            </div>
          </div>
          <button className="text-white font-bold bg-ocean-blue w-40 p-4 rounded-full hover:bg-blue-100 hover:text-ocean-blue transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
