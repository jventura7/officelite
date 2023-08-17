import Logo from '../assets/shared/logo.svg';
import Header from '../assets/home/bg-pattern-header.svg';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-10 bg-gray-100">
      <Logo className="mb-20" aria-label="logo" />
      <div className="flex flex-col space-y-6 items-center mb-36">
        <h1 className="text-dark-slate font-bold text-3xl text-center">
          A simple solution to complex tasks is coming soon
        </h1>
        <p className="text-grey-slate text-center">
          Say goodbye to inefficient juggling of multiple apps, teams, and
          projects. Officelite is the new collaboration platform built with an
          intuitive interface to improve productivity.
        </p>
        <button className="rounded-full bg-ocean-blue text-white p-6 py-4 w-fit shadow-2xl hover:bg-sky-blue transition-colors duration-300">
          Get started
        </button>
      </div>
      <div className="flex flex-col space-y-6 w-full">
        <div className="text-dark-slate flex flex-col text-center bg-white p-5 rounded-lg items-center space-y-6">
          <h1 className="font-bold">Basic</h1>
          <div>
            <h1 className="font-bold text-4xl mb-2">Free</h1>
            <h3 className="text-xs">Up to 4 users for free</h3>
          </div>
          <h3 className="text-xs text-grey-slate">
            Basic documentation collaboration
          </h3>
        </div>
      </div>
    </main>
  );
}
