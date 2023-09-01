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
        <button className="rounded-full bg-ocean-blue text-white p-6 py-4 w-fit shadow-2xl hover:bg-blue-100 hover:text-ocean-blue transition-colors duration-300 font-bold">
          Get started
        </button>
      </div>
      <div className="w-full flex flex-col space-y-10 pb-20">
        <div className="text-dark-slate card bg-white">
          <h1 className="font-bold text-xl">Basic</h1>
          <div className="pb-6">
            <h1 className="font-bold text-5xl mb-2">Free</h1>
            <h3 className="text-s">Up to 4 users for free</h3>
          </div>
          <div className="flex flex-col space-y-6 text-sm text-grey-slate">
            <h3>Basic documentation collaboration</h3>
            <h3>2 GB storage</h3>
            <h3>Great security and support</h3>
          </div>
          <button className="text-ocean-blue font-bold bg-blue-100 rounded-full p-6 py-4 hover:bg-ocean-blue hover:text-white duration-300 transition-colors">
            Try for free
          </button>
        </div>
        <div className="text-white bg-ocean-blue card">
          <h1 className="font-bold text-xl">Pro</h1>
          <div className="pb-6">
            <h1 className="font-bold text-5xl mb-2">$9.99</h1>
            <h3 className="text-s">Per user, billed monthly</h3>
          </div>
          <div className="flex flex-col space-y-6 text-sm">
            <h3>All essential integrations</h3>
            <h3>50 GB storage</h3>
            <h3>More control and insights</h3>
          </div>
          <button className="text-ocean-blue font-bold bg-blue-100 rounded-full p-6 py-4 hover:bg-ocean-blue hover:text-white duration-300 transition-colors">
            Try for free
          </button>
        </div>
        <div className="text-dark-slate card bg-white">
          <h1 className="font-bold text-xl">Ultimate</h1>
          <div className="pb-6">
            <h1 className="font-bold text-5xl mb-2">$19.99</h1>
            <h3 className="text-s">Per user, billed monthly</h3>
          </div>
          <div className="flex flex-col space-y-6 text-sm text-grey-slate">
            <h3>Robust work management</h3>
            <h3>100 GB storage</h3>
            <h3>VIP support</h3>
          </div>
          <button className="text-ocean-blue font-bold bg-blue-100 rounded-full p-6 py-4 hover:bg-ocean-blue hover:text-white duration-300 transition-colors">
            Try for free
          </button>
        </div>
      </div>
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
    </main>
  );
}
