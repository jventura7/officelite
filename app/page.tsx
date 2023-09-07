import Logo from '../assets/shared/logo.svg';
import Header from '../assets/home/bg-pattern-header.svg';
import Chart from '@/components/Chart';
import Plans from '@/components/Plans';
import Link from 'next/link';
import Coming from '@/components/Coming';

export default function Home() {
  return (
    <>
      <div className="flex flex-col space-y-6 items-center mb-20 md:flex-row-reverse md:space-y-0 w-full justify-between md:max-w-5xl xl:max-w-7xl">
        <Chart />
        <div className="flex flex-col items-center space-y-6 text-center md:text-start md:items-start md:max-w-lg">
          <h1 className="text-dark-slate font-bold text-5xl md:text-6xl xl:text-7xl">
            A simple solution to complex tasks is coming soon
          </h1>
          <p className="text-grey-slate text-xl leading-8">
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </p>
          <Link href="/signup">
            <button className="rounded-full bg-ocean-blue text-white p-6 py-4 w-fit shadow-2xl hover:bg-blue-100 hover:text-ocean-blue transition-colors duration-300 font-bold">
              Get started
            </button>
          </Link>
        </div>
      </div>
      <Plans />
      <Coming />
      <Link href="/signup">
        <button className="text-white mt-10 font-bold bg-ocean-blue w-40 p-4 rounded-full hover:bg-blue-100 hover:text-ocean-blue transition-colors duration-300">
          Get Started
        </button>
      </Link>
    </>
  );
}
